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
    "url": "/v2/place/category",
    "title": "Get category list",
    "name": "GetCategoryList",
    "group": "User",
    "version": "0.4.0",
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "JSON\n{\n\t\"categories\": [\n\t\t{\n\t\t\"ID\": 1,\n\t\t\"NAME\": \"Centra handlowe\"\n\t\t},\n\t\t{\n\t\t\"ID\": 2,\n\t\t\"NAME\": \"Parki\"\n\t\t},\n\t\t{\n\t\t\"ID\": 3,\n\t\t\"NAME\": \"Urzędy\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.4.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place/category",
    "title": "Get category list",
    "name": "GetCategoryList",
    "group": "User",
    "version": "0.3.1",
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "JSON\n{\n\t\"categories\": [\n\t\t{\n\t\t\"ID\": 1,\n\t\t\"NAME\": \"Centra handlowe\"\n\t\t},\n\t\t{\n\t\t\"ID\": 2,\n\t\t\"NAME\": \"Parki\"\n\t\t},\n\t\t{\n\t\t\"ID\": 3,\n\t\t\"NAME\": \"Urzędy\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.3.1.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place/category",
    "title": "Get category list",
    "name": "GetCategoryList",
    "group": "User",
    "version": "0.3.0",
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "JSON\n{\n\t\"categories\": [\n\t\t{\n\t\t\"ID\": 1,\n\t\t\"NAME\": \"Centra handlowe\"\n\t\t},\n\t\t{\n\t\t\"ID\": 2,\n\t\t\"NAME\": \"Parki\"\n\t\t},\n\t\t{\n\t\t\"ID\": 3,\n\t\t\"NAME\": \"Urzędy\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.3.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place/category",
    "title": "Get category list",
    "name": "GetCategoryList",
    "group": "User",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Category id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "JSON\n{\n\t\"categories\": [\n\t\t{\n\t\t\"ID\": 1,\n\t\t\"NAME\": \"Centra handlowe\"\n\t\t},\n\t\t{\n\t\t\"ID\": 2,\n\t\t\"NAME\": \"Parki\"\n\t\t},\n\t\t{\n\t\t\"ID\": 3,\n\t\t\"NAME\": \"Urzędy\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.2.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place",
    "title": "Get namespace",
    "name": "GetNamespace",
    "group": "User",
    "version": "0.4.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
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
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\",\n\t\t\t\"LATITUDE\": 0,\n\t\t\t\"LONGITUDE\": 0,\n\t\t\t\"NAME\": \"12341234\",\n\t\t\t\"CATEGORY_ID\": 2,\n\t\t\t\"OWNER_ID\": 1,\n\t\t\t\"CATEGORY\": \n\t\t\t\t{\n\t\t\t\t\t\"ID\": 2,\n\t\t\t\t\t\"NAME\": \"Parki\"\n\t\t\t\t},\t\t\n\t\t\t\"NAMESPACES_PHOTOS\": [ \n\t\t\t\t{\n\t\t\t\t\t\"ID\": 1,\n\t\t\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\",\n\t\t\t\t\t\"NAMESPACE_ID\": 1\n\t\t\t\t},\n\t\t\t\t(…)\n\t\t\t]\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.4.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place",
    "title": "Get namespace",
    "name": "GetNamespace",
    "group": "User",
    "version": "0.3.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
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
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t\t\"LATITUDE \": 0,\n\t\t\t\"LONGITUDE\": 0\n\t\t\t\"NAME\": “asd”\n\t\t}\n\t,\n\t\"namespacePhotos\": [\n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\"\n\t\t}\n\t],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.3.1.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place",
    "title": "Get namespace",
    "name": "GetNamespace",
    "group": "User",
    "version": "0.3.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
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
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t\t\"LATITUDE \": 0,\n\t\t\t\"LONGITUDE\": 0\n\t\t}\n\t,\n\t\"namespacePhotos\": [\n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\"\n\t\t}\n\t],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.3.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place",
    "title": "Get namespace",
    "name": "GetNamespace",
    "group": "User",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
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
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t}\n\t,\n\t\"namespacePhotos\": [\n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\"\n\t\t}\n\t],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.2.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/place",
    "title": "Get namespace",
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
            "description": "<p>Type.</p>"
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
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t}\n\t,\n\t\"namespacePhotos\": [\n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\"\n\t\t}\n\t],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.1.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place",
    "title": "Get place",
    "name": "GetPlace",
    "group": "User",
    "version": "0.4.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
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
            "description": "<p>Place.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\",\n\t\t\t\"LATITUDE\": 0,\n\t\t\t\"LONGITUDE\": 0,\n\t\t\t\"NAME\": \"12341234\",\n\t\t\t\"CATEGORY_ID\": 2,\n\t\t\t\"OWNER_ID\": 1,\n\t\t\t\"CATEGORY\": \n\t\t\t\t{\n\t\t\t\t\t\"ID\": 2,\n\t\t\t\t\t\"NAME\": \"Parki\"\n\t\t\t\t},\n\t\t\t\"NAMESPACES_PHOTOS\": [\n\t\t\t\t{\n\t\t\t\t\t\"ID\": 1,\n\t\t\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\",\n\t\t\t\t\t\"NAMESPACE_ID\": 1\n\t\t\t\t},\t\n\t\t\t\t(…)\n\t\t\t],\n\t\t},\n\t\"place\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy opis\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"NAME\": \"ABCDEFG\",\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:24\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"asdfghjkl\",\n\t\t\t\"NAMESPACE_ID\": 1,\n\t\t\t\"OWNER_ID\": 1,\n\t\t\t\"PLACES_PHOTOS\": [ \n\t\t\t\t{\n\t\t\t\t\t\"ID\": 1,\n\t\t\t\t\t\"URL\": \"http://i.imgur.com/Qj3wuoj.jpg\",\n\t\t\t\t\t\"PLACE_ID\": 1\n\t\t\t\t},\n\t\t\t(…)\n\t\t\t]\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.4.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place",
    "title": "Get place",
    "name": "GetPlace",
    "group": "User",
    "version": "0.3.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
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
            "description": "<p>Place.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t\t\"LATITUDE \": 0,\n\t\t\t\"LONGITUDE\": 0\n\t\t\t\"NAME\": “asd”\n\t\t}\n\t,\n\t\"namespacePhotos\": [  \n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\"\n\t\t}\n\t],\n\t\"place\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy opis\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:24\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"asdfghjkl\"\n\t\t\t\"NAME\": “asd”\n\t\t}\n\t,\n\t“placePhotos\": [ \n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/Qj3wuoj.jpg\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.3.1.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place",
    "title": "Get place",
    "name": "GetPlace",
    "group": "User",
    "version": "0.3.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
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
            "description": "<p>Place.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t\t\"LATITUDE \": 0,\n\t\t\t\"LONGITUDE\": 0\n\t\t}\n\t,\n\t\"namespacePhotos\": [  \n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\"\n\t\t}\n\t],\n\t\"place\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy opis\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:24\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"asdfghjkl\"\n\t\t}\n\t,\n\t“placePhotos\": [ \n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/Qj3wuoj.jpg\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.3.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place",
    "title": "Get place",
    "name": "GetPlace",
    "group": "User",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
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
            "description": "<p>Place.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t}\n\t,\n\t\"namespacePhotos\": [  \n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\"\n\t\t}\n\t],\n\t\"place\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy opis\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:24\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"asdfghjkl\"\n\t\t}\n\t,\n\t“placePhotos\": [ \n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/Qj3wuoj.jpg\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.2.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/place",
    "title": "Get place",
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
            "description": "<p>Type.</p>"
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
            "description": "<p>Place.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t}\n\t,\n\t\"namespacePhotos\": [  \n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\"\n\t\t}\n\t],\n\t\"place\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy opis\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:24\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"asdfghjkl\"\n\t\t}\n\t,\n\t“placePhotos\": [ \n\t\t{\n\t\t\t\"URL\": \"http://i.imgur.com/Qj3wuoj.jpg\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.1.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place/category",
    "title": "Get place of given category",
    "name": "GetPlaceWithCategory",
    "group": "User",
    "version": "0.4.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Category id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset (optional).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespaces\": [  \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\",\n\t\t\t\"LATITUDE\": 0,\n\t\t\t\"LONGITUDE\": 0,\n\t\t\t\"NAME\": \"12341234\",\n\t\t\t\"CATEGORY_ID\": 2,\n\t\t\t\"OWNER_ID\": 1,\n\t\t\t\"CATEGORY\": \n\t\t\t\t{\n\t\t\t\t\t\"ID\": 2,\n\t\t\t\t\t\"NAME\": \"Parki\"\n\t\t\t\t},\n\t\t\t\"NAMESPACES_PHOTOS\": [\n\t\t\t\t{\n\t\t\t\t\t\"ID\": 1,\n\t\t\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\",\n\t\t\t\t\t\"NAMESPACE_ID\": 1\n\t\t\t\t},\n\t\t\t(…)\n\t\t\t]\n\t\t},\n\t\t(…)\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.4.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place/category",
    "title": "Get place of given category",
    "name": "GetPlaceWithCategory",
    "group": "User",
    "version": "0.3.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Category id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset (optional).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespaces\": [\n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t\t\"LATITUDE \": 0,\n\t\t\t\"LONGITUDE\": 0\n\t\t\t\"NAME\": “asd”\n\t\t},\n\t\t(…)\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.3.1.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place/category",
    "title": "Get place of given category",
    "name": "GetPlaceWithCategory",
    "group": "User",
    "version": "0.3.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Category id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset (optional).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespaces\": [\n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t\t\"LATITUDE \": 0,\n\t\t\t\"LONGITUDE\": 0\n\t\t},\n\t\t(…)\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.3.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place/category",
    "title": "Get place of given category",
    "name": "GetPlaceWithCategory",
    "group": "User",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
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
            "description": "<p>Place.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Category id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"namespaces\": [\n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\"\n\t\t},\n\t\t(…)\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.2.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place/namespace",
    "title": "Get place of given namespace",
    "name": "GetPlaceWithNamespace",
    "group": "User",
    "version": "0.4.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "namespaceid",
            "description": "<p>Namespace id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset (optional).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"places\": [\n\t\t{\n\t\t\"ID\": 1,\n\t\t\"DESCRIPTION\": \"Testowy opis\",\n\t\t\"ADVERT\": null,\n\t\t\"EVENT_CONTENT\": null,\n\t\t\"ADDED_ON\": \"2017-04-08 11:45:24\",\n\t\t\"SUM_SCORE\": 0,\n\t\t\"COMMENTS_COUNT\": 0,\n\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\"INSTANCE\": \"asdfghjkl\",\n\t\t\"NAME\": \"ABCDEFG\",\n\t\t\"NAMESPACE_ID\": 1,\n\t\t\"OWNER_ID\": 1,\n\t\t\"PLACES_PHOTOS\": [\n\t\t\t{\n\t\t\t\t\"ID\": 1,\n\t\t\t\t\"URL\": \"http://i.imgur.com/Qj3wuoj.jpg\",\n\t\t\t\t\"PLACE_ID\": 1\n\t\t\t},\n\t\t(…)\n\t\t]\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.4.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place/namespace",
    "title": "Get place of given namespace",
    "name": "GetPlaceWithNamespace",
    "group": "User",
    "version": "0.3.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "namespaceid",
            "description": "<p>Namespace id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset (optional).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"places\": [\n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy opis\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:24\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"asdfghjkl\"\n\t\t\t\"NAME\": “asd”\n\t\t},\n\t\t(…)\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.3.1.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/place/namespace",
    "title": "Get place of given namespace",
    "name": "GetPlaceWithNamespace",
    "group": "User",
    "version": "0.3.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "namespaceid",
            "description": "<p>Namespace id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset (optional).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example: Data in case of success:",
          "content": "{\n\t\"places\": [\n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy opis\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:24\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"asdfghjkl\"\n\t\t},\n\t\t(…)\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.3.0.js",
    "groupTitle": "User"
  }
] });
