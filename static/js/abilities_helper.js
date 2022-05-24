class TwoWayMap {
    constructor(map) {
       this.map = map;
       this.reverseMap = {};
       for(const key in map) {
          const value = map[key];
          this.reverseMap[value] = key;
       }
    }
    get(key) { return this.map[key]; }
    revGet(key) { return this.reverseMap[key]; }
}

json_hero_map = new TwoWayMap({   "1": "Anti-Mage", "2": "Axe", "3": "Bane", "4": "Bloodseeker", "5": "Crystal Maiden", "6": "Drow Ranger", "7": "Earthshaker",
                    "8": "Juggernaut", "9": "Mirana", "10": "Morphling", "11": "Shadow Fiend", "12": "Phantom Lancer", "13": "Puck",
                    "14": "Pudge", "15": "Razor", "16": "Sand King", "17": "Storm Spirit", "18": "Sven", "19": "Tiny", "20": "Vengeful Spirit",
                    "21": "Windranger", "22": "Zeus", "23": "Kunkka", "25": "Lina", "26": "Lion", "27": "Shadow Shaman", "28": "Slardar",
                    "29": "Tidehunter", "30": "Witch Doctor", "31": "Lich", "32": "Riki", "33": "Enigma", "34": "Tinker", "35": "Sniper",
                    "36": "Necrophos", "37": "Warlock", "38": "Beastmaster", "39": "Queen of Pain", "40": "Venomancer", "41": "Faceless Void",
                    "42": "Wraith King", "43": "Death Prophet", "44": "Phantom Assassin", "45": "Pugna", "46": "Templar Assassin", "47": "Viper",
                    "48": "Luna", "49": "Dragon Knight", "50": "Dazzle", "51": "Clockwerk", "52": "Leshrac", "53": "Nature's Prophet",
                    "54": "Lifestealer", "55": "Dark Seer", "56": "Clinkz", "57": "Omniknight", "58": "Enchantress", "59": "Huskar",
                    "60": "Night Stalker", "61": "Broodmother", "62": "Bounty Hunter", "63": "Weaver", "64": "Jakiro", "65": "Batrider",
                    "66": "Chen", "67": "Spectre", "68": "Ancient Apparition", "69": "Doom", "70": "Ursa", "71": "Spirit Breaker",
                    "72": "Gyrocopter", "73": "Alchemist", "74": "Invoker", "75": "Silencer", "76": "Outworld Devourer", "77": "Lycan",
                    "78": "Brewmaster", "79": "Shadow Demon", "80": "Lone Druid", "81": "Chaos Knight", "82": "Meepo", "83": "Treant Protector",
                    "84": "Ogre Magi", "85": "Undying", "86": "Rubick", "87": "Disruptor", "88": "Nyx Assassin", "89": "Naga Siren",
                    "90": "Keeper of the Light", "91": "Io", "92": "Visage", "93": "Slark", "94": "Medusa", "95": "Troll Warlord",
                    "96": "Centaur Warrunner", "97": "Magnus", "98": "Timbersaw", "99": "Bristleback", "100": "Tusk", "101": "Skywrath Mage",
                    "102": "Abaddon", "103": "Elder Titan", "104": "Legion Commander", "105": "Techies", "106": "Ember Spirit",
                    "107": "Earth Spirit", "108": "Underlord", "109": "Terrorblade", "110": "Phoenix", "111": "Oracle", "112": "Winter Wyvern",
                    "113": "Arc Warden", "114": "Monkey King", "119": "Dark Willow", "120": "Pangolier", "121": "Grimstroke", "123": "Hoodwink",
                    "126": "Void Spirit", "128": "Snapfire", "129": "Mars", "135": "Dawnbreaker", "136": "Marci", "137": "Primal Beast"});

