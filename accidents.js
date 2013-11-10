var accidents = {
	"total": {
		"name": "Total",
		"sum": 46844,
		"values": [127,581,1374,10928,7452,6829,7199,4838,3194,2983,1326]
		},
	"trafficAccidents": {
		"name": "Traffic Accidents",
		"sum": 43945,
		"values": [124,551,1285,10568,7087,6370,6530,4359,2940,2845,1277]
		},
	"nonTrafficAccidents": {
		"name": "Non-Traffic Accidents",
		"sum": 76862,
		"values": [1158,1007,820,4969,7525,10102,13116,7355,5559,10753,14477]
		},
	"falls": {
		"name": "Falls",
		"sum": 22631,
		"values": [24,36,32,233,334,593,1304,1739,2594,6552,9188]
		},
	"poisoning": {
		"name": "Poisoning",
		"sum": 29846,
		"values": [19,34,81,3159,5700,7575,9006,3120,602,355,192]
		}
};

var grandTotal = accidents.total.sum + accidents.trafficAccidents.sum + accidents.nonTrafficAccidents.sum + accidents.falls.sum + accidents.poisoning.sum;
