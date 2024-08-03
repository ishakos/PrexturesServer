//node InsertData.js

const { Team, Match, Fixture } = require("./models/FootballModel");
const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

//connect to db
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Connection Failed", error);
  });

const teamsToInsert = [
  { name: "Arsenal", shortname: "ars" },
  { name: "Aston Villa", shortname: "avl" },
  { name: "Brighton", shortname: "bha" },
  { name: "Bournemouth", shortname: "bou" },
  { name: "Brentford", shortname: "bre" },
  { name: "Chelsea", shortname: "che" },
  { name: "Crystal Palace", shortname: "cry" },
  { name: "Everton", shortname: "eve" },
  { name: "Fulham", shortname: "ful" },
  { name: "Ipswich", shortname: "ips" },
  { name: "Leicester City", shortname: "lei" },
  { name: "Liverpool", shortname: "liv" },
  { name: "Man City", shortname: "mci" },
  { name: "Man United", shortname: "mun" },
  { name: "Newcastle", shortname: "new" },
  { name: "Nottm Forest", shortname: "nfo" },
  { name: "Southampton", shortname: "sou" },
  { name: "Tottenham", shortname: "tot" },
  { name: "West Ham", shortname: "whu" },
  { name: "Wolves", shortname: "wol" },
];

const fixturesToInsert = [
  {
    name: "mun_ful",
    home: "mun",
    away: "ful",
    numF: 1,
    numM: 1,
  },
  {
    name: "ips_liv",
    home: "ips",
    away: "liv",
    numF: 1,
    numM: 2,
  },
  {
    name: "ars_wol",
    home: "ars",
    away: "wol",
    numF: 1,
    numM: 3,
  },
  {
    name: "eve_bha",
    home: "eve",
    away: "bha",
    numF: 1,
    numM: 4,
  },
  {
    name: "new_sou",
    home: "new",
    away: "sou",
    numF: 1,
    numM: 5,
  },
  {
    name: "nfo_bou",
    home: "nfo",
    away: "bou",
    numF: 1,
    numM: 6,
  },
  {
    name: "whu_avl",
    home: "whu",
    away: "avl",
    numF: 1,
    numM: 7,
  },
  {
    name: "bre_cry",
    home: "bre",
    away: "cry",
    numF: 1,
    numM: 8,
  },
  {
    name: "che_mci",
    home: "che",
    away: "mci",
    numF: 1,
    numM: 9,
  },
  {
    name: "lei_tot",
    home: "lei",
    away: "tot",
    numF: 1,
    numM: 10,
  },
  {
    name: "avl_ars",
    home: "avl",
    away: "ars",
    numF: 2,
    numM: 11,
  },
  {
    name: "bou_new",
    home: "bou",
    away: "new",
    numF: 2,
    numM: 12,
  },
  {
    name: "bha_mun",
    home: "bha",
    away: "mun",
    numF: 2,
    numM: 13,
  },
  {
    name: "cry_whu",
    home: "cry",
    away: "whu",
    numF: 2,
    numM: 14,
  },
  {
    name: "ful_lei",
    home: "ful",
    away: "lei",
    numF: 2,
    numM: 15,
  },
  {
    name: "liv_bre",
    home: "liv",
    away: "bre",
    numF: 2,
    numM: 16,
  },
  {
    name: "mci_ips",
    home: "mci",
    away: "ips",
    numF: 2,
    numM: 17,
  },
  {
    name: "sou_nfo",
    home: "sou",
    away: "nfo",
    numF: 2,
    numM: 18,
  },
  {
    name: "tot_eve",
    home: "tot",
    away: "eve",
    numF: 2,
    numM: 19,
  },
  {
    name: "wol_che",
    home: "wol",
    away: "che",
    numF: 2,
    numM: 20,
  },
  {
    name: "ars_bha",
    home: "ars",
    away: "bha",
    numF: 3,
    numM: 21,
  },
  {
    name: "bre_sou",
    home: "bre",
    away: "sou",
    numF: 3,
    numM: 22,
  },
  {
    name: "che_cry",
    home: "che",
    away: "cry",
    numF: 3,
    numM: 23,
  },
  {
    name: "eve_bou",
    home: "eve",
    away: "bou",
    numF: 3,
    numM: 24,
  },
  {
    name: "ips_ful",
    home: "ips",
    away: "ful",
    numF: 3,
    numM: 25,
  },
  {
    name: "lei_avl",
    home: "lei",
    away: "avl",
    numF: 3,
    numM: 26,
  },
  {
    name: "mun_liv",
    home: "mun",
    away: "liv",
    numF: 3,
    numM: 27,
  },
  {
    name: "new_tot",
    home: "new",
    away: "tot",
    numF: 3,
    numM: 28,
  },
  {
    name: "nfo_wol",
    home: "nfo",
    away: "wol",
    numF: 3,
    numM: 29,
  },
  {
    name: "whu_mci",
    home: "whu",
    away: "mci",
    numF: 3,
    numM: 30,
  },
  {
    name: "avl_eve",
    home: "avl",
    away: "eve",
    numF: 4,
    numM: 31,
  },
  {
    name: "bou_che",
    home: "bou",
    away: "che",
    numF: 4,
    numM: 32,
  },
  {
    name: "bha_ips",
    home: "bha",
    away: "ips",
    numF: 4,
    numM: 33,
  },
  {
    name: "cry_lei",
    home: "cry",
    away: "lei",
    numF: 4,
    numM: 34,
  },
  {
    name: "ful_whu",
    home: "ful",
    away: "whu",
    numF: 4,
    numM: 35,
  },
  {
    name: "liv_nfo",
    home: "liv",
    away: "nfo",
    numF: 4,
    numM: 36,
  },
  {
    name: "mci_bre",
    home: "mci",
    away: "bre",
    numF: 4,
    numM: 37,
  },
  {
    name: "sou_mun",
    home: "sou",
    away: "mun",
    numF: 4,
    numM: 38,
  },
  {
    name: "tot_ars",
    home: "tot",
    away: "ars",
    numF: 4,
    numM: 39,
  },
  {
    name: "wol_new",
    home: "wol",
    away: "new",
    numF: 4,
    numM: 40,
  },
  {
    name: "avl_wol",
    home: "avl",
    away: "wol",
    numF: 5,
    numM: 41,
  },
  {
    name: "bha_nfo",
    home: "bha",
    away: "nfo",
    numF: 5,
    numM: 42,
  },
  {
    name: "cry_mun",
    home: "cry",
    away: "mun",
    numF: 5,
    numM: 43,
  },
  {
    name: "ful_new",
    home: "ful",
    away: "new",
    numF: 5,
    numM: 44,
  },
  {
    name: "lei_eve",
    home: "lei",
    away: "eve",
    numF: 5,
    numM: 45,
  },
  {
    name: "liv_bou",
    home: "liv",
    away: "bou",
    numF: 5,
    numM: 46,
  },
  {
    name: "mci_ars",
    home: "mci",
    away: "ars",
    numF: 5,
    numM: 47,
  },
  {
    name: "sou_ips",
    home: "sou",
    away: "ips",
    numF: 5,
    numM: 48,
  },
  {
    name: "tot_bre",
    home: "tot",
    away: "bre",
    numF: 5,
    numM: 49,
  },
  {
    name: "whu_che",
    home: "whu",
    away: "che",
    numF: 5,
    numM: 50,
  },
  {
    name: "ars_lei",
    home: "ars",
    away: "lei",
    numF: 6,
    numM: 51,
  },
  {
    name: "bou_sou",
    home: "bou",
    away: "sou",
    numF: 6,
    numM: 52,
  },
  {
    name: "bre_whu",
    home: "bre",
    away: "whu",
    numF: 6,
    numM: 53,
  },
  {
    name: "che_bha",
    home: "che",
    away: "bha",
    numF: 6,
    numM: 54,
  },
  {
    name: "eve_cry",
    home: "eve",
    away: "cry",
    numF: 6,
    numM: 55,
  },
  {
    name: "ips_avl",
    home: "ips",
    away: "avl",
    numF: 6,
    numM: 56,
  },
  {
    name: "mun_tot",
    home: "mun",
    away: "tot",
    numF: 6,
    numM: 57,
  },
  {
    name: "new_mci",
    home: "new",
    away: "mci",
    numF: 6,
    numM: 58,
  },
  {
    name: "nfo_ful",
    home: "nfo",
    away: "ful",
    numF: 6,
    numM: 59,
  },
  {
    name: "wol_liv",
    home: "wol",
    away: "liv",
    numF: 6,
    numM: 60,
  },
  {
    name: "ars_sou",
    home: "ars",
    away: "sou",
    numF: 7,
    numM: 61,
  },
  {
    name: "avl_mun",
    home: "avl",
    away: "mun",
    numF: 7,
    numM: 62,
  },
  {
    name: "bre_wol",
    home: "bre",
    away: "wol",
    numF: 7,
    numM: 63,
  },
  {
    name: "bha_tot",
    home: "bha",
    away: "tot",
    numF: 7,
    numM: 64,
  },
  {
    name: "che_nfo",
    home: "che",
    away: "nfo",
    numF: 7,
    numM: 65,
  },
  {
    name: "cry_liv",
    home: "cry",
    away: "liv",
    numF: 7,
    numM: 66,
  },
  {
    name: "eve_new",
    home: "eve",
    away: "new",
    numF: 7,
    numM: 67,
  },
  {
    name: "lei_bou",
    home: "lei",
    away: "bou",
    numF: 7,
    numM: 68,
  },
  {
    name: "mci_ful",
    home: "mci",
    away: "ful",
    numF: 7,
    numM: 69,
  },
  {
    name: "whu_ips",
    home: "whu",
    away: "ips",
    numF: 7,
    numM: 70,
  },
  {
    name: "bou_ars",
    home: "bou",
    away: "ars",
    numF: 8,
    numM: 71,
  },
  {
    name: "ful_avl",
    home: "ful",
    away: "avl",
    numF: 8,
    numM: 72,
  },
  {
    name: "ips_eve",
    home: "ips",
    away: "eve",
    numF: 8,
    numM: 73,
  },
  {
    name: "liv_che",
    home: "liv",
    away: "che",
    numF: 8,
    numM: 74,
  },
  {
    name: "mun_bre",
    home: "mun",
    away: "bre",
    numF: 8,
    numM: 75,
  },
  {
    name: "new_bha",
    home: "new",
    away: "bha",
    numF: 8,
    numM: 76,
  },
  {
    name: "nfo_cry",
    home: "nfo",
    away: "cry",
    numF: 8,
    numM: 77,
  },
  {
    name: "sou_lei",
    home: "sou",
    away: "lei",
    numF: 8,
    numM: 78,
  },
  {
    name: "tot_whu",
    home: "tot",
    away: "whu",
    numF: 8,
    numM: 79,
  },
  {
    name: "wol_mci",
    home: "wol",
    away: "mci",
    numF: 8,
    numM: 80,
  },
  {
    name: "ars_liv",
    home: "ars",
    away: "liv",
    numF: 9,
    numM: 81,
  },
  {
    name: "avl_bou",
    home: "avl",
    away: "bou",
    numF: 9,
    numM: 82,
  },
  {
    name: "bre_ips",
    home: "bre",
    away: "ips",
    numF: 9,
    numM: 83,
  },
  {
    name: "bha_wol",
    home: "bha",
    away: "wol",
    numF: 9,
    numM: 84,
  },
  {
    name: "che_new",
    home: "che",
    away: "new",
    numF: 9,
    numM: 85,
  },
  {
    name: "cry_tot",
    home: "cry",
    away: "tot",
    numF: 9,
    numM: 86,
  },
  {
    name: "eve_ful",
    home: "eve",
    away: "ful",
    numF: 9,
    numM: 87,
  },
  {
    name: "lei_nfo",
    home: "lei",
    away: "nfo",
    numF: 9,
    numM: 88,
  },
  {
    name: "mci_sou",
    home: "mci",
    away: "sou",
    numF: 9,
    numM: 89,
  },
  {
    name: "whu_mun",
    home: "whu",
    away: "mun",
    numF: 9,
    numM: 90,
  },
  {
    name: "bou_mci",
    home: "bou",
    away: "mci",
    numF: 10,
    numM: 91,
  },
  {
    name: "ful_bre",
    home: "ful",
    away: "bre",
    numF: 10,
    numM: 92,
  },
  {
    name: "ips_lei",
    home: "ips",
    away: "lei",
    numF: 10,
    numM: 93,
  },
  {
    name: "liv_bha",
    home: "liv",
    away: "bha",
    numF: 10,
    numM: 94,
  },
  {
    name: "mun_che",
    home: "mun",
    away: "che",
    numF: 10,
    numM: 95,
  },
  {
    name: "new_ars",
    home: "new",
    away: "ars",
    numF: 10,
    numM: 96,
  },
  {
    name: "nfo_whu",
    home: "nfo",
    away: "whu",
    numF: 10,
    numM: 97,
  },
  {
    name: "sou_eve",
    home: "sou",
    away: "eve",
    numF: 10,
    numM: 98,
  },
  {
    name: "tot_avl",
    home: "tot",
    away: "avl",
    numF: 10,
    numM: 99,
  },
  {
    name: "wol_cry",
    home: "wol",
    away: "cry",
    numF: 10,
    numM: 100,
  },
  {
    name: "bre_bou",
    home: "bre",
    away: "bou",
    numF: 11,
    numM: 101,
  },
  {
    name: "bha_mci",
    home: "bha",
    away: "mci",
    numF: 11,
    numM: 102,
  },
  {
    name: "che_ars",
    home: "che",
    away: "ars",
    numF: 11,
    numM: 103,
  },
  {
    name: "cry_ful",
    home: "cry",
    away: "ful",
    numF: 11,
    numM: 104,
  },
  {
    name: "liv_avl",
    home: "liv",
    away: "avl",
    numF: 11,
    numM: 105,
  },
  {
    name: "mun_lei",
    home: "mun",
    away: "lei",
    numF: 11,
    numM: 106,
  },
  {
    name: "nfo_new",
    home: "nfo",
    away: "new",
    numF: 11,
    numM: 107,
  },
  {
    name: "tot_ips",
    home: "tot",
    away: "ips",
    numF: 11,
    numM: 108,
  },
  {
    name: "whu_eve",
    home: "whu",
    away: "eve",
    numF: 11,
    numM: 109,
  },
  {
    name: "wol_sou",
    home: "wol",
    away: "sou",
    numF: 11,
    numM: 110,
  },
  {
    name: "ars_nfo",
    home: "ars",
    away: "nfo",
    numF: 12,
    numM: 111,
  },
  {
    name: "avl_cry",
    home: "avl",
    away: "cry",
    numF: 12,
    numM: 112,
  },
  {
    name: "bou_bha",
    home: "bou",
    away: "bha",
    numF: 12,
    numM: 113,
  },
  {
    name: "eve_bre",
    home: "eve",
    away: "bre",
    numF: 12,
    numM: 114,
  },
  {
    name: "ful_wol",
    home: "ful",
    away: "wol",
    numF: 12,
    numM: 115,
  },
  {
    name: "ips_mun",
    home: "ips",
    away: "mun",
    numF: 12,
    numM: 116,
  },
  {
    name: "lei_che",
    home: "lei",
    away: "che",
    numF: 12,
    numM: 117,
  },
  {
    name: "mci_tot",
    home: "mci",
    away: "tot",
    numF: 12,
    numM: 118,
  },
  {
    name: "new_whu",
    home: "new",
    away: "whu",
    numF: 12,
    numM: 119,
  },
  {
    name: "sou_liv",
    home: "sou",
    away: "liv",
    numF: 12,
    numM: 120,
  },
  {
    name: "bre_lei",
    home: "bre",
    away: "lei",
    numF: 13,
    numM: 121,
  },
  {
    name: "bha_sou",
    home: "bha",
    away: "sou",
    numF: 13,
    numM: 122,
  },
  {
    name: "che_avl",
    home: "che",
    away: "avl",
    numF: 13,
    numM: 123,
  },
  {
    name: "cry_new",
    home: "cry",
    away: "new",
    numF: 13,
    numM: 124,
  },
  {
    name: "liv_mci",
    home: "liv",
    away: "mci",
    numF: 13,
    numM: 125,
  },
  {
    name: "mun_eve",
    home: "mun",
    away: "eve",
    numF: 13,
    numM: 126,
  },
  {
    name: "nfo_ips",
    home: "nfo",
    away: "ips",
    numF: 13,
    numM: 127,
  },
  {
    name: "tot_ful",
    home: "tot",
    away: "ful",
    numF: 13,
    numM: 128,
  },
  {
    name: "whu_ars",
    home: "whu",
    away: "ars",
    numF: 13,
    numM: 129,
  },
  {
    name: "wol_bou",
    home: "wol",
    away: "bou",
    numF: 13,
    numM: 130,
  },
  {
    name: "ars_mun",
    home: "ars",
    away: "mun",
    numF: 14,
    numM: 131,
  },
  {
    name: "avl_bre",
    home: "avl",
    away: "bre",
    numF: 14,
    numM: 132,
  },
  {
    name: "bou_tot",
    home: "bou",
    away: "tot",
    numF: 14,
    numM: 133,
  },
  {
    name: "eve_wol",
    home: "eve",
    away: "wol",
    numF: 14,
    numM: 134,
  },
  {
    name: "ful_bha",
    home: "ful",
    away: "bha",
    numF: 14,
    numM: 135,
  },
  {
    name: "ips_cry",
    home: "ips",
    away: "cry",
    numF: 14,
    numM: 136,
  },
  {
    name: "lei_whu",
    home: "lei",
    away: "whu",
    numF: 14,
    numM: 137,
  },
  {
    name: "mci_nfo",
    home: "mci",
    away: "nfo",
    numF: 14,
    numM: 138,
  },
  {
    name: "new_liv",
    home: "new",
    away: "liv",
    numF: 14,
    numM: 139,
  },
  {
    name: "sou_che",
    home: "sou",
    away: "che",
    numF: 14,
    numM: 140,
  },
  {
    name: "avl_sou",
    home: "avl",
    away: "sou",
    numF: 15,
    numM: 141,
  },
  {
    name: "bre_new",
    home: "bre",
    away: "new",
    numF: 15,
    numM: 142,
  },
  {
    name: "cry_mci",
    home: "cry",
    away: "mci",
    numF: 15,
    numM: 143,
  },
  {
    name: "eve_liv",
    home: "eve",
    away: "liv",
    numF: 15,
    numM: 144,
  },
  {
    name: "ful_ars",
    home: "ful",
    away: "ars",
    numF: 15,
    numM: 145,
  },
  {
    name: "ips_bou",
    home: "ips",
    away: "bou",
    numF: 15,
    numM: 146,
  },
  {
    name: "lei_bha",
    home: "lei",
    away: "bha",
    numF: 15,
    numM: 147,
  },
  {
    name: "mun_nfo",
    home: "mun",
    away: "nfo",
    numF: 15,
    numM: 148,
  },
  {
    name: "tot_che",
    home: "tot",
    away: "che",
    numF: 15,
    numM: 149,
  },
  {
    name: "whu_wol",
    home: "whu",
    away: "wol",
    numF: 15,
    numM: 150,
  },
  {
    name: "ars_eve",
    home: "ars",
    away: "eve",
    numF: 16,
    numM: 151,
  },
  {
    name: "bou_whu",
    home: "bou",
    away: "whu",
    numF: 16,
    numM: 152,
  },
  {
    name: "bha_cry",
    home: "bha",
    away: "cry",
    numF: 16,
    numM: 153,
  },
  {
    name: "che_bre",
    home: "che",
    away: "bre",
    numF: 16,
    numM: 154,
  },
  {
    name: "liv_ful",
    home: "liv",
    away: "ful",
    numF: 16,
    numM: 155,
  },
  {
    name: "mci_mun",
    home: "mci",
    away: "mun",
    numF: 16,
    numM: 156,
  },
  {
    name: "new_lei",
    home: "new",
    away: "lei",
    numF: 16,
    numM: 157,
  },
  {
    name: "nfo_avl",
    home: "nfo",
    away: "avl",
    numF: 16,
    numM: 158,
  },
  {
    name: "sou_tot",
    home: "sou",
    away: "tot",
    numF: 16,
    numM: 159,
  },
  {
    name: "wol_ips",
    home: "wol",
    away: "ips",
    numF: 16,
    numM: 160,
  },
  {
    name: "avl_mci",
    home: "avl",
    away: "mci",
    numF: 17,
    numM: 161,
  },
  {
    name: "bre_nfo",
    home: "bre",
    away: "nfo",
    numF: 17,
    numM: 162,
  },
  {
    name: "cry_ars",
    home: "cry",
    away: "ars",
    numF: 17,
    numM: 163,
  },
  {
    name: "eve_che",
    home: "eve",
    away: "che",
    numF: 17,
    numM: 164,
  },
  {
    name: "ful_sou",
    home: "ful",
    away: "sou",
    numF: 17,
    numM: 165,
  },
  {
    name: "ips_new",
    home: "ips",
    away: "new",
    numF: 17,
    numM: 166,
  },
  {
    name: "lei_wol",
    home: "lei",
    away: "wol",
    numF: 17,
    numM: 167,
  },
  {
    name: "mun_bou",
    home: "mun",
    away: "bou",
    numF: 17,
    numM: 168,
  },
  {
    name: "tot_liv",
    home: "tot",
    away: "liv",
    numF: 17,
    numM: 169,
  },
  {
    name: "whu_bha",
    home: "whu",
    away: "bha",
    numF: 17,
    numM: 170,
  },
  {
    name: "ars_ips",
    home: "ars",
    away: "ips",
    numF: 18,
    numM: 171,
  },
  {
    name: "bou_cry",
    home: "bou",
    away: "cry",
    numF: 18,
    numM: 172,
  },
  {
    name: "bha_bre",
    home: "bha",
    away: "bre",
    numF: 18,
    numM: 173,
  },
  {
    name: "che_ful",
    home: "che",
    away: "ful",
    numF: 18,
    numM: 174,
  },
  {
    name: "liv_lei",
    home: "liv",
    away: "lei",
    numF: 18,
    numM: 175,
  },
  {
    name: "mci_eve",
    home: "mci",
    away: "eve",
    numF: 18,
    numM: 176,
  },
  {
    name: "new_avl",
    home: "new",
    away: "avl",
    numF: 18,
    numM: 177,
  },
  {
    name: "nfo_tot",
    home: "nfo",
    away: "tot",
    numF: 18,
    numM: 178,
  },
  {
    name: "sou_whu",
    home: "sou",
    away: "whu",
    numF: 18,
    numM: 179,
  },
  {
    name: "wol_mun",
    home: "wol",
    away: "mun",
    numF: 18,
    numM: 180,
  },
  {
    name: "avl_bha",
    home: "avl",
    away: "bha",
    numF: 19,
    numM: 181,
  },
  {
    name: "bre_ars",
    home: "bre",
    away: "ars",
    numF: 19,
    numM: 182,
  },
  {
    name: "cry_sou",
    home: "cry",
    away: "sou",
    numF: 19,
    numM: 183,
  },
  {
    name: "eve_nfo",
    home: "eve",
    away: "nfo",
    numF: 19,
    numM: 184,
  },
  {
    name: "ful_bou",
    home: "ful",
    away: "bou",
    numF: 19,
    numM: 185,
  },
  {
    name: "ips_che",
    home: "ips",
    away: "che",
    numF: 19,
    numM: 186,
  },
  {
    name: "lei_mci",
    home: "lei",
    away: "mci",
    numF: 19,
    numM: 187,
  },
  {
    name: "mun_new",
    home: "mun",
    away: "new",
    numF: 19,
    numM: 188,
  },
  {
    name: "tot_wol",
    home: "tot",
    away: "wol",
    numF: 19,
    numM: 189,
  },
  {
    name: "whu_liv",
    home: "whu",
    away: "liv",
    numF: 19,
    numM: 190,
  },
  {
    name: "avl_lei",
    home: "avl",
    away: "lei",
    numF: 20,
    numM: 191,
  },
  {
    name: "bou_eve",
    home: "bou",
    away: "eve",
    numF: 20,
    numM: 192,
  },
  {
    name: "bha_ars",
    home: "bha",
    away: "ars",
    numF: 20,
    numM: 193,
  },
  {
    name: "cry_che",
    home: "cry",
    away: "che",
    numF: 20,
    numM: 194,
  },
  {
    name: "ful_ips",
    home: "ful",
    away: "ips",
    numF: 20,
    numM: 195,
  },
  {
    name: "liv_mun",
    home: "liv",
    away: "mun",
    numF: 20,
    numM: 196,
  },
  {
    name: "mci_whu",
    home: "mci",
    away: "whu",
    numF: 20,
    numM: 197,
  },
  {
    name: "sou_bre",
    home: "sou",
    away: "bre",
    numF: 20,
    numM: 198,
  },
  {
    name: "tot_new",
    home: "tot",
    away: "new",
    numF: 20,
    numM: 199,
  },
  {
    name: "wol_nfo",
    home: "wol",
    away: "nfo",
    numF: 20,
    numM: 200,
  },
  {
    name: "ars_tot",
    home: "ars",
    away: "tot",
    numF: 21,
    numM: 201,
  },
  {
    name: "bre_mci",
    home: "bre",
    away: "mci",
    numF: 21,
    numM: 202,
  },
  {
    name: "eve_avl",
    home: "eve",
    away: "avl",
    numF: 21,
    numM: 203,
  },
  {
    name: "ips_bha",
    home: "ips",
    away: "bha",
    numF: 21,
    numM: 204,
  },
  {
    name: "lei_cry",
    home: "lei",
    away: "cry",
    numF: 21,
    numM: 205,
  },
  {
    name: "nfo_liv",
    home: "nfo",
    away: "liv",
    numF: 21,
    numM: 206,
  },
  {
    name: "whu_ful",
    home: "whu",
    away: "ful",
    numF: 21,
    numM: 207,
  },
  {
    name: "che_bou",
    home: "che",
    away: "bou",
    numF: 21,
    numM: 208,
  },
  {
    name: "new_wol",
    home: "new",
    away: "wol",
    numF: 21,
    numM: 209,
  },
  {
    name: "mun_sou",
    home: "mun",
    away: "sou",
    numF: 21,
    numM: 210,
  },
  {
    name: "ars_avl",
    home: "ars",
    away: "avl",
    numF: 22,
    numM: 211,
  },
  {
    name: "bre_liv",
    home: "bre",
    away: "liv",
    numF: 22,
    numM: 212,
  },
  {
    name: "che_wol",
    home: "che",
    away: "wol",
    numF: 22,
    numM: 213,
  },
  {
    name: "eve_tot",
    home: "eve",
    away: "tot",
    numF: 22,
    numM: 214,
  },
  {
    name: "ips_mci",
    home: "ips",
    away: "mci",
    numF: 22,
    numM: 215,
  },
  {
    name: "lei_ful",
    home: "lei",
    away: "ful",
    numF: 22,
    numM: 216,
  },
  {
    name: "mun_bha",
    home: "mun",
    away: "bha",
    numF: 22,
    numM: 217,
  },
  {
    name: "new_bou",
    home: "new",
    away: "bou",
    numF: 22,
    numM: 218,
  },
  {
    name: "nfo_sou",
    home: "nfo",
    away: "sou",
    numF: 22,
    numM: 219,
  },
  {
    name: "whu_cry",
    home: "whu",
    away: "cry",
    numF: 22,
    numM: 220,
  },
  {
    name: "avl_whu",
    home: "avl",
    away: "whu",
    numF: 23,
    numM: 221,
  },
  {
    name: "bou_nfo",
    home: "bou",
    away: "nfo",
    numF: 23,
    numM: 222,
  },
  {
    name: "bha_eve",
    home: "bha",
    away: "eve",
    numF: 23,
    numM: 223,
  },
  {
    name: "cry_bre",
    home: "cry",
    away: "bre",
    numF: 23,
    numM: 224,
  },
  {
    name: "ful_mun",
    home: "ful",
    away: "mun",
    numF: 23,
    numM: 225,
  },
  {
    name: "liv_ips",
    home: "liv",
    away: "ips",
    numF: 23,
    numM: 226,
  },
  {
    name: "mci_che",
    home: "mci",
    away: "che",
    numF: 23,
    numM: 227,
  },
  {
    name: "sou_new",
    home: "sou",
    away: "new",
    numF: 23,
    numM: 228,
  },
  {
    name: "tot_lei",
    home: "tot",
    away: "lei",
    numF: 23,
    numM: 229,
  },
  {
    name: "wol_ars",
    home: "wol",
    away: "ars",
    numF: 23,
    numM: 230,
  },
  {
    name: "ars_mci",
    home: "ars",
    away: "mci",
    numF: 24,
    numM: 231,
  },
  {
    name: "bou_liv",
    home: "bou",
    away: "liv",
    numF: 24,
    numM: 232,
  },
  {
    name: "bre_tot",
    home: "bre",
    away: "tot",
    numF: 24,
    numM: 233,
  },
  {
    name: "che_whu",
    home: "che",
    away: "whu",
    numF: 24,
    numM: 234,
  },
  {
    name: "eve_lei",
    home: "eve",
    away: "lei",
    numF: 24,
    numM: 235,
  },
  {
    name: "ips_sou",
    home: "ips",
    away: "sou",
    numF: 24,
    numM: 236,
  },
  {
    name: "mun_cry",
    home: "mun",
    away: "cry",
    numF: 24,
    numM: 237,
  },
  {
    name: "new_ful",
    home: "new",
    away: "ful",
    numF: 24,
    numM: 238,
  },
  {
    name: "nfo_bha",
    home: "nfo",
    away: "bha",
    numF: 24,
    numM: 239,
  },
  {
    name: "wol_avl",
    home: "wol",
    away: "avl",
    numF: 24,
    numM: 240,
  },
  {
    name: "avl_ips",
    home: "avl",
    away: "ips",
    numF: 25,
    numM: 241,
  },
  {
    name: "bha_che",
    home: "bha",
    away: "che",
    numF: 25,
    numM: 242,
  },
  {
    name: "cry_eve",
    home: "cry",
    away: "eve",
    numF: 25,
    numM: 243,
  },
  {
    name: "ful_nfo",
    home: "ful",
    away: "nfo",
    numF: 25,
    numM: 244,
  },
  {
    name: "lei_ars",
    home: "lei",
    away: "ars",
    numF: 25,
    numM: 245,
  },
  {
    name: "liv_wol",
    home: "liv",
    away: "wol",
    numF: 25,
    numM: 246,
  },
  {
    name: "mci_new",
    home: "mci",
    away: "new",
    numF: 25,
    numM: 247,
  },
  {
    name: "sou_bou",
    home: "sou",
    away: "bou",
    numF: 25,
    numM: 248,
  },
  {
    name: "tot_mun",
    home: "tot",
    away: "mun",
    numF: 25,
    numM: 249,
  },
  {
    name: "whu_bre",
    home: "whu",
    away: "bre",
    numF: 25,
    numM: 250,
  },
  {
    name: "ars_whu",
    home: "ars",
    away: "whu",
    numF: 26,
    numM: 251,
  },
  {
    name: "avl_che",
    home: "avl",
    away: "che",
    numF: 26,
    numM: 252,
  },
  {
    name: "bou_wol",
    home: "bou",
    away: "wol",
    numF: 26,
    numM: 253,
  },
  {
    name: "eve_mun",
    home: "eve",
    away: "mun",
    numF: 26,
    numM: 254,
  },
  {
    name: "ful_cry",
    home: "ful",
    away: "cry",
    numF: 26,
    numM: 255,
  },
  {
    name: "ips_tot",
    home: "ips",
    away: "tot",
    numF: 26,
    numM: 256,
  },
  {
    name: "lei_bre",
    home: "lei",
    away: "bre",
    numF: 26,
    numM: 257,
  },
  {
    name: "mci_liv",
    home: "mci",
    away: "liv",
    numF: 26,
    numM: 258,
  },
  {
    name: "new_nfo",
    home: "new",
    away: "nfo",
    numF: 26,
    numM: 259,
  },
  {
    name: "sou_bha",
    home: "sou",
    away: "bha",
    numF: 26,
    numM: 260,
  },
  {
    name: "bre_eve",
    home: "bre",
    away: "eve",
    numF: 27,
    numM: 261,
  },
  {
    name: "bha_bou",
    home: "bha",
    away: "bou",
    numF: 27,
    numM: 262,
  },
  {
    name: "nfo_ars",
    home: "nfo",
    away: "ars",
    numF: 27,
    numM: 263,
  },
  {
    name: "tot_mci",
    home: "tot",
    away: "mci",
    numF: 27,
    numM: 264,
  },
  {
    name: "whu_lei",
    home: "whu",
    away: "lei",
    numF: 27,
    numM: 265,
  },
  {
    name: "wol_ful",
    home: "wol",
    away: "ful",
    numF: 27,
    numM: 266,
  },
  {
    name: "cry_avl",
    home: "cry",
    away: "avl",
    numF: 27,
    numM: 267,
  },
  {
    name: "che_sou",
    home: "che",
    away: "sou",
    numF: 27,
    numM: 268,
  },
  {
    name: "liv_new",
    home: "liv",
    away: "new",
    numF: 27,
    numM: 269,
  },
  {
    name: "mun_ips",
    home: "mun",
    away: "ips",
    numF: 27,
    numM: 270,
  },
  {
    name: "bre_avl",
    home: "bre",
    away: "avl",
    numF: 28,
    numM: 271,
  },
  {
    name: "bha_ful",
    home: "bha",
    away: "ful",
    numF: 28,
    numM: 272,
  },
  {
    name: "che_lei",
    home: "che",
    away: "lei",
    numF: 28,
    numM: 273,
  },
  {
    name: "cry_ips",
    home: "cry",
    away: "ips",
    numF: 28,
    numM: 274,
  },
  {
    name: "liv_sou",
    home: "liv",
    away: "sou",
    numF: 28,
    numM: 275,
  },
  {
    name: "mun_ars",
    home: "mun",
    away: "ars",
    numF: 28,
    numM: 276,
  },
  {
    name: "nfo_mci",
    home: "nfo",
    away: "mci",
    numF: 28,
    numM: 277,
  },
  {
    name: "tot_bou",
    home: "tot",
    away: "bou",
    numF: 28,
    numM: 278,
  },
  {
    name: "whu_new",
    home: "whu",
    away: "new",
    numF: 28,
    numM: 279,
  },
  {
    name: "wol_eve",
    home: "wol",
    away: "eve",
    numF: 28,
    numM: 280,
  },
  {
    name: "ars_che",
    home: "ars",
    away: "che",
    numF: 29,
    numM: 281,
  },
  {
    name: "avl_liv",
    home: "avl",
    away: "liv",
    numF: 29,
    numM: 282,
  },
  {
    name: "bou_bre",
    home: "bou",
    away: "bre",
    numF: 29,
    numM: 283,
  },
  {
    name: "eve_whu",
    home: "eve",
    away: "whu",
    numF: 29,
    numM: 284,
  },
  {
    name: "ful_tot",
    home: "ful",
    away: "tot",
    numF: 29,
    numM: 285,
  },
  {
    name: "ips_nfo",
    home: "ips",
    away: "nfo",
    numF: 29,
    numM: 286,
  },
  {
    name: "lei_mun",
    home: "lei",
    away: "mun",
    numF: 29,
    numM: 287,
  },
  {
    name: "mci_bha",
    home: "mci",
    away: "bha",
    numF: 29,
    numM: 288,
  },
  {
    name: "new_cry",
    home: "new",
    away: "cry",
    numF: 29,
    numM: 289,
  },
  {
    name: "sou_wol",
    home: "sou",
    away: "wol",
    numF: 29,
    numM: 290,
  },
  {
    name: "ars_ful",
    home: "ars",
    away: "ful",
    numF: 30,
    numM: 291,
  },
  {
    name: "bou_ips",
    home: "bou",
    away: "ips",
    numF: 30,
    numM: 292,
  },
  {
    name: "bha_avl",
    home: "bha",
    away: "avl",
    numF: 30,
    numM: 293,
  },
  {
    name: "nfo_mun",
    home: "nfo",
    away: "mun",
    numF: 30,
    numM: 294,
  },
  {
    name: "wol_whu",
    home: "wol",
    away: "whu",
    numF: 30,
    numM: 295,
  },
  {
    name: "che_tot",
    home: "che",
    away: "tot",
    numF: 30,
    numM: 296,
  },
  {
    name: "mci_lei",
    home: "mci",
    away: "lei",
    numF: 30,
    numM: 297,
  },
  {
    name: "new_bre",
    home: "new",
    away: "bre",
    numF: 30,
    numM: 298,
  },
  {
    name: "sou_cry",
    home: "sou",
    away: "cry",
    numF: 30,
    numM: 299,
  },
  {
    name: "liv_eve",
    home: "liv",
    away: "eve",
    numF: 30,
    numM: 300,
  },
  {
    name: "avl_nfo",
    home: "avl",
    away: "nfo",
    numF: 31,
    numM: 301,
  },
  {
    name: "bre_che",
    home: "bre",
    away: "che",
    numF: 31,
    numM: 302,
  },
  {
    name: "cry_bha",
    home: "cry",
    away: "bha",
    numF: 31,
    numM: 303,
  },
  {
    name: "eve_ars",
    home: "eve",
    away: "ars",
    numF: 31,
    numM: 304,
  },
  {
    name: "ful_liv",
    home: "ful",
    away: "liv",
    numF: 31,
    numM: 305,
  },
  {
    name: "ips_wol",
    home: "ips",
    away: "wol",
    numF: 31,
    numM: 306,
  },
  {
    name: "lei_new",
    home: "lei",
    away: "new",
    numF: 31,
    numM: 307,
  },
  {
    name: "mun_mci",
    home: "mun",
    away: "mci",
    numF: 31,
    numM: 308,
  },
  {
    name: "tot_sou",
    home: "tot",
    away: "sou",
    numF: 31,
    numM: 309,
  },
  {
    name: "whu_bou",
    home: "whu",
    away: "bou",
    numF: 31,
    numM: 310,
  },
  {
    name: "ars_bre",
    home: "ars",
    away: "bre",
    numF: 32,
    numM: 311,
  },
  {
    name: "bou_ful",
    home: "bou",
    away: "ful",
    numF: 32,
    numM: 312,
  },
  {
    name: "bha_lei",
    home: "bha",
    away: "lei",
    numF: 32,
    numM: 313,
  },
  {
    name: "che_ips",
    home: "che",
    away: "ips",
    numF: 32,
    numM: 314,
  },
  {
    name: "liv_whu",
    home: "liv",
    away: "whu",
    numF: 32,
    numM: 315,
  },
  {
    name: "mci_cry",
    home: "mci",
    away: "cry",
    numF: 32,
    numM: 316,
  },
  {
    name: "new_mun",
    home: "new",
    away: "mun",
    numF: 32,
    numM: 317,
  },
  {
    name: "nfo_eve",
    home: "nfo",
    away: "eve",
    numF: 32,
    numM: 318,
  },
  {
    name: "sou_avl",
    home: "sou",
    away: "avl",
    numF: 32,
    numM: 319,
  },
  {
    name: "wol_tot",
    home: "wol",
    away: "tot",
    numF: 32,
    numM: 320,
  },
  {
    name: "avl_new",
    home: "avl",
    away: "new",
    numF: 33,
    numM: 321,
  },
  {
    name: "bre_bha",
    home: "bre",
    away: "bha",
    numF: 33,
    numM: 322,
  },
  {
    name: "cry_bou",
    home: "cry",
    away: "bou",
    numF: 33,
    numM: 323,
  },
  {
    name: "eve_mci",
    home: "eve",
    away: "mci",
    numF: 33,
    numM: 324,
  },
  {
    name: "ful_che",
    home: "ful",
    away: "che",
    numF: 33,
    numM: 325,
  },
  {
    name: "ips_ars",
    home: "ips",
    away: "ars",
    numF: 33,
    numM: 326,
  },
  {
    name: "lei_liv",
    home: "lei",
    away: "liv",
    numF: 33,
    numM: 327,
  },
  {
    name: "mun_wol",
    home: "mun",
    away: "wol",
    numF: 33,
    numM: 328,
  },
  {
    name: "tot_nfo",
    home: "tot",
    away: "nfo",
    numF: 33,
    numM: 329,
  },
  {
    name: "whu_sou",
    home: "whu",
    away: "sou",
    numF: 33,
    numM: 330,
  },
  {
    name: "ars_cry",
    home: "ars",
    away: "cry",
    numF: 34,
    numM: 331,
  },
  {
    name: "bou_mun",
    home: "bou",
    away: "mun",
    numF: 34,
    numM: 332,
  },
  {
    name: "bha_whu",
    home: "bha",
    away: "whu",
    numF: 34,
    numM: 333,
  },
  {
    name: "che_eve",
    home: "che",
    away: "eve",
    numF: 34,
    numM: 334,
  },
  {
    name: "liv_tot",
    home: "liv",
    away: "tot",
    numF: 34,
    numM: 335,
  },
  {
    name: "mci_avl",
    home: "mci",
    away: "avl",
    numF: 34,
    numM: 336,
  },
  {
    name: "new_ips",
    home: "new",
    away: "ips",
    numF: 34,
    numM: 337,
  },
  {
    name: "nfo_bre",
    home: "nfo",
    away: "bre",
    numF: 34,
    numM: 338,
  },
  {
    name: "sou_ful",
    home: "sou",
    away: "ful",
    numF: 34,
    numM: 339,
  },
  {
    name: "wol_lei",
    home: "wol",
    away: "lei",
    numF: 34,
    numM: 340,
  },
  {
    name: "ars_bou",
    home: "ars",
    away: "bou",
    numF: 35,
    numM: 341,
  },
  {
    name: "avl_ful",
    home: "avl",
    away: "ful",
    numF: 35,
    numM: 342,
  },
  {
    name: "bre_mun",
    home: "bre",
    away: "mun",
    numF: 35,
    numM: 343,
  },
  {
    name: "bha_new",
    home: "bha",
    away: "new",
    numF: 35,
    numM: 344,
  },
  {
    name: "che_liv",
    home: "che",
    away: "liv",
    numF: 35,
    numM: 345,
  },
  {
    name: "cry_nfo",
    home: "cry",
    away: "nfo",
    numF: 35,
    numM: 346,
  },
  {
    name: "eve_ips",
    home: "eve",
    away: "ips",
    numF: 35,
    numM: 347,
  },
  {
    name: "lei_sou",
    home: "lei",
    away: "sou",
    numF: 35,
    numM: 348,
  },
  {
    name: "mci_wol",
    home: "mci",
    away: "wol",
    numF: 35,
    numM: 349,
  },
  {
    name: "whu_tot",
    home: "whu",
    away: "tot",
    numF: 35,
    numM: 350,
  },
  {
    name: "bou_avl",
    home: "bou",
    away: "avl",
    numF: 36,
    numM: 351,
  },
  {
    name: "ful_eve",
    home: "ful",
    away: "eve",
    numF: 36,
    numM: 352,
  },
  {
    name: "ips_bre",
    home: "ips",
    away: "bre",
    numF: 36,
    numM: 353,
  },
  {
    name: "liv_ars",
    home: "liv",
    away: "ars",
    numF: 36,
    numM: 354,
  },
  {
    name: "mun_whu",
    home: "mun",
    away: "whu",
    numF: 36,
    numM: 355,
  },
  {
    name: "new_che",
    home: "new",
    away: "che",
    numF: 36,
    numM: 356,
  },
  {
    name: "nfo_lei",
    home: "nfo",
    away: "lei",
    numF: 36,
    numM: 357,
  },
  {
    name: "sou_mci",
    home: "sou",
    away: "mci",
    numF: 36,
    numM: 358,
  },
  {
    name: "tot_cry",
    home: "tot",
    away: "cry",
    numF: 36,
    numM: 359,
  },
  {
    name: "wol_bha",
    home: "wol",
    away: "bha",
    numF: 36,
    numM: 360,
  },
  {
    name: "ars_new",
    home: "ars",
    away: "new",
    numF: 37,
    numM: 361,
  },
  {
    name: "avl_tot",
    home: "avl",
    away: "tot",
    numF: 37,
    numM: 362,
  },
  {
    name: "bre_ful",
    home: "bre",
    away: "ful",
    numF: 37,
    numM: 363,
  },
  {
    name: "bha_liv",
    home: "bha",
    away: "liv",
    numF: 37,
    numM: 364,
  },
  {
    name: "che_mun",
    home: "che",
    away: "mun",
    numF: 37,
    numM: 365,
  },
  {
    name: "cry_wol",
    home: "cry",
    away: "wol",
    numF: 37,
    numM: 366,
  },
  {
    name: "eve_sou",
    home: "eve",
    away: "sou",
    numF: 37,
    numM: 367,
  },
  {
    name: "lei_ips",
    home: "lei",
    away: "ips",
    numF: 37,
    numM: 368,
  },
  {
    name: "mci_bou",
    home: "mci",
    away: "bou",
    numF: 37,
    numM: 369,
  },
  {
    name: "whu_nfo",
    home: "whu",
    away: "nfo",
    numF: 37,
    numM: 370,
  },
  {
    name: "bou_lei",
    home: "bou",
    away: "lei",
    numF: 38,
    numM: 371,
  },
  {
    name: "ful_mci",
    home: "ful",
    away: "mci",
    numF: 38,
    numM: 372,
  },
  {
    name: "ips_whu",
    home: "ips",
    away: "whu",
    numF: 38,
    numM: 373,
  },
  {
    name: "liv_cry",
    home: "liv",
    away: "cry",
    numF: 38,
    numM: 374,
  },
  {
    name: "mun_avl",
    home: "mun",
    away: "avl",
    numF: 38,
    numM: 375,
  },
  {
    name: "new_eve",
    home: "new",
    away: "eve",
    numF: 38,
    numM: 376,
  },
  {
    name: "nfo_che",
    home: "nfo",
    away: "che",
    numF: 38,
    numM: 377,
  },
  {
    name: "sou_ars",
    home: "sou",
    away: "ars",
    numF: 38,
    numM: 378,
  },
  {
    name: "tot_bha",
    home: "tot",
    away: "bha",
    numF: 38,
    numM: 379,
  },
  {
    name: "wol_bre",
    home: "wol",
    away: "bre",
    numF: 38,
    numM: 380,
  },
];