hero_list =  [   "Anti-Mage", "Axe", "Bane", "Bloodseeker", "Crystal Maiden", "Drow Ranger", "Earthshaker",
                 "Juggernaut", "Mirana", "Morphling", "Shadow Fiend", "Phantom Lancer", "Puck",
                 "Pudge", "Razor", "Sand King", "Storm Spirit", "Sven", "Tiny", "Vengeful Spirit",
                 "Windranger", "Zeus", "Kunkka", "Lina", "Lion", "Shadow Shaman", "Slardar",
                 "Tidehunter", "Witch Doctor", "Lich", "Riki", "Enigma", "Tinker", "Sniper",
                 "Necrophos", "Warlock", "Beastmaster", "Queen of Pain", "Venomancer", "Faceless Void",
                 "Wraith King", "Death Prophet", "Phantom Assassin", "Pugna", "Templar Assassin", "Viper",
                 "Luna", "Dragon Knight", "Dazzle", "Clockwerk", "Leshrac", "Nature's Prophet",
                 "Lifestealer", "Dark Seer", "Clinkz", "Omniknight", "Enchantress", "Huskar",
                 "Night Stalker", "Broodmother", "Bounty Hunter", "Weaver", "Jakiro", "Batrider",
                 "Chen", "Spectre", "Ancient Apparition", "Doom", "Ursa", "Spirit Breaker",
                 "Gyrocopter", "Alchemist", "Invoker", "Silencer", "Outworld Devourer", "Lycan",
                 "Brewmaster", "Shadow Demon", "Lone Druid", "Chaos Knight", "Meepo", "Treant Protector",
                 "Ogre Magi", "Undying", "Rubick", "Disruptor", "Nyx Assassin", "Naga Siren",
                 "Keeper of the Light", "Io", "Visage", "Slark", "Medusa", "Troll Warlord",
                 "Centaur Warrunner", "Magnus", "Timbersaw", "Bristleback", "Tusk", "Skywrath Mage",
                 "Abaddon", "Elder Titan", "Legion Commander", "Techies", "Ember Spirit",
                 "Earth Spirit", "Underlord", "Terrorblade", "Phoenix", "Oracle", "Winter Wyvern",
                 "Arc Warden", "Monkey King", "Dark Willow", "Pangolier", "Grimstroke", "Hoodwink",
                  "Void Spirit", "Snapfire", "Mars", "Dawnbreaker", "Marci", "Primal Beast"];

const no_ult_heroes = ['Arc Warden', 'Invoker', 'Meepo', 'Rubick', 'Ogre Magi'];

function getClosestHeroNames(word){
    var foundMatches = [];
    hero_list.forEach(function(element){
        if(element.includes(word))
        {
            foundMatches.push(element);
        }
    });
    return foundMatches;
}

$.fn.dataTable.ext.search.push(
    function( settings, searchData, index, rowData, counter ) {
        if (settings.nTable.id !== 'comboTable'){
            return true;
        }

        var $searchBox = document.getElementById("sortTable_filter").getElementsByClassName("form-control-sm")[0];
        search_array = ($searchBox.value).split("|");
        if (search_array.slice(-1) == "") {
            search_array = search_array.slice(0, -1)
        }

        var hero1 = searchData[1];
        var hero2 = searchData[2];

        var has_hero1 = false;
        var has_hero2 = false;

        const match1 = search_array.findIndex(element => {
          if (hero1.includes(element)) {
            has_hero1 = true;
            return true;
          }
        });

        const match2 = search_array.findIndex(element => {
          if (hero2.includes(element)) {
            has_hero2 = true;
            return true;
          }
        });

        if (has_hero1 && has_hero2)
        {
            return true
        }
        return false
    }
);

function insertHeroName(text, sound=true)
{
    var $searchBox = document.getElementById("sortTable_filter").getElementsByClassName("form-control-sm")[0];
    if ($searchBox.value) {
        if ($searchBox.value.slice(-1) == "|") {
        $searchBox.value = $searchBox.value + text;
        }
        else
        {
        $searchBox.value = $searchBox.value + "|" + text;
        }
    }
    else {
        $searchBox.value = text;
    }

    $('#sortTable').DataTable().search($searchBox.value).draw();

    if (sound===true) {
    audio.volume = 0.05;
    audio.play();
	setTimeout(function(){
		audio.pause();
		audio.currentTime = 0;
	},
	300);
    }

    return text;
}

