var rp = require('request-promise').defaults({ json: true })

const api_root = 'https://min-api.cryptocompare.com'
const history = {}
var myData = {
	Aggregated: false,
	ConversionType: { type: "force_direct", conversionSymbol: "" },
	Data: [
		{
			'open': 387.0,
			'highPrice': 387.0,
			'time': '2018-09-03 09:08',
			'close': 387.0,
			'volumefrom': 8354.0,
			'lowPrice': 387.0
		}, {
			'open': 386.15,
			'highPrice': 387.25,
			'time': '2018-09-03 09:16',
			'close': 384.95,
			'volumefrom': 51508.0,
			'lowPrice': 381.55
		}, {
			'open': 385.0,
			'highPrice': 385.55,
			'time': '2018-09-03 09:17',
			'close': 384.05,
			'volumefrom': 19866.0,
			'lowPrice': 384.05
		}, {
			'open': 384.05,
			'highPrice': 384.05,
			'time': '2018-09-03 09:18',
			'close': 383.55,
			'volumefrom': 13503.0,
			'lowPrice': 382.6
		}, {
			'open': 383.6,
			'highPrice': 384.25,
			'time': '2018-09-03 09:19',
			'close': 384.25,
			'volumefrom': 18558.0,
			'lowPrice': 383.45
		}, {
			'open': 383.8,
			'highPrice': 384.1,
			'time': '2018-09-03 09:20',
			'close': 383.65,
			'volumefrom': 8252.0,
			'lowPrice': 383.65
		}, {
			'open': 383.5,
			'highPrice': 383.7,
			'time': '2018-09-03 09:21',
			'close': 383.0,
			'volumefrom': 15533.0,
			'lowPrice': 382.9
		}, {
			'open': 383.05,
			'highPrice': 383.5,
			'time': '2018-09-03 09:22',
			'close': 383.5,
			'volumefrom': 3615.0,
			'lowPrice': 383.0
		}, {
			'open': 383.5,
			'highPrice': 383.65,
			'time': '2018-09-03 09:23',
			'close': 383.45,
			'volumefrom': 2637.0,
			'lowPrice': 383.1
		}, {
			'open': 383.4,
			'highPrice': 383.7,
			'time': '2018-09-03 09:24',
			'close': 383.7,
			'volumefrom': 5852.0,
			'lowPrice': 383.0
		}, {
			'open': 383.8,
			'highPrice': 384.75,
			'time': '2018-09-03 09:25',
			'close': 384.5,
			'volumefrom': 8311.0,
			'lowPrice': 383.8
		}, {
			'open': 384.65,
			'highPrice': 384.65,
			'time': '2018-09-03 09:26',
			'close': 384.3,
			'volumefrom': 5081.0,
			'lowPrice': 384.0
		}, {
			'open': 384.5,
			'highPrice': 384.9,
			'time': '2018-09-03 09:27',
			'close': 384.35,
			'volumefrom': 10315.0,
			'lowPrice': 384.35
		}, {
			'open': 384.1,
			'highPrice': 384.5,
			'time': '2018-09-03 09:28',
			'close': 384.15,
			'volumefrom': 19927.0,
			'lowPrice': 383.5
		}, {
			'open': 384.15,
			'highPrice': 384.4,
			'time': '2018-09-03 09:29',
			'close': 384.0,
			'volumefrom': 7194.0,
			'lowPrice': 383.7
		}, {
			'open': 384.0,
			'highPrice': 384.3,
			'time': '2018-09-03 09:30',
			'close': 384.05,
			'volumefrom': 1556.0,
			'lowPrice': 384.0
		}, {
			'open': 384.0,
			'highPrice': 384.5,
			'time': '2018-09-03 09:31',
			'close': 384.3,
			'volumefrom': 3111.0,
			'lowPrice': 384.0
		}, {
			'open': 384.3,
			'highPrice': 384.5,
			'time': '2018-09-03 09:32',
			'close': 384.25,
			'volumefrom': 794.0,
			'lowPrice': 384.05
		}, {
			'open': 384.25,
			'highPrice': 384.6,
			'time': '2018-09-03 09:33',
			'close': 384.2,
			'volumefrom': 3213.0,
			'lowPrice': 384.2
		}, {
			'open': 384.1,
			'highPrice': 384.3,
			'time': '2018-09-03 09:34',
			'close': 383.9,
			'volumefrom': 6373.0,
			'lowPrice': 383.65
		}, {
			'open': 383.9,
			'highPrice': 384.3,
			'time': '2018-09-03 09:35',
			'close': 384.3,
			'volumefrom': 5411.0,
			'lowPrice': 383.9
		}, {
			'open': 384.5,
			'highPrice': 384.5,
			'time': '2018-09-03 09:36',
			'close': 384.05,
			'volumefrom': 3484.0,
			'lowPrice': 384.0
		}, {
			'open': 384.2,
			'highPrice': 384.2,
			'time': '2018-09-03 09:37',
			'close': 383.55,
			'volumefrom': 10095.0,
			'lowPrice': 383.55
		}, {
			'open': 383.5,
			'highPrice': 383.95,
			'time': '2018-09-03 09:38',
			'close': 383.65,
			'volumefrom': 4809.0,
			'lowPrice': 383.35
		}, {
			'open': 383.4,
			'highPrice': 383.6,
			'time': '2018-09-03 09:39',
			'close': 383.1,
			'volumefrom': 6586.0,
			'lowPrice': 383.0
		}, {
			'open': 383.05,
			'highPrice': 383.5,
			'time': '2018-09-03 09:40',
			'close': 383.5,
			'volumefrom': 3700.0,
			'lowPrice': 383.05
		}, {
			'open': 383.5,
			'highPrice': 383.7,
			'time': '2018-09-03 09:41',
			'close': 383.25,
			'volumefrom': 3266.0,
			'lowPrice': 383.25
		}, {
			'open': 383.25,
			'highPrice': 383.25,
			'time': '2018-09-03 09:42',
			'close': 382.65,
			'volumefrom': 5964.0,
			'lowPrice': 382.5
		}, {
			'open': 382.95,
			'highPrice': 382.95,
			'time': '2018-09-03 09:43',
			'close': 382.5,
			'volumefrom': 6547.0,
			'lowPrice': 382.5
		}, {
			'open': 382.55,
			'highPrice': 382.8,
			'time': '2018-09-03 09:44',
			'close': 382.5,
			'volumefrom': 4237.0,
			'lowPrice': 382.5
		}, {
			'open': 382.65,
			'highPrice': 382.65,
			'time': '2018-09-03 09:45',
			'close': 382.25,
			'volumefrom': 16570.0,
			'lowPrice': 381.7
		}, {
			'open': 382.65,
			'highPrice': 382.65,
			'time': '2018-09-03 09:46',
			'close': 382.5,
			'volumefrom': 10221.0,
			'lowPrice': 382.2
		}, {
			'open': 382.55,
			'highPrice': 382.85,
			'time': '2018-09-03 09:47',
			'close': 382.55,
			'volumefrom': 3378.0,
			'lowPrice': 382.4
		}, {
			'open': 382.55,
			'highPrice': 382.65,
			'time': '2018-09-03 09:48',
			'close': 382.25,
			'volumefrom': 2311.0,
			'lowPrice': 382.15
		}, {
			'open': 382.7,
			'highPrice': 382.7,
			'time': '2018-09-03 09:49',
			'close': 382.45,
			'volumefrom': 3144.0,
			'lowPrice': 382.3
		}, {
			'open': 382.45,
			'highPrice': 383.0,
			'time': '2018-09-03 09:50',
			'close': 382.4,
			'volumefrom': 2810.0,
			'lowPrice': 382.35
		}, {
			'open': 382.4,
			'highPrice': 383.25,
			'time': '2018-09-03 09:51',
			'close': 383.05,
			'volumefrom': 3037.0,
			'lowPrice': 382.4
		}, {
			'open': 383.0,
			'highPrice': 383.35,
			'time': '2018-09-03 09:52',
			'close': 382.95,
			'volumefrom': 2847.0,
			'lowPrice': 382.8
		}, {
			'open': 382.75,
			'highPrice': 382.95,
			'time': '2018-09-03 09:53',
			'close': 382.7,
			'volumefrom': 1970.0,
			'lowPrice': 382.6
		}, {
			'open': 383.0,
			'highPrice': 383.05,
			'time': '2018-09-03 09:54',
			'close': 383.05,
			'volumefrom': 2458.0,
			'lowPrice': 382.8
		}, {
			'open': 383.15,
			'highPrice': 383.4,
			'time': '2018-09-03 09:55',
			'close': 383.2,
			'volumefrom': 1418.0,
			'lowPrice': 383.15
		}, {
			'open': 383.25,
			'highPrice': 383.3,
			'time': '2018-09-03 09:56',
			'close': 383.05,
			'volumefrom': 380.0,
			'lowPrice': 383.05
		}, {
			'open': 383.0,
			'highPrice': 383.35,
			'time': '2018-09-03 09:57',
			'close': 383.15,
			'volumefrom': 542.0,
			'lowPrice': 383.0
		}, {
			'open': 383.3,
			'highPrice': 383.35,
			'time': '2018-09-03 09:58',
			'close': 383.1,
			'volumefrom': 2286.0,
			'lowPrice': 383.1
		}, {
			'open': 383.25,
			'highPrice': 383.45,
			'time': '2018-09-03 09:59',
			'close': 383.3,
			'volumefrom': 1644.0,
			'lowPrice': 383.1
		}, {
			'open': 383.3,
			'highPrice': 383.6,
			'time': '2018-09-03 10:00',
			'close': 383.4,
			'volumefrom': 2515.0,
			'lowPrice': 383.3
		}, {
			'open': 383.6,
			'highPrice': 383.6,
			'time': '2018-09-03 10:01',
			'close': 383.2,
			'volumefrom': 3170.0,
			'lowPrice': 383.2
		}, {
			'open': 383.2,
			'highPrice': 383.35,
			'time': '2018-09-03 10:02',
			'close': 383.25,
			'volumefrom': 5138.0,
			'lowPrice': 383.0
		}, {
			'open': 383.0,
			'highPrice': 383.75,
			'time': '2018-09-03 10:03',
			'close': 383.65,
			'volumefrom': 4764.0,
			'lowPrice': 383.0
		}, {
			'open': 383.7,
			'highPrice': 384.15,
			'time': '2018-09-03 10:04',
			'close': 383.85,
			'volumefrom': 18889.0,
			'lowPrice': 383.6
		}, {
			'open': 383.8,
			'highPrice': 383.95,
			'time': '2018-09-03 10:05',
			'close': 383.65,
			'volumefrom': 32176.0,
			'lowPrice': 383.65
		}, {
			'open': 383.65,
			'highPrice': 383.8,
			'time': '2018-09-03 10:06',
			'close': 383.6,
			'volumefrom': 7752.0,
			'lowPrice': 383.45
		}, {
			'open': 383.6,
			'highPrice': 383.75,
			'time': '2018-09-03 10:07',
			'close': 383.55,
			'volumefrom': 2752.0,
			'lowPrice': 383.5
		}, {
			'open': 383.55,
			'highPrice': 383.65,
			'time': '2018-09-03 10:08',
			'close': 383.55,
			'volumefrom': 6731.0,
			'lowPrice': 383.3
		}, {
			'open': 383.6,
			'highPrice': 384.15,
			'time': '2018-09-03 10:09',
			'close': 383.9,
			'volumefrom': 40265.0,
			'lowPrice': 383.6
		}, {
			'open': 383.75,
			'highPrice': 384.1,
			'time': '2018-09-03 10:10',
			'close': 383.5,
			'volumefrom': 4902.0,
			'lowPrice': 383.35
		}, {
			'open': 383.55,
			'highPrice': 383.6,
			'time': '2018-09-03 10:11',
			'close': 383.6,
			'volumefrom': 2250.0,
			'lowPrice': 383.25
		}, {
			'open': 383.55,
			'highPrice': 383.7,
			'time': '2018-09-03 10:12',
			'close': 383.7,
			'volumefrom': 2518.0,
			'lowPrice': 383.55
		}, {
			'open': 383.7,
			'highPrice': 383.95,
			'time': '2018-09-03 10:13',
			'close': 383.9,
			'volumefrom': 4228.0,
			'lowPrice': 383.7
		}, {
			'open': 384.15,
			'highPrice': 384.25,
			'time': '2018-09-03 10:14',
			'close': 383.95,
			'volumefrom': 7986.0,
			'lowPrice': 383.9
		}, {
			'open': 384.1,
			'highPrice': 384.1,
			'time': '2018-09-03 10:15',
			'close': 382.35,
			'volumefrom': 30078.0,
			'lowPrice': 382.35
		}, {
			'open': 382.65,
			'highPrice': 383.0,
			'time': '2018-09-03 10:16',
			'close': 382.15,
			'volumefrom': 13639.0,
			'lowPrice': 382.15
		}, {
			'open': 382.0,
			'highPrice': 382.3,
			'time': '2018-09-03 10:17',
			'close': 381.35,
			'volumefrom': 37744.0,
			'lowPrice': 380.8
		}, {
			'open': 381.5,
			'highPrice': 382.05,
			'time': '2018-09-03 10:18',
			'close': 381.95,
			'volumefrom': 6838.0,
			'lowPrice': 381.4
		}, {
			'open': 381.75,
			'highPrice': 381.85,
			'time': '2018-09-03 10:19',
			'close': 381.2,
			'volumefrom': 15180.0,
			'lowPrice': 381.2
		}, {
			'open': 381.25,
			'highPrice': 382.2,
			'time': '2018-09-03 10:20',
			'close': 382.1,
			'volumefrom': 7160.0,
			'lowPrice': 381.25
		}, {
			'open': 382.1,
			'highPrice': 382.3,
			'time': '2018-09-03 10:21',
			'close': 382.3,
			'volumefrom': 3216.0,
			'lowPrice': 381.75
		}, {
			'open': 382.1,
			'highPrice': 382.4,
			'time': '2018-09-03 10:22',
			'close': 382.4,
			'volumefrom': 3196.0,
			'lowPrice': 382.1
		}, {
			'open': 382.4,
			'highPrice': 382.5,
			'time': '2018-09-03 10:23',
			'close': 382.45,
			'volumefrom': 4470.0,
			'lowPrice': 382.4
		}, {
			'open': 382.45,
			'highPrice': 382.9,
			'time': '2018-09-03 10:24',
			'close': 382.85,
			'volumefrom': 3517.0,
			'lowPrice': 382.45
		}, {
			'open': 382.85,
			'highPrice': 382.9,
			'time': '2018-09-03 10:25',
			'close': 382.3,
			'volumefrom': 4855.0,
			'lowPrice': 382.3
		}, {
			'open': 382.35,
			'highPrice': 382.6,
			'time': '2018-09-03 10:26',
			'close': 382.3,
			'volumefrom': 3553.0,
			'lowPrice': 382.25
		}, {
			'open': 382.3,
			'highPrice': 382.8,
			'time': '2018-09-03 10:27',
			'close': 382.8,
			'volumefrom': 1620.0,
			'lowPrice': 382.3
		}, {
			'open': 382.8,
			'highPrice': 382.95,
			'time': '2018-09-03 10:28',
			'close': 382.9,
			'volumefrom': 2607.0,
			'lowPrice': 382.8
		}, {
			'open': 382.95,
			'highPrice': 382.95,
			'time': '2018-09-03 10:29',
			'close': 382.55,
			'volumefrom': 2815.0,
			'lowPrice': 382.5
		}, {
			'open': 382.55,
			'highPrice': 383.35,
			'time': '2018-09-03 10:30',
			'close': 383.1,
			'volumefrom': 7602.0,
			'lowPrice': 382.55
		}, {
			'open': 383.1,
			'highPrice': 383.1,
			'time': '2018-09-03 10:31',
			'close': 383.0,
			'volumefrom': 2012.0,
			'lowPrice': 382.75
		}, {
			'open': 382.8,
			'highPrice': 383.15,
			'time': '2018-09-03 10:32',
			'close': 383.15,
			'volumefrom': 1290.0,
			'lowPrice': 382.8
		}, {
			'open': 383.1,
			'highPrice': 383.4,
			'time': '2018-09-03 10:33',
			'close': 383.35,
			'volumefrom': 2799.0,
			'lowPrice': 383.1
		}, {
			'open': 383.35,
			'highPrice': 383.45,
			'time': '2018-09-03 10:34',
			'close': 383.3,
			'volumefrom': 4851.0,
			'lowPrice': 383.25
		}, {
			'open': 383.3,
			'highPrice': 383.55,
			'time': '2018-09-03 10:35',
			'close': 383.35,
			'volumefrom': 1414.0,
			'lowPrice': 383.3
		}, {
			'open': 383.6,
			'highPrice': 383.6,
			'time': '2018-09-03 10:36',
			'close': 382.9,
			'volumefrom': 10718.0,
			'lowPrice': 382.85
		}, {
			'open': 382.85,
			'highPrice': 383.25,
			'time': '2018-09-03 10:37',
			'close': 382.95,
			'volumefrom': 2693.0,
			'lowPrice': 382.85
		}, {
			'open': 382.85,
			'highPrice': 383.25,
			'time': '2018-09-03 10:38',
			'close': 383.0,
			'volumefrom': 3790.0,
			'lowPrice': 382.85
		}, {
			'open': 382.95,
			'highPrice': 383.4,
			'time': '2018-09-03 10:39',
			'close': 383.4,
			'volumefrom': 2124.0,
			'lowPrice': 382.95
		}, {
			'open': 383.4,
			'highPrice': 383.4,
			'time': '2018-09-03 10:40',
			'close': 383.35,
			'volumefrom': 3263.0,
			'lowPrice': 383.3
		}, {
			'open': 383.35,
			'highPrice': 383.45,
			'time': '2018-09-03 10:41',
			'close': 383.45,
			'volumefrom': 2587.0,
			'lowPrice': 383.3
		}, {
			'open': 383.5,
			'highPrice': 383.6,
			'time': '2018-09-03 10:42',
			'close': 383.55,
			'volumefrom': 5856.0,
			'lowPrice': 383.35
		}, {
			'open': 383.6,
			'highPrice': 383.7,
			'time': '2018-09-03 10:43',
			'close': 383.65,
			'volumefrom': 15456.0,
			'lowPrice': 383.35
		}, {
			'open': 383.65,
			'highPrice': 383.7,
			'time': '2018-09-03 10:44',
			'close': 383.65,
			'volumefrom': 3020.0,
			'lowPrice': 383.55
		}, {
			'open': 383.7,
			'highPrice': 383.9,
			'time': '2018-09-03 10:45',
			'close': 383.9,
			'volumefrom': 2864.0,
			'lowPrice': 383.65
		}, {
			'open': 383.9,
			'highPrice': 384.0,
			'time': '2018-09-03 10:46',
			'close': 384.0,
			'volumefrom': 7031.0,
			'lowPrice': 383.85
		}, {
			'open': 383.65,
			'highPrice': 383.85,
			'time': '2018-09-03 10:47',
			'close': 383.8,
			'volumefrom': 8551.0,
			'lowPrice': 383.5
		}, {
			'open': 383.8,
			'highPrice': 383.85,
			'time': '2018-09-03 10:48',
			'close': 383.8,
			'volumefrom': 1064.0,
			'lowPrice': 383.8
		}, {
			'open': 383.85,
			'highPrice': 384.0,
			'time': '2018-09-03 10:49',
			'close': 383.95,
			'volumefrom': 5555.0,
			'lowPrice': 383.8
		}, {
			'open': 383.95,
			'highPrice': 384.5,
			'time': '2018-09-03 10:50',
			'close': 384.35,
			'volumefrom': 12551.0,
			'lowPrice': 383.95
		}, {
			'open': 384.05,
			'highPrice': 384.3,
			'time': '2018-09-03 10:51',
			'close': 384.0,
			'volumefrom': 3876.0,
			'lowPrice': 383.9
		}, {
			'open': 384.0,
			'highPrice': 384.45,
			'time': '2018-09-03 10:52',
			'close': 384.45,
			'volumefrom': 17072.0,
			'lowPrice': 383.7
		}, {
			'open': 384.45,
			'highPrice': 384.45,
			'time': '2018-09-03 10:53',
			'close': 384.4,
			'volumefrom': 7694.0,
			'lowPrice': 384.0
		}, {
			'open': 384.35,
			'highPrice': 384.35,
			'time': '2018-09-03 10:54',
			'close': 383.85,
			'volumefrom': 20659.0,
			'lowPrice': 383.7
		}, {
			'open': 383.85,
			'highPrice': 384.0,
			'time': '2018-09-03 10:55',
			'close': 383.65,
			'volumefrom': 4531.0,
			'lowPrice': 383.45
		}, {
			'open': 383.65,
			'highPrice': 384.1,
			'time': '2018-09-03 10:56',
			'close': 383.85,
			'volumefrom': 13362.0,
			'lowPrice': 383.65
		}, {
			'open': 383.85,
			'highPrice': 383.95,
			'time': '2018-09-03 10:57',
			'close': 383.8,
			'volumefrom': 6995.0,
			'lowPrice': 383.8
		}, {
			'open': 383.95,
			'highPrice': 383.95,
			'time': '2018-09-03 10:58',
			'close': 383.55,
			'volumefrom': 4919.0,
			'lowPrice': 383.45
		}, {
			'open': 383.6,
			'highPrice': 383.9,
			'time': '2018-09-03 10:59',
			'close': 383.85,
			'volumefrom': 9455.0,
			'lowPrice': 383.55
		}, {
			'open': 383.85,
			'highPrice': 384.05,
			'time': '2018-09-03 11:00',
			'close': 383.75,
			'volumefrom': 17079.0,
			'lowPrice': 383.75
		}, {
			'open': 383.95,
			'highPrice': 384.0,
			'time': '2018-09-03 11:01',
			'close': 383.75,
			'volumefrom': 2692.0,
			'lowPrice': 383.75
		}, {
			'open': 383.75,
			'highPrice': 383.9,
			'time': '2018-09-03 11:02',
			'close': 383.9,
			'volumefrom': 16554.0,
			'lowPrice': 383.6
		}, {
			'open': 383.8,
			'highPrice': 384.0,
			'time': '2018-09-03 11:03',
			'close': 383.75,
			'volumefrom': 4749.0,
			'lowPrice': 383.7
		}, {
			'open': 383.75,
			'highPrice': 384.35,
			'time': '2018-09-03 11:04',
			'close': 384.25,
			'volumefrom': 8697.0,
			'lowPrice': 383.65
		}, {
			'open': 384.3,
			'highPrice': 384.4,
			'time': '2018-09-03 11:05',
			'close': 384.35,
			'volumefrom': 9133.0,
			'lowPrice': 384.15
		}, {
			'open': 384.4,
			'highPrice': 384.8,
			'time': '2018-09-03 11:06',
			'close': 384.65,
			'volumefrom': 8121.0,
			'lowPrice': 384.4
		}, {
			'open': 384.5,
			'highPrice': 384.55,
			'time': '2018-09-03 11:07',
			'close': 384.4,
			'volumefrom': 3263.0,
			'lowPrice': 384.25
		}, {
			'open': 384.3,
			'highPrice': 384.45,
			'time': '2018-09-03 11:08',
			'close': 384.0,
			'volumefrom': 4231.0,
			'lowPrice': 384.0
		}, {
			'open': 384.2,
			'highPrice': 384.2,
			'time': '2018-09-03 11:09',
			'close': 384.0,
			'volumefrom': 4998.0,
			'lowPrice': 384.0
		}, {
			'open': 384.0,
			'highPrice': 384.2,
			'time': '2018-09-03 11:10',
			'close': 384.15,
			'volumefrom': 1134.0,
			'lowPrice': 384.0
		}, {
			'open': 384.15,
			'highPrice': 384.2,
			'time': '2018-09-03 11:11',
			'close': 384.2,
			'volumefrom': 657.0,
			'lowPrice': 384.1
		}, {
			'open': 384.1,
			'highPrice': 384.25,
			'time': '2018-09-03 11:12',
			'close': 384.25,
			'volumefrom': 3038.0,
			'lowPrice': 384.1
		}, {
			'open': 384.25,
			'highPrice': 384.35,
			'time': '2018-09-03 11:13',
			'close': 384.25,
			'volumefrom': 4328.0,
			'lowPrice': 384.2
		}, {
			'open': 384.25,
			'highPrice': 384.35,
			'time': '2018-09-03 11:14',
			'close': 384.35,
			'volumefrom': 839.0,
			'lowPrice': 384.25
		}, {
			'open': 384.35,
			'highPrice': 384.6,
			'time': '2018-09-03 11:15',
			'close': 384.45,
			'volumefrom': 1908.0,
			'lowPrice': 384.3
		}, {
			'open': 384.5,
			'highPrice': 384.6,
			'time': '2018-09-03 11:16',
			'close': 384.5,
			'volumefrom': 1402.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.8,
			'time': '2018-09-03 11:17',
			'close': 384.65,
			'volumefrom': 5077.0,
			'lowPrice': 384.5
		}, {
			'open': 384.7,
			'highPrice': 384.75,
			'time': '2018-09-03 11:18',
			'close': 384.7,
			'volumefrom': 963.0,
			'lowPrice': 384.65
		}, {
			'open': 384.6,
			'highPrice': 384.7,
			'time': '2018-09-03 11:19',
			'close': 384.5,
			'volumefrom': 4565.0,
			'lowPrice': 384.5
		}, {
			'open': 384.55,
			'highPrice': 384.55,
			'time': '2018-09-03 11:20',
			'close': 384.5,
			'volumefrom': 7128.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.55,
			'time': '2018-09-03 11:21',
			'close': 384.55,
			'volumefrom': 15499.0,
			'lowPrice': 384.5
		}, {
			'open': 384.55,
			'highPrice': 385.25,
			'time': '2018-09-03 11:22',
			'close': 384.6,
			'volumefrom': 49043.0,
			'lowPrice': 384.45
		}, {
			'open': 384.6,
			'highPrice': 384.8,
			'time': '2018-09-03 11:23',
			'close': 384.5,
			'volumefrom': 9314.0,
			'lowPrice': 384.35
		}, {
			'open': 384.5,
			'highPrice': 384.75,
			'time': '2018-09-03 11:24',
			'close': 384.5,
			'volumefrom': 7810.0,
			'lowPrice': 384.25
		}, {
			'open': 384.5,
			'highPrice': 384.6,
			'time': '2018-09-03 11:25',
			'close': 384.5,
			'volumefrom': 4208.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.55,
			'time': '2018-09-03 11:26',
			'close': 384.55,
			'volumefrom': 5734.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.55,
			'time': '2018-09-03 11:27',
			'close': 384.55,
			'volumefrom': 5214.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.65,
			'time': '2018-09-03 11:28',
			'close': 384.5,
			'volumefrom': 6506.0,
			'lowPrice': 384.4
		}, {
			'open': 384.5,
			'highPrice': 384.65,
			'time': '2018-09-03 11:29',
			'close': 384.5,
			'volumefrom': 6929.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.55,
			'time': '2018-09-03 11:30',
			'close': 384.5,
			'volumefrom': 5228.0,
			'lowPrice': 384.45
		}, {
			'open': 384.5,
			'highPrice': 384.55,
			'time': '2018-09-03 11:31',
			'close': 384.5,
			'volumefrom': 5139.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.55,
			'time': '2018-09-03 11:32',
			'close': 384.5,
			'volumefrom': 7311.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.55,
			'time': '2018-09-03 11:33',
			'close': 384.5,
			'volumefrom': 6645.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.55,
			'time': '2018-09-03 11:34',
			'close': 384.5,
			'volumefrom': 6092.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.55,
			'time': '2018-09-03 11:35',
			'close': 384.45,
			'volumefrom': 4952.0,
			'lowPrice': 384.45
		}, {
			'open': 384.45,
			'highPrice': 384.5,
			'time': '2018-09-03 11:36',
			'close': 384.5,
			'volumefrom': 4088.0,
			'lowPrice': 384.45
		}, {
			'open': 384.45,
			'highPrice': 384.5,
			'time': '2018-09-03 11:37',
			'close': 384.5,
			'volumefrom': 1125.0,
			'lowPrice': 384.45
		}, {
			'open': 384.5,
			'highPrice': 384.7,
			'time': '2018-09-03 11:38',
			'close': 384.7,
			'volumefrom': 4179.0,
			'lowPrice': 384.5
		}, {
			'open': 384.6,
			'highPrice': 384.9,
			'time': '2018-09-03 11:39',
			'close': 384.65,
			'volumefrom': 2291.0,
			'lowPrice': 384.55
		}, {
			'open': 384.65,
			'highPrice': 384.85,
			'time': '2018-09-03 11:40',
			'close': 384.65,
			'volumefrom': 1590.0,
			'lowPrice': 384.6
		}, {
			'open': 384.75,
			'highPrice': 384.85,
			'time': '2018-09-03 11:41',
			'close': 384.8,
			'volumefrom': 1693.0,
			'lowPrice': 384.6
		}, {
			'open': 384.85,
			'highPrice': 384.85,
			'time': '2018-09-03 11:42',
			'close': 384.7,
			'volumefrom': 847.0,
			'lowPrice': 384.65
		}, {
			'open': 384.7,
			'highPrice': 384.9,
			'time': '2018-09-03 11:43',
			'close': 384.7,
			'volumefrom': 3007.0,
			'lowPrice': 384.65
		}, {
			'open': 384.7,
			'highPrice': 384.7,
			'time': '2018-09-03 11:44',
			'close': 384.6,
			'volumefrom': 2110.0,
			'lowPrice': 384.6
		}, {
			'open': 384.65,
			'highPrice': 384.8,
			'time': '2018-09-03 11:45',
			'close': 384.8,
			'volumefrom': 3064.0,
			'lowPrice': 384.65
		}, {
			'open': 384.8,
			'highPrice': 384.95,
			'time': '2018-09-03 11:46',
			'close': 384.9,
			'volumefrom': 6678.0,
			'lowPrice': 384.7
		}, {
			'open': 384.9,
			'highPrice': 384.9,
			'time': '2018-09-03 11:47',
			'close': 384.8,
			'volumefrom': 2761.0,
			'lowPrice': 384.6
		}, {
			'open': 384.8,
			'highPrice': 384.9,
			'time': '2018-09-03 11:48',
			'close': 384.75,
			'volumefrom': 1610.0,
			'lowPrice': 384.65
		}, {
			'open': 384.65,
			'highPrice': 384.65,
			'time': '2018-09-03 11:49',
			'close': 384.6,
			'volumefrom': 4705.0,
			'lowPrice': 384.6
		}, {
			'open': 384.6,
			'highPrice': 384.65,
			'time': '2018-09-03 11:50',
			'close': 384.55,
			'volumefrom': 1790.0,
			'lowPrice': 384.55
		}, {
			'open': 384.55,
			'highPrice': 384.65,
			'time': '2018-09-03 11:51',
			'close': 384.55,
			'volumefrom': 5827.0,
			'lowPrice': 384.4
		}, {
			'open': 384.3,
			'highPrice': 384.4,
			'time': '2018-09-03 11:52',
			'close': 384.3,
			'volumefrom': 7599.0,
			'lowPrice': 384.0
		}, {
			'open': 384.15,
			'highPrice': 384.5,
			'time': '2018-09-03 11:53',
			'close': 384.25,
			'volumefrom': 2226.0,
			'lowPrice': 384.15
		}, {
			'open': 384.25,
			'highPrice': 384.65,
			'time': '2018-09-03 11:54',
			'close': 384.5,
			'volumefrom': 6573.0,
			'lowPrice': 384.15
		}, {
			'open': 384.5,
			'highPrice': 384.65,
			'time': '2018-09-03 11:55',
			'close': 384.6,
			'volumefrom': 875.0,
			'lowPrice': 384.5
		}, {
			'open': 384.6,
			'highPrice': 384.65,
			'time': '2018-09-03 11:56',
			'close': 384.65,
			'volumefrom': 934.0,
			'lowPrice': 384.5
		}, {
			'open': 384.55,
			'highPrice': 384.8,
			'time': '2018-09-03 11:57',
			'close': 384.8,
			'volumefrom': 1197.0,
			'lowPrice': 384.55
		}, {
			'open': 384.65,
			'highPrice': 384.8,
			'time': '2018-09-03 11:58',
			'close': 384.65,
			'volumefrom': 1160.0,
			'lowPrice': 384.65
		}, {
			'open': 384.65,
			'highPrice': 384.8,
			'time': '2018-09-03 11:59',
			'close': 384.65,
			'volumefrom': 1440.0,
			'lowPrice': 384.65
		}, {
			'open': 384.65,
			'highPrice': 384.8,
			'time': '2018-09-03 12:00',
			'close': 384.7,
			'volumefrom': 686.0,
			'lowPrice': 384.65
		}, {
			'open': 384.7,
			'highPrice': 384.8,
			'time': '2018-09-03 12:01',
			'close': 384.8,
			'volumefrom': 1632.0,
			'lowPrice': 384.5
		}, {
			'open': 384.75,
			'highPrice': 384.8,
			'time': '2018-09-03 12:02',
			'close': 384.8,
			'volumefrom': 999.0,
			'lowPrice': 384.55
		}, {
			'open': 384.7,
			'highPrice': 384.75,
			'time': '2018-09-03 12:03',
			'close': 384.55,
			'volumefrom': 2216.0,
			'lowPrice': 384.55
		}, {
			'open': 384.55,
			'highPrice': 384.65,
			'time': '2018-09-03 12:04',
			'close': 384.65,
			'volumefrom': 3374.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.8,
			'time': '2018-09-03 12:05',
			'close': 384.65,
			'volumefrom': 2523.0,
			'lowPrice': 384.5
		}, {
			'open': 384.75,
			'highPrice': 384.8,
			'time': '2018-09-03 12:06',
			'close': 384.55,
			'volumefrom': 4525.0,
			'lowPrice': 384.55
		}, {
			'open': 384.55,
			'highPrice': 384.85,
			'time': '2018-09-03 12:07',
			'close': 384.8,
			'volumefrom': 1614.0,
			'lowPrice': 384.55
		}, {
			'open': 384.8,
			'highPrice': 384.8,
			'time': '2018-09-03 12:08',
			'close': 384.7,
			'volumefrom': 977.0,
			'lowPrice': 384.65
		}, {
			'open': 384.65,
			'highPrice': 384.8,
			'time': '2018-09-03 12:09',
			'close': 384.65,
			'volumefrom': 3314.0,
			'lowPrice': 384.65
		}, {
			'open': 384.65,
			'highPrice': 384.8,
			'time': '2018-09-03 12:10',
			'close': 384.7,
			'volumefrom': 2385.0,
			'lowPrice': 384.65
		}, {
			'open': 384.75,
			'highPrice': 384.75,
			'time': '2018-09-03 12:11',
			'close': 384.6,
			'volumefrom': 2146.0,
			'lowPrice': 384.6
		}, {
			'open': 384.6,
			'highPrice': 384.65,
			'time': '2018-09-03 12:12',
			'close': 384.6,
			'volumefrom': 1186.0,
			'lowPrice': 384.6
		}, {
			'open': 384.6,
			'highPrice': 384.65,
			'time': '2018-09-03 12:13',
			'close': 384.5,
			'volumefrom': 5721.0,
			'lowPrice': 384.5
		}, {
			'open': 384.75,
			'highPrice': 384.75,
			'time': '2018-09-03 12:14',
			'close': 384.55,
			'volumefrom': 1776.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.6,
			'time': '2018-09-03 12:15',
			'close': 384.5,
			'volumefrom': 1635.0,
			'lowPrice': 384.5
		}, {
			'open': 384.5,
			'highPrice': 384.6,
			'time': '2018-09-03 12:16',
			'close': 384.45,
			'volumefrom': 3458.0,
			'lowPrice': 384.45
		}, {
			'open': 384.45,
			'highPrice': 384.75,
			'time': '2018-09-03 12:17',
			'close': 384.6,
			'volumefrom': 7984.0,
			'lowPrice': 384.45
		}, {
			'open': 384.55,
			'highPrice': 384.8,
			'time': '2018-09-03 12:18',
			'close': 384.65,
			'volumefrom': 1053.0,
			'lowPrice': 384.55
		}, {
			'open': 384.65,
			'highPrice': 384.8,
			'time': '2018-09-03 12:19',
			'close': 384.75,
			'volumefrom': 1241.0,
			'lowPrice': 384.65
		}, {
			'open': 384.75,
			'highPrice': 384.75,
			'time': '2018-09-03 12:20',
			'close': 384.7,
			'volumefrom': 5151.0,
			'lowPrice': 384.6
		}, {
			'open': 384.7,
			'highPrice': 384.8,
			'time': '2018-09-03 12:21',
			'close': 384.65,
			'volumefrom': 1893.0,
			'lowPrice': 384.6
		}, {
			'open': 384.65,
			'highPrice': 384.75,
			'time': '2018-09-03 12:22',
			'close': 384.75,
			'volumefrom': 3585.0,
			'lowPrice': 384.6
		}, {
			'open': 384.8,
			'highPrice': 384.8,
			'time': '2018-09-03 12:23',
			'close': 384.65,
			'volumefrom': 3562.0,
			'lowPrice': 384.55
		}, {
			'open': 384.75,
			'highPrice': 384.75,
			'time': '2018-09-03 12:24',
			'close': 384.65,
			'volumefrom': 1349.0,
			'lowPrice': 384.55
		}, {
			'open': 384.65,
			'highPrice': 384.75,
			'time': '2018-09-03 12:25',
			'close': 384.65,
			'volumefrom': 3930.0,
			'lowPrice': 384.55
		}, {
			'open': 384.65,
			'highPrice': 384.8,
			'time': '2018-09-03 12:26',
			'close': 384.8,
			'volumefrom': 1647.0,
			'lowPrice': 384.65
		}, {
			'open': 384.7,
			'highPrice': 384.8,
			'time': '2018-09-03 12:27',
			'close': 384.75,
			'volumefrom': 1848.0,
			'lowPrice': 384.65
		}, {
			'open': 384.65,
			'highPrice': 384.8,
			'time': '2018-09-03 12:28',
			'close': 384.65,
			'volumefrom': 1177.0,
			'lowPrice': 384.65
		}, {
			'open': 384.75,
			'highPrice': 384.8,
			'time': '2018-09-03 12:29',
			'close': 384.7,
			'volumefrom': 1215.0,
			'lowPrice': 384.65
		}, {
			'open': 384.65,
			'highPrice': 384.8,
			'time': '2018-09-03 12:30',
			'close': 384.8,
			'volumefrom': 2452.0,
			'lowPrice': 384.65
		}, {
			'open': 384.8,
			'highPrice': 384.85,
			'time': '2018-09-03 12:31',
			'close': 384.8,
			'volumefrom': 1001.0,
			'lowPrice': 384.7
		}, {
			'open': 384.8,
			'highPrice': 384.85,
			'time': '2018-09-03 12:32',
			'close': 384.75,
			'volumefrom': 1881.0,
			'lowPrice': 384.65
		}, {
			'open': 384.8,
			'highPrice': 385.0,
			'time': '2018-09-03 12:33',
			'close': 384.9,
			'volumefrom': 5120.0,
			'lowPrice': 384.75
		}, {
			'open': 384.9,
			'highPrice': 385.2,
			'time': '2018-09-03 12:34',
			'close': 385.0,
			'volumefrom': 9868.0,
			'lowPrice': 384.9
		}, {
			'open': 385.1,
			'highPrice': 385.45,
			'time': '2018-09-03 12:35',
			'close': 385.1,
			'volumefrom': 3526.0,
			'lowPrice': 385.0
		}, {
			'open': 385.25,
			'highPrice': 385.4,
			'time': '2018-09-03 12:36',
			'close': 384.95,
			'volumefrom': 5799.0,
			'lowPrice': 384.9
		}, {
			'open': 384.7,
			'highPrice': 385.4,
			'time': '2018-09-03 12:37',
			'close': 385.0,
			'volumefrom': 13065.0,
			'lowPrice': 384.7
		}, {
			'open': 384.85,
			'highPrice': 384.9,
			'time': '2018-09-03 12:38',
			'close': 384.6,
			'volumefrom': 6718.0,
			'lowPrice': 384.5
		}, {
			'open': 384.6,
			'highPrice': 384.75,
			'time': '2018-09-03 12:39',
			'close': 384.65,
			'volumefrom': 8779.0,
			'lowPrice': 384.4
		}, {
			'open': 384.7,
			'highPrice': 385.1,
			'time': '2018-09-03 12:40',
			'close': 384.8,
			'volumefrom': 4219.0,
			'lowPrice': 384.65
		}, {
			'open': 384.7,
			'highPrice': 384.9,
			'time': '2018-09-03 12:41',
			'close': 384.75,
			'volumefrom': 2940.0,
			'lowPrice': 384.6
		}, {
			'open': 384.7,
			'highPrice': 385.0,
			'time': '2018-09-03 12:42',
			'close': 384.65,
			'volumefrom': 12701.0,
			'lowPrice': 384.65
		}, {
			'open': 384.65,
			'highPrice': 384.85,
			'time': '2018-09-03 12:43',
			'close': 384.85,
			'volumefrom': 12709.0,
			'lowPrice': 384.6
		}, {
			'open': 384.9,
			'highPrice': 385.0,
			'time': '2018-09-03 12:44',
			'close': 384.6,
			'volumefrom': 4621.0,
			'lowPrice': 384.6
		}, {
			'open': 384.6,
			'highPrice': 385.0,
			'time': '2018-09-03 12:45',
			'close': 384.95,
			'volumefrom': 5461.0,
			'lowPrice': 384.6
		}, {
			'open': 384.95,
			'highPrice': 385.05,
			'time': '2018-09-03 12:46',
			'close': 384.9,
			'volumefrom': 1714.0,
			'lowPrice': 384.8
		}, {
			'open': 384.9,
			'highPrice': 385.0,
			'time': '2018-09-03 12:47',
			'close': 384.95,
			'volumefrom': 4468.0,
			'lowPrice': 384.85
		}, {
			'open': 385.0,
			'highPrice': 385.15,
			'time': '2018-09-03 12:48',
			'close': 385.05,
			'volumefrom': 2462.0,
			'lowPrice': 384.95
		}, {
			'open': 385.05,
			'highPrice': 385.3,
			'time': '2018-09-03 12:49',
			'close': 385.3,
			'volumefrom': 2541.0,
			'lowPrice': 385.05
		}, {
			'open': 385.15,
			'highPrice': 385.4,
			'time': '2018-09-03 12:50',
			'close': 385.15,
			'volumefrom': 2811.0,
			'lowPrice': 385.15
		}, {
			'open': 385.15,
			'highPrice': 385.25,
			'time': '2018-09-03 12:51',
			'close': 385.2,
			'volumefrom': 2173.0,
			'lowPrice': 385.15
		}, {
			'open': 385.25,
			'highPrice': 385.5,
			'time': '2018-09-03 12:52',
			'close': 385.45,
			'volumefrom': 3943.0,
			'lowPrice': 385.25
		}, {
			'open': 385.45,
			'highPrice': 385.5,
			'time': '2018-09-03 12:53',
			'close': 385.3,
			'volumefrom': 2299.0,
			'lowPrice': 385.3
		}, {
			'open': 385.25,
			'highPrice': 385.45,
			'time': '2018-09-03 12:54',
			'close': 385.45,
			'volumefrom': 971.0,
			'lowPrice': 385.2
		}, {
			'open': 385.25,
			'highPrice': 385.45,
			'time': '2018-09-03 12:55',
			'close': 385.25,
			'volumefrom': 1592.0,
			'lowPrice': 385.2
		}, {
			'open': 385.25,
			'highPrice': 385.45,
			'time': '2018-09-03 12:56',
			'close': 385.45,
			'volumefrom': 1649.0,
			'lowPrice': 385.15
		}, {
			'open': 385.3,
			'highPrice': 385.4,
			'time': '2018-09-03 12:57',
			'close': 385.2,
			'volumefrom': 2482.0,
			'lowPrice': 385.15
		}, {
			'open': 385.2,
			'highPrice': 385.25,
			'time': '2018-09-03 12:58',
			'close': 385.0,
			'volumefrom': 3414.0,
			'lowPrice': 385.0
		}, {
			'open': 385.05,
			'highPrice': 385.1,
			'time': '2018-09-03 12:59',
			'close': 384.9,
			'volumefrom': 6312.0,
			'lowPrice': 384.85
		}, {
			'open': 384.9,
			'highPrice': 384.95,
			'time': '2018-09-03 13:00',
			'close': 384.6,
			'volumefrom': 7762.0,
			'lowPrice': 384.6
		}, {
			'open': 384.65,
			'highPrice': 384.85,
			'time': '2018-09-03 13:01',
			'close': 384.75,
			'volumefrom': 1727.0,
			'lowPrice': 384.6
		}, {
			'open': 384.75,
			'highPrice': 385.0,
			'time': '2018-09-03 13:02',
			'close': 384.8,
			'volumefrom': 2277.0,
			'lowPrice': 384.65
		}, {
			'open': 385.05,
			'highPrice': 385.05,
			'time': '2018-09-03 13:03',
			'close': 385.0,
			'volumefrom': 1365.0,
			'lowPrice': 384.8
		}, {
			'open': 385.0,
			'highPrice': 385.1,
			'time': '2018-09-03 13:04',
			'close': 385.05,
			'volumefrom': 905.0,
			'lowPrice': 384.95
		}, {
			'open': 385.1,
			'highPrice': 385.15,
			'time': '2018-09-03 13:05',
			'close': 384.85,
			'volumefrom': 4853.0,
			'lowPrice': 384.7
		}, {
			'open': 384.85,
			'highPrice': 385.0,
			'time': '2018-09-03 13:06',
			'close': 384.9,
			'volumefrom': 2681.0,
			'lowPrice': 384.7
		}, {
			'open': 384.95,
			'highPrice': 385.05,
			'time': '2018-09-03 13:07',
			'close': 384.7,
			'volumefrom': 3472.0,
			'lowPrice': 384.7
		}, {
			'open': 384.75,
			'highPrice': 385.1,
			'time': '2018-09-03 13:08',
			'close': 384.85,
			'volumefrom': 1539.0,
			'lowPrice': 384.75
		}, {
			'open': 384.9,
			'highPrice': 385.1,
			'time': '2018-09-03 13:09',
			'close': 385.0,
			'volumefrom': 1051.0,
			'lowPrice': 384.85
		}, {
			'open': 385.0,
			'highPrice': 385.15,
			'time': '2018-09-03 13:10',
			'close': 384.9,
			'volumefrom': 878.0,
			'lowPrice': 384.9
		}, {
			'open': 384.9,
			'highPrice': 385.15,
			'time': '2018-09-03 13:11',
			'close': 385.15,
			'volumefrom': 777.0,
			'lowPrice': 384.85
		}, {
			'open': 385.1,
			'highPrice': 385.25,
			'time': '2018-09-03 13:12',
			'close': 385.0,
			'volumefrom': 4196.0,
			'lowPrice': 384.9
		}, {
			'open': 384.9,
			'highPrice': 385.05,
			'time': '2018-09-03 13:13',
			'close': 384.95,
			'volumefrom': 2851.0,
			'lowPrice': 384.85
		}, {
			'open': 384.95,
			'highPrice': 385.25,
			'time': '2018-09-03 13:14',
			'close': 385.05,
			'volumefrom': 1576.0,
			'lowPrice': 384.9
		}, {
			'open': 385.05,
			'highPrice': 385.25,
			'time': '2018-09-03 13:15',
			'close': 385.05,
			'volumefrom': 1049.0,
			'lowPrice': 384.95
		}, {
			'open': 385.05,
			'highPrice': 385.15,
			'time': '2018-09-03 13:16',
			'close': 385.0,
			'volumefrom': 6517.0,
			'lowPrice': 384.95
		}, {
			'open': 385.0,
			'highPrice': 385.2,
			'time': '2018-09-03 13:17',
			'close': 385.0,
			'volumefrom': 1415.0,
			'lowPrice': 384.95
		}, {
			'open': 385.0,
			'highPrice': 385.1,
			'time': '2018-09-03 13:18',
			'close': 384.85,
			'volumefrom': 12316.0,
			'lowPrice': 384.85
		}, {
			'open': 384.85,
			'highPrice': 385.2,
			'time': '2018-09-03 13:19',
			'close': 384.9,
			'volumefrom': 4411.0,
			'lowPrice': 384.85
		}, {
			'open': 384.85,
			'highPrice': 385.1,
			'time': '2018-09-03 13:20',
			'close': 385.0,
			'volumefrom': 1134.0,
			'lowPrice': 384.85
		}, {
			'open': 384.85,
			'highPrice': 385.85,
			'time': '2018-09-03 13:21',
			'close': 385.2,
			'volumefrom': 28891.0,
			'lowPrice': 384.85
		}, {
			'open': 385.2,
			'highPrice': 385.35,
			'time': '2018-09-03 13:22',
			'close': 385.0,
			'volumefrom': 5044.0,
			'lowPrice': 385.0
		}, {
			'open': 385.0,
			'highPrice': 385.15,
			'time': '2018-09-03 13:23',
			'close': 385.05,
			'volumefrom': 1985.0,
			'lowPrice': 385.0
		}, {
			'open': 385.1,
			'highPrice': 385.1,
			'time': '2018-09-03 13:24',
			'close': 385.05,
			'volumefrom': 12981.0,
			'lowPrice': 385.05
		}, {
			'open': 385.05,
			'highPrice': 385.35,
			'time': '2018-09-03 13:25',
			'close': 385.05,
			'volumefrom': 3638.0,
			'lowPrice': 385.05
		}, {
			'open': 385.05,
			'highPrice': 385.3,
			'time': '2018-09-03 13:26',
			'close': 385.15,
			'volumefrom': 1889.0,
			'lowPrice': 385.05
		}, {
			'open': 385.1,
			'highPrice': 385.3,
			'time': '2018-09-03 13:27',
			'close': 385.25,
			'volumefrom': 6662.0,
			'lowPrice': 384.95
		}, {
			'open': 385.2,
			'highPrice': 385.2,
			'time': '2018-09-03 13:28',
			'close': 384.95,
			'volumefrom': 9610.0,
			'lowPrice': 384.8
		}, {
			'open': 384.9,
			'highPrice': 385.7,
			'time': '2018-09-03 13:29',
			'close': 385.45,
			'volumefrom': 28993.0,
			'lowPrice': 384.9
		}, {
			'open': 385.25,
			'highPrice': 386.45,
			'time': '2018-09-03 13:30',
			'close': 385.55,
			'volumefrom': 75319.0,
			'lowPrice': 384.65
		}, {
			'open': 385.5,
			'highPrice': 386.2,
			'time': '2018-09-03 13:31',
			'close': 385.45,
			'volumefrom': 30576.0,
			'lowPrice': 385.35
		}, {
			'open': 385.5,
			'highPrice': 385.6,
			'time': '2018-09-03 13:32',
			'close': 384.65,
			'volumefrom': 47308.0,
			'lowPrice': 384.65
		}, {
			'open': 384.65,
			'highPrice': 384.85,
			'time': '2018-09-03 13:33',
			'close': 384.8,
			'volumefrom': 10503.0,
			'lowPrice': 384.5
		}, {
			'open': 384.8,
			'highPrice': 385.3,
			'time': '2018-09-03 13:34',
			'close': 384.8,
			'volumefrom': 7412.0,
			'lowPrice': 384.8
		}, {
			'open': 384.8,
			'highPrice': 385.05,
			'time': '2018-09-03 13:35',
			'close': 384.8,
			'volumefrom': 6112.0,
			'lowPrice': 384.8
		}, {
			'open': 384.8,
			'highPrice': 385.0,
			'time': '2018-09-03 13:36',
			'close': 384.4,
			'volumefrom': 6430.0,
			'lowPrice': 384.3
		}, {
			'open': 384.2,
			'highPrice': 384.4,
			'time': '2018-09-03 13:37',
			'close': 384.4,
			'volumefrom': 8128.0,
			'lowPrice': 384.0
		}, {
			'open': 384.35,
			'highPrice': 384.45,
			'time': '2018-09-03 13:38',
			'close': 383.75,
			'volumefrom': 6673.0,
			'lowPrice': 383.75
		}, {
			'open': 383.7,
			'highPrice': 384.5,
			'time': '2018-09-03 13:39',
			'close': 384.35,
			'volumefrom': 4869.0,
			'lowPrice': 383.7
		}, {
			'open': 384.4,
			'highPrice': 384.5,
			'time': '2018-09-03 13:40',
			'close': 384.45,
			'volumefrom': 3130.0,
			'lowPrice': 384.15
		}, {
			'open': 384.5,
			'highPrice': 385.2,
			'time': '2018-09-03 13:41',
			'close': 385.2,
			'volumefrom': 2270.0,
			'lowPrice': 384.45
		}, {
			'open': 385.15,
			'highPrice': 385.2,
			'time': '2018-09-03 13:42',
			'close': 384.45,
			'volumefrom': 2764.0,
			'lowPrice': 384.4
		}, {
			'open': 384.45,
			'highPrice': 384.9,
			'time': '2018-09-03 13:43',
			'close': 384.9,
			'volumefrom': 1795.0,
			'lowPrice': 384.45
		}, {
			'open': 384.8,
			'highPrice': 384.9,
			'time': '2018-09-03 13:44',
			'close': 384.75,
			'volumefrom': 1332.0,
			'lowPrice': 384.5
		}, {
			'open': 384.85,
			'highPrice': 385.1,
			'time': '2018-09-03 13:45',
			'close': 385.05,
			'volumefrom': 6379.0,
			'lowPrice': 384.7
		}, {
			'open': 385.05,
			'highPrice': 385.15,
			'time': '2018-09-03 13:46',
			'close': 385.1,
			'volumefrom': 2523.0,
			'lowPrice': 385.0
		}, {
			'open': 385.1,
			'highPrice': 385.3,
			'time': '2018-09-03 13:47',
			'close': 384.75,
			'volumefrom': 5477.0,
			'lowPrice': 384.75
		}, {
			'open': 384.8,
			'highPrice': 385.2,
			'time': '2018-09-03 13:48',
			'close': 385.1,
			'volumefrom': 1452.0,
			'lowPrice': 384.8
		}, {
			'open': 385.15,
			'highPrice': 385.25,
			'time': '2018-09-03 13:49',
			'close': 385.25,
			'volumefrom': 1581.0,
			'lowPrice': 384.9
		}, {
			'open': 385.25,
			'highPrice': 385.25,
			'time': '2018-09-03 13:50',
			'close': 385.0,
			'volumefrom': 5610.0,
			'lowPrice': 384.85
		}, {
			'open': 385.1,
			'highPrice': 385.2,
			'time': '2018-09-03 13:51',
			'close': 385.0,
			'volumefrom': 1105.0,
			'lowPrice': 385.0
		}, {
			'open': 385.0,
			'highPrice': 385.15,
			'time': '2018-09-03 13:52',
			'close': 385.1,
			'volumefrom': 1449.0,
			'lowPrice': 384.9
		}, {
			'open': 385.15,
			'highPrice': 385.15,
			'time': '2018-09-03 13:53',
			'close': 384.9,
			'volumefrom': 2114.0,
			'lowPrice': 384.75
		}, {
			'open': 385.0,
			'highPrice': 385.1,
			'time': '2018-09-03 13:54',
			'close': 385.1,
			'volumefrom': 2012.0,
			'lowPrice': 384.95
		}, {
			'open': 385.0,
			'highPrice': 385.1,
			'time': '2018-09-03 13:55',
			'close': 384.9,
			'volumefrom': 1398.0,
			'lowPrice': 384.9
		}, {
			'open': 384.95,
			'highPrice': 385.0,
			'time': '2018-09-03 13:56',
			'close': 384.7,
			'volumefrom': 8340.0,
			'lowPrice': 384.65
		}, {
			'open': 384.75,
			'highPrice': 385.0,
			'time': '2018-09-03 13:57',
			'close': 384.65,
			'volumefrom': 2337.0,
			'lowPrice': 384.6
		}, {
			'open': 384.8,
			'highPrice': 385.0,
			'time': '2018-09-03 13:58',
			'close': 384.8,
			'volumefrom': 4827.0,
			'lowPrice': 384.6
		}, {
			'open': 384.85,
			'highPrice': 385.0,
			'time': '2018-09-03 13:59',
			'close': 384.7,
			'volumefrom': 4327.0,
			'lowPrice': 384.7
		}, {
			'open': 384.75,
			'highPrice': 384.95,
			'time': '2018-09-03 14:00',
			'close': 384.95,
			'volumefrom': 60662.0,
			'lowPrice': 384.7
		}, {
			'open': 385.2,
			'highPrice': 385.3,
			'time': '2018-09-03 14:01',
			'close': 384.8,
			'volumefrom': 18175.0,
			'lowPrice': 384.8
		}, {
			'open': 384.8,
			'highPrice': 385.15,
			'time': '2018-09-03 14:02',
			'close': 384.95,
			'volumefrom': 42927.0,
			'lowPrice': 384.7
		}, {
			'open': 384.9,
			'highPrice': 385.2,
			'time': '2018-09-03 14:03',
			'close': 385.0,
			'volumefrom': 2591.0,
			'lowPrice': 384.9
		}, {
			'open': 385.0,
			'highPrice': 385.15,
			'time': '2018-09-03 14:04',
			'close': 385.05,
			'volumefrom': 1909.0,
			'lowPrice': 384.9
		}, {
			'open': 385.05,
			'highPrice': 385.2,
			'time': '2018-09-03 14:05',
			'close': 384.85,
			'volumefrom': 8394.0,
			'lowPrice': 384.8
		}, {
			'open': 385.0,
			'highPrice': 385.15,
			'time': '2018-09-03 14:06',
			'close': 385.05,
			'volumefrom': 17880.0,
			'lowPrice': 384.85
		}, {
			'open': 385.0,
			'highPrice': 385.1,
			'time': '2018-09-03 14:07',
			'close': 385.05,
			'volumefrom': 3616.0,
			'lowPrice': 384.8
		}, {
			'open': 385.0,
			'highPrice': 385.15,
			'time': '2018-09-03 14:08',
			'close': 385.0,
			'volumefrom': 10851.0,
			'lowPrice': 384.75
		}, {
			'open': 385.1,
			'highPrice': 385.1,
			'time': '2018-09-03 14:09',
			'close': 384.95,
			'volumefrom': 2566.0,
			'lowPrice': 384.95
		}, {
			'open': 385.0,
			'highPrice': 385.1,
			'time': '2018-09-03 14:10',
			'close': 384.95,
			'volumefrom': 15204.0,
			'lowPrice': 384.85
		}, {
			'open': 384.9,
			'highPrice': 385.25,
			'time': '2018-09-03 14:11',
			'close': 385.0,
			'volumefrom': 10194.0,
			'lowPrice': 384.85
		}, {
			'open': 385.0,
			'highPrice': 385.1,
			'time': '2018-09-03 14:12',
			'close': 385.0,
			'volumefrom': 2909.0,
			'lowPrice': 385.0
		}, {
			'open': 385.0,
			'highPrice': 385.1,
			'time': '2018-09-03 14:13',
			'close': 384.95,
			'volumefrom': 9542.0,
			'lowPrice': 384.85
		}, {
			'open': 384.75,
			'highPrice': 385.0,
			'time': '2018-09-03 14:14',
			'close': 384.75,
			'volumefrom': 31437.0,
			'lowPrice': 384.5
		}, {
			'open': 384.7,
			'highPrice': 385.1,
			'time': '2018-09-03 14:15',
			'close': 385.0,
			'volumefrom': 18159.0,
			'lowPrice': 384.6
		}, {
			'open': 384.85,
			'highPrice': 385.45,
			'time': '2018-09-03 14:16',
			'close': 385.45,
			'volumefrom': 5686.0,
			'lowPrice': 384.75
		}, {
			'open': 385.25,
			'highPrice': 385.45,
			'time': '2018-09-03 14:17',
			'close': 385.35,
			'volumefrom': 14818.0,
			'lowPrice': 385.15
		}, {
			'open': 385.3,
			'highPrice': 385.4,
			'time': '2018-09-03 14:18',
			'close': 385.4,
			'volumefrom': 4825.0,
			'lowPrice': 385.0
		}, {
			'open': 385.35,
			'highPrice': 385.35,
			'time': '2018-09-03 14:19',
			'close': 384.85,
			'volumefrom': 5816.0,
			'lowPrice': 384.7
		}, {
			'open': 384.85,
			'highPrice': 385.05,
			'time': '2018-09-03 14:20',
			'close': 384.9,
			'volumefrom': 5386.0,
			'lowPrice': 384.7
		}, {
			'open': 384.8,
			'highPrice': 384.95,
			'time': '2018-09-03 14:21',
			'close': 384.95,
			'volumefrom': 9105.0,
			'lowPrice': 384.6
		}, {
			'open': 384.9,
			'highPrice': 385.0,
			'time': '2018-09-03 14:22',
			'close': 384.75,
			'volumefrom': 1383.0,
			'lowPrice': 384.75
		}, {
			'open': 384.8,
			'highPrice': 384.9,
			'time': '2018-09-03 14:23',
			'close': 384.9,
			'volumefrom': 1176.0,
			'lowPrice': 384.8
		}, {
			'open': 384.8,
			'highPrice': 384.9,
			'time': '2018-09-03 14:24',
			'close': 384.8,
			'volumefrom': 7331.0,
			'lowPrice': 384.55
		}, {
			'open': 384.65,
			'highPrice': 384.8,
			'time': '2018-09-03 14:25',
			'close': 384.5,
			'volumefrom': 6268.0,
			'lowPrice': 384.4
		}, {
			'open': 384.4,
			'highPrice': 384.5,
			'time': '2018-09-03 14:26',
			'close': 384.3,
			'volumefrom': 16374.0,
			'lowPrice': 384.0
		}, {
			'open': 384.35,
			'highPrice': 384.55,
			'time': '2018-09-03 14:27',
			'close': 384.45,
			'volumefrom': 8651.0,
			'lowPrice': 384.3
		}, {
			'open': 384.5,
			'highPrice': 384.5,
			'time': '2018-09-03 14:28',
			'close': 384.5,
			'volumefrom': 853.0,
			'lowPrice': 384.4
		}, {
			'open': 384.4,
			'highPrice': 384.65,
			'time': '2018-09-03 14:29',
			'close': 384.45,
			'volumefrom': 5342.0,
			'lowPrice': 384.4
		}, {
			'open': 384.45,
			'highPrice': 384.5,
			'time': '2018-09-03 14:30',
			'close': 384.45,
			'volumefrom': 3282.0,
			'lowPrice': 384.4
		}, {
			'open': 384.45,
			'highPrice': 384.5,
			'time': '2018-09-03 14:31',
			'close': 384.45,
			'volumefrom': 2012.0,
			'lowPrice': 384.4
		}, {
			'open': 384.45,
			'highPrice': 384.65,
			'time': '2018-09-03 14:32',
			'close': 384.5,
			'volumefrom': 2646.0,
			'lowPrice': 384.4
		}, {
			'open': 384.4,
			'highPrice': 384.75,
			'time': '2018-09-03 14:33',
			'close': 384.5,
			'volumefrom': 8413.0,
			'lowPrice': 384.4
		}, {
			'open': 384.55,
			'highPrice': 384.75,
			'time': '2018-09-03 14:34',
			'close': 384.5,
			'volumefrom': 5082.0,
			'lowPrice': 384.4
		}, {
			'open': 384.4,
			'highPrice': 384.5,
			'time': '2018-09-03 14:35',
			'close': 384.4,
			'volumefrom': 4906.0,
			'lowPrice': 384.4
		}, {
			'open': 384.5,
			'highPrice': 384.5,
			'time': '2018-09-03 14:36',
			'close': 384.4,
			'volumefrom': 9099.0,
			'lowPrice': 384.35
		}, {
			'open': 384.4,
			'highPrice': 384.5,
			'time': '2018-09-03 14:37',
			'close': 384.45,
			'volumefrom': 4077.0,
			'lowPrice': 384.4
		}, {
			'open': 384.4,
			'highPrice': 384.5,
			'time': '2018-09-03 14:38',
			'close': 384.4,
			'volumefrom': 12674.0,
			'lowPrice': 384.35
		}, {
			'open': 384.4,
			'highPrice': 384.5,
			'time': '2018-09-03 14:39',
			'close': 384.5,
			'volumefrom': 8421.0,
			'lowPrice': 384.35
		}, {
			'open': 384.4,
			'highPrice': 384.5,
			'time': '2018-09-03 14:40',
			'close': 384.45,
			'volumefrom': 5501.0,
			'lowPrice': 384.25
		}, {
			'open': 384.45,
			'highPrice': 384.5,
			'time': '2018-09-03 14:41',
			'close': 384.45,
			'volumefrom': 7491.0,
			'lowPrice': 384.45
		}, {
			'open': 384.45,
			'highPrice': 384.5,
			'time': '2018-09-03 14:42',
			'close': 384.4,
			'volumefrom': 3920.0,
			'lowPrice': 384.4
		}, {
			'open': 384.4,
			'highPrice': 384.45,
			'time': '2018-09-03 14:43',
			'close': 384.4,
			'volumefrom': 38128.0,
			'lowPrice': 384.15
		}, {
			'open': 384.4,
			'highPrice': 384.5,
			'time': '2018-09-03 14:44',
			'close': 384.15,
			'volumefrom': 11438.0,
			'lowPrice': 384.15
		}, {
			'open': 384.3,
			'highPrice': 384.9,
			'time': '2018-09-03 14:45',
			'close': 384.45,
			'volumefrom': 8424.0,
			'lowPrice': 384.15
		}, {
			'open': 384.35,
			'highPrice': 384.9,
			'time': '2018-09-03 14:46',
			'close': 384.85,
			'volumefrom': 1862.0,
			'lowPrice': 384.3
		}, {
			'open': 384.9,
			'highPrice': 384.9,
			'time': '2018-09-03 14:47',
			'close': 384.65,
			'volumefrom': 6693.0,
			'lowPrice': 384.5
		}, {
			'open': 384.65,
			'highPrice': 384.85,
			'time': '2018-09-03 14:48',
			'close': 384.65,
			'volumefrom': 5035.0,
			'lowPrice': 384.5
		}, {
			'open': 384.7,
			'highPrice': 384.85,
			'time': '2018-09-03 14:49',
			'close': 384.7,
			'volumefrom': 1259.0,
			'lowPrice': 384.65
		}, {
			'open': 384.75,
			'highPrice': 384.8,
			'time': '2018-09-03 14:50',
			'close': 384.7,
			'volumefrom': 3542.0,
			'lowPrice': 384.4
		}, {
			'open': 384.7,
			'highPrice': 384.9,
			'time': '2018-09-03 14:51',
			'close': 384.8,
			'volumefrom': 3215.0,
			'lowPrice': 384.5
		}, {
			'open': 384.7,
			'highPrice': 384.95,
			'time': '2018-09-03 14:52',
			'close': 384.8,
			'volumefrom': 1375.0,
			'lowPrice': 384.6
		}, {
			'open': 384.8,
			'highPrice': 384.95,
			'time': '2018-09-03 14:53',
			'close': 384.65,
			'volumefrom': 2655.0,
			'lowPrice': 384.55
		}, {
			'open': 384.65,
			'highPrice': 384.65,
			'time': '2018-09-03 14:54',
			'close': 384.35,
			'volumefrom': 5171.0,
			'lowPrice': 384.35
		}, {
			'open': 384.35,
			'highPrice': 384.7,
			'time': '2018-09-03 14:55',
			'close': 384.55,
			'volumefrom': 3582.0,
			'lowPrice': 384.35
		}, {
			'open': 384.55,
			'highPrice': 384.55,
			'time': '2018-09-03 14:56',
			'close': 384.5,
			'volumefrom': 5488.0,
			'lowPrice': 384.35
		}, {
			'open': 384.4,
			'highPrice': 384.45,
			'time': '2018-09-03 14:57',
			'close': 384.4,
			'volumefrom': 4417.0,
			'lowPrice': 384.25
		}, {
			'open': 384.25,
			'highPrice': 384.4,
			'time': '2018-09-03 14:58',
			'close': 384.3,
			'volumefrom': 25980.0,
			'lowPrice': 384.0
		}, {
			'open': 384.3,
			'highPrice': 384.35,
			'time': '2018-09-03 14:59',
			'close': 384.3,
			'volumefrom': 18022.0,
			'lowPrice': 384.1
		}, {
			'open': 384.0,
			'highPrice': 384.45,
			'time': '2018-09-03 15:00',
			'close': 384.0,
			'volumefrom': 33331.0,
			'lowPrice': 384.0
		}, {
			'open': 384.05,
			'highPrice': 384.3,
			'time': '2018-09-03 15:01',
			'close': 383.6,
			'volumefrom': 38887.0,
			'lowPrice': 383.45
		}, {
			'open': 383.55,
			'highPrice': 383.55,
			'time': '2018-09-03 15:02',
			'close': 383.05,
			'volumefrom': 40120.0,
			'lowPrice': 382.85
		}, {
			'open': 383.05,
			'highPrice': 384.05,
			'time': '2018-09-03 15:03',
			'close': 383.55,
			'volumefrom': 118605.0,
			'lowPrice': 382.9
		}, {
			'open': 383.75,
			'highPrice': 384.2,
			'time': '2018-09-03 15:04',
			'close': 384.2,
			'volumefrom': 43474.0,
			'lowPrice': 383.5
		}, {
			'open': 384.05,
			'highPrice': 384.5,
			'time': '2018-09-03 15:05',
			'close': 384.0,
			'volumefrom': 35314.0,
			'lowPrice': 383.95
		}, {
			'open': 383.95,
			'highPrice': 384.15,
			'time': '2018-09-03 15:06',
			'close': 384.0,
			'volumefrom': 27811.0,
			'lowPrice': 383.85
		}, {
			'open': 384.0,
			'highPrice': 384.3,
			'time': '2018-09-03 15:07',
			'close': 384.25,
			'volumefrom': 28548.0,
			'lowPrice': 383.8
		}, {
			'open': 384.15,
			'highPrice': 384.3,
			'time': '2018-09-03 15:08',
			'close': 384.15,
			'volumefrom': 49475.0,
			'lowPrice': 383.75
		}, {
			'open': 384.35,
			'highPrice': 384.7,
			'time': '2018-09-03 15:09',
			'close': 384.35,
			'volumefrom': 19185.0,
			'lowPrice': 384.2
		}, {
			'open': 384.3,
			'highPrice': 384.45,
			'time': '2018-09-03 15:10',
			'close': 384.0,
			'volumefrom': 19182.0,
			'lowPrice': 383.85
		}, {
			'open': 383.85,
			'highPrice': 383.9,
			'time': '2018-09-03 15:11',
			'close': 382.85,
			'volumefrom': 22151.0,
			'lowPrice': 382.25
		}, {
			'open': 382.9,
			'highPrice': 383.2,
			'time': '2018-09-03 15:12',
			'close': 383.2,
			'volumefrom': 21201.0,
			'lowPrice': 382.25
		}, {
			'open': 382.8,
			'highPrice': 382.9,
			'time': '2018-09-03 15:13',
			'close': 381.85,
			'volumefrom': 32381.0,
			'lowPrice': 381.8
		}, {
			'open': 381.8,
			'highPrice': 382.3,
			'time': '2018-09-03 15:14',
			'close': 382.2,
			'volumefrom': 24080.0,
			'lowPrice': 381.6
		}, {
			'open': 382.2,
			'highPrice': 382.3,
			'time': '2018-09-03 15:15',
			'close': 382.0,
			'volumefrom': 36105.0,
			'lowPrice': 381.9
		}, {
			'open': 382.15,
			'highPrice': 383.0,
			'time': '2018-09-03 15:16',
			'close': 383.0,
			'volumefrom': 39011.0,
			'lowPrice': 381.7
		}, {
			'open': 382.9,
			'highPrice': 384.2,
			'time': '2018-09-03 15:17',
			'close': 384.0,
			'volumefrom': 89279.0,
			'lowPrice': 382.8
		}, {
			'open': 384.05,
			'highPrice': 384.05,
			'time': '2018-09-03 15:18',
			'close': 383.9,
			'volumefrom': 96740.0,
			'lowPrice': 383.55
		}, {
			'open': 383.85,
			'highPrice': 383.9,
			'time': '2018-09-03 15:19',
			'close': 383.8,
			'volumefrom': 39743.0,
			'lowPrice': 383.25
		}, {
			'open': 383.4,
			'highPrice': 384.9,
			'time': '2018-09-03 15:20',
			'close': 384.75,
			'volumefrom': 61244.0,
			'lowPrice': 383.4
		}, {
			'open': 384.75,
			'highPrice': 384.75,
			'time': '2018-09-03 15:21',
			'close': 383.45,
			'volumefrom': 26954.0,
			'lowPrice': 383.35
		}, {
			'open': 383.4,
			'highPrice': 384.75,
			'time': '2018-09-03 15:22',
			'close': 384.65,
			'volumefrom': 57405.0,
			'lowPrice': 383.4
		}, {
			'open': 384.5,
			'highPrice': 385.0,
			'time': '2018-09-03 15:23',
			'close': 384.8,
			'volumefrom': 72983.0,
			'lowPrice': 384.5
		}, {
			'open': 384.6,
			'highPrice': 384.9,
			'time': '2018-09-03 15:24',
			'close': 384.8,
			'volumefrom': 45631.0,
			'lowPrice': 384.5
		}, {
			'open': 384.8,
			'highPrice': 385.25,
			'time': '2018-09-03 15:25',
			'close': 385.0,
			'volumefrom': 87921.0,
			'lowPrice': 384.75
		}, {
			'open': 385.05,
			'highPrice': 385.05,
			'time': '2018-09-03 15:26',
			'close': 384.5,
			'volumefrom': 78560.0,
			'lowPrice': 383.7
		}, {
			'open': 384.5,
			'highPrice': 385.2,
			'time': '2018-09-03 15:27',
			'close': 385.0,
			'volumefrom': 62976.0,
			'lowPrice': 384.5
		}, {
			'open': 385.15,
			'highPrice': 385.15,
			'time': '2018-09-03 15:28',
			'close': 381.75,
			'volumefrom': 48422.0,
			'lowPrice': 381.7
		}, {
			'open': 381.75,
			'highPrice': 381.75,
			'time': '2018-09-03 15:29',
			'close': 381.15,
			'volumefrom': 9227.0,
			'lowPrice': 381.0
		}, {
			'open': 381.15,
			'highPrice': 382.75,
			'time': '2018-09-03 15:30',
			'close': 382.1,
			'volumefrom': 8440.0,
			'lowPrice': 380.45
		}, {
			'open': 382.1,
			'highPrice': 382.1,
			'time': '2018-09-03 15:31',
			'close': 382.1,
			'volumefrom': 1.0,
			'lowPrice': 382.1
		}, {
			'open': 383.8,
			'highPrice': 383.8,
			'time': '2018-09-03 15:32',
			'close': 383.8,
			'volumefrom': 1.0,
			'lowPrice': 383.8
		}, {
			'open': 383.8,
			'highPrice': 383.8,
			'time': '2018-09-03 15:41',
			'close': 383.8,
			'volumefrom': 92.0,
			'lowPrice': 383.8
		}, {
			'open': 383.8,
			'highPrice': 383.8,
			'time': '2018-09-03 15:46',
			'close': 383.8,
			'volumefrom': 5.0,
			'lowPrice': 383.8
		}, {
			'open': 383.8,
			'highPrice': 383.8,
			'time': '2018-09-03 15:57',
			'close': 383.8,
			'volumefrom': 300.0,
			'lowPrice': 383.8
		}, {
			'open': 383.8,
			'highPrice': 383.8,
			'time': '2018-09-03 15:59',
			'close': 383.8,
			'volumefrom': 30.0,
			'lowPrice': 383.8
		}, {
			'open': 383.8,
			'highPrice': 383.8,
			'time': '2018-09-03 16:36',
			'close': 383.8,
			'volumefrom': 1.0,
			'lowPrice': 383.8
		}],
	FirstValueInArray: true,
	HasWarning: false,
	RateLimit: {},
	Response: 'Success',
	TimeFrom: 1541991960,
	TimeTo: 1542111960,
	Type: 100
};

