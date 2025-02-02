/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/WTcivb1XPf5ODtyv7ZNnU9
 */

import type { StyleSchema } from '@dicebear/core';

export const schema: StyleSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "properties": {
    "accessories": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant04",
          "variant03",
          "variant02",
          "variant01"
        ]
      },
      "default": [
        "variant04",
        "variant03",
        "variant02",
        "variant01"
      ]
    },
    "accessoriesColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "daa520",
        "ffd700",
        "fafad2",
        "d3d3d3",
        "a9a9a9"
      ]
    },
    "accessoriesProbability": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "default": 10
    },
    "beard": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant08",
          "variant07",
          "variant06",
          "variant05",
          "variant04",
          "variant03",
          "variant02",
          "variant01"
        ]
      },
      "default": [
        "variant08",
        "variant07",
        "variant06",
        "variant05",
        "variant04",
        "variant03",
        "variant02",
        "variant01"
      ]
    },
    "beardProbability": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "default": 5
    },
    "clothing": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant23",
          "variant22",
          "variant21",
          "variant20",
          "variant19",
          "variant18",
          "variant17",
          "variant16",
          "variant15",
          "variant14",
          "variant13",
          "variant12",
          "variant11",
          "variant10",
          "variant09",
          "variant08",
          "variant07",
          "variant06",
          "variant05",
          "variant04",
          "variant03",
          "variant02",
          "variant01"
        ]
      },
      "default": [
        "variant23",
        "variant22",
        "variant21",
        "variant20",
        "variant19",
        "variant18",
        "variant17",
        "variant16",
        "variant15",
        "variant14",
        "variant13",
        "variant12",
        "variant11",
        "variant10",
        "variant09",
        "variant08",
        "variant07",
        "variant06",
        "variant05",
        "variant04",
        "variant03",
        "variant02",
        "variant01"
      ]
    },
    "clothingColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "5bc0de",
        "428bca",
        "03396c",
        "88d8b0",
        "44c585",
        "00b159",
        "ff6f69",
        "d11141",
        "ae0001",
        "ffeead",
        "ffd969",
        "ffc425"
      ]
    },
    "eyes": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant12",
          "variant11",
          "variant10",
          "variant09",
          "variant08",
          "variant07",
          "variant06",
          "variant05",
          "variant04",
          "variant03",
          "variant02",
          "variant01"
        ]
      },
      "default": [
        "variant12",
        "variant11",
        "variant10",
        "variant09",
        "variant08",
        "variant07",
        "variant06",
        "variant05",
        "variant04",
        "variant03",
        "variant02",
        "variant01"
      ]
    },
    "eyesColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "76778b",
        "697b94",
        "647b90",
        "5b7c8b",
        "588387",
        "876658"
      ]
    },
    "glasses": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "light07",
          "light06",
          "light05",
          "light04",
          "light03",
          "light02",
          "light01",
          "dark07",
          "dark06",
          "dark05",
          "dark04",
          "dark03",
          "dark02",
          "dark01"
        ]
      },
      "default": [
        "light07",
        "light06",
        "light05",
        "light04",
        "light03",
        "light02",
        "light01",
        "dark07",
        "dark06",
        "dark05",
        "dark04",
        "dark03",
        "dark02",
        "dark01"
      ]
    },
    "glassesColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "4b4b4b",
        "323232",
        "191919",
        "43677d",
        "5f705c",
        "a04b5d"
      ]
    },
    "glassesProbability": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "default": 20
    },
    "hair": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "short24",
          "short23",
          "short22",
          "short21",
          "short20",
          "short19",
          "short18",
          "short17",
          "short16",
          "short15",
          "short14",
          "short13",
          "short12",
          "short11",
          "short10",
          "short09",
          "short08",
          "short07",
          "short06",
          "short05",
          "short04",
          "short03",
          "short02",
          "short01",
          "long21",
          "long20",
          "long19",
          "long18",
          "long17",
          "long16",
          "long15",
          "long14",
          "long13",
          "long12",
          "long11",
          "long10",
          "long09",
          "long08",
          "long07",
          "long06",
          "long05",
          "long04",
          "long03",
          "long02",
          "long01"
        ]
      },
      "default": [
        "short24",
        "short23",
        "short22",
        "short21",
        "short20",
        "short19",
        "short18",
        "short17",
        "short16",
        "short15",
        "short14",
        "short13",
        "short12",
        "short11",
        "short10",
        "short09",
        "short08",
        "short07",
        "short06",
        "short05",
        "short04",
        "short03",
        "short02",
        "short01",
        "long21",
        "long20",
        "long19",
        "long18",
        "long17",
        "long16",
        "long15",
        "long14",
        "long13",
        "long12",
        "long11",
        "long10",
        "long09",
        "long08",
        "long07",
        "long06",
        "long05",
        "long04",
        "long03",
        "long02",
        "long01"
      ]
    },
    "hairColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "cab188",
        "603a14",
        "83623b",
        "a78961",
        "611c17",
        "603015",
        "612616",
        "28150a",
        "009bbd",
        "bd1700",
        "91cb15"
      ]
    },
    "hat": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant10",
          "variant09",
          "variant08",
          "variant07",
          "variant06",
          "variant05",
          "variant04",
          "variant03",
          "variant02",
          "variant01",
          "variant12",
          "variant11"
        ]
      },
      "default": [
        "variant10",
        "variant09",
        "variant08",
        "variant07",
        "variant06",
        "variant05",
        "variant04",
        "variant03",
        "variant02",
        "variant01",
        "variant12",
        "variant11"
      ]
    },
    "hatColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "2e1e05",
        "2663a3",
        "989789",
        "3d8a6b",
        "cc6192",
        "614f8a",
        "a62116"
      ]
    },
    "hatProbability": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "default": 5
    },
    "mouth": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "sad10",
          "sad09",
          "sad08",
          "sad07",
          "sad06",
          "sad05",
          "sad04",
          "sad03",
          "sad02",
          "sad01",
          "happy13",
          "happy12",
          "happy11",
          "happy10",
          "happy09",
          "happy08",
          "happy07",
          "happy06",
          "happy05",
          "happy04",
          "happy03",
          "happy02",
          "happy01"
        ]
      },
      "default": [
        "sad10",
        "sad09",
        "sad08",
        "sad07",
        "sad06",
        "sad05",
        "sad04",
        "sad03",
        "sad02",
        "sad01",
        "happy13",
        "happy12",
        "happy11",
        "happy10",
        "happy09",
        "happy08",
        "happy07",
        "happy06",
        "happy05",
        "happy04",
        "happy03",
        "happy02",
        "happy01"
      ]
    },
    "mouthColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "d29985",
        "c98276",
        "e35d6a",
        "de0f0d"
      ]
    },
    "skinColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "ffdbac",
        "f5cfa0",
        "eac393",
        "e0b687",
        "cb9e6e",
        "b68655",
        "a26d3d",
        "8d5524"
      ]
    }
  }
};
