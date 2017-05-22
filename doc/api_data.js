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
    "group": "Namespace",
    "version": "0.8.0",
    "success": {
      "examples": [
        {
          "title": "Response (success):",
          "content": "{\n\t\"categories\": [\n\t\t{\n\t\t\"ID\": 1,\n\t\t\"NAME\": \"Centra handlowe\"\n\t\t},\n\t\t{\n\t\t\"ID\": 2,\n\t\t\"NAME\": \"Parki\"\n\t\t},\n\t\t{\n\t\t\"ID\": 3,\n\t\t\"NAME\": \"Urzędy\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "Namespace"
  },
  {
    "type": "get",
    "url": "/v2/place/event",
    "title": "Get events from namespace and its places",
    "name": "GetEventsFromNamespace",
    "group": "Namespace",
    "version": "0.8.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type, place or namespace.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "namespace",
            "description": "<p>Namespace name.</p>"
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
            "field": "type",
            "description": "<p>namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace",
            "description": "<p>qwertyuiop</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"NAME\": \"12341234\",\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"EVENT_END\": null\n\t\t},\n\t\"places\": [ \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"NAME\": \"ABCDEFG\",\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"EVENT_END\": null\n\t\t},  \n\t\t{\n\t\t\t\"ID\": 3,\n\t\t\t\"NAME\": \"HIJKLMNOP\",\n\t\t\t\"EVENT_CONTENT\": \"RABAR NA NIC\",\n\t\t\t\"EVENT_END\": \"2017-05-20\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "Namespace"
  },
  {
    "type": "get",
    "url": "/v2/place",
    "title": "Get namespace",
    "name": "GetNamespace",
    "group": "Namespace",
    "version": "0.8.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type, place or namespace.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "namespace",
            "description": "<p>Name of the namespace.</p>"
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
            "field": "type",
            "description": "<p>place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace",
            "description": "<p>qwertyuiop</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\",\n\t\t\t\"LATITUDE\": 0,\n\t\t\t\"LONGITUDE\": 0,\n\t\t\t\"NAME\": \"12341234\",\n\t\t\t\"CATEGORY_ID\": 2,\n\t\t\t\"OWNER_ID\": 1,\n\t\t\t\"CATEGORY\": \n\t\t\t\t{\n\t\t\t\t\t\"ID\": 2,\n\t\t\t\t\t\"NAME\": \"Parki\"\n\t\t\t\t},\t\t\n\t\t\t\"NAMESPACES_PHOTOS\": [ \n\t\t\t\t{\n\t\t\t\t\t\"ID\": 1,\n\t\t\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\",\n\t\t\t\t\t\"NAMESPACE_ID\": 1\n\t\t\t\t},\n\t\t\t\t(…)\n\t\t\t]\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "Namespace"
  },
  {
    "type": "get",
    "url": "/v2/place/category",
    "title": "Get namespace with given category",
    "name": "GetNamespaceWithCategory",
    "group": "Namespace",
    "version": "0.8.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type, place or namespace.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Id of the category.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>Offset.</p>"
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
            "field": "type",
            "description": "<p>namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>111</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>11</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "{\n\t\"namespaces\": [  \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\",\n\t\t\t\"LATITUDE\": 0,\n\t\t\t\"LONGITUDE\": 0,\n\t\t\t\"NAME\": \"12341234\",\n\t\t\t\"CATEGORY_ID\": 2,\n\t\t\t\"OWNER_ID\": 1,\n\t\t\t\"CATEGORY\": \n\t\t\t\t{\n\t\t\t\t\t\"ID\": 2,\n\t\t\t\t\t\"NAME\": \"Parki\"\n\t\t\t\t},\n\t\t\t\"NAMESPACES_PHOTOS\": [\n\t\t\t\t{\n\t\t\t\t\t\"ID\": 1,\n\t\t\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\",\n\t\t\t\t\t\"NAMESPACE_ID\": 1\n\t\t\t\t},\n\t\t\t(…)\n\t\t\t]\n\t\t},\n\t\t(…)\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "Namespace"
  },
  {
    "type": "get",
    "url": "/v2/place",
    "title": "Get place",
    "name": "GetPlace",
    "group": "Place",
    "version": "0.8.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type, place or namespace.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "namespace",
            "description": "<p>Name of the namespace.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": "<p>Name of the place.</p>"
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
            "field": "type",
            "description": "<p>place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace",
            "description": "<p>qwertyuiop</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": "<p>asdfghjkl</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy namespace\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:49\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"qwertyuiop\",\n\t\t\t\"LATITUDE\": 0,\n\t\t\t\"LONGITUDE\": 0,\n\t\t\t\"NAME\": \"12341234\",\n\t\t\t\"CATEGORY_ID\": 2,\n\t\t\t\"OWNER_ID\": 1,\n\t\t\t\"CATEGORY\": \n\t\t\t\t{\n\t\t\t\t\t\"ID\": 2,\n\t\t\t\t\t\"NAME\": \"Parki\"\n\t\t\t\t},\n\t\t\t\"NAMESPACES_PHOTOS\": [\n\t\t\t\t{\n\t\t\t\t\t\"ID\": 1,\n\t\t\t\t\t\"URL\": \"http://i.imgur.com/bgRtGjJ.jpg\",\n\t\t\t\t\t\"NAMESPACE_ID\": 1\n\t\t\t\t},\n\t\t\t(…)\n\t\t\t],\n\t\t},\n\t\"place\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"DESCRIPTION\": \"Testowy opis\",\n\t\t\t\"ADVERT\": null,\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"NAME\": \"ABCDEFG\",\n\t\t\t\"ADDED_ON\": \"2017-04-08 11:45:24\",\n\t\t\t\"SUM_SCORE\": 0,\n\t\t\t\"COMMENTS_COUNT\": 0,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"asdfghjkl\",\n\t\t\t\"NAMESPACE_ID\": 1,\n\t\t\t\"OWNER_ID\": 1,\n\t\t\t\"PLACES_PHOTOS\": [ \n\t\t\t\t{\n\t\t\t\t\t\"ID\": 1,\n\t\t\t\t\t\"URL\": \"http://i.imgur.com/Qj3wuoj.jpg\",\n\t\t\t\t\t\"PLACE_ID\": 1\n\t\t\t\t},\n\t\t\t(…)\n\t\t\t]\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "Place"
  },
  {
    "type": "get",
    "url": "/v2/place/namespace",
    "title": "Get places with given namespace",
    "name": "GetPlacesWithNamespace",
    "group": "Place",
    "version": "0.8.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type, place or namespace.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "namespaceid",
            "description": "<p>Id of the namespace.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>Offset.</p>"
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
            "field": "type",
            "description": "<p>place</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespaceid",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>111</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>11</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "{\n\t\"places\": [\n\t\t{\n\t\t\"ID\": 1,\n\t\t\"DESCRIPTION\": \"Testowy opis\",\n\t\t\"ADVERT\": null,\n\t\t\"EVENT_CONTENT\": null,\n\t\t\"ADDED_ON\": \"2017-04-08 11:45:24\",\n\t\t\"SUM_SCORE\": 0,\n\t\t\"COMMENTS_COUNT\": 0,\n\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\"INSTANCE\": \"asdfghjkl\",\n\t\t\"NAME\": \"ABCDEFG\",\n\t\t\"NAMESPACE_ID\": 1,\n\t\t\"OWNER_ID\": 1,\n\t\t\"PLACES_PHOTOS\": [\n\t\t\t{\n\t\t\t\t\"ID\": 1,\n\t\t\t\t\"URL\": \"http://i.imgur.com/Qj3wuoj.jpg\",\n\t\t\t\t\"PLACE_ID\": 1\n\t\t\t},\n\t\t(…)\n\t\t]\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "Place"
  },
  {
    "type": "post",
    "url": "/v2/sidm/_table/USER_PATHS",
    "title": "Add route",
    "name": "AddRoute",
    "group": "User",
    "version": "0.8.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "FB_USERS_ID",
            "description": "<p>User Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PATH",
            "description": "<p>Path.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request body example:",
          "content": "{\n     \"resource\":[\n     {\n       \"FB_USER_ID\": 1,\n       \"PATH\": \"asdasd\"\n     }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/v2/sidmapp/user/modify",
    "title": "Change newsletter in database",
    "name": "ChangeNewsletterInDatabase",
    "group": "User",
    "version": "0.8.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>User Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "NEWSLETTER",
            "description": "<p>Newsletter status (true = newsletter is on).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body example:",
          "content": "{\n\t\"resource\":[\n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"NEWSLETTER\": true\n\t\t}\n]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response (success):",
          "content": "{\n\t\"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/comments",
    "title": "Get comments",
    "name": "GetComments",
    "group": "User",
    "version": "0.8.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type, place or namespace.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of name or namespace.</p>"
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
            "field": "type",
            "description": "<p>place/namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>4</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success) for type = place:",
          "content": "{\n\t\"comments\": [\n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"CONTENT\": \"Bardzo fajnie miejsce\",\n\t\t\t\"SCORE\": 5,\n\t\t\t\"TYPE\": \"PLACE\",\n\t\t\t\"NAMESPACES_ID\": null,\n\t\t\t\"PLACES_ID\": 4,\n\t\t\t\"FB_USERS_ID\": 1\n\t\t},\n\t(…)\n\t]\n}",
          "type": "json"
        },
        {
          "title": "Response (success) for type = namespace:",
          "content": "{\n\t\"comments\": [\n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"CONTENT\": \"Bardzo fajnie miejsce\",\n\t\t\t\"SCORE\": 5,\n\t\t\t\"TYPE\": \"NAMESPACE\",\n\t\t\t\"NAMESPACES_ID\": 4,\n\t\t\t\"PLACES_ID\": null,\n\t\t\t\"FB_USERS_ID\": 1\n\t\t},\n\t(…)\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/v2/sidmapp",
    "title": "Get/post app user id from/to database",
    "name": "GetPostIdFromToDatabase",
    "group": "User",
    "version": "0.8.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "EMAIL",
            "description": "<p>E-mail adress.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FB_ID",
            "description": "<p>Facebook Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NAME",
            "description": "<p>Name and surname.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body example:",
          "content": "{\n\t\"resource\":[\n\t\t{\n\t\t\t\"EMAIL\": \"aaaaaa@asas.com\",\n\t\t\t\"FB_ID\": \"qwertyuioplkjhgfdsazxcvbnm\",\n\t\t\t\"NAME\": \"AAAAA BBBBBB\"\n\t\t}\n]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response (success):",
          "content": "{\n\t\"user\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"NEWSLETTER\": true\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/sidm/_table/USER_PATHS",
    "title": "Get route",
    "name": "GetRoute",
    "group": "User",
    "version": "0.8.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": "<p>Fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>Facebook user Id in format of FB_USER_ID%3DX, where Id comes in place of X.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>Offset.</p>"
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
            "field": "fields",
            "description": "<p>ID%20%2CCREATED_ON</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>FB_USER_ID%3D1</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>111</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>11</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body example:",
          "content": "{\n    \"resource\":[\n      {\n        \"ID\": 1,\n        \"CREATED_ON\": \"data\"\n      },\n\t\t\t(…)\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/sidm/_table/USER_PATHS",
    "title": "Get route data",
    "name": "GetRouteData",
    "group": "User",
    "version": "0.8.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>Facebook user Id in format of FB_USER_ID%3DX, where Id comes in place of X.</p>"
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
            "field": "filter",
            "description": "<p>FB_USER_ID%3D1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body example:",
          "content": "{\n    \"resource\":[\n      {\n        \"ID\": 1,\n       “FB_USER_ID”: 1,\n       “PATH”: <wg tego co dodajesz>,\n        \"CREATED_ON\": \"data\"\n      }\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/v2/comments",
    "title": "Post comments",
    "name": "PostComments",
    "group": "User",
    "version": "0.8.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content",
            "description": "<p>Content of a comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "SCORE",
            "description": "<p>Score.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PLACES_ID",
            "description": "<p>Id of the place.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TYPE",
            "description": "<p>Place or namespace.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FB_USERS_ID",
            "description": "<p>Id of facebook account.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request body example for type = place:",
          "content": "{\n\t\"comments\": [\n\t\t{\n\t\t\t\"CONTENT\": \"Bardzo fajnie miejsce\",\n\t\t\t\"SCORE\": 5,\n\t\t\t\"PLACES_ID\": 4,\n\t\t\t\"TYPE\": \"PLACE\",\n\t\t\t\"FB_USERS_ID\": 1\n\t\t},\n\t(…)\n\t]\n}",
          "type": "json"
        },
        {
          "title": "Request body example for type = namespace:",
          "content": "{\n\t\"comments\": [\n\t\t{\n\t\t\t\"CONTENT\": \"Bardzo fajnie miejsce\",\n\t\t\t\"SCORE\": 5,\n\t\t\t\"NAMESPACES_ID\": 4,\n\t\t\t\"TYPE\": \"NAMESPACE\",\n\t\t\t\"FB_USERS_ID\": 1\n\t\t},\n\t(…)\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.8.0.js",
    "groupTitle": "User"
  }
] });
