/**
 * @api{get}/v2/place Get place
 * @apiName GetPlace
 * @apiGroup User
 * @apiVersion 0.4.0
 * @apiParam {String} type Type.
 * @apiParam {String} namespace Namespace.
 * @apiParam {String} place Place.
 * @apiSuccessExample Example: Data in case of success:
{
	"namespace": 
		{
			"ID": 1,
			"DESCRIPTION": "Testowy namespace",
			"ADVERT": null,
			"EVENT_CONTENT": null,
			"ADDED_ON": "2017-04-08 11:45:49",
			"SUM_SCORE": 0,
			"COMMENTS_COUNT": 0,
			"GOOGLE_PLACE_ID": null,
			"INSTANCE": "qwertyuiop",
			"LATITUDE": 0,
			"LONGITUDE": 0,
			"NAME": "12341234",
			"CATEGORY_ID": 2,
			"OWNER_ID": 1,
			"CATEGORY": 
				{
					"ID": 2,
					"NAME": "Parki"
				},
			"NAMESPACES_PHOTOS": [
				{
					"ID": 1,
					"URL": "http://i.imgur.com/bgRtGjJ.jpg",
					"NAMESPACE_ID": 1
				},	
				(…)
			],
		},
	"place": 
		{
			"ID": 1,
			"DESCRIPTION": "Testowy opis",
			"ADVERT": null,
			"EVENT_CONTENT": null,
			"NAME": "ABCDEFG",
			"ADDED_ON": "2017-04-08 11:45:24",
			"SUM_SCORE": 0,
			"COMMENTS_COUNT": 0,
			"GOOGLE_PLACE_ID": null,
			"INSTANCE": "asdfghjkl",
			"NAMESPACE_ID": 1,
			"OWNER_ID": 1,
			"PLACES_PHOTOS": [ 
				{
					"ID": 1,
					"URL": "http://i.imgur.com/Qj3wuoj.jpg",
					"PLACE_ID": 1
				},
			(…)
			]
		}
}
 */
 
 /**
 * @api{get}/v2/place Get namespace
 * @apiName GetNamespace
 * @apiGroup User
 * @apiVersion 0.4.0
 * @apiParam {String} type Type.
 * @apiParam {String} namespace Namespace.
 * @apiSuccessExample Example: Data in case of success:
{
	"namespace": 
		{
			"ID": 1,
			"DESCRIPTION": "Testowy namespace",
			"ADVERT": null,
			"EVENT_CONTENT": null,
			"ADDED_ON": "2017-04-08 11:45:49",
			"SUM_SCORE": 0,
			"COMMENTS_COUNT": 0,
			"GOOGLE_PLACE_ID": null,
			"INSTANCE": "qwertyuiop",
			"LATITUDE": 0,
			"LONGITUDE": 0,
			"NAME": "12341234",
			"CATEGORY_ID": 2,
			"OWNER_ID": 1,
			"CATEGORY": 
				{
					"ID": 2,
					"NAME": "Parki"
				},		
			"NAMESPACES_PHOTOS": [ 
				{
					"ID": 1,
					"URL": "http://i.imgur.com/bgRtGjJ.jpg",
					"NAMESPACE_ID": 1
				},
				(…)
			]
		}
}
 */
 
 /**
 * @api{get}/v2/place/category Get place of given category
 * @apiName GetPlaceWithCategory
 * @apiGroup User
 * @apiVersion 0.4.0
 * @apiParam {String} type Type.
 * @apiParam {Number} category Category id.
 * @apiParam {Number} limit Limit (optional).
 * @apiParam {Number} offset Offset (optional).
 * @apiSuccessExample Example: Data in case of success:
{
	"namespaces": [  
		{
			"ID": 1,
			"DESCRIPTION": "Testowy namespace",
			"ADVERT": null,
			"EVENT_CONTENT": null,
			"ADDED_ON": "2017-04-08 11:45:49",
			"SUM_SCORE": 0,
			"COMMENTS_COUNT": 0,
			"GOOGLE_PLACE_ID": null,
			"INSTANCE": "qwertyuiop",
			"LATITUDE": 0,
			"LONGITUDE": 0,
			"NAME": "12341234",
			"CATEGORY_ID": 2,
			"OWNER_ID": 1,
			"CATEGORY": 
				{
					"ID": 2,
					"NAME": "Parki"
				},
			"NAMESPACES_PHOTOS": [
				{
					"ID": 1,
					"URL": "http://i.imgur.com/bgRtGjJ.jpg",
					"NAMESPACE_ID": 1
				},
			(…)
			]
		},
		(…)
	]
}
 */
 
  /**
 * @api{get}/v2/place/category Get category list
 * @apiName GetCategoryList
 * @apiGroup User
 * @apiVersion 0.4.0
 * @apiSuccessExample Example: Data in case of success:
JSON
{
	"categories": [
		{
		"ID": 1,
		"NAME": "Centra handlowe"
		},
		{
		"ID": 2,
		"NAME": "Parki"
		},
		{
		"ID": 3,
		"NAME": "Urzędy"
		}
	]
}
 */
 
  /**
 * @api{get}/v2/place/namespace Get place of given namespace
 * @apiName GetPlaceWithNamespace
 * @apiGroup User
 * @apiVersion 0.4.0
 * @apiParam {String} type Type.
 * @apiParam {Number} namespaceid Namespace id.
 * @apiParam {Number} limit Limit (optional).
 * @apiParam {Number} offset Offset (optional).
 * @apiSuccessExample Example: Data in case of success:
{
	"places": [
		{
		"ID": 1,
		"DESCRIPTION": "Testowy opis",
		"ADVERT": null,
		"EVENT_CONTENT": null,
		"ADDED_ON": "2017-04-08 11:45:24",
		"SUM_SCORE": 0,
		"COMMENTS_COUNT": 0,
		"GOOGLE_PLACE_ID": null,
		"INSTANCE": "asdfghjkl",
		"NAME": "ABCDEFG",
		"NAMESPACE_ID": 1,
		"OWNER_ID": 1,
		"PLACES_PHOTOS": [
			{
				"ID": 1,
				"URL": "http://i.imgur.com/Qj3wuoj.jpg",
				"PLACE_ID": 1
			},
		(…)
		]
		}
	]
}
 */
 
 