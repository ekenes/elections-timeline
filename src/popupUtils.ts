
import PopupTemplate from "@arcgis/core/PopupTemplate";
import FieldInfo from "@arcgis/core/popup/FieldInfo";
import FieldInfoFormat from "@arcgis/core/popup/support/FieldInfoFormat";

import { ExpressionContent } from "@arcgis/core/popup/content";
import { years, fieldInfos, dColor, rColor, oColor, stateFieldPrefix } from "./config";

////////////////////////////////////////////////////
//
// STATE
//
///////////////////////////////////////////////////


function createFieldInfos (fieldNames: string[]): FieldInfo[] {
  return fieldNames.map(fieldName => {
    return new FieldInfo({
      fieldName,
      format: new FieldInfoFormat({
        places: 0,
        digitSeparator: true
      })
    })
  });
}

interface PopupTemplateParams {
  isState: boolean;
}

export const statePopupTemplate = (params: PopupTemplateParams) => {
  const { isState } = params;
  const fieldPrefix = isState ? stateFieldPrefix : "";

  const fieldNames = years.map(year => {
    return [
      `${fieldPrefix}rep_${year}`,
      `${fieldPrefix}dem_${year}`,
      `${fieldPrefix}oth_${year}`,
     ]
  }).flat();

  return new PopupTemplate({
    title: `${isState ? fieldInfos.title.state : fieldInfos.title.county}`,
    fieldInfos: createFieldInfos(fieldNames),
    content: [
      new ExpressionContent({
        expressionInfo: {
          expression: `
            Expects($feature, "*");

            var result = "";

            var dMargins = [];
            var rMargins = [];

            var years = [${years}];

            var rColorHex = "${rColor.toHex()}";
            var dColorHex = "${dColor.toHex()}";
            var oColorHex = "${oColor.toHex()}";

            for (var i in years){
              var y = Text(years[i]);

              var rVotes = $feature[\`${fieldPrefix}rep_\${y}\`];
              var dVotes = $feature[\`${fieldPrefix}dem_\${y}\`];
              var oVotes = $feature[\`${fieldPrefix}oth_\${y}\`];

              var allVotes = Reverse(Sort([rVotes, dVotes, oVotes]));
              var sumVotes = Sum(allVotes);

              var winner = Decode(Max(allVotes),
                rVotes, "r",
                dVotes, "d",
                "o"
              );

              var marginTotal = allVotes[0] - allVotes[1];
              var marginPercent = Round(((allVotes[0] / sumVotes) - (allVotes[1] / sumVotes)) * 100, 1);

              if(winner == "r"){
                Push(rMargins, marginPercent);
              }
              if(winner == "d"){
                Push(dMargins, marginPercent);
              }
            }

            var yCount = Count(years);
            var strongThreshold = yCount * 0.75;
            var contestedThreshold = yCount * 0.5;

            var dCount = Count(dMargins);
            var dAvg = Sum(dMargins) / yCount;

            var rCount = Count(rMargins);
            var rAvg = Sum(rMargins) / yCount;


            var trend = When(
              (dCount > strongThreshold) && (dAvg > 5), \` shown <b><span style='color:\${dColorHex}'>strong Democrat</span></b> support\`,
              (dCount > strongThreshold) && (dAvg <= 5), \`<b><span style='color:\${dColorHex}'>leaned Democrat</span></b>\`,
              (dCount > contestedThreshold), \`been <b>contested</b>, but tends to <b><span style='color:\${dColorHex}'>lean Democrat</span></b>\`,

              (rCount > strongThreshold) && (rAvg > 5), \` shown <b><span style='color:\${rColorHex}'>strong Republican</span></b> support\`,
              (rCount > strongThreshold) && (rAvg <= 5), \`<b><span style='color:\${rColorHex}'>leaned Republican</span></b>\`,
              (rCount > contestedThreshold), \`been <b>contested</b>, but tend to <b><span style='color:\${rColorHex}'> lean Republican</span></b>\`,
              "contested"
            );

            var geographyName = iif(haskey($feature, "county"), \`\${$feature.county}, \${$feature.state}\`, $feature.state);

            result = \`In the last \${yCount} U.S. presidential elections, \${geographyName} voters have \${trend}.\`;

            return {
              type: "text",
              text: result
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
                  votes: $feature[\`${fieldPrefix}rep_\${y}\`],
                  weight: "normal",
                  class: "none",
                  margin: "-"
                },
                d: {
                  name: candidates[y].democrat.candidate,
                  votes: $feature[\`${fieldPrefix}dem_\${y}\`],
                  weight: "normal",
                  class: "none",
                  margin: "-"
                },
                o: {
                  name: candidates[y].other.candidate,
                  votes: $feature[\`${fieldPrefix}oth_\${y}\`],
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
                  votes: $feature[\`${fieldPrefix}rep_\${y}\`],
                  margin: null,
                  color: rColor,
                  hexColor: rColorHex
                },
                d: {
                  name: candidates[y].democrat.candidate,
                  votes: $feature[\`${fieldPrefix}dem_\${y}\`],
                  margin: null,
                  color: dColor,
                  hexColor: dColorHex
                },
                o: {
                  name: candidates[y].other.candidate,
                  votes: $feature[\`${fieldPrefix}oth_\${y}\`],
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

              var title = "";

              if(haskey($feature, "county")){
                title = \`<span style='color:\${winnerInfo.hexColor}'><b>\${winnerInfo.name}</b></span> won \${$feature.county}, \${$feature.state} in \${y}\`;
              } else {
                title = \`<span style='color:\${winnerInfo.hexColor}'><b>\${winnerInfo.name}</b></span> won \${$feature.state}'s \${$feature[evFieldName]} electoral votes in \${y}\`;
              }

              var resultsChart = {
                type: "barchart",
                title,
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
              title: "Margin of victory trend (% points)",
              value: { fields: fieldsMargin, colors }
            });

            Insert(mediaInfos, 1, {
              type: "columnchart",
              title: "Margin of victory trend (total votes)",
              value: { fields: fieldsTotal, colors }
            });

            return {
              type: "media",
              attributes,
              mediaInfos
            };
          `
        }
      })
    ]
  });
};
