/**
 * @api{get}/place Pobieranie miejsca
 * @apiName GetPlace
 * @apiGroup User
 * @apiVersion 0.1.0
 * @apiParam {String} type Typ.
 * @apiParam {String} namespace Namespace.
 * @apiParam {String} place Miejsce.
 * @apiSuccess {String} placeInfo Informacja o miejscu.
 * @apiSuccessExample Przykład: Dane w przypadku powodzenia:
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
			"INSTANCE": "qwertyuiop"
		}
	,
	"namespacePhotos": [  
		{
			"URL": "http://i.imgur.com/bgRtGjJ.jpg"
		}
	],
	"place": 
		{
			"ID": 1,
			"DESCRIPTION": "Testowy opis",
			"ADVERT": null,
			"EVENT_CONTENT": null,
			"ADDED_ON": "2017-04-08 11:45:24",
			"SUM_SCORE": 0,
			"COMMENTS_COUNT": 0,
			"GOOGLE_PLACE_ID": null,
			"INSTANCE": "asdfghjkl"
		}
	,
	“placePhotos": [ 
		{
			"URL": "http://i.imgur.com/Qj3wuoj.jpg"
		}
	]
}
 */
 
 /**
 * @api{get}/place Pobieranie namespace
 * @apiName GetNamespace
 * @apiGroup User
 * @apiVersion 0.1.0
 * @apiParam {String} type Typ.
 * @apiParam {String} namespace Namespace.
 * @apiSuccess {String} placeInfo Informacja o namespace.
 * @apiSuccessExample Przykład: Dane w przypadku powodzenia:
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
			"INSTANCE": "qwertyuiop"
		}
	,
	"namespacePhotos": [
		{
			"URL": "http://i.imgur.com/bgRtGjJ.jpg"
		}
	],
}
 */