const dateStrings = [
  "16/8/2024 18:00",
  "24/8/2024 12:00",
  "31/8/2024 12:00",
  "14/9/2024 12:00",
  "21/9/2024 12:00",
  "28/9/2024 12:00",
  "5/10/2024 12:00",
  "19/10/2024 12:00",
  "26/10/2024 12:00",
  "2/11/2024 12:00",
  "9/11/2024 12:00",
  "23/11/2024 12:00",
  "30/11/2024 12:00",
  "3/12/2024 12:00",
  "7/12/2024 12:00",
  "14/12/2024 12:00",
  "21/12/2024 12:00",
  "26/12/2024 12:00",
  "29/12/2024 12:00",
  "4/1/2025 12:00",
  "14/1/2025 12:00",
  "18/1/2025 12:00",
  "25/1/2025 12:00",
  "1/2/2025 12:00",
  "15/2/2025 12:00",
  "22/2/2025 12:00",
  "25/2/2025 12:00",
  "8/3/2025 12:00",
  "15/3/2025 12:00",
  "1/4/2025 12:00",
  "5/4/2025 12:00",
  "12/4/2025 12:00",
  "19/4/2025 12:00",
  "26/4/2025 12:00",
  "3/5/2025 12:00",
  "10/5/2025 12:00",
  "18/5/2025 12:00",
  "25/5/2025 12:00",
];

