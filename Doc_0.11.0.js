/**
 * @api{get}/v2/place Get place
 * @apiName GetPlace
 * @apiGroup Place
 * @apiVersion 0.11.0
 * @apiParam {String} type Type, "place" or "namespace".
 * @apiParam {String} namespace Name of the namespace.
 * @apiParam {String} place Name of the place.
 * @apiSuccess {Object} namespace Information about namespace
 * @apiSuccess {Number} namespace.ID Id of the namespac
 * @apiSuccess {String} namespace.DESCRIPTION Description of the namespace
 * @apiSuccess {String} namespace.ADVERT Advert information
 * @apiSuccess {String} namespace.EVENT_CONTENT Informations about events 
 * @apiSuccess {String} namespace.ADDED_ON Date added in form "yyyy-mm-dd hh-mm-ss"
 * @apiSuccess {Number} namespace.SUM_SCORE Sum score
 * @apiSuccess {Number} namespace.COMMENTS_COUNT Total count of comments
 * @apiSuccess {String} namespace.GOOGLE_PLACE_ID Id on Google Places 
 * @apiSuccess {String} namespace.INSTANCE Instance
 * @apiSuccess {Number} namespace.LATTITUDE Lattitude coordinate
 * @apiSuccess {Number} namespace.LONGITUDE Longitude coordinate
 * @apiSuccess {String} namespace.NAME Name of the namespace
 * @apiSuccess {Number} namespace.CATEGORY_ID Id of the category
 * @apiSuccess {Number} namespace.OWNER_ID Owner Id
 * @apiSuccess {Object} namespace.CATEGORY Category information
 * @apiSuccess {Number} namespace.CATEGORY.ID Id of the category
 * @apiSuccess {String} namespace.CATEGORY.NAME Name of the category
 * @apiSuccess {Array} namespace.NAMESPACES_PHOTOS Informations about photos related to the namespace
 * @apiSuccess {Number} namespace.NAMESPACES_PHOTOS.ID Id of the namespace photo
 * @apiSuccess {String} namespace.NAMESPACES_PHOTOS.URL URL of the photo
 * @apiSuccess {Number} namespace.NAMESPACES_PHOTOS.NAMESPACES_ID Id of the namespace
 * @apiSuccess {Object} place Information about place
 * @apiSuccess {Number} place.ID Id of the namespace/place
 * @apiSuccess {String} place.DESCRIPTION Description of the place
 * @apiSuccess {String} place.ADVERT Advert information
 * @apiSuccess {String} place.EVENT_CONTENT Informations about events 
 * @apiSuccess {String} place.ADDED_ON Date added in form "yyyy-mm-dd hh-mm-ss"
 * @apiSuccess {Number} place.SUM_SCORE Sum score
 * @apiSuccess {Number} place.COMMENTS_COUNT Total count of comments
 * @apiSuccess {String} place.GOOGLE_PLACE_ID Id on Google Places 
 * @apiSuccess {String} place.INSTANCE Instance
 * @apiSuccess {Number} place.NAMESPACES_ID Id of the namespace
 * @apiSuccess {Number} namespace.OWNER_ID Owner Id
 * @apiSuccess {Array} namespace.PLACES_PHOTOS Informations about photos related to the place
 * @apiSuccess {Number} namespace.PLACES_PHOTOS.ID Id of the place photo
 * @apiSuccess {String} namespace.PLACES_PHOTOS.URL URL of the photo
 * @apiSuccess {Number} namespace.PLACES_PHOTOS.NAMESPACES_ID Id of the place
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
 * @apiVersion 0.11.0
 * @apiParam {String} type Type, "place" or "namespace".
 * @apiParam {String} namespace Name of the namespace.
 * @apiSuccess {Object} namespace Information about namespace
 * @apiSuccess {Number} namespace.ID Id of the namespace/place
 * @apiSuccess {String} namespace.DESCRIPTION Description of the namespace
 * @apiSuccess {String} namespace.ADVERT Advert information
 * @apiSuccess {String} namespace.EVENT_CONTENT Informations about events 
 * @apiSuccess {String} namespace.ADDED_ON Date added in form "yyyy-mm-dd hh-mm-ss"
 * @apiSuccess {Number} namespace.SUM_SCORE Sum score
 * @apiSuccess {Number} namespace.COMMENTS_COUNT Total count of comments
 * @apiSuccess {String} namespace.GOOGLE_PLACE_ID Id on Google Places 
 * @apiSuccess {String} namespace.INSTANCE Instance
 * @apiSuccess {Number} namespace.LATITUDE Lattitude coordinate
 * @apiSuccess {Number} namespace.LONGITUDE Longitude coordinate
 * @apiSuccess {String} namespace.NAME Name of the namespace
 * @apiSuccess {Number} namespace.CATEGORY_ID Id of the category
 * @apiSuccess {Number} namespace.OWNER_ID Owner Id
 * @apiSuccess {Object} namespace.CATEGORY Category information
 * @apiSuccess {Number} namespace.CATEGORY.ID Id of the category
 * @apiSuccess {String} namespace.CATEGORY.NAME Name of the category
 * @apiSuccess {Array} namespace.NAMESPACES_PHOTOS Informations about photos related to the namespace
 * @apiSuccess {Number} namespace.NAMESPACES_PHOTOS.ID Id of the namespace photo
 * @apiSuccess {String} namespace.NAMESPACES_PHOTOS.URL URL of the photo
 * @apiSuccess {Number} namespace.NAMESPACES_PHOTOS.NAMESPACES_ID Id of the namespace
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
 * @apiVersion 0.11.0
 * @apiParam {String} type Type, namespace.
 * @apiParam {Number} category Id of the category.
 * @apiParam {Number} [limit] Limit.
 * @apiParam {Number} [offset] Offset.
 * @apiSuccess {Array} namespaces Array of namespaces matching category
 * @apiSuccess {Number} namespaces.ID Id of the namespac
 * @apiSuccess {String} namespaces.DESCRIPTION Description of the namespace
 * @apiSuccess {String} namespaces.ADVERT Advert information
 * @apiSuccess {String} namespaces.EVENT_CONTENT Informations about events 
 * @apiSuccess {String} namespaces.ADDED_ON Date added in form "yyyy-mm-dd hh-mm-ss"
 * @apiSuccess {Number} namespaces.SUM_SCORE Sum score
 * @apiSuccess {Number} namespaces.COMMENTS_COUNT Total count of comments
 * @apiSuccess {String} namespaces.GOOGLE_PLACE_ID Id on Google Places 
 * @apiSuccess {String} namespaces.INSTANCE Instance
 * @apiSuccess {Number} namespaces.LATITUDE Lattitude coordinate
 * @apiSuccess {Number} namespaces.LONGITUDE Longitude coordinate
 * @apiSuccess {String} namespaces.NAME Name
 * @apiSuccess {Number} namespaces.CATEGORY_ID Id of the category
 * @apiSuccess {Number} namespaces.OWNER_ID Owner Id
 * @apiSuccess {Object} namespaces.CATEGORY Category information
 * @apiSuccess {Number} namespaces.CATEGORY.ID Id of the category
 * @apiSuccess {String} namespaces.CATEGORY.NAME Name of the category
 * @apiSuccess {Array} namespaces.NAMESPACES_PHOTOS Informations about photos related to the namespace
 * @apiSuccess {Number} namespaces.NAMESPACES_PHOTOS.ID Id of the namespace photo
 * @apiSuccess {String} namespaces.NAMESPACES_PHOTOS.URL URL of the photo
 * @apiSuccess {Number} namespaces.NAMESPACES_PHOTOS.NAMESPACES_ID Id of the namespace
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
 * @apiVersion 0.11.0
 * @apiSuccess {Array} categories Categories
 * @apiSuccess {Number} categories.ID Id of the category
 * @apiSuccess {String} categories.NAME Name of the category
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
 * @apiVersion 0.11.0
 * @apiParam {String} type Type, "place" or "namespace".
 * @apiParam {Number} namespaceid Id of the namespace.
 * @apiParam {Number} [limit] Limit.
 * @apiParam {Number} [offset] Offset.
 * @apiSuccess {Array} places Array of places
 * @apiSuccess {Number} places.ID Id of the place
 * @apiSuccess {String} places.DESCRIPTION Description of the place
 * @apiSuccess {String} places.ADVERT Advert information
 * @apiSuccess {String} places.EVENT_CONTENT Informations about events 
 * @apiSuccess {String} places.ADDED_ON Date added in form "yyyy-mm-dd hh-mm-ss"
 * @apiSuccess {Number} places.SUM_SCORE Sum score
 * @apiSuccess {Number} places.COMMENTS_COUNT Total count of comments
 * @apiSuccess {String} places.GOOGLE_PLACE_ID Id on Google Places 
 * @apiSuccess {String} places.INSTANCE Instance
 * @apiSuccess {String} places.NAME Name
 * @apiSuccess {Number} places.NAMESPACES_ID Id of the namespace
 * @apiSuccess {Number} places.OWNER_ID Owner Id
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
 * @apiVersion 0.11.0
 * @apiParam {String} type Type, "place" or "namespace"
 * @apiParam {String} namespace Namespace name
 * @apiSuccess {Object} namespace Information about namespace
 * @apiSuccess {Number} namespace.ID Id of the place
 * @apiSuccess {String} namespace.NAME Name
 * @apiSuccess {String} namespace.EVENT_CONTENT Informations about events 
 * @apiSuccess {String} namespace.EVENT_END Information about event ending
 * @apiSuccess {String} namespace.EVENT_NAME Name of the event
 * @apiSuccess {Array} places Information about places in the namespace
 * @apiSuccess {Number} places.ID Id of the place
 * @apiSuccess {String} places.NAME Name of the place
 * @apiSuccess {String} places.EVENT_CONTENT Informations about events 
 * @apiSuccess {String} places.EVENT_END Information about event ending 
 * @apiSuccess {String} places.EVENT_END Name of the event 
 * @apiSuccessExample Response (success):
 *{
 *	"namespace": 
 *		{
 *			"ID": 1,
 *			"NAME": "12341234",
 *			"EVENT_CONTENT": null,
 *			"EVENT_END": null,
 *          "EVENT_NAME": "12341234"
 *		},
 *	"places": [ 
 *		{
 *			"ID": 1,
 *			"NAME": "ABCDEFG",
 *			"EVENT_CONTENT": null,
 *			"EVENT_END": null,
 *			"EVENT_NAME": "12341234"
 *		},  
 *		{
 *			"ID": 3,
 *			"NAME": "HIJKLMNOP",
 *			"EVENT_CONTENT": "RABAR NA NIC",
 *			"EVENT_END": "2017-05-20",
 *			"EVENT_NAME": "12341234"
 *		}
 *	]
 *}
 */
 
 
 
