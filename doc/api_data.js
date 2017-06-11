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
    "version": "0.11.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "categories",
            "description": "<p>Categories</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "categories.ID",
            "description": "<p>Id of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.NAME",
            "description": "<p>Name of the category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "{\n\t\"categories\": [\n\t\t{\n\t\t\"ID\": 1,\n\t\t\"NAME\": \"Centra handlowe\"\n\t\t},\n\t\t{\n\t\t\"ID\": 2,\n\t\t\"NAME\": \"Parki\"\n\t\t},\n\t\t{\n\t\t\"ID\": 3,\n\t\t\"NAME\": \"Urzędy\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "Namespace"
  },
  {
    "type": "get",
    "url": "/v2/place/event",
    "title": "Get events from namespace and its places",
    "name": "GetEventsFromNamespace",
    "group": "Namespace",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type, &quot;place&quot; or &quot;namespace&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "namespace",
            "description": "<p>Namespace name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "namespace",
            "description": "<p>Information about namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.ID",
            "description": "<p>Id of the place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.NAME",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.EVENT_CONTENT",
            "description": "<p>Informations about events</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.EVENT_END",
            "description": "<p>Information about event ending</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.EVENT_NAME",
            "description": "<p>Name of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "places",
            "description": "<p>Information about places in the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "places.ID",
            "description": "<p>Id of the place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "places.NAME",
            "description": "<p>Name of the place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "places.EVENT_CONTENT",
            "description": "<p>Informations about events</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "places.EVENT_END",
            "description": "<p>Information about event ending</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "{\n\t\"namespace\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"NAME\": \"12341234\",\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"EVENT_END\": null,\n         \"EVENT_NAME\": \"12341234\"\n\t\t},\n\t\"places\": [ \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"NAME\": \"ABCDEFG\",\n\t\t\t\"EVENT_CONTENT\": null,\n\t\t\t\"EVENT_END\": null,\n\t\t\t\"EVENT_NAME\": \"12341234\"\n\t\t},  \n\t\t{\n\t\t\t\"ID\": 3,\n\t\t\t\"NAME\": \"HIJKLMNOP\",\n\t\t\t\"EVENT_CONTENT\": \"RABAR NA NIC\",\n\t\t\t\"EVENT_END\": \"2017-05-20\",\n\t\t\t\"EVENT_NAME\": \"12341234\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "Namespace"
  },
  {
    "type": "get",
    "url": "/v2/place",
    "title": "Get namespace",
    "name": "GetNamespace",
    "group": "Namespace",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type, &quot;place&quot; or &quot;namespace&quot;.</p>"
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
            "type": "Object",
            "optional": false,
            "field": "namespace",
            "description": "<p>Information about namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.ID",
            "description": "<p>Id of the namespace/place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.DESCRIPTION",
            "description": "<p>Description of the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.ADVERT",
            "description": "<p>Advert information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.EVENT_CONTENT",
            "description": "<p>Informations about events</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.ADDED_ON",
            "description": "<p>Date added in form &quot;yyyy-mm-dd hh-mm-ss&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.SUM_SCORE",
            "description": "<p>Sum score</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.COMMENTS_COUNT",
            "description": "<p>Total count of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.GOOGLE_PLACE_ID",
            "description": "<p>Id on Google Places</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.INSTANCE",
            "description": "<p>Instance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.LATITUDE",
            "description": "<p>Lattitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.LONGITUDE",
            "description": "<p>Longitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.NAME",
            "description": "<p>Name of the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.CATEGORY_ID",
            "description": "<p>Id of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.OWNER_ID",
            "description": "<p>Owner Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "namespace.CATEGORY",
            "description": "<p>Category information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.CATEGORY.ID",
            "description": "<p>Id of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.CATEGORY.NAME",
            "description": "<p>Name of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "namespace.NAMESPACES_PHOTOS",
            "description": "<p>Informations about photos related to the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.NAMESPACES_PHOTOS.ID",
            "description": "<p>Id of the namespace photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.NAMESPACES_PHOTOS.URL",
            "description": "<p>URL of the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.NAMESPACES_PHOTOS.NAMESPACES_ID",
            "description": "<p>Id of the namespace</p>"
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
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "Namespace"
  },
  {
    "type": "get",
    "url": "/v2/place/category",
    "title": "Get namespace with given category",
    "name": "GetNamespaceWithCategory",
    "group": "Namespace",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type, namespace.</p>"
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
            "type": "Array",
            "optional": false,
            "field": "namespaces",
            "description": "<p>Array of namespaces matching category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespaces.ID",
            "description": "<p>Id of the namespac</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespaces.DESCRIPTION",
            "description": "<p>Description of the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespaces.ADVERT",
            "description": "<p>Advert information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespaces.EVENT_CONTENT",
            "description": "<p>Informations about events</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespaces.ADDED_ON",
            "description": "<p>Date added in form &quot;yyyy-mm-dd hh-mm-ss&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespaces.SUM_SCORE",
            "description": "<p>Sum score</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespaces.COMMENTS_COUNT",
            "description": "<p>Total count of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespaces.GOOGLE_PLACE_ID",
            "description": "<p>Id on Google Places</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespaces.INSTANCE",
            "description": "<p>Instance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespaces.LATITUDE",
            "description": "<p>Lattitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespaces.LONGITUDE",
            "description": "<p>Longitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespaces.NAME",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespaces.CATEGORY_ID",
            "description": "<p>Id of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespaces.OWNER_ID",
            "description": "<p>Owner Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "namespaces.CATEGORY",
            "description": "<p>Category information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespaces.CATEGORY.ID",
            "description": "<p>Id of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespaces.CATEGORY.NAME",
            "description": "<p>Name of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "namespaces.NAMESPACES_PHOTOS",
            "description": "<p>Informations about photos related to the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespaces.NAMESPACES_PHOTOS.ID",
            "description": "<p>Id of the namespace photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespaces.NAMESPACES_PHOTOS.URL",
            "description": "<p>URL of the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespaces.NAMESPACES_PHOTOS.NAMESPACES_ID",
            "description": "<p>Id of the namespace</p>"
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
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "Namespace"
  },
  {
    "type": "post",
    "url": "/v2/sidm/_table/PLACES_EVENTS",
    "title": "Add enter event to place (big place)",
    "name": "AddEnterEventBig",
    "group": "Place",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "resource",
            "description": "<p>Information about event</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "resource.FB_USERS_ID",
            "description": "<p>Facebook user id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource.NAMESPACE_INSTANCE",
            "description": "<p>Instance of namespace</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "\t{\n\t\t\"resource\":[\n\t\t\t{\n  \t\t\t\"FB_USERS_ID\": 1,\n  \t\t\t\"NAMESPACE_INSTANCE\": \"ASdasd\"\n\t\t\t}\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "resource",
            "description": "<p>Information about adding the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.ID",
            "description": "<p>Id of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body example for namespaces:",
          "content": "\t{\n\t\t\"resource\":[\n\t\t\t{\n  \t\t\t\"ID\": 4\n\t\t\t}\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "Place"
  },
  {
    "type": "post",
    "url": "/v2/sidm/_table/PLACES_EVENTS",
    "title": "Add enter event to place (small place)",
    "name": "AddEnterEventSmall",
    "group": "Place",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "resource",
            "description": "<p>Information about event</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "resource.FB_USERS_ID",
            "description": "<p>Facebook user id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource.NAMESPACE_INSTANCE",
            "description": "<p>Instance of namespace</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource.PLACE_INSTANCE",
            "description": "<p>Instance of place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "\t{\n\t\t\"resource\":[\n\t\t\t{\n  \t\t\t\"FB_USERS_ID\": 1,\n  \t\t\t\"NAMESPACE_INSTANCE\": \"ASdasd\",\n     \t\t\"PLACE_INSTANCE\": \"asdasd\"\n\t\t\t}\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "resource",
            "description": "<p>Information about adding the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.ID",
            "description": "<p>Id of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body example for namespaces:",
          "content": "\t{\n\t\t\"resource\":[\n\t\t\t{\n  \t\t\t\"ID\": 4\n\t\t\t}\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "Place"
  },
  {
    "type": "patch",
    "url": "/v2/sidm/_table/PLACES_EVENTS",
    "title": "Add exit event to place (big place)",
    "name": "AddExitEventBig",
    "group": "Place",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "resource",
            "description": "<p>Information about event</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "resource.ID",
            "description": "<p>Id of the event (given when creating an event)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource.LEAVE_DATE",
            "description": "<p>Date of leaving</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "\t{\n\t\t\"resource\":[\n\t\t\t{\n  \t\t\t\"ID\": 1,\n\t\t\t\t\"LEAVE_DATE\": \"YYYY-MM-DD HH:MM:SS\"\n\t\t\t}\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "Place"
  },
  {
    "type": "patch",
    "url": "/v2/sidm/_table/PLACES_EVENTS",
    "title": "Add exit event to place (small place)",
    "name": "AddExitEventSmall",
    "group": "Place",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "resource",
            "description": "<p>Information about event</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "resource.ID",
            "description": "<p>Id of the event (given when creating an event)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource.LEAVE_DATE",
            "description": "<p>Date of leaving</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "\t{\n\t\t\"resource\":[\n\t\t\t{\n  \t\t\t\"ID\": 1,\n\t\t\t\t\"LEAVE_DATE\": \"YYYY-MM-DD HH:MM:SS\"\n\t\t\t}\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "Place"
  },
  {
    "type": "get",
    "url": "/v2/place",
    "title": "Get place",
    "name": "GetPlace",
    "group": "Place",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type, &quot;place&quot; or &quot;namespace&quot;.</p>"
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
            "type": "Object",
            "optional": false,
            "field": "namespace",
            "description": "<p>Information about namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.ID",
            "description": "<p>Id of the namespac</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.DESCRIPTION",
            "description": "<p>Description of the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.ADVERT",
            "description": "<p>Advert information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.EVENT_CONTENT",
            "description": "<p>Informations about events</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.ADDED_ON",
            "description": "<p>Date added in form &quot;yyyy-mm-dd hh-mm-ss&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.SUM_SCORE",
            "description": "<p>Sum score</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.COMMENTS_COUNT",
            "description": "<p>Total count of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.GOOGLE_PLACE_ID",
            "description": "<p>Id on Google Places</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.INSTANCE",
            "description": "<p>Instance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.LATTITUDE",
            "description": "<p>Lattitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.LONGITUDE",
            "description": "<p>Longitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.NAME",
            "description": "<p>Name of the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.CATEGORY_ID",
            "description": "<p>Id of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.OWNER_ID",
            "description": "<p>Owner Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "namespace.CATEGORY",
            "description": "<p>Category information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.CATEGORY.ID",
            "description": "<p>Id of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.CATEGORY.NAME",
            "description": "<p>Name of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "namespace.NAMESPACES_PHOTOS",
            "description": "<p>Informations about photos related to the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.NAMESPACES_PHOTOS.ID",
            "description": "<p>Id of the namespace photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.NAMESPACES_PHOTOS.URL",
            "description": "<p>URL of the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.NAMESPACES_PHOTOS.NAMESPACES_ID",
            "description": "<p>Id of the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "place",
            "description": "<p>Information about place</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "place.ID",
            "description": "<p>Id of the namespace/place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place.DESCRIPTION",
            "description": "<p>Description of the place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place.ADVERT",
            "description": "<p>Advert information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place.EVENT_CONTENT",
            "description": "<p>Informations about events</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place.ADDED_ON",
            "description": "<p>Date added in form &quot;yyyy-mm-dd hh-mm-ss&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "place.SUM_SCORE",
            "description": "<p>Sum score</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "place.COMMENTS_COUNT",
            "description": "<p>Total count of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place.GOOGLE_PLACE_ID",
            "description": "<p>Id on Google Places</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place.INSTANCE",
            "description": "<p>Instance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "place.NAMESPACES_ID",
            "description": "<p>Id of the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "namespace.PLACES_PHOTOS",
            "description": "<p>Informations about photos related to the place</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.PLACES_PHOTOS.ID",
            "description": "<p>Id of the place photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "namespace.PLACES_PHOTOS.URL",
            "description": "<p>URL of the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "namespace.PLACES_PHOTOS.NAMESPACES_ID",
            "description": "<p>Id of the place</p>"
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
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "Place"
  },
  {
    "type": "get",
    "url": "/v2/place/namespace",
    "title": "Get places with given namespace",
    "name": "GetPlacesWithNamespace",
    "group": "Place",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type, &quot;place&quot; or &quot;namespace&quot;.</p>"
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
            "type": "Array",
            "optional": false,
            "field": "places",
            "description": "<p>Array of places</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "places.ID",
            "description": "<p>Id of the place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "places.DESCRIPTION",
            "description": "<p>Description of the place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "places.ADVERT",
            "description": "<p>Advert information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "places.EVENT_CONTENT",
            "description": "<p>Informations about events</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "places.ADDED_ON",
            "description": "<p>Date added in form &quot;yyyy-mm-dd hh-mm-ss&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "places.SUM_SCORE",
            "description": "<p>Sum score</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "places.COMMENTS_COUNT",
            "description": "<p>Total count of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "places.GOOGLE_PLACE_ID",
            "description": "<p>Id on Google Places</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "places.INSTANCE",
            "description": "<p>Instance</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "places.NAME",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "places.NAMESPACES_ID",
            "description": "<p>Id of the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "places.OWNER_ID",
            "description": "<p>Owner Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "places.PLACES_PHOTOS",
            "description": "<p>Informations about photos related to the place</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "places.PLACES_PHOTOS.ID",
            "description": "<p>Id of the place photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "places.PLACES_PHOTOS.URL",
            "description": "<p>URL of the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "places.PLACES_PHOTOS.PLACE_ID",
            "description": "<p>Id of the place</p>"
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
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "Place"
  },
  {
    "type": "post",
    "url": "/v2/sidm/_table/USER_PATHS",
    "title": "Add routes",
    "name": "AddRoutes",
    "group": "User",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "FB_USERS_ID",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PATH",
            "description": "<p>Path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body example:",
          "content": "{\n     \"resource\":[\n     {\n       \t\"FB_USER_ID\": 1,\n     \t\"NAME\": \"ASdasd\",\n\t        \"PATH\": \"asdasd\"\n     }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "resource",
            "description": "<p>Route information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.FB_USER_ID",
            "description": "<p>Id of facebook user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.NAME",
            "description": "<p>Name of the route</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.PATH",
            "description": "<p>Path of the route in form of array with objects with id (as Number) and name (as String)</p>"
          }
        ]
      }
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/v2/sidmapp/user/modify",
    "title": "Change newsletter subscription in database",
    "name": "ChangeNewsletterInDatabase",
    "group": "User",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "recource",
            "description": "<p>User data</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recource.ID",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "recource.NEWSLETTER",
            "description": "<p>Newsletter status (true = newsletter is on)</p>"
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>Information if update went successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "{\n\t\t\"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/comments",
    "title": "Get comments",
    "name": "GetComments",
    "group": "User",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type, &quot;place&quot; or &quot;namespace&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of name or namespace</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "comments",
            "description": "<p>Array of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.ID",
            "description": "<p>Id of the comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.CONTENT",
            "description": "<p>Comment content</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.SCORE",
            "description": "<p>Score</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.TYPE",
            "description": "<p>Type , &quot;place&quot; or &quot;namespace&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.NAMESPACES_ID",
            "description": "<p>Id of the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "comments.FB_USERS_ID",
            "description": "<p>Id of facebook user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comments.USER",
            "description": "<p>Information about comment author</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.USER.ID",
            "description": "<p>Id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.USER.EMAIL",
            "description": "<p>Users e-mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.USER.NAME",
            "description": "<p>Name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.USER.FB_ID",
            "description": "<p>Id of facebook user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "comments.USER.NEWSLETTER",
            "description": "<p>Information about newsletter</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success) for type = place:",
          "content": "{\n\t\"comments\": [\n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"CONTENT\": \"Bardzo fajnie miejsce\",\n\t\t\t\"SCORE\": 5,\n\t\t\t\"TYPE\": \"PLACE\",\n\t\t\t\"NAMESPACES_ID\": null,\n\t\t\t\"PLACES_ID\": 4,\n\t\t\t\"FB_USERS_ID\": 1,\n\t\t\t\"USER\": \n\t\t\t\t{\n\t\t\t\t\t\"ID\": 1,\n\t\t\t\t\t\"EMAIL\": \"aaaaaa@asas.com\",\n\t\t\t\t\t\"NAME\": \"AAAAA BBBBBB\",\n\t\t\t\t\t\"FB_ID\": \"qwertyuioplkjhgfdsazxcvbnm\",\n\t\t\t\t\t\"NEWSLETTER\": true\n\t\t\t\t}\n\t\t},\n\t(…)\n\t]\n}",
          "type": "json"
        },
        {
          "title": "Response (success) for type = namespace:",
          "content": "{\n\t\"comments\": [\n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"CONTENT\": \"Bardzo fajnie miejsce\",\n\t\t\t\"SCORE\": 5,\n\t\t\t\"TYPE\": \"NAMESPACE\",\n\t\t\t\"NAMESPACES_ID\": 4,\n\t\t\t\"PLACES_ID\": null,\n\t\t\t\"FB_USERS_ID\": 1,\n\t\t\t\"USER\": \n\t\t\t\t{\n\t\t\t\t\t\"ID\": 1,\n\t\t\t\t\t\"EMAIL\": \"aaaaaa@asas.com\",\n\t\t\t\t\t\"NAME\": \"AAAAA BBBBBB\",\n\t\t\t\t\t\"FB_ID\": \"qwertyuioplkjhgfdsazxcvbnm\",\n\t\t\t\t\t\"NEWSLETTER\": true\n\t\t\t\t}\n\t\t},\n\t(…)\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/v2/sidmapp",
    "title": "Get/post app user id from/to database",
    "name": "GetPostIdFromToDatabase",
    "group": "User",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "resource",
            "description": "<p>User data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource.EMAIL",
            "description": "<p>E-mail adress</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource.FB_ID",
            "description": "<p>Facebook Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource.NAME",
            "description": "<p>Name and surname</p>"
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Information about user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.ID",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "user.NEWSLETTER",
            "description": "<p>Information about newsletter subscription</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (success):",
          "content": "{\n\t\"user\": \n\t\t{\n\t\t\t\"ID\": 1,\n\t\t\t\"NEWSLETTER\": true\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/sidm/_table/USER_PATHS",
    "title": "Get route data",
    "name": "GetRouteData",
    "group": "User",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>Facebook user Id in format of FB_USER_ID%3DX, where Id comes in place of X</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "resource",
            "description": "<p>Route information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.ID",
            "description": "<p>Id of route</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.FB_USER_ID",
            "description": "<p>Id of facebook user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.NAME",
            "description": "<p>Name of route</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.PATH",
            "description": "<p>Path of the route in form of array with objects with id (as Number) and name (as String)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body example:",
          "content": "{\n    \"resource\":[\n      {\n        \t\"ID\": 1,\n       \t\"FB_USER_ID\": 1,\n\t\t\t\"NAME\": \"Asdasdsa\",\n     \t\"PATH\": \"asdasd\",\n         \"CREATED_ON\": \"data\"\n     }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/sidm/_table/USER_PATHS",
    "title": "Get routes",
    "name": "GetRoutes",
    "group": "User",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": "<p>Fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>Facebook user Id in format of FB_USER_ID%3DX, where Id comes in place of X</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>Offset</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "resource",
            "description": "<p>Route information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.ID",
            "description": "<p>Route Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.NAME",
            "description": "<p>Route name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.CREATED_ON",
            "description": "<p>Route creation date in form &quot;yyyy-mm-dd hh-mm-ss&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body example:",
          "content": "{\n    \"resource\":[\n      {\n        \"ID\": 1,\n\t\t   \"NAME\": \"Asdasd\",\n        \"CREATED_ON\": \"data\"\n      },\n\t\t\t(…)\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v2/sidm/_table/USER_PATHS",
    "title": "Get visited places",
    "name": "GetVisitedPlaces",
    "group": "User",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>Facebook user Id in format of FB_USER_ID%3DX, where Id comes in place of X</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "resource",
            "description": "<p>Visited places information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.ID",
            "description": "<p>Id of place</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.DESCRIPTION",
            "description": "<p>Id of facebook user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.EVENT_CONTENT",
            "description": "<p>Content of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.ADDED_ON",
            "description": "<p>Date added in form &quot;yyyy-mm-dd hh-mm-ss&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.SUM_SCORE",
            "description": "<p>Score</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.COMMENTS_COUNT",
            "description": "<p>Number of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.GOOGLE_PLACE_ID",
            "description": "<p>Id of the place in Google database</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.INSTANCE",
            "description": "<p>Instance of the place</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.LATITUDE",
            "description": "<p>Lattitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.LONGITUDE",
            "description": "<p>Longitude coordinate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.NAME",
            "description": "<p>Name of the place</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.CATEGORY_ID",
            "description": "<p>Id of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.OWNER_ID",
            "description": "<p>Id of the owner of the place in database</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.CATEGORY_NAME",
            "description": "<p>Name of the category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resource.PHOTO",
            "description": "<p>URL of the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resource.FB_USERS_ID",
            "description": "<p>Id of facebook user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body example:",
          "content": "{\n    \"resource\":[\n      {\n        \t\"ID\": 1,\n       \t\"DESCRIPTION\": \"Galeria Dominika\\u0144ska …\",\n\t\t\t\"ADVERT\": \"\",\n\t\t\t\"EVENT_CONTENT\": \"Ju\\u017c teraz zr\\u00f3b zakupy za 100 z\\u0142 i odbierz kupon na rabaty we wszystkich sklepach w Galerii Dominika\\u0144skiej.\",\n\t\t\t\"ADDED_ON\": \"2017-04-23 21:09:48\",\n\t\t\t\"SUM_SCORE\": 10.8,\n\t\t\t\"COMMENTS_COUNT\": 7,\n\t\t\t\"GOOGLE_PLACE_ID\": null,\n\t\t\t\"INSTANCE\": \"Gale\",\n\t\t\t\"LATITUDE\": 51.108351975238,\n\t\t\t\"LONGITUDE\": 17.040427923203,\n\t\t\t\"NAME\": \"Galeria Domi\\u0144ika\\u0144ska\",\n\t\t\t\"CATEGORY_ID\": 1,\n\t\t\t\"OWNER_ID\": 1,\n\t\t\t\"CATEGORY_NAME\": \"Galerie\",\n\t\t\t\"PHOTO\": \"http://galeria-dominikanska.pl/files/gallery/fotob-2196.jpg\",\n\t\t\t\"FB_USER_ID\": 1\n\t\t},\n\t\t(…)\n\t\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/v2/comments",
    "title": "Post comments",
    "name": "PostComments",
    "group": "User",
    "version": "0.11.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content",
            "description": "<p>Content of a comment</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "SCORE",
            "description": "<p>Score</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PLACES_ID",
            "description": "<p>Id of the place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TYPE",
            "description": "<p>Place or namespace</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FB_USERS_ID",
            "description": "<p>Id of facebook account</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body example for type = place:",
          "content": "{\n\t\"comments\": [\n\t\t{\n\t\t\t\"CONTENT\": \"Bardzo fajnie miejsce\",\n\t\t\t\"SCORE\": 5,\n\t\t\t\"PLACES_ID\": 4,\n\t\t\t\"TYPE\": \"PLACE\",\n\t\t\t\"FB_USERS_ID\": 1\n\t\t},\n\t(…)\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "comments",
            "description": "<p>Array of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.CONTENT",
            "description": "<p>Content of comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.SCORE",
            "description": "<p>Score</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.PLACES_ID",
            "description": "<p>Id of the place</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.NAMESPACE_ID",
            "description": "<p>Id of the namespace</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.TYPE",
            "description": "<p>Type , &quot;place&quot; or &quot;namespace&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.FB_USERS_ID",
            "description": "<p>Id of facebook user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body example for type = namespace:",
          "content": "{\n\t\"comments\": [\n\t\t{\n\t\t\t\"CONTENT\": \"Bardzo fajnie miejsce\",\n\t\t\t\"SCORE\": 5,\n\t\t\t\"NAMESPACES_ID\": 4,\n\t\t\t\"TYPE\": \"NAMESPACE\",\n\t\t\t\"FB_USERS_ID\": 1\n\t\t},\n\t(…)\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc_0.11.0.js",
    "groupTitle": "User"
  }
] });