function propagateHeroFilters(main=false){
    var $searchBox = document.getElementById("sortTable_filter").getElementsByClassName("form-control-sm")[0];
    search_array = ($searchBox.value).split("|");

    var foundHeroes = [];
    search_array = search_array.filter(function(item) {
        return item.length > 1;
    });
    search_array = search_array.filter(function(element)
    {
        var heroes = getClosestHeroNames(element);
        heroes.forEach(element => foundHeroes.push(element));
    });

    radiantHeroes = foundHeroes.slice(0,5).join('|');
    if (radiantHeroes.slice(-1) == "|") {
        radiantHeroes = radiantHeroes.slice(0, -1)
    }

    direHeroes = foundHeroes.slice(5,10).join('|');
    if (direHeroes.slice(-1) == "|") {
        direHeroes = direHeroes.slice(0, -1)
    }

    if (main==true)
    {
        $('#sortTable').DataTable().search($searchBox.value).draw();
    }

    if (radiantHeroes.length > 0) {
    document.getElementById('heroTableRadiantBlock').style.display='block';
    $('#heroTableRadiant').DataTable().search(radiantHeroes).draw();
    }
    else {
    document.getElementById('heroTableRadiantBlock').style.display='none';
    }

    if (direHeroes.length > 0) {
    document.getElementById('heroTableDireBlock').style.display='block';
    $('#heroTableDire').DataTable().search(direHeroes).draw();
    }
    else {
    document.getElementById('heroTableDireBlock').style.display='none';
    }
}
let colorsEnabled = true;
function getWinrateColor(value, max, step) {
if (!colorsEnabled)
{
    return rgb(36,39,41);
}

value = parseFloat(value.replace("%", ""))

var thresholdArray = [];

for (let i = 0; i < 9; i++) {
  thresholdArray.push(max-(step*i));
}

const SLIDER_COLORS= [
{ val: thresholdArray[0], color: "#1A8800"},
{ val: thresholdArray[1], color: "#247D00"},
{ val: thresholdArray[2], color: "#2D7200"},

{ val: thresholdArray[3], color: "#376600"},
{ val: thresholdArray[4], color: "#415B00"},
{ val: thresholdArray[5], color: "#4A5000"},

{ val: thresholdArray[6], color: "#544500"},
{ val: thresholdArray[7], color: "#5D3900"},
{ val: thresholdArray[8], color: "#672E00"},
]

const SLIDER_COLORS_OLD = [
{ val: thresholdArray[0], color: "#1A5800"},
{ val: thresholdArray[1], color: "#2D5A00"},
{ val: thresholdArray[2], color: "#415C00"},

{ val: thresholdArray[3], color: "#545E00"},
{ val: thresholdArray[4], color: "#676000"},
{ val: thresholdArray[5], color: "#674F00"},

{ val: thresholdArray[6], color: "#673F00"},
{ val: thresholdArray[7], color: "#672E00"},
{ val: thresholdArray[8], color: "#671D00"},
]

for (let i = 0; i < 9; i++) {
  if (value > SLIDER_COLORS[i].val) {
  return SLIDER_COLORS[i].color
  }
  }
  return "#671D00"
}

function getPickOrderColor(value) {

value = parseFloat(value)

const SLIDER_COLORS = [
{ val: 6.0, color: "#D02F70"},
{ val: 12.0, color: "#A12869"},
{ val: 18.0, color: "#722162"},

{ val: 24.0, color: "#421A5A"},
{ val: 30.0, color: "#131353"}
]

for (let i = 0; i < 5; i++) {
  if (value < SLIDER_COLORS[i].val) {
  return SLIDER_COLORS[i].color
  }
  }
  return "#0f0f57"
}

function get_hero_name_from_id(id)
{
    return json_hero_map.get([parseInt(id)]);
}

function generateShareableLink()
{
    var $searchBox = document.getElementById("sortTable_filter").getElementsByClassName("form-control-sm")[0];
    search_array = ($searchBox.value).split("|");
    var oldUrl = window.location.href;
    var newUrl = oldUrl.split("?")[0];
    newUrl = newUrl + "?heroes=";

    search_array = search_array.filter(function(element)
    {
        var heroes = getClosestHeroNames(element);
        heroes.forEach(element => newUrl = newUrl + json_hero_map.revGet(element) + ",");
    });

    if (newUrl.slice(-1) == ",") {
        newUrl = newUrl.slice(0, -1)
    }
    window.open(newUrl, '_blank').focus();
}