/**
 * @api{post}/v2/sidmapp Get/post app user id from/to database
 * @apiName GetPostIdFromToDatabase
 * @apiGroup User
 * @apiVersion 0.11.0
 * @apiParam {Array} resource User data
 * @apiParam {String} resource.EMAIL E-mail adress
 * @apiParam {String} resource.FB_ID Facebook Id
 * @apiParam {String} resource.NAME Name and surname
 * @apiSuccess {Object} user Information about user
 * @apiSuccess {Number} user.ID User id
 * @apiSuccess {Boolean} user.NEWSLETTER Information about newsletter subscription
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
 * @api{patch}/v2/sidmapp/user/modify Change newsletter subscription in database
 * @apiName ChangeNewsletterInDatabase
 * @apiGroup User
 * @apiVersion 0.11.0
 * @apiParam {Array} recource User data
 * @apiParam {Number} recource.ID User Id
 * @apiParam {Boolean} recource.NEWSLETTER Newsletter status (true = newsletter is on)
 * @apiSuccess {String} success Information if update went successfully
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
 *		"success": true
 *}
 */
 
 
 
/**
 * @api{get}/v2/comments Get comments
 * @apiName GetComments
 * @apiGroup User
 * @apiVersion 0.11.0
 * @apiParam {String} type Type, "place" or "namespace"
 * @apiParam {Number} id Id of name or namespace
 * @apiSuccess {Array} comments Array of comments
 * @apiSuccess {Number} comments.ID Id of the comment
 * @apiSuccess {String} comments.CONTENT Comment content
 * @apiSuccess {Number} comments.SCORE Score
 * @apiSuccess {String} comments.TYPE Type , "place" or "namespace"
 * @apiSuccess {Number} comments.NAMESPACES_ID Id of the namespace
 * @apiSuccess {Number} comments PLACES_ID ID of the place
 * @apiSuccess {Array} comments.FB_USERS_ID Id of facebook user
 * @apiSuccess {Object} comments.USER Information about comment author
 * @apiSuccess {Number} comments.USER.ID Id of the user
 * @apiSuccess {String} comments.USER.EMAIL Users e-mail
 * @apiSuccess {String} comments.USER.NAME Name of the user
 * @apiSuccess {String} comments.USER.FB_ID Id of facebook user
 * @apiSuccess {Boolean} comments.USER.NEWSLETTER Information about newsletter
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
 *			"FB_USERS_ID": 1,
			"USER": 
				{
					"ID": 1,
					"EMAIL": "aaaaaa@asas.com",
					"NAME": "AAAAA BBBBBB",
					"FB_ID": "qwertyuioplkjhgfdsazxcvbnm",
					"NEWSLETTER": true
				}

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
 *			"FB_USERS_ID": 1,
 *			"USER": 
 *				{
 *					"ID": 1,
 *					"EMAIL": "aaaaaa@asas.com",
 *					"NAME": "AAAAA BBBBBB",
 *					"FB_ID": "qwertyuioplkjhgfdsazxcvbnm",
 *					"NEWSLETTER": true
 *				}
 *		},
 *	(…)
 *	]
 *}
 */
 
 
 