export default {
	history: history,

	getBars: function (symbolInfo, resolution, from, to, first, limit) {
		var split_symbol = symbolInfo.name.split(/[:/]/)
		const url = resolution === 'D' ? '/data/histoday' : resolution >= 60 ? '/data/histohour' : '/data/histominute'
		const qs = {
			e: split_symbol[0],
			fsym: split_symbol[1],
			tsym: split_symbol[2],
			toTs: to ? to : '',
			limit: limit ? limit : 2000,
			// aggregate: 1//resolution
		}
		// console.log({qs})
		let interval = '1';
		if (resolution === '1') {
			interval = '1'
		} else if (resolution === '60') {
			interval = '60'
		} else {
			interval = '60'
		}

		return rp({
			url: `http://devapi.mastbit.com/api/Coin/GetChartFeed?coinPair=${'ETH/BTC'}&interval=${1}`,
			qs
		})
			.then(data => {
				console.log(data['value']);
				if (data['value'].length) {
					var bars = data['value'].map(el => {
						return {
							time: el.time * 1000, //TradingView requires bar time in ms
							low: el.lowPrice,
							high: el.highPrice,
							open: el.open,
							close: el.close,
							volume: el.volume
						}
					});
					if (first) {
						var lastBar = bars[bars.length - 1];
						history[symbolInfo.name] = { lastBar: lastBar }
					}
					return bars
				} else {
					return []
				}

			})
	}
}
