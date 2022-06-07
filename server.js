const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const fishingSpot = {
    'postal pond':{
        'location': '33.76845° N, 84.27718° W',
        'known species': 'large mouth bass, crappie'
    },
    'avondale lake':{
        'location': '33.76605° N, 84.26380° W',
        'known species': 'largemouth bass, bluegill, green sunfish, black crappie, spotted bass, smallmouth bass, rock bass, blue catfish, redear sunfish, redeyed bass'
    },
    'candler lake':{
        'location': '33.79912° N, 84.31424° W',
        'known species': 'largemouth bass, bluegill, green sunfish, black crappie, spotted bass, smallmouth bass, rock bass, blue catfish, redear sunfish, redeyed bass, redbreasted sunfish, black bullhead catfish, yellow bullhead catfish, pumpkinseed sunfish, creek chub'
    },
    'lullwater park':{
        'location': '33.80110° N, 84.31431° W',
        'known species': 'largemouth bass, small mouth bass, red breasted sunfish, pumpkinseed sunfish, black crappie, bluegil'
    },
    'clairmont lake':{
        'location': '33.80192° N, 84.30705° W',
        'known species': 'largemouth bass, small mouth bass, spotted bass, redeyed bass, red breasted sunfish, green sunfish, bluegil, pumpkinseed sunfish, yellow perch'
    },
    'village oak lake':{
        'location': '33.76405° N, 84.19042° W',
        'known species': 'largemouth bass, spotted bass, rock bass, bluegill, black crappie, black bullhead, redear sunfish'
    },
    'pine lake':{
        'location': '33.79181° N, 84.20658° W',
        'known species': 'largemouth bass, bluegill, black crappie, black bullhead, rock bass, redbreast sunfish, spotted bass, green sunfish, channel catfish, blue catfish, smallmouth bass, white crappie, creek chub, pumpkinseed sunfish, warmouth, redear sunfish, redeye bass'
    },
}


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req,res)=>{
    res.json(fishingSpot)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server running on prot ${PORT}! Better got catch it!`)
})