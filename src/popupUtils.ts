
import PopupTemplate from "@arcgis/core/PopupTemplate";
import FieldInfo from "@arcgis/core/popup/FieldInfo";
import FieldInfoFormat from "@arcgis/core/popup/support/FieldInfoFormat";
import { convertNumberFormatToIntlOptions, formatNumber } from "@arcgis/core/intl";

import { CustomContent, ExpressionContent } from "@arcgis/core/popup/content";
import { years, fieldInfos, dColor, rColor, oColor, stateFieldPrefix, startYear, endYear, results } from "./config";

function numberToText(num: number): string {
  const numberFormatIntlOptions = convertNumberFormatToIntlOptions({
    places: 0,
    digitSeparator: true
  });

  return formatNumber(num, numberFormatIntlOptions);
}

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

export interface PopupTemplateParams {
  level: "country" | "state" | "county";
}

export const createPopupTemplate = (params: PopupTemplateParams) => {
  const { level } = params;
  const fieldPrefix = level === "state" ? stateFieldPrefix : "";

  const fieldNames = years.map(year => {
    return [
      `${fieldPrefix}rep_${year}`,
      `${fieldPrefix}dem_${year}`,
      `${fieldPrefix}oth_${year}`,
     ]
  }).flat();

  let content = [];

  if(level === "country"){
    const instructions = new CustomContent({
      creator: () => {
        const container = document.createElement("div");
        container.id = "instructions";
        container.innerHTML = `
          <calcite-block collapsible open heading="How to read this map">
            <p>
              This map shows the results of each of the previous 5 U.S. presidential elections from ${startYear} to ${endYear}. Each square represents the election winner for the given area in one year. The most recent election (${endYear}) is represented as the right-most square. Each square's color represents the winner of the election; its size is proportional to the margin of victory for the winner. Smaller squares indicate a closer election. Larger squares indicate a larger margin of victory.
            </p>
            <img src="./trend-legend-horizontal.png" alt="Legend" />
          </calcite-block>
          <calcite-block collapsible open heading="Example trends">
            <p>
              Scroll through the symbols below to see examples of various trend patterns in the map.
            </p>
            <calcite-carousel label="Great new features">
              <calcite-carousel-item label="Gradual change">
                  <div class="custom-content">
                      <img class="examples" src="./gradual-d.png" alt="Gradual change" />
                      <span>
                        <b>Gradual change</b>. This example from Douglas County, Georgia shows a gradual swing from Republican support to Democrats over the last 5 elections. Voters showed strong support for Bush (R) in 2004. In 2008, the county leaned Democrat, and gradually increased support for Democrats in 2012, 2016, and 2020.
                      </span>
                  </div>
              </calcite-carousel-item>
              <calcite-carousel-item label="Bowtie">
                  <div class="custom-content">
                       <img class="examples" src="./flip.png" alt="Bowtie" />
                      <span>
                        <b>Bowtie</b>. In rare scenarios, some counties underwent a dramatic shift in support from one party to another. Anne Arundel County, Maryland went from strong Republican support in 2004 to strong Democrat support in 2020, creating a bowtie shape in the symbol.
                      </span>
                  </div>
              </calcite-carousel-item>
              <calcite-carousel-item label="No change">
                  <div class="custom-content">
                      <img class="examples" src="./solid-r.png" alt="No change" />
                      <span>
                          <b>No change.</b> The populations of many areas are consistent in their support for one party over another. Shelby County, Alabama is an example of a county that has shown strong Republican support in each of the last 5 elections, posting margins of victory exceeding 40% in each of the previous 5 elections.
                      </span>
                  </div>
              </calcite-carousel-item>
              <calcite-carousel-item label="Inconsistent">
                  <div class="custom-content">
                       <img class="examples" src="./contested.png" alt="Contested" />
                      <span>
                          <b>Contested</b>. A few areas, especially in traditional swing states, have shown inconsistent support for either party over the last 5 elections. For example, Macomb County, Michigan showed strong support for Obama (D) in 2008 and 2012, but otherwise sided with Republicans in other elections.
                      </span>
                  </div>
              </calcite-carousel-item>
          </calcite-carousel>
        </calcite-block>
        `;
        return container;
      }
    });

    content.push(instructions);

    const electoralVoteResults = new CustomContent({
      creator: (event) => {
        const { graphic } = event!;
        const container = document.createElement("div");
        container.id = "electoral-vote-results";

        let evTable = "<table class='esri-widget popup'>";
        evTable += "<tr class='head'><td>Year</td><td>Republican</td><td>Votes</td><td>+/-</td><td>Democrat</td><td>Votes</td><td>+/-</td></tr>";

        let pvTable = "<table class='esri-widget popup'>";
        pvTable += "<tr class='head'><td>Year</td><td>Republican</td><td>Votes</td><td>%</td><td>Democrat</td><td>Votes</td><td>%</td></tr>";

        const candidates = JSON.parse(JSON.stringify(results));

        const red = `rgba(${rColor.toRgba()})`;
        const blue = `rgba(${dColor.toRgba()})`;

        years.forEach((i) => {
          var y = i.toString();

          const evResults = {
            r: {
              name: candidates[y].republican.candidate,
              votes: candidates[y].republican.electoralVotes,
              weight: "normal",
              class: "none",
              margin: "-"
            },
            d: {
              name: candidates[y].democrat.candidate,
              votes: candidates[y].democrat.electoralVotes,
              weight: "normal",
              class: "none",
              margin: "-"
            }
          };

          const pvResults = {
            r: {
              name: candidates[y].republican.candidate,
              votes: graphic.attributes[`rep_${y}`],
              weight: "normal",
              class: "none",
              margin: "-"
            },
            d: {
              name: candidates[y].democrat.candidate,
              votes: graphic.attributes[`dem_${y}`],
              weight: "normal",
              class: "none",
              margin: "-"
            }
          };

          let allEVvotes = [evResults.r.votes, evResults.d.votes];
          const maxEVvotes = Math.max(...allEVvotes);
          const evWinner = allEVvotes.indexOf(maxEVvotes) === 0 ? "r" : "d";

          evResults[evWinner].weight = "bolder";

          if(evWinner === "r"){
            evResults.r.class = "rep";
          }
          if(evWinner === "d"){
            evResults.d.class = "dem";
          }

          let allPVvotes = [pvResults.r.votes, pvResults.d.votes];
          const maxPVvotes = Math.max(...allPVvotes);
          const pvWinner = allPVvotes.indexOf(maxPVvotes) === 0 ? "r" : "d";

          pvResults[pvWinner].weight = "bolder";

          if(pvWinner === "r"){
            pvResults.r.class = "rep";
          }
          if(pvWinner === "d"){
            pvResults.d.class = "dem";
          }

          const allEVvotesSorted = allEVvotes.sort((a, b) => b - a);
          const allPVvotesSorted = allPVvotes.sort((a, b) => b - a);

          let marginEVtotal = formatNumber(allEVvotesSorted[0] - allEVvotesSorted[1], {
            signDisplay: "always"
          });

          let marginPVtotal = formatNumber((allPVvotesSorted[0] - allPVvotesSorted[1]) / (allPVvotesSorted[0] + allPVvotesSorted[1]), {
            style: "percent",
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
            signDisplay: "always"
          });

          evResults[evWinner].margin = marginEVtotal;
          pvResults[pvWinner].margin = marginPVtotal;

          let evtr = "";
          evtr += `<tr><td>${y}</td>`;

          evtr += `<td class='${evResults.r.class}'><span style='color:${red}; font-weight: ${evResults.r.weight}'>${evResults.r.name}</span></td>`;
          evtr += `<td class='${evResults.r.class}'><span style='color:${red}; font-weight: ${evResults.r.weight}'>${numberToText(evResults.r.votes)}</span></td>`;
          evtr += `<td class='${evResults.r.class}'><span style='color:${red}; font-weight: ${evResults.r.weight}'>${evResults.r.margin}</span></td>`;

          evtr += `<td class='${evResults.d.class}'><span style='color:${blue}; font-weight: ${evResults.d.weight}'>${evResults.d.name}</span></td>`;
          evtr += `<td class='${evResults.d.class}'><span style='color:${blue}; font-weight: ${evResults.d.weight}'>${numberToText(evResults.d.votes)}</span></td>`;
          evtr += `<td class='${evResults.d.class}'><span style='color:${blue}; font-weight: ${evResults.d.weight}'>${evResults.d.margin}</span></td>`;

          evtr += "</tr>";

          evTable += evtr;


          let pvtr = "";
          pvtr += `<tr><td>${y}</td>`;

          pvtr += `<td class='${pvResults.r.class}'><span style='color:${red}; font-weight: ${pvResults.r.weight}'>${pvResults.r.name}</span></td>`;
          pvtr += `<td class='${pvResults.r.class}'><span style='color:${red}; font-weight: ${pvResults.r.weight}'>${numberToText(pvResults.r.votes)}</span></td>`;
          pvtr += `<td class='${pvResults.r.class}'><span style='color:${red}; font-weight: ${pvResults.r.weight}'>${pvResults.r.margin}</span></td>`;

          pvtr += `<td class='${pvResults.d.class}'><span style='color:${blue}; font-weight: ${pvResults.d.weight}'>${pvResults.d.name}</span></td>`;
          pvtr += `<td class='${pvResults.d.class}'><span style='color:${blue}; font-weight: ${pvResults.d.weight}'>${numberToText(pvResults.d.votes)}</span></td>`;
          pvtr += `<td class='${pvResults.d.class}'><span style='color:${blue}; font-weight: ${pvResults.d.weight}'>${pvResults.d.margin}</span></td>`;

          pvtr += "</tr>";

          pvTable += pvtr;
        });

        evTable += "</table>";
        // evTable = "<h4 style='text-align:center;'>Elector Vote Results</h4>" + evTable;

        pvTable += "</table>";
        // pvTable = "<h4 style='text-align:center;'>Popular Vote Results</h4>" + pvTable;

        const tabs = `
          <calcite-tabs>
              <calcite-tab-nav slot="title-group">
                  <calcite-tab-title selected>
                    Elector Vote Total
                  </calcite-tab-title>
                  <calcite-tab-title>
                    Popular Vote Total
                  </calcite-tab-title>
              </calcite-tab-nav>
              <calcite-tab selected>
                  ${evTable}
              </calcite-tab>
              <calcite-tab>
                  ${pvTable}
              </calcite-tab>
          </calcite-tabs>
        `

        container.innerHTML = tabs;
        return container;
      }
    });

    content.push(electoralVoteResults);
  } else {
    content.push(...[
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
              },
              "2024": {
                republican: {
                  candidate: "Trump",
                  electoralVotes: 312
                },
                democrat: {
                  candidate: "Harris",
                  electoralVotes: 226
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
              },
              "2024": {
                republican: {
                  candidate: "Trump",
                  electoralVotes: 312
                },
                democrat: {
                  candidate: "Harris",
                  electoralVotes: 226
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
    ]);
  }

  return new PopupTemplate({
    title: fieldInfos.title[level],
    fieldInfos: createFieldInfos(fieldNames),
    content
  });
};