/**
 * @api{post}/v2/comments Post comments
 * @apiName PostComments
 * @apiGroup User
 * @apiVersion 0.11.0
 * @apiParam {String} Content Content of a comment
 * @apiParam {Number} SCORE Score
 * @apiParam {Number} PLACES_ID Id of the place
 * @apiParam {String} TYPE Place or namespace
 * @apiParam {String} FB_USERS_ID Id of facebook account
 * @apiSuccess {Array} comments Array of comments
 * @apiSuccess {String} comments.CONTENT Content of comment
 * @apiSuccess {Number} comments.SCORE Score
 * @apiSuccess {Number} comments.PLACES_ID Id of the place
 * @apiSuccess {Number} comments.NAMESPACE_ID Id of the namespace
 * @apiSuccess {Number} comments.TYPE Type , "place" or "namespace"
 * @apiSuccess {Number} comments.FB_USERS_ID Id of facebook user
 * @apiParamExample Request body example for type = place:
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
 * @api{post}/v2/sidm/_table/USER_PATHS Add routes
 * @apiName AddRoutes
 * @apiGroup User
 * @apiVersion 0.11.0
 * @apiParam {Number} FB_USERS_ID User Id
 * @apiParam {String} PATH Path
 * @apiSuccess {Array} resource Route information
 * @apiSuccess {Number} resource.FB_USER_ID Id of facebook user
 * @apiSuccess {String} resource.NAME Name of the route
 * @apiSuccess {String} resource.PATH Path of the route in form of array with objects with id (as Number) and name (as String)
 * @apiParamExample Request body example:
 * {
 *      "resource":[
 *      {
 *        	"FB_USER_ID": 1,
 *      	"NAME": "ASdasd",
 *	        "PATH": "asdasd"
 *      }
 *      ]
 * }
 */
 
