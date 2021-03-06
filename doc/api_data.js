define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "D__Workspace_ApiDoc_doc_main_js",
    "groupTitle": "D__Workspace_ApiDoc_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/place",
    "title": "Pobieranie namespace",
    "name": "GetNamespace",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Typ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "namespace",
            "description": "<p>Namespace.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "placeInfo",
            "description": "<p>Informacja o namespace.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Przykład: Dane w przypadku powodzenia:",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t}\n\t,\n\t\"namespacePhotos\": [\n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\"\n\t\t}\n\t],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/place",
    "title": "Pobieranie miejsca",
    "name": "GetPlace",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Typ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "namespace",
            "description": "<p>Namespace.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": "<p>Miejsce.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "placeInfo",
            "description": "<p>Informacja o miejscu.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Przykład: Dane w przypadku powodzenia:",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t}\n\t,\n\t\"namespacePhotos\": [  \n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\"\n\t\t}\n\t],\n\t\"place\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy opis\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:24\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"asdfghjkl\"\n\t\t}\n\t,\n\t“placePhotos\": [ \n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/Qj3wuoj.jpg\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "User"
  }
] });
