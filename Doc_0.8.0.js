/**
 * @api{get}/v2/place Get place
 * @apiName GetPlace
 * @apiGroup Place
 * @apiVersion 0.8.0
 * @apiParam {String} type Type, place or namespace.
 * @apiParam {String} namespace Name of the namespace.
 * @apiParam {String} place Name of the place.
 * @apiSuccess {Number} ID Id of the namespac/place
 * @apiSuccess {String} DESCRIPTION Description of the namespace/place
 * @apiSuccess {String} ADVERT Advert information
 * @apiSuccess {String} EVENT_CONTENT Informations about events 
 * @apiSuccess {String} ADDED_ON Date added inf form "yyyy-mm-dd hh-mm-ss"
 * @apiSuccess {Number} SUM_SCORE Sum score
 * @apiSuccess {Number} COMMENTS_COUNT Total count of comments
 * @apiSuccess {String} GOOGLE_PLACE_ID Id on Google Places 
 * @apiSuccess {String} INSTANCE Instance
 * @apiSuccess {Number} LATITUDE Lattitude
 * @apiSuccess {Number} LONGITUDE Longitude
 * @apiSuccess {String} NAME Name of the namespace/place
 * @apiSuccess {Number} CATEGORY_ID Id of the category
 * @apiSuccess {Number} OWNER_ID Owners Id
 * @apiSuccess {Object} CATEGORY Category information
 * @apiSuccess {Number} CATEGORY.ID Id of the category
 * @apiSuccess {String} CATEGORY.NAME Name of the category
 * @apiSuccess {Array} NAMESPACES_PHOTOS Informations about photos related to the namespace/place
 * @apiSuccess {Number} NAMESPACES_PHOTOS.ID Id of the namespace/place photo
 * @apiSuccess {String} NAMESPACES_PHOTOS.URL URL of the photo
 * @apiSuccess {Number} NAMESPACES_PHOTOS.NAMESPACES_ID Id of the namespace/place
 * @apiSuccessExample Response (success):
 *{
 *	"namespace": 
 *		{
 *			"ID": 1,
 *			"DESCRIPTION": "Testowy namespace",
 *			"ADVERT": null,
 *			"EVENT_CONTENT": null,
 *			"ADDED_ON": "2017-04-08 11:45:49",
 *			"SUM_SCORE": 0,
 *			"COMMENTS_COUNT": 0,
 *			"GOOGLE_PLACE_ID": null,
 *			"INSTANCE": "qwertyuiop",
 *			"LATITUDE": 0,
 *			"LONGITUDE": 0,
 *			"NAME": "12341234",
 *			"CATEGORY_ID": 2,
 *			"OWNER_ID": 1,
 *			"CATEGORY": 
 *				{
 *					"ID": 2,
 *					"NAME": "Parki"
 *				},
 *			"NAMESPACES_PHOTOS": [
 *				{
 *					"ID": 1,
 *					"URL": "http://i.imgur.com/bgRtGjJ.jpg",
 *					"NAMESPACE_ID": 1
 *				},
 *			(…)
 *			],
 *		},
 *	"place": 
 *		{
 *			"ID": 1,
 *			"DESCRIPTION": "Testowy opis",
 *			"ADVERT": null,
 *			"EVENT_CONTENT": null,
 *			"NAME": "ABCDEFG",
 *			"ADDED_ON": "2017-04-08 11:45:24",
 *			"SUM_SCORE": 0,
 *			"COMMENTS_COUNT": 0,
 *			"GOOGLE_PLACE_ID": null,
 *			"INSTANCE": "asdfghjkl",
 *			"NAMESPACE_ID": 1,
 *			"OWNER_ID": 1,
 *			"PLACES_PHOTOS": [ 
 *				{
 *					"ID": 1,
 *					"URL": "http://i.imgur.com/Qj3wuoj.jpg",
 *					"PLACE_ID": 1
 *				},
 *			(…)
 *			]
 *		}
 *}
 */
 
 
 
 /**
 * @api{get}/v2/place Get namespace
 * @apiName GetNamespace
 * @apiGroup Namespace
 * @apiVersion 0.8.0
 * @apiParam {String} type Type, place or namespace.
 * @apiParam {String} namespace Name of the namespace.
 * @apiSuccess {Number} ID Id of the namespac/place
 * @apiSuccess {String} DESCRIPTION Description of the namespace
 * @apiSuccess {String} ADVERT Advert information
 * @apiSuccess {String} EVENT_CONTENT Informations about events 
 * @apiSuccess {String} ADDED_ON Date added inf form "yyyy-mm-dd hh-mm-ss"
 * @apiSuccess {Number} SUM_SCORE Sum score
 * @apiSuccess {Number} COMMENTS_COUNT Total count of comments
 * @apiSuccess {String} GOOGLE_PLACE_ID Id on Google Places 
 * @apiSuccess {String} INSTANCE Instance
 * @apiSuccess {Number} LATITUDE Lattitude
 * @apiSuccess {Number} LONGITUDE Longitude
 * @apiSuccess {String} NAME Name of the namespace
 * @apiSuccess {Number} CATEGORY_ID Id of the category
 * @apiSuccess {Number} OWNER_ID Owners Id
 * @apiSuccess {Object} CATEGORY Category information
 * @apiSuccess {Number} CATEGORY.ID Id of the category
 * @apiSuccess {String} CATEGORY.NAME Name of the category
 * @apiSuccess {Array} NAMESPACES_PHOTOS Informations about photos related to the namespace
 * @apiSuccess {Number} NAMESPACES_PHOTOS.ID Id of the namespace photo
 * @apiSuccess {String} NAMESPACES_PHOTOS.URL URL of the photo
 * @apiSuccess {Number} NAMESPACES_PHOTOS.NAMESPACES_ID Id of the namespace
 * @apiSuccessExample Response (success):
 * {
 *	"namespace": 
 *		{
 *			"ID": 1,
 *			"DESCRIPTION": "Testowy namespace",
 *			"ADVERT": null,
 *			"EVENT_CONTENT": null,
 *			"ADDED_ON": "2017-04-08 11:45:49",
 *			"SUM_SCORE": 0,
 *			"COMMENTS_COUNT": 0,
 *			"GOOGLE_PLACE_ID": null,
 *			"INSTANCE": "qwertyuiop",
 *			"LATITUDE": 0,
 *			"LONGITUDE": 0,
 *			"NAME": "12341234",
 *			"CATEGORY_ID": 2,
 *			"OWNER_ID": 1,
 *			"CATEGORY": 
 *				{
 *					"ID": 2,
 *					"NAME": "Parki"
 *				},		
 *			"NAMESPACES_PHOTOS": [ 
 *				{
 *					"ID": 1,
 *					"URL": "http://i.imgur.com/bgRtGjJ.jpg",
 *					"NAMESPACE_ID": 1
 *				},
 *				(…)
 *			]
 *		}
 *}
 */
 
 
 
 /**
 * @api{get}/v2/place/category Get namespace with given category
 * @apiName GetNamespaceWithCategory
 * @apiGroup Namespace
 * @apiVersion 0.8.0
 * @apiParam {String} type Type, place or namespace.
 * @apiParam {Number} category Id of the category.
 * @apiParam {Number} [limit] Limit.
 * @apiParam {Number} [offset] Offset.
 * @apiSuccess {Number} ID Id of the namespac/place
 * @apiSuccess {String} DESCRIPTION Description of the namespace
 * @apiSuccess {String} ADVERT Advert information
 * @apiSuccess {String} EVENT_CONTENT Informations about events 
 * @apiSuccess {String} ADDED_ON Date added inf form "yyyy-mm-dd hh-mm-ss"
 * @apiSuccess {Number} SUM_SCORE Sum score
 * @apiSuccess {Number} COMMENTS_COUNT Total count of comments
 * @apiSuccess {String} GOOGLE_PLACE_ID Id on Google Places 
 * @apiSuccess {String} INSTANCE Instance
 * @apiSuccess {Number} LATITUDE Lattitude
 * @apiSuccess {Number} LONGITUDE Longitude
 * @apiSuccess {String} NAME Name
 * @apiSuccess {Number} CATEGORY_ID Id of the category
 * @apiSuccess {Number} OWNER_ID Owners Id
 * @apiSuccess {Object} CATEGORY Category information
 * @apiSuccess {Number} CATEGORY.ID Id of the category
 * @apiSuccess {String} CATEGORY.NAME Name of the category
 * @apiSuccess {Array} NAMESPACES_PHOTOS Informations about photos related to the namespace
 * @apiSuccess {Number} NAMESPACES_PHOTOS.ID Id of the namespace photo
 * @apiSuccess {String} NAMESPACES_PHOTOS.URL URL of the photo
 * @apiSuccess {Number} NAMESPACES_PHOTOS.NAMESPACES_ID Id of the namespace
 * @apiSuccessExample Response (success):
 * {
 *	"namespaces": [  
 *		{
 *			"ID": 1,
 *			"DESCRIPTION": "Testowy namespace",
 *			"ADVERT": null,
 *			"EVENT_CONTENT": null,
 *			"ADDED_ON": "2017-04-08 11:45:49",
 *			"SUM_SCORE": 0,
 *			"COMMENTS_COUNT": 0,
 *			"GOOGLE_PLACE_ID": null,
 *			"INSTANCE": "qwertyuiop",
 *			"LATITUDE": 0,
 *			"LONGITUDE": 0,
 *			"NAME": "12341234",
 *			"CATEGORY_ID": 2,
 *			"OWNER_ID": 1,
 *			"CATEGORY": 
 *				{
 *					"ID": 2,
 *					"NAME": "Parki"
 *				},
 *			"NAMESPACES_PHOTOS": [
 *				{
 *					"ID": 1,
 *					"URL": "http://i.imgur.com/bgRtGjJ.jpg",
 *					"NAMESPACE_ID": 1
 *				},
 *			(…)
 *			]
 *		},
 *		(…)
 *	]
 *}
 */
 
 
 
  /**
 * @api{get}/v2/place/category Get category list
 * @apiName GetCategoryList
 * @apiGroup Namespace
 * @apiVersion 0.8.0
 * @apiSuccess {Array} categories Categories
 * @apiSuccess {Number} ID Id of the category
 * @apiSuccess {String} NAME Name of the category
 * @apiSuccessExample Response (success):
 *{
 *	"categories": [
 *		{
 *		"ID": 1,
 *		"NAME": "Centra handlowe"
 *		},
 *		{
 *		"ID": 2,
 *		"NAME": "Parki"
 *		},
 *		{
 *		"ID": 3,
 *		"NAME": "Urzędy"
 *		}
 *	]
 *}
 */
 
 
 
  /**
 * @api{get}/v2/place/namespace Get places with given namespace
 * @apiName GetPlacesWithNamespace
 * @apiGroup Place
 * @apiVersion 0.8.0
 * @apiParam {String} type Type, place or namespace.
 * @apiParam {Number} namespaceid Id of the namespace.
 * @apiParam {Number} [limit] Limit.
 * @apiParam {Number} [offset] Offset.
 * @apiSuccess {Array} places Array of places
 * @apiSuccess {Number} places.ID Id of the place
 * @apiSuccess {String} places.DESCRIPTION Description of the place
 * @apiSuccess {String} places.ADVERT Advert information
 * @apiSuccess {String} places.EVENT_CONTENT Informations about events 
 * @apiSuccess {String} places.ADDED_ON Date added inf form "yyyy-mm-dd hh-mm-ss"
 * @apiSuccess {Number} places.SUM_SCORE Sum score
 * @apiSuccess {Number} places.COMMENTS_COUNT Total count of comments
 * @apiSuccess {String} places.GOOGLE_PLACE_ID Id on Google Places 
 * @apiSuccess {String} places.INSTANCE Instance
 * @apiSuccess {String} places.NAME Name
 * @apiSuccess {Number} places.NAMESPACES_ID Id of the namespace
 * @apiSuccess {Number} places.OWNER_ID Owners Id
 * @apiSuccess {Array} places.PLACES_PHOTOS Informations about photos related to the place
 * @apiSuccess {Number} places.PLACES_PHOTOS.ID Id of the place photo
 * @apiSuccess {String} places.PLACES_PHOTOS.URL URL of the photo
 * @apiSuccess {Number} places.PLACES_PHOTOS.PLACE_ID Id of the place
 * @apiSuccessExample Response (success):
 *{
 *	"places": [
 *		{
 *		"ID": 1,
 *		"DESCRIPTION": "Testowy opis",
 *		"ADVERT": null,
 *		"EVENT_CONTENT": null,
 *		"ADDED_ON": "2017-04-08 11:45:24",
 *		"SUM_SCORE": 0,
 *		"COMMENTS_COUNT": 0,
 *		"GOOGLE_PLACE_ID": null,
 *		"INSTANCE": "asdfghjkl",
 *		"NAME": "ABCDEFG",
 *		"NAMESPACE_ID": 1,
 *		"OWNER_ID": 1,
 *		"PLACES_PHOTOS": [
 *			{
 *				"ID": 1,
 *				"URL": "http://i.imgur.com/Qj3wuoj.jpg",
 *				"PLACE_ID": 1
 *			},
 *		(…)
 *		]
 *		}
 *	]
 *}
 */
 
 
 
   /**
 * @api{get}/v2/place/event Get events from namespace and its places
 * @apiName GetEventsFromNamespace
 * @apiGroup Namespace
 * @apiVersion 0.8.0
 * @apiParam {String} type Type, place or namespace.
 * @apiParam {String} namespace Namespace name.
 * @apiSuccess {Object} namespace Information about namespace
 * @apiSuccess {Number} namespace.ID Id of the place
 * @apiSuccess {String} DESCRIPTION Description of the place
 * @apiSuccess {String} ADVERT Advert information
 * @apiSuccess {String} EVENT_CONTENT Informations about events 
 * @apiSuccess {String} ADDED_ON Date added inf form "yyyy-mm-dd hh-mm-ss"
 * @apiSuccess {Number} SUM_SCORE Sum score
 * @apiSuccess {Number} COMMENTS_COUNT Total count of comments
 * @apiSuccess {String} GOOGLE_PLACE_ID Id on Google Places 
 * @apiSuccess {String} INSTANCE Instance
 * @apiSuccess {String} NAME Name
 * @apiSuccess {Number} NAMESPACES_ID Id of the namespace
 * @apiSuccess {Number} OWNER_ID Owners Id
 * @apiSuccess {Array} PLACES_PHOTOS Informations about photos related to the place
 * @apiSuccess {Number} PLACES_PHOTOS.ID Id of the place photo
 * @apiSuccess {String} PLACES_PHOTOS.URL URL of the photo
 * @apiSuccess {Number} PLACES_PHOTOS.PLACE_ID Id of the place
 * @apiSuccessExample Response (success):
 *{
 *	"namespace": 
 *		{
 *			"ID": 1,
 *			"NAME": "12341234",
 *			"EVENT_CONTENT": null,
 *			"EVENT_END": null
 *		},
 *	"places": [ 
 *		{
 *			"ID": 1,
 *			"NAME": "ABCDEFG",
 *			"EVENT_CONTENT": null,
 *			"EVENT_END": null
 *		},  
 *		{
 *			"ID": 3,
 *			"NAME": "HIJKLMNOP",
 *			"EVENT_CONTENT": "RABAR NA NIC",
 *			"EVENT_END": "2017-05-20"
 *		}
 *	]
 *}
 */
 
 
 
 /**
 * @api{post}/v2/sidmapp Get/post app user id from/to database
 * @apiName GetPostIdFromToDatabase
 * @apiGroup User
 * @apiVersion 0.8.0
 * @apiParam {String} EMAIL E-mail adress.
 * @apiParam {String} FB_ID Facebook Id.
 * @apiParam {String} NAME Name and surname.
 * @apiParamExample Request body example:
 *{
 *	"resource":[
 *		{
 *			"EMAIL": "aaaaaa@asas.com",
 *			"FB_ID": "qwertyuioplkjhgfdsazxcvbnm",
 *			"NAME": "AAAAA BBBBBB"
 *		}
 * ]
 *}
 * @apiSuccessExample Response (success):
 *{
 *	"user": 
 *		{
 *			"ID": 1,
 *			"NEWSLETTER": true
 *		}
 *}
 */

 
 
 /**
 * @api{patch}/v2/sidmapp/user/modify Change newsletter in database
 * @apiName ChangeNewsletterInDatabase
 * @apiGroup User
 * @apiVersion 0.8.0
 * @apiParam {Number} ID User Id.
 * @apiParam {Boolean} NEWSLETTER Newsletter status (true = newsletter is on).
 * @apiParamExample Request body example:
 *{
 *	"resource":[
 *		{
 *			"ID": 1,
 *			"NEWSLETTER": true
 *		}
 * ]
 *}
 * @apiSuccessExample Response (success):
 *{
 *	"success": true
 *}
 */
 
 
 
  /**
 * @api{get}/v2/comments Get comments
 * @apiName GetComments
 * @apiGroup User
 * @apiVersion 0.8.0
 * @apiParam {String} type Type, place or namespace.
 * @apiParam {Number} id Id of name or namespace.
 * @apiSuccess {String} type place/namespace
 * @apiSuccess {Number} id 4
 * @apiSuccessExample Response (success) for type = place:
 *{
 *	"comments": [
 *		{
 *			"ID": 1,
 *			"CONTENT": "Bardzo fajnie miejsce",
 *			"SCORE": 5,
 *			"TYPE": "PLACE",
 *			"NAMESPACES_ID": null,
 *			"PLACES_ID": 4,
 *			"FB_USERS_ID": 1
 *		},
 *	(…)
 *	]
 *}
 * @apiSuccessExample Response (success) for type = namespace:
 *{
 *	"comments": [
 *		{
 *			"ID": 1,
 *			"CONTENT": "Bardzo fajnie miejsce",
 *			"SCORE": 5,
 *			"TYPE": "NAMESPACE",
 *			"NAMESPACES_ID": 4,
 *			"PLACES_ID": null,
 *			"FB_USERS_ID": 1
 *		},
 *	(…)
 *	]
 *}
 */
 
 
 
   /**
 * @api{post}/v2/comments Post comments
 * @apiName PostComments
 * @apiGroup User
 * @apiVersion 0.8.0
 * @apiParam {String} Content Content of a comment.
 * @apiParam {Number} SCORE Score.
 * @apiParam {Number} PLACES_ID Id of the place.
 * @apiParam {String} TYPE Place or namespace.
 * @apiParam {String} FB_USERS_ID Id of facebook account.
 * @apiSuccessExample Request body example for type = place:
 *{
 *	"comments": [
 *		{
 *			"CONTENT": "Bardzo fajnie miejsce",
 *			"SCORE": 5,
 *			"PLACES_ID": 4,
 *			"TYPE": "PLACE",
 *			"FB_USERS_ID": 1
 *		},
 *	(…)
 *	]
 *}
 * @apiSuccessExample Request body example for type = namespace:
 *{
 *	"comments": [
 *		{
 *			"CONTENT": "Bardzo fajnie miejsce",
 *			"SCORE": 5,
 *			"NAMESPACES_ID": 4,
 *			"TYPE": "NAMESPACE",
 *			"FB_USERS_ID": 1
 *		},
 *	(…)
 *	]
 *}
 */
 
    /**
 * @api{post}/v2/sidm/_table/USER_PATHS Add route
 * @apiName AddRoute
 * @apiGroup User
 * @apiVersion 0.8.0
 * @apiParam {Number} FB_USERS_ID User Id.
 * @apiParam {String} PATH Path.
 * @apiSuccessExample Request body example:
 * {
 *      "resource":[
 *      {
 *        	"FB_USER_ID": 1,
 *      	"PATH": [
 *			{
 *				"id": 1,
 *				"name": "test1",
 *				"longitude": 12.23,
 *				"latitude": 12.12,
 *				"photo": "urlsomdasodmasodas"
 *			}, {
 *				"id": 2,
 *				"name": "test5",
 *				"longitude": 12.23,
 *				"latitude": 12.12,
 *				"photo": "urlsomdasodmasodas"
 *			},
 *			(...)
 *			]
 *      }
 *      ]
 * }
 */
 
     /**
 * @api{get}/v2/sidm/_table/USER_PATHS Get route
 * @apiName GetRoute
 * @apiGroup User
 * @apiVersion 0.8.0
 * @apiParam {String} fields Fields.
 * @apiParam {String} filter Facebook user Id in format of FB_USER_ID%3DX, where Id comes in place of X.
 * @apiParam {Number} [limit] Limit.
 * @apiParam {Number} [offset] Offset.
 * @apiSuccess {String} fields ID%20%2CCREATED_ON
 * @apiSuccess {String} filter FB_USER_ID%3D1 
 * @apiSuccess {Number} limit 111
 * @apiSuccess {Number} offset 11
 * @apiSuccessExample Request body example:
 * {
 *     "resource":[
 *       {
 *         "ID": 1,
 *         "CREATED_ON": "data"
 *       },
 * 			(…)
 *       ]
 * }
 */
 
      /**
 * @api{get}/v2/sidm/_table/USER_PATHS Get route data
 * @apiName GetRouteData
 * @apiGroup User
 * @apiVersion 0.8.0
 * @apiParam {String} filter Facebook user Id in format of FB_USER_ID%3DX, where Id comes in place of X.
 * @apiSuccess {String} filter FB_USER_ID%3D1 
 * @apiSuccessExample Request body example:
 * {
 *     "resource":[
 *       {
 *         	"ID": 1,
 *        	“FB_USER_ID”: 1,
 *      	"PATH": [
 *			{
 *				"id": 1,
 *				"name": "test1",
 *				"longitude": 12.23,
 *				"latitude": 12.12,
 *				"photo": "urlsomdasodmasodas"
 *			}, {
 *				"id": 2,
 *				"name": "test5",
 *				"longitude": 12.23,
 *				"latitude": 12.12,
 *				"photo": "urlsomdasodmasodas"
 *			},
 *			(...)
 *			]
 *      },
 *         "CREATED_ON": "data"
 *      }
 *      ]
 * }
 */