import PopupTemplate from "@arcgis/core/PopupTemplate";
import FieldInfo from "@arcgis/core/popup/FieldInfo";
import FieldInfoFormat from "@arcgis/core/popup/support/FieldInfoFormat";
import { ExpressionContent, TextContent } from "@arcgis/core/popup/content";
import { years, fieldInfos, dColor, rColor, oColor } from "./config";
////////////////////////////////////////////////////
//
// STATE
//
///////////////////////////////////////////////////
function createFieldInfos(fieldNames) {
    return fieldNames.map(fieldName => {
        return new FieldInfo({
            fieldName,
            format: new FieldInfoFormat({
                places: 0,
                digitSeparator: true
            })
        });
    });
}
export const statePopupTemplate = () => {
    const fieldNames = years.map(year => {
        return [
            `SUM_rep_${year}`,
            `SUM_dem_${year}`,
            `SUM_oth_${year}`,
        ];
    }).flat();
    return new PopupTemplate({
        title: `${fieldInfos.title.state}`,
        fieldInfos: createFieldInfos(fieldNames),
        content: [
            new TextContent({
                text: "Lydia"
            }),
            new ExpressionContent({
                expressionInfo: {
                    expression: `
            Expects($feature, "*");
            var fieldsMargin = [];
            var fieldsTotal = [];
            var colors = [];
            var attributes = {};
            var mediaInfos = [];

            var years = [${years}];
            var candidates = {
              "2000": {
                republican: {
                  candidate: "Bush",
                  electoralVotes: 271
                },
                democrat: {
                  candidate: "Gore",
                  electoralVotes: 266
                },
                other: {
                  candidate: "Other",
                  electoralVotes: 0
                }
              },
              "2004": {
                republican: {
                  candidate: "Bush",
                  electoralVotes: 286
                },
                democrat: {
                  candidate: "Kerry",
                  electoralVotes: 251
                },
                other: {
                  candidate: "Other",
                  electoralVotes: 0
                }
              },
              "2008": {
                republican: {
                  candidate: "McCain",
                  electoralVotes: 173
                },
                democrat: {
                  candidate: "Obama",
                  electoralVotes: 365
                },
                other: {
                  candidate: "Other",
                  electoralVotes: 0
                }
              },
              "2012": {
                republican: {
                  candidate: "Romney",
                  electoralVotes: 206
                },
                democrat: {
                  candidate: "Obama",
                  electoralVotes: 332
                },
                other: {
                  candidate: "Other",
                  electoralVotes: 0
                }
              },
              "2016": {
                republican: {
                  candidate: "Trump",
                  electoralVotes: 304
                },
                democrat: {
                  candidate: "Clinton",
                  electoralVotes: 227
                },
                other: {
                  candidate: "Other",
                  electoralVotes: 0
                }
              },
              "2020": {
                republican: {
                  candidate: "Trump",
                  electoralVotes: 232
                },
                democrat: {
                  candidate: "Biden",
                  electoralVotes: 306
                },
                other: {
                  candidate: "Other",
                  electoralVotes: 0
                }
              }
            };

            var rColor = [${rColor.toJSON()}];
            var dColor = [${dColor.toJSON()}];
            var oColor = [${oColor.toJSON()}];
            var resultsColors = [rColor, dColor, oColor];

            var rColorHex = "${rColor.toHex()}";
            var dColorHex = "${dColor.toHex()}";
            var oColorHex = "${oColor.toHex()}";

            for (var i in years){
              var y = Text(years[i]);

              var results = {
                r: {
                  name: candidates[y].republican.candidate,
                  votes: $feature[\`SUM_rep_\${y}\`],
                  margin: null,
                  color: rColor,
                  hexColor: rColorHex
                },
                d: {
                  name: candidates[y].democrat.candidate,
                  votes: $feature[\`SUM_dem_\${y}\`],
                  margin: null,
                  color: dColor,
                  hexColor: dColorHex
                },
                o: {
                  name: candidates[y].other.candidate,
                  votes: $feature[\`SUM_oth_\${y}\`],
                  margin: null,
                  color: oColor,
                  hexColor: oColorHex
                }
              };

              var allVotes = Reverse(Sort([results.r.votes, results.d.votes, results.o.votes]));
              var sumVotes = Sum(allVotes);

              var winner = Decode(Max(allVotes),
                results.r.votes, "r",
                results.d.votes, "d",
                "o"
              );

              var marginTotal = allVotes[0] - allVotes[1];
              var marginPercent = Round(((allVotes[0] / sumVotes) - (allVotes[1] / sumVotes)) * 100, 1);

              results[winner].margin = marginPercent;

              var winnerInfo = results[winner];
              var fieldNameMargin = \`\${winnerInfo.name} (\${y}) - margin\`;
              var fieldNameTotal = \`\${winnerInfo.name} (\${y}) - total\`;
              attributes[fieldNameMargin] = winnerInfo.margin;
              attributes[fieldNameTotal] = marginTotal;

              Push(fieldsMargin, fieldNameMargin);
              Push(fieldsTotal, fieldNameTotal);
              Push(colors, winnerInfo.color);

              var rCandidateName = \`\${results.r.name} (\${y}) - votes\`;
              var dCandidateName = \`\${results.d.name} (\${y}) - votes\`;
              var oCandidateName = \`\${results.o.name} (\${y}) - votes\`;

              attributes[rCandidateName] = results.r.votes;
              attributes[dCandidateName] = results.d.votes;
              attributes[oCandidateName] = results.o.votes;

              var evFieldName = \`ev_\${y}\`;

              var resultsChart = {
                type: "barchart",
                title: \`<span style='color:\${winnerInfo.hexColor}'><b>\${winnerInfo.name}</b></span> won \${$feature.state}'s \${$feature[evFieldName]} electoral votes in \${y}\`,
                value: {
                  fields: [
                    rCandidateName,
                    dCandidateName,
                    oCandidateName
                  ],
                  colors: resultsColors
                }
              };

              Push(mediaInfos, resultsChart);
            }

            Insert(mediaInfos, 0, {
              type: "columnchart",
              title: "Margin of victory (% points)",
              value: { fields: fieldsMargin, colors }
            });

            Insert(mediaInfos, 1, {
              type: "columnchart",
              title: "Margin of victory (total)",
              value: { fields: fieldsTotal, colors }
            });

            return {
              type: "media",
              attributes,
              mediaInfos
            };
          `
                }
            }),
            new ExpressionContent({
                expressionInfo: {
                    expression: `
            Expects($feature, "*");
            var years = [${years}];
            var candidates = {
              "2000": {
                republican: {
                  candidate: "Bush",
                  electoralVotes: 271
                },
                democrat: {
                  candidate: "Gore",
                  electoralVotes: 266
                },
                other: {
                  candidate: "Other",
                  electoralVotes: 0
                }
              },
              "2004": {
                republican: {
                  candidate: "Bush",
                  electoralVotes: 286
                },
                democrat: {
                  candidate: "Kerry",
                  electoralVotes: 251
                },
                other: {
                  candidate: "Other",
                  electoralVotes: 0
                }
              },
              "2008": {
                republican: {
                  candidate: "McCain",
                  electoralVotes: 173
                },
                democrat: {
                  candidate: "Obama",
                  electoralVotes: 365
                },
                other: {
                  candidate: "Other",
                  electoralVotes: 0
                }
              },
              "2012": {
                republican: {
                  candidate: "Romney",
                  electoralVotes: 206
                },
                democrat: {
                  candidate: "Obama",
                  electoralVotes: 332
                },
                other: {
                  candidate: "Other",
                  electoralVotes: 0
                }
              },
              "2016": {
                republican: {
                  candidate: "Trump",
                  electoralVotes: 304
                },
                democrat: {
                  candidate: "Clinton",
                  electoralVotes: 227
                },
                other: {
                  candidate: "Other",
                  electoralVotes: 0
                }
              },
              "2020": {
                republican: {
                  candidate: "Trump",
                  electoralVotes: 232
                },
                democrat: {
                  candidate: "Biden",
                  electoralVotes: 306
                },
                other: {
                  candidate: "Other",
                  electoralVotes: 0
                }
              }
            };


            var table = "<table class='esri-widget popup'>";
            table += "<tr class='head'><td>Year</td><td>Republican</td><td>Votes</td><td>%</td><td>Democrat</td><td>Votes</td><td>%</td></tr>";

            // var results = {};

            for (var i in years){
              var y = Text(years[i]);

              var results = {
                r: {
                  name: candidates[y].republican.candidate,
                  votes: $feature[\`SUM_rep_\${y}\`],
                  weight: "normal",
                  class: "none",
                  margin: "-"
                },
                d: {
                  name: candidates[y].democrat.candidate,
                  votes: $feature[\`SUM_dem_\${y}\`],
                  weight: "normal",
                  class: "none",
                  margin: "-"
                },
                o: {
                  name: candidates[y].other.candidate,
                  votes: $feature[\`SUM_oth_\${y}\`],
                  weight: "normal",
                  class: "none",
                  margin: "-"
                }
              };

              var allVotes = Reverse(Sort([results.r.votes, results.d.votes, results.o.votes]));
              var sumVotes = Sum(allVotes);
              var winner = Decode(Max(allVotes),
                results.r.votes, "r",
                results.d.votes, "d",
                "o"
              );

              results[winner].weight = "bolder";

              if(winner == "r"){
                results.r.class = "rep";
              }
              if(winner == "d"){
                results.d.class = "dem";
              }


              var marginTotal = Text(allVotes[0] - allVotes[1], "#,###");
              var marginPercent = Text((allVotes[0] / sumVotes) - (allVotes[1] / sumVotes), "+#.0%;-#.0%");

              results[winner].margin = marginPercent;

              var tr = "";
              tr += \`<tr><td>\${y}</td>\`;

              var rColor = "rgba(${rColor.toRgba()})";
              var dColor = "rgba(${dColor.toRgba()})";

              tr += \`<td class='\${results.r.class}'><span style='color:\${rColor}; font-weight: \${results.r.weight}'>\${results.r.name}</span></td>\`;
              tr += \`<td class='\${results.r.class}'><span style='color:\${rColor}; font-weight: \${results.r.weight}'>\${Text(results.r.votes, "#,###")}</span></td>\`;
              tr += \`<td class='\${results.r.class}'><span style='color:\${rColor}; font-weight: \${results.r.weight}'>\${results.r.margin}</span></td>\`;

              tr += \`<td class='\${results.d.class}'><span style='color:\${dColor}; font-weight: \${results.d.weight}'>\${results.d.name}</span></td>\`;
              tr += \`<td class='\${results.d.class}'><span style='color:\${dColor}; font-weight: \${results.d.weight}'>\${Text(results.d.votes, "#,###")}</span></td>\`;
              tr += \`<td class='\${results.d.class}'><span style='color:\${dColor}; font-weight: \${results.d.weight}'>\${results.d.margin}</span></td>\`;

              tr += "</tr>";

              table += tr;

            }

            table += "</table>";

            return {
              type: "text",
              text: table
            }
          `
                }
            })
        ]
    });
};
////////////////////////////////////////////////////
//
// COUNTY
//
///////////////////////////////////////////////////
//# sourceMappingURL=popupUtils.js.map