/**
 * @api{get}/v2/sidm/_table/USER_PATHS Get routes
 * @apiName GetRoutes
 * @apiGroup User
 * @apiVersion 0.11.0
 * @apiParam {String} fields Fields
 * @apiParam {String} filter Facebook user Id in format of FB_USER_ID%3DX, where Id comes in place of X
 * @apiParam {Number} [limit] Limit
 * @apiParam {Number} [offset] Offset
 * @apiSuccess {Array} resource Route information
 * @apiSuccess {Number} resource.ID Route Id
 * @apiSuccess {String} resource.NAME Route name
 * @apiSuccess {String} resource.CREATED_ON Route creation date in form "yyyy-mm-dd hh-mm-ss"
 * @apiSuccessExample Request body example:
 * {
 *     "resource":[
 *       {
 *         "ID": 1,
 *		   "NAME": "Asdasd",
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
 * @apiVersion 0.11.0
 * @apiParam {String} filter Facebook user Id in format of FB_USER_ID%3DX, where Id comes in place of X
 * @apiSuccess {Array} resource Route information
 * @apiSuccess {Number} resource.ID Id of route
 * @apiSuccess {Number} resource.FB_USER_ID Id of facebook user
 * @apiSuccess {String} resource.NAME Name of route
 * @apiSuccess {Array} resource.PATH Path information
 * @apiSuccess {Number} resource.PATH.id Place Id
 * @apiSuccess {String} resource.PATH.name Place name
 * @apiSuccessExample Request body example:
 * {
 *     "resource":[
 *       {
 *         	"ID": 1,
 *        	"FB_USER_ID": 1,
 * 			"NAME": "Asdasdsa",
 *      	"PATH": [
 *			{
 *				"id": 1,
 *				"name": "test1"
 *			}, {
 *				"id": 2,
 *				"name": "test5"
 *			},
 *			(...)
 *			]
 *      },
 *         "CREATED_ON": "data"
 *      }
 *      ]
 * }
 */
 
