<template>
  <v-card class="ma-3 pa-1" width="300" flat outlined>
    <v-row>
      <v-col class="pb-0">
        <span class="overline ml-3">Filter</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-select
          flat
          outlined
          class="mx-3 mb-2"
          :items="countryList"
          label="Country"
          dense
          hide-details=""
        ></v-select>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <v-list dense nav>
          <v-list-group :value="true">
            <template v-slot:activator>
              <v-list-item-title>Player Type</v-list-item-title>
            </template>

            <v-list-group  no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Batsmen</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item-group multiple>
                <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
                  <v-list-item-title v-text="title"> </v-list-item-title>
                  <!-- <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon> -->
                </v-list-item>
              </v-list-item-group>
            </v-list-group>

            <v-list-group no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Bowler</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item-group multiple>
                <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
                  <!-- <v-list-item-icon>
                  <v-icon >mdi-square-rounded-outline</v-icon>
                </v-list-item-icon> -->
                  <v-list-item-title v-text="title"></v-list-item-title> </v-list-item
              ></v-list-item-group>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <v-list dense nav>
          <v-list-group :value="true" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Batting Stats</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="caption mb-0">
              <span>Strike Rate</span>
              <v-spacer></v-spacer>
              <span>{{ `${r1[0]} - ${r1[1]}` }}</span>
            </v-list-item>
            <v-list-item>
              <v-row class="mr-1">
                <v-range-slider
                  thumb-color="red"
                  max="160"
                  min="95"
                  v-model="r1"
                  track-color="pink"
                  track-fill-color="green"
                  class="mt-2"
                >
                </v-range-slider>
              </v-row>
            </v-list-item>
            <v-list-item class="caption nmb-0">
              <span>Average</span>
              <v-spacer></v-spacer>
              <span>{{ `${r2[0]} - ${r2[1]}` }}</span>
            </v-list-item>
            <v-list-item>
              <v-row class="mr-1">
                <v-range-slider
                  max="100"
                  min="0"
                  v-model="r2"
                  class="mt-2"
                ></v-range-slider>
              </v-row>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <v-list dense>
          <v-list-group :value="true">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Teams</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item-group multiple>
              <v-list-item v-for="(team, i) in teams" :key="i" class="pl-10">
                <template v-slot:default="{}">
                  <!-- <v-list-item-action>
                  <v-checkbox :input-value="active" color="rgb(81, 204, 204)"></v-checkbox>
                </v-list-item-action> -->

                  <v-list-item-content>
                    <v-list-item-title>{{ team }}</v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list-group>
        </v-list>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <v-list dense nav>
          <v-list-item class="caption mb-0">
            <v-list-item-title class="subtitle-1">Birth Year</v-list-item-title>
            <v-spacer></v-spacer>
            <v-list-item-subtitle class="text-right">
              {{ `${by[0]} - ${by[1]}` }}
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-row class="mr-1">
              <v-range-slider
                thumb-color="red"
                max="2002"
                min="1960"
                v-model="by"
                track-color="pink"
                track-fill-color="green"
                class="mt-2"
              >
              </v-range-slider>
            </v-row>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'facet-filter',
  data: () => ({
    countryList: [
      'Afghanistan',
      'Albania',
      'Algeria',
      'American Samoa',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antarctica',
      'Antigua and Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas (the)',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bermuda',
      'Bhutan',
      'Bolivia (Plurinational State of)',
      'Bonaire, Sint Eustatius and Saba',
      'Bosnia and Herzegovina',
      'Botswana',
      'Bouvet Island',
      'Brazil',
      'British Indian Ocean Territory (the)',
      'Brunei Darussalam',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cabo Verde',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Cayman Islands (the)',
      'Central African Republic (the)',
      'Chad',
      'Chile',
      'China',
      'Christmas Island',
      'Cocos (Keeling) Islands (the)',
      'Colombia',
      'Comoros (the)',
      'Congo (the Democratic Republic of the)',
      'Congo (the)',
      'Cook Islands (the)',
      'Costa Rica',
      'Croatia',
      'Cuba',
      'Curaçao',
      'Cyprus',
      'Czechia',
      "Côte d'Ivoire",
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic (the)',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Eritrea',
      'Estonia',
      'Eswatini',
      'Ethiopia',
      'Falkland Islands (the) [Malvinas]',
      'Faroe Islands (the)',
      'Fiji',
      'Finland',
      'France',
      'French Guiana',
      'French Polynesia',
      'French Southern Territories (the)',
      'Gabon',
      'Gambia (the)',
      'Georgia',
      'Germany',
      'Ghana',
      'Gibraltar',
      'Greece',
      'Greenland',
      'Grenada',
      'Guadeloupe',
      'Guam',
      'Guatemala',
      'Guernsey',
      'Guinea',
      'Guinea-Bissau',
      'Guyana',
      'Haiti',
      'Heard Island and McDonald Islands',
      'Holy See (the)',
      'Honduras',
      'Hong Kong',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran (Islamic Republic of)',
      'Iraq',
      'Ireland',
      'Isle of Man',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Jersey',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kiribati',
      "Korea (the Democratic People's Republic of)",
      'Korea (the Republic of)',
      'Kuwait',
      'Kyrgyzstan',
      "Lao People's Democratic Republic (the)",
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macao',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Marshall Islands (the)',
      'Martinique',
      'Mauritania',
      'Mauritius',
      'Mayotte',
      'Mexico',
      'Micronesia (Federated States of)',
      'Moldova (the Republic of)',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Montserrat',
      'Morocco',
      'Mozambique',
      'Myanmar',
      'Namibia',
      'Nauru',
      'Nepal',
      'Netherlands (the)',
      'New Caledonia',
      'New Zealand',
      'Nicaragua',
      'Niger (the)',
      'Nigeria',
      'Niue',
      'Norfolk Island',
      'Northern Mariana Islands (the)',
      'Norway',
      'Oman',
      'Pakistan',
      'Palau',
      'Palestine, State of',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines (the)',
      'Pitcairn',
      'Poland',
      'Portugal',
      'Puerto Rico',
      'Qatar',
      'Republic of North Macedonia',
      'Romania',
      'Russian Federation (the)',
      'Rwanda',
      'Réunion',
      'Saint Barthélemy',
      'Saint Helena, Ascension and Tristan da Cunha',
      'Saint Kitts and Nevis',
      'Saint Lucia',
      'Saint Martin (French part)',
      'Saint Pierre and Miquelon',
      'Saint Vincent and the Grenadines',
      'Samoa',
      'San Marino',
      'Sao Tome and Principe',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Sint Maarten (Dutch part)',
      'Slovakia',
      'Slovenia',
      'Solomon Islands',
      'Somalia',
      'South Africa',
      'South Georgia and the South Sandwich Islands',
      'South Sudan',
      'Spain',
      'Sri Lanka',
      'Sudan (the)',
      'Suriname',
      'Svalbard and Jan Mayen',
      'Sweden',
      'Switzerland',
      'Syrian Arab Republic',
      'Taiwan',
      'Tajikistan',
      'Tanzania, United Republic of',
      'Thailand',
      'Timor-Leste',
      'Togo',
      'Tokelau',
      'Tonga',
      'Trinidad and Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Turks and Caicos Islands (the)',
      'Tuvalu',
      'Uganda',
      'Ukraine',
      'United Arab Emirates (the)',
      'United Kingdom of Great Britain and Northern Ireland (the)',
      'United States Minor Outlying Islands (the)',
      'United States of America (the)',
      'Uruguay',
      'Uzbekistan',
      'Vanuatu',
      'Venezuela (Bolivarian Republic of)',
      'Viet Nam',
      'Virgin Islands (British)',
      'Virgin Islands (U.S.)',
      'Wallis and Futuna',
      'Western Sahara',
      'Yemen',
      'Zambia',
      'Zimbabwe',
      'Åland Islands',
    ],
    r1: [0, 100],
    r2: [0, 100],
    by: [1960, 2002],
    admins: [
      ['Right Handed', 'mdi-account-multiple-outline'],
      ['Left Handed', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ],
    teams: [
      'Pune Warriors',
      'Kolkata Knight Riders',
      'Rajasthan Royals',
      'Kochi Tuskers Kerala',
      'Gujarat Lions',
      'Chennai Super Kings',
      'Rising Pune Supergiants',
      'Delhi Daredevils',
      'Deccan Chargers',
      'Delhi Capitals',
      'Mumbai Indians',
      'Sunrisers Hyderabad',
      'Rising Pune Supergiant',
      'Royal Challengers Bangalore',
      'Kings XI Punjab',
    ],
  }),
};
</script>

<style lang="scss">
.v-slider__thumb::before {
  width: 18px !important;
  height: 18px !important;
  left: -3px !important;
  top: -3px !important;
}
</style>