let heroSet = new Set();
$(document).ready(function() {
    $(sortTable).DataTable(
        {
            "paging": false,
            "name": "sortTable",
            "oLanguage": { "sSearch": ""},
            "order": [[ 3, "asc" ]],
            responsive: true,
            oSearch: {"bRegex": true, "bSmart": false},
            "columnDefs": [{ "searchable": false, "targets": [0,2,3,4,5,6,7]},
            { targets: [1], visible: false}],
            rowCallback: function(row, data, index)
            {
                heroSet.add(data[1]);
                $(row).find("td:eq(1)").css({"background-color" : getWinrateColor(data[2], 58.0, 1.75), "color" : "#FFFFFF"});
                $(row).find("td:eq(2)").css({"background-color" : getPickOrderColor(data[3]), "color" : "#FFFFFF"});
                $(row).find("td:eq(3)").css({"background-color" : getWinrateColor(data[4], 56.0, 1.75), "color" : "#FFFFFF"});
                $(row).find("td:eq(4)").css({"background-color" : getWinrateColor(data[5], 56.0, 1.75), "color" : "#FFFFFF"});
                $(row).find("td:eq(5)").css({"background-color" : getWinrateColor(data[6], 56.0, 1.75), "color" : "#FFFFFF"});
                $(row).find("td:eq(6)").css({"background-color" : getWinrateColor(data[7], 56.0, 1.75), "color" : "#FFFFFF"});
                $(row).find("td:eq(7)").css({"background-color" : getWinrateColor(data[8], 56.0, 1.75), "color" : "#FFFFFF"});
            }
        });

    var lastRun = null;

    $("#sortTable").on("click", "td.removable", function () {
        if (lastRun == null || new Date() - lastRun > 300) {
        var table = $("#sortTable").DataTable();
        table
            .row($(this))
            .remove()
        .draw();
        lastRun = new Date(); }
    });

    $(heroTableRadiant).DataTable(
    {
        "paging": false,
        "order": [[ 1, "desc" ]],
        responsive: true,
        oSearch: {"bRegex": true, "bSmart": false},
        "columnDefs": [{ "searchable": false, "targets": [1]}],
        rowCallback: function(row, data, index)
        {
            $(row).find("td:eq(1)").css({"background-color" : getWinrateColor(data[1], 55.5, 1.65), "color" : "#FFFFFF"});
        }
    });

    $(heroTableDire).DataTable(
    {
        "paging": false,
        "order": [[ 1, "desc" ]],
        responsive: true,
        oSearch: {"bRegex": true, "bSmart": false},
        "columnDefs": [{ "searchable": false, "targets": [1]}],
        rowCallback: function(row, data, index)
        {
            $(row).find("td:eq(1)").css({"background-color" : getWinrateColor(data[1], 55.5, 1.65), "color" : "#FFFFFF"});
        }
    });

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    heroes = urlParams.get('heroes');
    if (heroes)
    {
        heroes_array = heroes.split(',');
        heroes_array.forEach(element => insertHeroName(get_hero_name_from_id(element), false));
    }
    propagateHeroFilters(true);
});

function updateSkippedUlts()
{
    var skippedUlts = 0;
    var skippedString = '';
    no_ult_heroes.forEach(function(element) {
    if (heroSet.has(element))
        {
            skippedUlts = skippedUlts + 1;
            if (skippedString.length == 0)
            {
                skippedString = element;
            }
            else
            {
                skippedString = skippedString + ", " + element;
            }
        }
    });

    var $searchBox = document.getElementById("sortTable_filter").getElementsByClassName("form-control-sm")[0];
    search_array = ($searchBox.value).split("|");

    var foundHeroes = [];
    search_array = search_array.filter(function(item) {
        return item.length > 1;
    });
    search_array = search_array.filter(function(element)
    {
        var heroes = getClosestHeroNames(element);
        heroes.forEach(element => foundHeroes.push(element));
    });

    // var heroCount = heroSet.size;
    var heroCount = foundHeroes.length;
    var heroCountDiv = document.getElementById("heroCount");
    heroCountDiv.innerHTML = "Hero count: " + String(heroCount);

    if (heroCount != 12)
    {
        heroCountDiv.innerHTML = heroCountDiv.innerHTML + " (12 heroes needed for a full draft)";
        heroCountDiv.style.color = 'red';
    }
    else {
        heroCountDiv.style.color = 'white';
    }

    var heroList = document.getElementById("heroList");
    heroList.innerHTML = "Replaced ultimates count: " + skippedUlts;
    if (skippedUlts > 0)
    {
        heroList.innerHTML = heroList.innerHTML + " (" + skippedString + ")";
        heroList.style.color = 'red';
    }
    else {
    heroList.style.color = 'white';
    }
}

