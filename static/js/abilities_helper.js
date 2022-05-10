function insertHeroName(text, sound=true)
{
    var $searchBox = document.getElementsByClassName("form-control form-control-sm")[0];
    if ($searchBox.value) {
        $searchBox.value = $searchBox.value + "|" + text;
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

function getWinrateColor(value) {

value = parseFloat(value.replace("%", ""))

const SLIDER_COLORS = [
{ val: 56.0, color: "#1A5800"},
{ val: 54.5, color: "#2D5A00"},
{ val: 53.0, color: "#415C00"},

{ val: 51.5, color: "#545E00"},
{ val: 50.0, color: "#676000"},
{ val: 48.5, color: "#674F00"},

{ val: 47.0, color: "#673F00"},
{ val: 45.5, color: "#672E00"},
{ val: 44.0, color: "#671D00"},
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

json_hero_map = {   "1": "Anti-Mage", "2": "Axe", "3": "Bane", "4": "Bloodseeker", "5": "Crystal Maiden", "6": "Drow Ranger", "7": "Earthshaker",
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
                    "126": "Void Spirit", "128": "Snapfire", "129": "Mars", "135": "Dawnbreaker", "136": "Marci", "137": "Primal Beast"}

function get_hero_name_from_id(id)
{
    return json_hero_map[parseInt(id)];
}


$(document).ready(function() {
    $(sortTable).DataTable(
        {
            "paging": false,
            "order": [[ 8, "asc" ]],
            responsive: true,
            oSearch: {"bRegex": true, "bSmart": false},
            "columnDefs": [{ "searchable": false, "targets": [0,2,3,4,5,6,7]},
            { targets: [1], visible: false},
            { targets: [0], className: "smaller-font"}],
            rowCallback: function(row, data, index)
            {
                $(row).find("td:eq(1)").css({"background-color" : getWinrateColor(data[2]), "color" : "#FFFFFF"});
                $(row).find("td:eq(2)").css({"background-color" : getWinrateColor(data[3]), "color" : "#FFFFFF"});
                $(row).find("td:eq(3)").css({"background-color" : getWinrateColor(data[4]), "color" : "#FFFFFF"});
                $(row).find("td:eq(4)").css({"background-color" : getWinrateColor(data[5]), "color" : "#FFFFFF"});
                $(row).find("td:eq(5)").css({"background-color" : getWinrateColor(data[6]), "color" : "#FFFFFF"});
                $(row).find("td:eq(6)").css({"background-color" : getWinrateColor(data[7]), "color" : "#FFFFFF"});
                $(row).find("td:eq(7)").css({"background-color" : getPickOrderColor(data[8]), "color" : "#FFFFFF"});
            }
        });

    var lastRun = null;
    $("#sortTable").on("click", "td.removable", function () {
        if (lastRun == null || new Date() - lastRun > 500) {
        var table = $("#sortTable").DataTable();
        table
            .row($(this))
            .remove()
        .draw();
        lastRun = new Date(); }
        });
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    heroes = urlParams.get('heroes').split(',');

    var $searchBox = document.getElementsByClassName("form-control form-control-sm")[0];
    heroes.forEach(element => insertHeroName(get_hero_name_from_id(element), false));
});