/**
 * @api{post}/v2/sidm/_table/PLACES_EVENTS Add enter event to place (small place)
 * @apiName AddEnterEventSmall
 * @apiGroup Place
 * @apiVersion 0.11.0
 * @apiParam {Array} resource Information about event
 * @apiParam {Number} resource.FB_USERS_ID Facebook user id
 * @apiParam {String} resource.NAMESPACE_INSTANCE Instance of namespace
 * @apiParam {String} resource.PLACE_INSTANCE Instance of place
 * @apiSuccess {Array} resource Information about adding the event
 * @apiSuccess {Number} resource.ID Id of the event
 * @apiParamExample Response (success):
 *	{
 *		"resource":[
 *			{
 *   			"FB_USERS_ID": 1,
 *   			"NAMESPACE_INSTANCE": "ASdasd",
 *      		"PLACE_INSTANCE": "asdasd"
 * 			}
 *		]
 *	}
 * @apiSuccessExample Request body example for namespaces:
 *	{
 *		"resource":[
 *			{
 *   			"ID": 4
 * 			}
 *		]
 *	}
 */
 
/**
 * @api{patch}/v2/sidm/_table/PLACES_EVENTS Add exit event to place (small place)
 * @apiName AddExitEventSmall
 * @apiGroup Place
 * @apiVersion 0.11.0
 * @apiParam {Array} resource Information about event
 * @apiParam {Number} resource.ID Id of the event (given when creating an event)
 * @apiParam {String} resource.LEAVE_DATE Date of leaving
 * @apiParamExample Response (success):
 *	{
 *		"resource":[
 *			{
 *   			"ID": 1,
 *				"LEAVE_DATE": "YYYY-MM-DD HH:MM:SS"
 * 			}
 *		]
 *	}
 */
 
/**
 * @api{post}/v2/sidm/_table/PLACES_EVENTS Add enter event to place (big place)
 * @apiName AddEnterEventBig
 * @apiGroup Place
 * @apiVersion 0.11.0
 * @apiParam {Array} resource Information about event
 * @apiParam {Number} resource.FB_USERS_ID Facebook user id
 * @apiParam {String} resource.NAMESPACE_INSTANCE Instance of namespace
 * @apiSuccess {Array} resource Information about adding the event
 * @apiSuccess {Number} resource.ID Id of the event
 * @apiParamExample Response (success):
 *	{
 *		"resource":[
 *			{
 *   			"FB_USERS_ID": 1,
 *   			"NAMESPACE_INSTANCE": "ASdasd"
 * 			}
 *		]
 *	}
 * @apiSuccessExample Request body example for namespaces:
 *	{
 *		"resource":[
 *			{
 *   			"ID": 4
 * 			}
 *		]
 *	}
 */
 
