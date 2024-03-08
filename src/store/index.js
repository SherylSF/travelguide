import {createStore} from 'vuex';
const store = createStore({
    state() {
        return { 
            memories: [
            {
              id: 'm1', 
              image: "https://thereshegoesagain.org/wp-content/uploads/2018/01/seoul-photoshoot-halelee-1440x960.jpg",
              title:"10 unmissable experiences in South Korea, from cherry blossoms to bar hopping", 
              author: "Lucy",
              description: "From next-level nightlife in the capital that never sleeps to mountain trekking, forest bathing and flower viewing in the great outdoors, South Korea is a country that contains multitudes. No matter what type of traveler you are, this small peninsula has something to delight everyone. Here are our recommendations for the best things to do in South Korea."
            },
          ],
           destinations: [
            {
              id: 'd1', 
              image: "https://www.southafricavisa.com/wp-content/uploads/sites/30/2019/05/south-africa-travel-advice-1280x720.jpg",
              title:"Africa", 
              description: "Africa. There's nowhere like it on the planet for wildlife, wild lands and rich traditions that endure. \n Whether you're a wide-eyed first-timer or a frequent visitor, Africa cannot fail to win your heart. The canvas upon which the continent's epic story is written is itself astonishing, and reason enough to visit. From the lush rainforests and glorious tropical coastline of Central Africa to the rippling dunes of the Namib Desert, from the signature savannah of the Serengeti to jagged mountains, green-tinged highlands and deep-gash canyons that mark the Great Rift Valley's continental traverse – wherever you find yourself on this big, beautiful continent, Africa has few peers when it comes to natural beauty. ",
              attractions: [
                {
                    id: 'da1', 
                    image: "https://www.followmeaway.com/wp-content/uploads/2019/08/small-towns-in-italy-varenna-2.jpg",
                    category: "GARDENS",
                    title:"Jardin Majorelle", 
                    description: "French fashion designer Yves Saint Laurent and his partner Pierre Bergé bought Jardin Majorelle in 1980 to preserve the vision of its original owner, French landscape painter Jacques Majorelle, and keep it open to the public. The garden, started in 1924, contains a psychedelic desert mirage of 300 plant species from five continents. At its heart lies Majorelle's electric-blue art deco studio, home to the Musée Berbère, which showcases the rich panorama of Morocco's indigenous inhabitants through displays of some 600 artifacts."
                  },
                   {
                    id: 'da2', 
                    image: "https://media.timeout.com/images/103530963/image.jpg",
                    category: "SQUARE",
                    title:"Djemaa El Fna", 
                    description: "Roll up, roll up for the greatest show on earth. Everywhere you look in Djemaa El Fna, Marrakesh’s main square, you’ll discover drama in progress. The hoopla and halqa (street theater) have been non-stop here since the 11th century. Until a few decades ago, it hosted a daily food market for mountain traders. Now the whine of snake-charmer pungi flutes hits full throttle by mid-morning, and the show doesn't really kick off until sunset when restaurants fire up their grills, cueing musicians to tune up their instruments."
                  },
                  {
                    id: 'da3', 
                    image: "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/02/Nagasaki-Peace-Park-1024x682.jpg",
                    category: "MUSEUM",
                    title:"Musée Yves Saint Laurent", 
                    description: "Undoubtedly the most thrilling example of contemporary architecture in Marrakesh, Musée Yves Saint Laurent rises from a granito base of Moroccan marble and stone, draped in a lacework of terracotta bricks. The textured arrangement of the bricks is designed to resemble the weft and warp of fabric. Step inside and it's a complete contrast, with a silky smooth finish intended to complement the exterior like the lining of a couture jacket."
                  },

                    ]
              ,
              markers: [
                { lat: -17.906199130795937, lng: 25.83333278843276, title: "<strong>Victoria Falls, Zimbabwe</strong>" },
                { lat: -3.0655390286439927, lng: 37.355455638635284, title: "<strong>Mount Kilimanjaro, Tanzania</strong>" },
                { lat: -33.59631896753702, lng: 18.49387218102889, title: "<strong>Cape Town, South Africa</strong>" }     
          
              ],
              center: {lat:-31.669581240550425, lng:19.724279225929916},
            },
             {
              id: 'd2', 
              image: "https://www.followmeaway.com/wp-content/uploads/2019/08/small-towns-in-italy-varenna-2.jpg",
              title:"Antarctica", 
              description: "A beautiful place!"
            },
            {
              id: 'd3', 
              image: "https://www.followmeaway.com/wp-content/uploads/2019/08/small-towns-in-italy-varenna-2.jpg",
              title:"Asia", 
              description: "A beautiful place!"
            }

          ],
          countries: [
            {
                id: 'c1', 
                image: "https://thumbs.dreamstime.com/b/sligachan-river-scotland-colorful-sunset-over-scottish-higlands-45847094.jpg",
                title:"Scotland", 
                description: "Scotland has many treasures crammed into its compact territory – big skies, ancient architecture, spectacular wildlife, superb seafood and hospitable, down-to-earth people.",
                attractions: [
                    {
                        id: 'sa1', 
                        image: "https://www.followmeaway.com/wp-content/uploads/2019/08/small-towns-in-italy-varenna-2.jpg",
                        category: "CASTLE",
                        title:"Edinburgh Castle", 
                        description: "Edinburgh Castle has played a pivotal role in Scottish history, both as a royal residence – King Malcolm Canmore (r 1058–93) and Queen Margaret first made their home here in the 11th century – and as a military stronghold. The castle last saw military action in 1745; from then until the 1920s it served as the British army's main base in Scotland. Today it is one of Scotland's most atmospheric and popular tourist attractions."
                      },
                       {
                        id: 'sa2', 
                        image: "https://media.timeout.com/images/103530963/image.jpg",
                        category: "ARCHAEOLOGICAL SITE",
                        title:"Skara Brae", 
                        description: "Predating Stonehenge and the pyramids of Giza, extraordinary Skara Brae is one of the world's most evocative prehistoric sites, and northern Europe’s best-preserved Neolithic village. Even the stone furniture – beds, boxes and dressers – has survived the 5000 years since a community lived and breathed here, giving an incredible insight into everyday Stone Age life.Idyllically situated by a sandy bay 8 miles north of Stromness, the Unesco-listed settlement was hidden until 1850, when waves whipped up by a severe storm eroded the sand and grass above the beach, exposing the houses underneath. It can feel as though the inhabitants have just slipped out to go fishing and could return at any moment."
                      },
                      {
                        id: 'sa3', 
                        image: "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/02/Nagasaki-Peace-Park-1024x682.jpg",
                        category: "CATHEDRAL",
                        title:"Glasgow Cathedral", 
                        description: "Glasgow Cathedral has a rare timelessness. The dark, imposing interior conjures up medieval might and can send a shiver down the spine. It's a shining example of Gothic architecture, and unlike nearly all of Scotland's cathedrals, it survived the turmoil of the Reformation mobs almost intact because the Protestants decided to repurpose it for their own worship. Most of the current building dates from the 15th century."
                      }
        
                  ],
                  markers: [
                    { lat: 55.94864274030937, lng: -3.1999081371193987, title: "<strong>Edinburgh Castle</strong>" },
                    { lat: 59.0489244756684, lng: -3.3417332015390437, title: "<strong>Skara Brae</strong>" },
                    { lat: 55.86355599339106, lng: -4.234968562061401, title: "<strong>Glasgow Cathedral</strong>" }
              
                  ],
                  center: {lat:55.86424390854831, lng:-4.225941507108479},
                  planningtools: [
                    {
                        id: "st1",
                        title: "Best Things to Do",
                        image: "https://static01.nyt.com/images/2019/08/24/arts/20edinburgh-climate/20edinburgh-climate-jumbo.jpg?quality=75&auto=webp",
                        subtitle1: "Experience the Edinburgh Festival",
                        description1: "The world’s largest arts festival transforms Scotland’s capital in August. Everywhere (literally: swimming pools, fudge shops and public toilets have featured in recent years) turns into a venue, the streets throb with performers and festival-goers and pubs are packed till the small hours.",
                        subtitle2: "Music in Glasgow",
                        description2: "By day, Glasgow’s grand architecture and resurgent museums are more than worth your time. But you may have the most fun at night, when glorious local scenes come alive and visitors to the city are treated with warm curiosity. "
                      },
                       {
                        id: "st2",
                        title: "When to Visit",
                        image: "https://a.cdn-hotels.com/gdcs/production15/d154/b4be76e7-6071-4a32-b105-05d7a80379d0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
                        subtitle1: "Celebrate in the high season (July and August), the best time for festivals",
                        description1: "Scotland’s social calendar fills up in summer. The capital of Edinburgh becomes the cultural epicenter throughout August, with myriad festivals, ceilidhs, whisky extravaganzas and more taking place all over the mainland and islands, as locals and visitors alike enjoy the long northern summer nights. ",
                        subtitle2: "Escape the crowds in the drier shoulder season (May, June and September)",
                        description2: "Savvy visitors choose these midge-free months of often dry and sunny weather (always planning for rain just in case). Wildflowers and rhododendrons explode in May and June, with the machair dunes of the Hebrides especially beguiling. June evenings bring daylight till 11pm – even later in the Northern Isles – giving you endless time to explore. Hotels and restaurants that close in winter tend to reopen, too. ",
                       },
                      {
                        id: "st3",
                        title: 'Things to Know', 
                        image: "https://thumbs.dreamstime.com/b/post-what-you-need-to-know-written-white-background-31667358.jpg",
                        subtitle1: "Best place for hiking",
                        description1: "The best way to really get inside Scotland's landscapes is to walk them. Here, peaks tower over lochs and sea cliffs gaze over the wind-whipped sea, but there are short woodland trails and charming strolls through valleys dusted with purple heather too. Top of the wish list for many hikers is the 96-mile West Highland Way from Milngavie (near Glasgow) to Fort William, a weeklong walk through some of the country's finest scenery, finishing in the shadow of its highest peak, Ben Nevis.",
                        subtitle2: "Best place for photographers",
                        description2: "In a country famous for stunning scenery, the Isle of Skye takes the top prize. From the craggy peaks of the Cuillins and the bizarre pinnacles of the Old Man of Storr and the Quiraing to the spectacular sea cliffs of Neist Point, there's a photo opportunity awaiting you at almost every turn."
                      }
        
                  ]
              },
               {
                id: 'c2', 
                image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/60/b5.jpg",
                title:"Seattle", 
                description: "Blink and it’s changed: Seattle can be that ephemeral. Welcome to a city that heralds innovation and nature; a city always marching toward the future.",
                attractions: [
                    {
                        id: 'ja1', 
                        image: "https://www.followmeaway.com/wp-content/uploads/2019/08/small-towns-in-italy-varenna-2.jpg",
                        category: "MARKET",
                        title:"Pike Place Market", 
                        description: "Acavalcade of noise, smells, personalities, banter and urban theater sprinkled liberally around a spatially challenged waterside strip, Pike Place Market is Seattle in a bottle. In operation since 1907 and still as lively today as it was on day one, this wonderfully local experience highlights the city for what it really is: all-embracing, eclectic and proudly unique. A 2017 expansion of the market infrastructure added vendor space, weather-protected common areas, extra parking, and housing for low-income seniors."
                      },
                       {
                        id: 'ja2', 
                        image: "https://media.timeout.com/images/103530963/image.jpg",
                        category: "MUSUEM",
                        title:"Museum of Pop Culture", 
                        description: "The Museum of Pop Culture is an inspired marriage between super-modern architecture and legendary rock-and-roll history that sprang from the imagination (and pocket) of Microsoft co-creator Paul Allen (1953-2018). Inside its avant-garde frame, you can tune into the famous sounds of Seattle (with an obvious bias toward Jimi Hendrix and grunge) or attempt to imitate the masters in the Interactive Sound Lab."
                      },
                      {
                        id: 'ja3', 
                        image: "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/02/Nagasaki-Peace-Park-1024x682.jpg",
                        category: "PARK",
                        title:"Discovery Park", 
                        description: "Hard to beat on a sunny spring day, this former military installation has been transformed into a wild coastal park, laced with walking trails and offering glimpses of the Olympic Mountains across the water. It's the largest green space in the Seattle, with 534 acres of forest, meadows, sand dunes and beaches, providing a welcome escape for locals and a vital corridor for wildlife."
                      }
        
                  ],
                  markers: [
                    { lat: 47.60977430054576, lng: -122.34052368121772, title: "<strong>Pike Place Market</strong>" },
                    { lat:  47.622118437484474, lng: -122.34806015511406, title: "<strong>Museum of Pop Culture</strong>" },
                    { lat: 47.661391990346175, lng: -122.41709299381762, title: "<strong>Discovery Park</strong>"}
                  ],
                  center: {lat: 47.61089175481818, lng: -122.34088403209415},
                  planningtools: [
                    {
                        id: "set1",
                        title: "Best Things to Do",
                        image: "https://stories.forbestravelguide.com/wp-content/uploads/2018/01/HERO-SpendingTwoPerfectDaysinSeattle-CreditAlabastroPhotography.jpg",
                        subtitle1: "Shop at Pike Place Market",
                        description1: "Way more than just a market, 110-year-old Pike Place is a living community, a cabaret show, a way of life and an intrinsic piece of Seattle’s soul. Strolling through its clamorous, sometimes chaotic thoroughfares, you simply couldn’t be in any other city. There are fish that fly, shops that look like they’ve sprung from a Harry Potter movie, an art wall made out of chewing gum, and a multitude of lively old buskers jamming acoustic versions of Led Zeppelin songs outside the world's oldest Starbucks. Pure magic.",
                        subtitle2: "Take a ride up the Space Needle",
                        description2: "The city icon which is as synonymous with Seattle as the letters S-E-A-T-T-L-E was built for the 1962 World’s Fair, and in 2018 got a face-lift to bring it into a new era. Although it's no longer Seattle's tallest structure, one million annual visitors still squeeze into the Space Needle’s slick, speedy elevators to enjoy views that are best described as awesome. Granted, tickets are expensive and you'll be elbow-to-elbow with tourists, but stop complaining and get in line: this is an essential Seattle pilgrimage."
                      },
                       {
                        id: "set2",
                        title: "When to Visit",
                        image: "https://blog.forbestravelguide.com/wp-content/uploads/2016/04/FTGBlog-WheretoEatRightNowinSeattle-BarNoroeste-SarahFlotard.jpg",
                        subtitle1: "Shoulder season: April to May and September to October",
                        description1: "Spring and fall see lower temperatures than the short summer, but fewer crowds, while still escaping the heavy rain showers of winter. Budget travelers can find good deals on accommodation and car rental rates at this time. September has one of the highlights of the cultural calendar, Bumbleshoot, and there's always the chance of an Indian summer in October before the city gears up for Halloween.",
                        subtitle2: "High season: June to September",
                        description2: "Although blistering sunny weather is infrequent in Seattle, overcast but not actually rainy days are not unusual. The record for the number of consecutive dry days is 51, set in 1951 and matched in 2021. Your best chances for a clear forecast fall between the months of June and September, and this is understandably the peak tourist season.",
                       },
                      {
                        id: "set3",
                        title: 'Things to Know', 
                        image: "http://www.sjuhawknews.com/wp-content/uploads/2019/10/what-you-should-know-copy-2-pdf-810x626.jpg",
                        subtitle1: "Book accommodations in advance",
                        description1: "In a pinch you can probably get a room at a basic business hotel without a reservation, but why risk it? Top accommodations can book up weeks or even months in advance, so plan ahead. Particularly busy travel periods include the first week of January, cherry blossom season (late March through April, depending on the destination), “Golden Week” (April 29 to May 5) and August.",
                        subtitle2: "Pack light and with certain situations in mind",
                        description2: "Since hotel rooms in Japan tend to be small, especially in cities, there is little room for large suitcases – which can also be a pain to wrangle on public transport. Never a bad idea, packing on the lighter is especially advisable for Japan."
                      }
        
                  ]
              },
              {
                id: 'c3', 
                image: "https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero.jpg",
                title:"Japan", 
                description: "Japan is truly timeless, a place where ancient traditions are fused with modern life as if it were the most natural thing in the world.",
                attractions: [
                    {
                        id: 'ja1', 
                        image: "https://www.followmeaway.com/wp-content/uploads/2019/08/small-towns-in-italy-varenna-2.jpg",
                        category: "MOUNTAIN",
                        title:"Mt Fuji", 
                        description: "Fuji-san is among Japan's most revered and timeless attractions, the inspiration for generations of poets and the focus of countless artworks. Hundreds of thousands of people climb it every year, continuing a centuries-old tradition of pilgrimages up the sacred volcano (which, despite its last eruption occurring in 1707, is still considered active). Whether or not you don the hiking boots to climb its busy slopes, taking some time to gaze upon the perfectly symmetrical cone of the country’s highest peak is an essential Japan experience."
                      },
                       {
                        id: 'ja2', 
                        image: "https://media.timeout.com/images/103530963/image.jpg",
                        category: "MUSUEM",
                        title:"Tokyo National Museum", 
                        description: "If you visit only one museum in Tokyo, make it the Tokyo National Museum. Here you'll find the world's largest collection of Japanese art, including ancient pottery, Buddhist sculptures, samurai swords, colourful ukiyo-e (woodblock prints), gorgeous kimonos and much, much more."
                      },
                      {
                        id: 'ja3', 
                        image: "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/02/Nagasaki-Peace-Park-1024x682.jpg",
                        category: "PARK",
                        title:"Peace Park", 
                        description: "A still, serene and deeply moving place, Nagasaki's Peace Park commemorates the atomic bombing of the city on August 9, 1945, which reduced the surrounding area to rubble and claimed tens of thousands of lives. Together with the Atomic Bomb Museum and National Peace Memorial Hall (both a short walk away), this is an essential stop for any visitor who wants to understand how the disaster shaped the city."
                      }
        
                  ],
                  markers: [
                    { lat: 35.36209492636681, lng: 138.7271917386156, title: "<strong>Mount Fuji</strong>" },
                    { lat:  35.72191182255253, lng: 139.7767699356766, title: "<strong>Tokyo National Museum</strong>" },
                    { lat: 32.77659525505943, lng: 129.8636441355824, title: "<strong>Peace Park</strong>"}
                  ], 
                  center: {lat: 35.36195732198871, lng: 138.72684895871018}, 
                  planningtools: [
                    {    
                        id:'ct1',
                        title: "Best Things to Do",
                        image: "https://theeagleedition.com/wp-content/uploads/2019/11/tokyo.jpg",
                        subtitle1: "Experience old Japan in Kyoto",
                        description1: "With over 2000 exquisite temples, Kyoto is where traditional Japan thrives. Visiting splendid gardens and ceremonial teahouses are part of the deep dive into history. One of the most exquisite sights in the whole of Japan are the gold-leaf tiers of Kinkaku-ji beaming gloriously in the sun, with a mirror image in the pond below, framed by layers of pine trees.",
                        subtitle2: "Get your otaku on in Akihabara",
                        description2: "Akihabara in Tokyo is the promised land for anime otaku (fanatics). Even if you aren’t a fan, Akihabara is worth experiencing for the height of artistic geekiness done the Japanese way. In Japan, anime is more than something you watch – it is toys, video games, fashion... and a way of life. Even big banks sometimes print anime characters onto their credit cards. Step into Akihabara and see fans bringing to characters to life in costume."
                      },
                       {
                        id: "ct2",
                        title: "When to Visit",
                        image: "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2019/03/yukata-kyoto_Satoshi-K_iStock-1171807849.jpg",
                        subtitle1: "The spring high season (April–May) is the time for cherry blossoms",
                        description1: "The cherry-blossom season from April to May is the peak travel period in Japan. Locals and inbound tourists flock to parks, gardens, tree-lined brooks and castle moats to partake in hanami, the annual ritual of observing the spring blossom. Picnicking under a canopy of cherry blossom is a top bucket-list experience, though travelers are advised to weigh up the undeniable beauty against the drawback of the vast crowds.",
                        subtitle2: "The fall high season (August–November) is the time for uniquely Japanese experiences",
                        description2: "Late summer and fall bring another surge in visitor numbers and big crowds of domestic tourists. Mid-August is the start of the busy O-Bon (Festival of the Dead) season – the summer counterpart to Golden Week. National holidays, colorful festivals and blistering temperatures keep sights crowded and accommodation expensive (and often fully booked). ",
                       },
                      {
                        id: "ct3",
                        title: 'Things to Know', 
                        image: "https://www.geekyexplorer.com/wp-content/uploads/2018/10/japan-things-to-know-twitter-1024x683.jpg",
                        subtitle1: "Book accommodations in advance",
                        description1: "In a pinch you can probably get a room at a basic business hotel without a reservation, but why risk it? Top accommodations can book up weeks or even months in advance, so plan ahead. Particularly busy travel periods include the first week of January, cherry blossom season (late March through April, depending on the destination), “Golden Week” (April 29 to May 5) and August.",
                        subtitle2: "Pack light and with certain situations in mind",
                        description2: "Since hotel rooms in Japan tend to be small, especially in cities, there is little room for large suitcases – which can also be a pain to wrangle on public transport. Never a bad idea, packing on the lighter is especially advisable for Japan."
                      }
        
                  ]
              }

          ],
          


        }
    },
    mutations: {
        addMemory(state, memoryData) {
          const newMemory ={
            id: new Date().toISOString(),
            title: memoryData.title,
            image: memoryData.imageUrl,
            description: memoryData.description
          }
          state.memories.unshift(newMemory)
        }
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData)
        }
    },
    getters: {
        memories(state) {
            return state.memories;

        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find((memory) => memory.id === memoryId);
            }
        },
        destinations(state) {
            return state.destinations;
        },
        destination(state) {
            return (destinationId) => {
                return state.destinations.find((destination) => destination.id  === destinationId);
            }
        },
        countries(state) {
            return state.countries;
        },
        country(state) {
            return (countryId) => {
                return state.countries.find((country) => country.id  === countryId);
            }
        },
        // japattractions(state) {
        //     return state.japattractions;
        // },
        // japattraction(state) {
        //     return (attractionId) => {
        //         return state.japattractions.find((attraction) => attraction.id  === attractionId);
        //     }
        // }    

    }
});
export default store;