const deadlines = dateStrings.map((dateString) => {
  const [day, month, yearAndTime] = dateString.split("/");
  const [year, time] = yearAndTime.split(" ");
  const [hours, minutes] = time.split(":");

  // Create a new date object in local time
  const date = new Date(year, month - 1, day, hours, minutes);
  return date;
});

async function insertTeams() {
  try {
    for (let team of teamsToInsert) {
      const newTeam = new Team({
        name: team.name,
        shortname: team.shortname,
        image: `teams/${team.shortname}.png`,
      });
      await newTeam.save();
      console.log(`Team ${team.name} inserted successfully`);
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    return;
  }
}

async function insertMatches() {
  try {
    for (let match of fixturesToInsert) {
      let newMatch = new Match({
        name: match.name,
        home: match.home,
        away: match.away,
        numF: match.numF,
        numM: match.numM,
      });
      await newMatch.save();
      console.log(`${match.numM} inserted successfully`);
    }
    let Mat = 0;
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    return;
  }
}

async function insertFixtures() {
  try {
    let Mat = 0;
    for (let k = 1; k <= 38; k++) {
      let fixtureArray = [];
      let fullTime = [];
      for (let i = 0; i < 10; i++) {
        if (Mat === 380) {
          break;
        }
        let newobj = fixturesToInsert[Mat];
        fixtureArray.push(newobj);
        fullTime.push("-");
        Mat++;
      }
      let newFixture = new Fixture({
        number: k,
        deadline: deadlines[k - 1],
        matches: fixtureArray,
        fullTime: fullTime,
      });
      await newFixture.save();
      console.log(`Fixture ${k} inserted successfully`);
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    return;
  }
}

insertTeams();
insertMatches();
insertFixtures();