/**
 * @api{patch}/v2/sidm/_table/PLACES_EVENTS Add exit event to place (big place)
 * @apiName AddExitEventBig
 * @apiGroup Place
 * @apiVersion 0.11.0
 * @apiParam {Array} resource Information about event
 * @apiParam {Number} resource.ID Id of the event (given when creating an event)
 * @apiParam {String} resource.LEAVE_DATE Date of leaving
 * @apiParamExample Response (success):
 *	{
 *		"resource":[
 *			{
 *   			"ID": 1,
 *				"LEAVE_DATE": "YYYY-MM-DD HH:MM:SS"
 * 			}
 *		]
 *	}
 */
 
/**
 * @api{get}/v2/sidm/_table/USER_PATHS Get visited places
 * @apiName GetVisitedPlaces
 * @apiGroup User
 * @apiVersion 0.11.0
 * @apiParam {String} filter Facebook user Id in format of FB_USER_ID%3DX, where Id comes in place of X
 * @apiSuccess {Array} resource Visited places information
 * @apiSuccess {Number} resource.ID Id of place
 * @apiSuccess {String} resource.DESCRIPTION Id of facebook user
 * @apiSuccess {String} resource.EVENT_CONTENT Content of the event
 * @apiSuccess {String} resource.ADDED_ON Date added in form "yyyy-mm-dd hh-mm-ss"
 * @apiSuccess {Number} resource.SUM_SCORE Score
 * @apiSuccess {Number} resource.COMMENTS_COUNT Number of comments
 * @apiSuccess {Number} resource.GOOGLE_PLACE_ID Id of the place in Google database
 * @apiSuccess {String} resource.INSTANCE Instance of the place
 * @apiSuccess {Number} resource.LATITUDE Lattitude coordinate
 * @apiSuccess {Number} resource.LONGITUDE Longitude coordinate
 * @apiSuccess {String} resource.NAME Name of the place
 * @apiSuccess {Number} resource.CATEGORY_ID Id of the category
 * @apiSuccess {Number} resource.OWNER_ID Id of the owner of the place in database
 * @apiSuccess {String} resource.CATEGORY_NAME Name of the category
 * @apiSuccess {String} resource.PHOTO URL of the photo
 * @apiSuccess {Number} resource.FB_USERS_ID Id of facebook user
 * @apiSuccessExample Request body example:
 * {
 *     "resource":[
 *       {
 *         	"ID": 1,
 *        	"DESCRIPTION": "Galeria Dominika\u0144ska …",
 *			"ADVERT": "",
 *			"EVENT_CONTENT": "Ju\u017c teraz zr\u00f3b zakupy za 100 z\u0142 i odbierz kupon na rabaty we wszystkich sklepach w Galerii Dominika\u0144skiej.",
 *			"ADDED_ON": "2017-04-23 21:09:48",
 *			"SUM_SCORE": 10.8,
 *			"COMMENTS_COUNT": 7,
 *			"GOOGLE_PLACE_ID": null,
 *			"INSTANCE": "Gale",
 *			"LATITUDE": 51.108351975238,
 *			"LONGITUDE": 17.040427923203,
 *			"NAME": "Galeria Domi\u0144ika\u0144ska",
 *			"CATEGORY_ID": 1,
 *			"OWNER_ID": 1,
 *			"CATEGORY_NAME": "Galerie",
 *			"PHOTO": "http://galeria-dominikanska.pl/files/gallery/fotob-2196.jpg",
 *			"FB_USER_ID": 1
 *		},
 * 		(…)
 *		]
 * }
 */