let comboTableDisplayed = false;
function generateComboTable()
{
    var $searchBox = document.getElementById("sortTable_filter").getElementsByClassName("form-control-sm")[0];
    search_array = ($searchBox.value).split("|");

    if (search_array.length < 1)
    {
        return false;
    }

    if (!($.fn.dataTable.isDataTable( '#comboTable' )))
    {
        $(comboTable).DataTable(
        {
            "paging": false,
            "info": false,
            "order": [[ 3, "desc" ]],
            responsive: true,
            oSearch: {"bRegex": true, "bSmart": false},
            "columnDefs": [{ "searchable": false, "targets": [0,3,4]},
            { targets: [1, 2], visible: false},
            { targets: [3, 4], className: "bigger-font"}],
            rowCallback: function(row, data, index)
            {
                $(row).find("td:eq(1)").css({"background-color" : getWinrateColor(data[3], 62.0, 3.0), "color" : "#FFFFFF"});
            }
        });
        document.getElementById('comboTableBlock').style.display='block';
        comboTableDisplayed = true;
    }
    else
    {
        $('#comboTable').DataTable().search(" ").draw();
        comboTableDisplayed = true;
    }

    var lastRunCombo = null;

    $("#comboTable").on("click", "td.removable", function () {
    if (lastRunCombo == null || new Date() - lastRunCombo > 300) {
    var table = $("#comboTable").DataTable();
    table
        .row($(this))
        .remove()
    .draw();
    lastRunCombo = new Date(); }
    });

}

let modelTableOn = true;
function switchHeroModelTable()
{
    if (modelTableOn)
    {
        modelTableOn = false;
        document.getElementById('heroTableRadiantBlock').style.display='none';
        document.getElementById('heroTableDireBlock').style.display='none';
    }
    else
    {
        modelTableOn = true;
        document.getElementById('heroTableRadiantBlock').style.display='block';
        document.getElementById('heroTableDireBlock').style.display='block';
    }

}

let allExceptAbilitiesSwitch = true;
function switchAllExceptAbilities()
{
    if (allExceptAbilitiesSwitch)
    {
        allExceptAbilitiesSwitch = false;
        document.getElementById('heroTableRadiantBlock').style.display='none';
        document.getElementById('heroTableDireBlock').style.display='none';
        document.getElementById('comboTableBlock').style.display='none';
        document.getElementById('heroCount').style.display='none';
        document.getElementById('heroList').style.display='none';
        document.getElementById('sortTable_filter').style.display='none';
        document.getElementById('sortTable').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else
    {
        allExceptAbilitiesSwitch = true;
        document.getElementById('heroTableRadiantBlock').style.display='block';
        document.getElementById('heroTableDireBlock').style.display='block';
        if (comboTableDisplayed)
        {
            document.getElementById('comboTableBlock').style.display='block';
        }
        document.getElementById('heroCount').style.display='block';
        document.getElementById('heroList').style.display='block';
        document.getElementById('sortTable_filter').style.display='block';
    }

}

let allowSearchEvent = true;
$(document).on( 'search.dt', function ( e, settings ) {
    var $searchBox = document.getElementById("sortTable_filter").getElementsByClassName("form-control-sm")[0];
    if (e.target.id == "sortTable" && $searchBox.value.slice(-1) == "|" && allowSearchEvent==true) {
        allowSearchEvent=false;
        $('#sortTable').DataTable().search($searchBox.value.slice(0,-1)).draw();
        allowSearchEvent=true;
    }

    if (e.target.id == "sortTable")
    {
        heroSet.clear();
        propagateHeroFilters();
    }
} );

$(document).on( 'draw.dt', function ( e, settings ) {
    if (e.target.id == "sortTable")
    {
        updateSkippedUlts();
    }
});