-- Publisher Inserts
INSERT INTO Publishers (
    name
) VALUES
    ('Repos Production'),
    ('Uncredited/Unknown'),
    ('DV Games'),
    ('Renegade Game Studios'),
    ('Avalon Hill'),
    ('Darrington Press'),
    ('Hans im Gluck'),
    ('KOSMOS'),
    ('Big Potato Games'),
    ('Dire Wolf'),
    ('Czech Games Edition'),
    ('Bombyx'),
    ('Self Published'),
    ('Indie Boards & Cards'),
    ('Hasbro'),
    ('Smirk & Dagger Games'),
    ('Starling Games'),
    ('Ravensburger'),
    ('Rio Grande Games'),
    ('NorthStar Games'),
    ('Looney Labs'),
    ('Gamewright'),
    ('Zoch Verlag'),
    ('The Op Games'),
    ('GameWorks SaRL'),
    ('River Horse'),
    ('BoardGameTables'),
    ('Exploding Kittens'),
    ('Riot Games'),
    ('Libellud'),
    ('conception'),
    ('Z-Man Games'),
    ('Keymaster Games'),
    ('Lookout Games'),
    ('Mindtwister AB'),
    ('Roxley'),
    ('Arcane Wonders'),
    ('Horrible Guild'),
    ('Space Cowboys'),
    ('CMYK'),
    ('DSS Games'),
    ('Game Salute'),
    ('What Do You Meme?'),
    ('Cyanide & Happiness'),
    ('pressman');

-- Board Game Inserts
INSERT INTO BoardGames (
    title,
    description,
    publisher_id,
    expansion,
    min_players,
    max_players,
    time_to_play,
    min_age,
    complexity
) VALUES
    ("7 Wonders Duel", "Over 3 ages, players acquire cards that provide resources or advance their military or scientific development in order to develop a civilization and complete wonders.", 1, FALSE, 2, 2, 30, 10, 2),
    ("7 Wonders Duel: Pantheon", "A pantheon from several civilizations — including Greek, Egyptian, and Middle-Eastern — gets added to 7 Wonders Duel in 7 Wonders Duel: Pantheon, with each god having its own power to help you or hinder your opponent.", 1, TRUE, 2, 2, 30, 10, 2),
    ("Backgammon", "Each player has a set of 15 checkers (or stones) that must be moved from their starting positions, around, and then off the board. Dice are thrown each turn, and each player must decide which of their checkers to move based on the outcome of the roll. Players can capture each other's checkers, forcing the captured checkers to restart their journey around the board. The winner is the first player to get all 15 checkers off the board.", 2, FALSE, 2, 2, 30, 8, 2),
    ("BANG! The Dice Game", "At the start of the game, players each take a role card that secretly places them on a team: the Sheriff and deputies, outlaws, and renegades. The Sheriff and deputies need to kill the outlaws, the outlaws win by killing the Sheriff, and the renegades want to be the last players alive in the game.", 3, FALSE, 3, 8, 15, 8, 1),
    ("Bargain Quest", "Bargain Quest is a game of adventure and capitalism for 2-6 players. Players will take the role of shopkeepers in an adventuring town plagued by monsters. Players must draft items and then secretly choose which items to place in their windows to attract wealthy heroes to their shops.", 4, FALSE, 2, 6, 45, 8, 2),
    ("Bargain Quest: The Black Market Expansion", "The Black Market Expansion brings Bargain Quest to the seedy criminal underworld. With new heroes like the Shaman, and the Bravo, along with cunning employees like the Loan Shark and the Henchman. It's a dangerous town, and you'll have to use all of your cunning and wits if you mean to make a profit out here!", 4, TRUE, 2, 6, 45, 8, 2),
    ("Betrayal at the House on the Hill", "Betrayal at House on the Hill quickly builds suspense and excitement as players explore a haunted mansion of their own 'design', encountering spirits and frightening omens that foretell their fate. With an estimated one hour playing time, Betrayal at House on the Hill is ideal for parties, family gatherings or casual fun with friends.", 5, FALSE, 3, 6, 60, 12, 2),
    ("Betrayal at the House on the Hill: Widow's Walk", "The house on the hill has a wicked reputation. Those who dare to darken its door often leave steeped in madness and despair — if they leave at all.", 5, TRUE, 3, 6, 60, 12, 2),
    ("Betrayal Legacy", "Betrayal Legacy marries the concept of Betrayal at House on the Hill — exploring a haunted mansion — with the permanency and multi-game storytelling exhibited by Daviau's Risk Legacy and other legacy games that followed. Betrayal Legacy consists of a prologue and a thirteen-chapter story that takes place over decades.", 5, FALSE, 3, 5, 60, 12, 3),
    ("Blood of an Englishman", "In The Blood of an Englishman, players take on the role of either Jack or the Giant. The Giant must maneuver the Fee Fi Fo and Fum cards while Jack tries to create three beanstalks to steal the bag of gold, the Golden Goose, and the Singing Harp. Each player has different available actions and must carefully arrange the cards to achieve their goal.", 4, FALSE, 2, 2, 25, 10, 2),
    ("Caper Cards: Bells Hells", "In this cooperative card game, assemble the Bells Hells adventuring party of Critical Role Campaign 3 to pull off a daring heist. You’ll aim to play your Crew cards strategically as a team, hoping to exceed the value of the treasure you’re pursuing without going over 21.", 6, FALSE, 1, 4, 20, 12, 1),
    ("Carcassonne", "Carcassonne is a tile placement game in which the players draw and place a tile with a piece of southern French landscape represented on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof, and it must be placed adjacent to tiles that have already been played, in such a way that cities are connected to cities, roads to roads, et cetera. Having placed a tile, the player can then decide to place one of his/her meeples in one of the areas on it.", 7, FALSE, 2, 5, 40, 7, 2),
    ("Catan", "In Catan, players try to be the dominant force on the island of Catan by building settlements, cities and roads. On each turn dice are rolled to determine which resources the island produces. Players build structures by 'spending' resources (sheep, wheat, wood, brick and ore) which are represented by the relevant resource cards; each land type, with the exception of the unproductive desert, produces a specific resource", 8, FALSE, 3, 4, 90, 10, 2),
    ("Chameleon, The", "A bluffing deduction game for everyone. Each round involves two missions, depending on whether you're the Chameleon or not. Mission 1: You are the Chameleon. No one knows your identity except you. Your mission is to blend in, not get caught and to work out the Secret Word. Mission 2: You are not the Chameleon. Try to work out who the Chameleon is without giving away the Secret Word.", 9, FALSE, 3, 8, 15, 14, 1),
    ("Clank!", "Clank! is a deck-building game. Each player has their own deck, and building yours up is part of playing the game. You start each of your turns with five cards in your hand, and you'll play them all in any order you choose. Most cards will generate resources, of which there are three different kinds: Skill, which is used to acquire new cards for your deck. Swords, which are used to fight the monsters that infest the dungeon. Boots, which are used to move around the board.", 10, FALSE, 2, 4, 45, 12, 2),
    ("Clank! Catacombs", "The catacombs of the skeletal dragon Umbrok Vessna are mysterious and dangerous. Portals transport you all around the dungeon depths. Wayshrines offer vast riches to intrepid explorers. Prisoners are counting on you to free them. Ghosts, once disturbed, may haunt you to death. Despite all that, it's time to leave the board behind with Clank! Catacombs, a standalone deck-building adventure.", 10, FALSE, 2, 4, 60, 13, 2),
    ("Codenames", "In Codenames, two teams compete to see who can make contact with all of their agents first. Lay out 25 cards, each bearing a single word. The spymasters look at a card showing the identity of each card, then take turns clueing their teammates. A clue consists of a single word and a number, with the number suggesting how many cards in play have some association to the given clue word.", 11, FALSE, 2, 8, 15, 14, 1),
    ("Codex Naturalis", "In CODEX Naturalis, you must continue the work of the illuminating monk Tybor Kwelein, assembling the pages of a manuscript that lists the living species in primary forests. Can you put the pages together in the best order possible? And are you prepared to sacrifice a species to develop your manuscript?", 12, FALSE, 1, 4, 25, 7, 2),
    ("Concept", "In Concept, your goal is to guess words through the association of icons. A team of two players – neighbors at the table – choose a word or phrase that the other players need to guess. Acting together, this team places pieces judiciously on the available icons on the game board.", 1, FALSE, 4, 12, 40, 10, 1),
    ("Connected Clues", "Based on the popular game show category 'before and after'. Each card contains an answer made up of two different parts that share a word which connects them together. Players take turns being the clue giver each round. The clue giver must come up with clues for both parts of the answer and tell the group. The group will guess the answer. The first player to guess correctly wins the round! Test your knowledge of popular movies, tv shows, music, sports, games, food, and more.", 13, FALSE, 3, 10, 10, 13, 1),
    ("Coup", "You are head of a family in an Italian city-state, a city run by a weak and corrupt court. You need to manipulate, bluff and bribe your way to power. Your object is to destroy the influence of all the other families, forcing them into exile. Only one family will survive... In Coup, you want to be the last player with influence in the game, with influence being represented by face-down character cards in your playing area.", 14, FALSE, 2, 6, 15, 13, 1),
    ("Cranium", "Cranium bills itself as the 'whole-brain' game. It's a party game that borrows from a host of other popular party games of recent times. Players have to successfully complete activities in each of four sections to win.", 15, FALSE, 4, 99, 60, 13, 1),
    ("Cribbage", "Cribbage is a card game invented in the early 17th century, based on the earlier game Noddy. It is played with a deck of standard playing cards and a signature piece of equipment called the cribbage board. Cribbage is traditionally played as a 2 player game.", 2, FALSE, 2, 6, 30, 10, 2),
    ("Deadlies, The", "GREED, PRIDE, WRATH... just three of the 7 Deadlies you will encounter in this devious little card game, themed on the 7 Deadly Sins. Do your best to rid yourself of them all, as soon as you can - while your opponents do their damnedest to fill your hand with more. Empty your hand three times to WIN - and become the ENVY of all your friends!", 16, FALSE, 3, 6, 30, 10, 1),
    ("Deadly Dowagers", "Deadly Dowagers is a game of marriage, murder, and money. You compete with the other lovely ladies in your town by strategically growing your dowry, while being careful not to gain too much infamy, or the duke may pass you over for another bride!", 17, FALSE, 2, 6, 60, 14, 2),
    ("Villainous", "In Villainous, each player takes control of one of six Disney characters, each one a villain in a different Disney movie. Each player has their own villain deck, fate deck, player board, and 3D character.", 18, FALSE, 2, 6, 60, 10, 2),
    ("Villainous: Wicked to the Core", "In Villainous: Wicked to the Core, each player takes control of one of three Disney characters, each one a villain in a different Disney movie, specifically the Evil Queen from Snow White, Hades from Hercules, and Dr. Facilier from The Princess and the Frog. Each player has their own villain deck, fate deck, player board, and 3D character.", 18, TRUE, 2, 6, 60, 10, 2),
    ("Villainous: Evil Comes Prepared", "In Disney Villainous: Evil Comes Prepared, each player takes control of one of three Disney characters, each one a villain in a different Disney movie, specifically Scar from The Lion King, Yzma from The Emperor's New Groove, and Ratigan from The Great Mouse Detective. Each player has their own villain deck, fate deck, player board, and 3D character.", 18, TRUE, 2, 6, 60, 10, 2),
    ("Villainous: Perfectly Wretched", "In Disney Villainous: Perfectly Wretched, each player takes control of one of three Disney characters, each one a villain in a different Disney movie, specifically Cruella de Vil from 101 Dalmatians, Mother Gothel from Tangled, and Pete from Steamboat Willie. Each player has their own villain deck, fate deck, player board, and 3D character.", 18, TRUE, 2, 6, 60, 10, 2),
    ("Villainous: Despicable Plots", "In Villainous: Despicable Plots, each player takes control of one of three Disney characters, each one a villain in a different Disney movie, specifically Lady Tremaine (Cinderella), the Horned King (The Black Cauldron), and Gaston (Beauty and the Beast). Each player has their own villain deck, fate deck, player board, and 3D character.", 18, TRUE, 2, 6, 60, 10, 2),
    ("Villainous: Bigger and Badder", "In Villainous: Bigger and Badder, each player takes control of one of three Disney characters, each one a villain in a different Disney movie, specifically Syndrome (The Incredibles), Lotso (Toy Story 3), and Madam Mim (The Sword in the Stone). Each player has their own villain deck, fate deck, player board, and 3D character.", 18, TRUE, 2, 6, 60, 10, 2),
    ("Dominion Big Box", "This Big Box edition comes with the new 2016 versions of Dominion and Dominion: Intrigue, as well as additional basic cards for 5 and 6 player games.", 19, FALSE, 2, 6, 30, 13, 2),
    ("Evolution", "In Evolution, players adapt their species in a dynamic ecosystem where food is scarce and predators lurk. Traits like Hard Shell and Horns will protect your species from Carnivores, while a Long Neck will help them get food that others cannot reach. With over 4,000 ways to evolve your species, every game becomes a different adventure.", 20, FALSE, 2, 6, 60, 12, 2),
    ("Finger Guns at High Noon", "Finger Guns at High Noon is a fast-paced game of strategy, negotiation, and pure hilarity—battle royale style. Craft your plan, convince the crowd to join in, then count down and draw your finger guns. Hand gestures show everyone’s actions and targets. Eliminate players with pistols, dynamite, and power shots, or stand to the side and lasso up an ally. Last player standing is the winner—unless the ghosts eliminate everyone.", 14, FALSE, 3, 8, 20, 14, 2),
    ("Fluxx", "Fluxx is a card game in which the cards themselves determine the current rules of the game. By playing cards, you change numerous aspects of the game: how to draw cards, how to play cards, and even how to win.", 21, FALSE, 2, 6, 20, 8, 1),
    ("Forbidden Island", "Forbidden Island is a visually stunning cooperative board game. Instead of winning by competing with other players like most games, everyone must work together to win the game. Players take turns moving their pawns around the 'island', which is built by arranging the many beautifully screen-printed tiles before play begins. As the game progresses, more and more island tiles sink, becoming unavailable, and the pace increases.", 22, FALSE, 2, 4, 30, 10, 2),
    ("Fox in the Forest, The", "The Fox in the Forest is a trick-taking game for two players. Aside from the normal ranked- and suited-cards used to win tricks, fairy characters such as the Fox and the Witch have special abilities that let you change the trump suit, lead even after you lose a trick, and more.", 4, FALSE, 2, 2, 30, 10, 2),
    ("Galaxy Trucker", "In the fast and goofy family game Galaxy Trucker, players begin by simultaneously rummaging through the common warehouse, frantically trying to grab the most useful component tiles to build their spaceship — all in real-time.", 11, FALSE, 2, 4, 30, 8, 2),
    ("Ghost Blitz", "Balduin, the house ghost, found an old camera in the castle cellar. Immediately he photographed everything that he loves to make disappear when he is haunting - including himself, of course. Unfortunately, the enchanted camera takes many photos in the wrong colors. Sometimes the green bottle is white, at other times it's blue. Looking at the photos, Balduin doesn't really remember any more what he wanted to make disappear next.", 23, FALSE, 2, 8, 20, 8, 1),
    ("Horrified: World of Monsters", "You're one of Earth's premier monster experts, and you've come to a mysterious arcane-punk town centered around the Void, a doorway between worlds from which terrors of all ilk might erupt.", 18, FALSE, 1, 5, 60, 10, 3),
    ("Hues and Cues", "What hue do you think of when we say “apple”? Hues and Cues is a vibrant game of colorful communication where players are challenged to make connections to colors with words. Using only one and two-word cues, players try to get others to guess a specific hue from the 480 colors on the game board. The closer the guesses are to the target, the more points you earn. Since everyone imagines colors differently, connecting colors and clues has never been this much fun!", 24, FALSE, 3, 10, 30, 8, 1),
    ("Jaipur", "You are one of the two most powerful traders in the city of Jaipur, the capital of Rajasthan, but that's not enough for you because only the merchant with two 'seals of excellence' will have the privilege of being invited to the Maharaja's court. You are therefore going to have to do better than your direct competitor by buying, exchanging, and selling at better prices, all while keeping an eye on both your camel herds.", 25, FALSE, 2, 2, 30, 10, 1),
    ("Jim Henson's The Labyranth: The Board Game", "Give me the child. Through dangers untold and hardships unnumbered, I have fought my way here to the castle beyond the Goblin City to take back the child that you have stolen, for my will is as strong as yours, and my kingdom as great.", 26, FALSE, 1, 5, 90, 6, 2),
    ("Just One", "Just One is a cooperative party game in which you play together to discover as many mystery words as possible. Find the best clue to help your teammate. Be unique, as all identical clues will be cancelled!", 1, FALSE, 3, 7, 20, 8, 1),
    ("Kabuto Sumo", "Spring time in Japan means the return of the rhinoceros beetles — 'Kabutomushi', which is Japanese for 'helmet bug' — and their athletic contests of dominance. Out in the wild, you can find them butting heads trying to show off their strength and impress their insect friends with their wrestling skills. This is the origin of the phenomenal World Insect Wrestling Championship.", 27, FALSE, 2, 4, 15, 6, 1),
    ("Kalah", "The most common rule set in games sold commercially as Mancala is for this game of Kalah. Mancala is actually a whole family of games. Kalah was invented in 1940 by an American, William Champion Jr.. He started selling the game in 1944, patented the rules in the 1950's, and founded the Kalah Game Co. in 1958.", 2, FALSE, 2, 2, 10, 5, 1),
    ("Lanterns: The Harvest Festival", "The harvest is in, and the artisans are hard at work preparing for the upcoming festival. Decorate the palace lake with floating lanterns and compete to become the most honored artisan when the festival begins.", 4, FALSE, 2, 4, 30, 8, 2),
    ("Little Wordy, A", "From the award-winning, best-selling creators of Exploding Kittens and Throw Throw Burrito, A Little Wordy is a fresh and ridiculously clever take on the genre of tile-based word-unscrambling games.", 28, FALSE, 2, 2, 15, 10, 1),
    ("Mechs vs. Minions", "Mechs vs. Minions is a cooperative tabletop campaign for 2-4 players. Set in the world of Runeterra, players take on the roles of four intrepid Yordles: Corki, Tristana, Heimerdinger, and Ziggs, who must join forces and pilot their newly-crafted mechs against an army of marauding minions. With modular boards, programmatic command lines, and a story-driven campaign, each mission will be unique, putting your teamwork, programming, and piloting skills to the test.", 29, FALSE, 2, 4, 90, 14, 2),
    ("Munchkin Critical Role", "The powerhouse role-playing franchise Critical Role meets its match in the treasure-seeking hit role-playing card game of Munchkin, bringing the hugely successful Mighty Nein campaign to tabletop in the first officially licensed Critical Role card game.", 24, FALSE, 3, 6, 60, 10, 2),
    ("Mysterium", "In the 1920s, Mr. MacDowell, a gifted astrologer, immediately detected a supernatural being upon entering his new house in Scotland. He gathered eminent mediums of his time for an extraordinary séance, and they have seven hours to make contact with the ghost and investigate any clues that it can provide to unlock an old mystery.", 30, FALSE, 2, 7, 42, 10, 2),
    ("Onitama", "Onitama is a two-player, perfect information abstract game with a random starting set-up. On a 5x5 board, both players start with five pawns on their side, with the main pawn in the middle.", 31, FALSE, 2, 2, 20, 10, 2),
    ("Pandemic Legacy: Season 1", "Pandemic Legacy is a co-operative campaign game, with an overarching story arc played through 12-24 sessions, depending on how well your group does at the game. At the beginning, the game starts in a very similar fashion as basic Pandemic, in which your team of disease-fighting specialists races against the clock to travel around the world, treating disease hot spots while researching cures for each of four plagues before they get out of hand.", 32, FALSE, 2, 4, 60, 12, 3),
    ("PARKS", "PARKS is a celebration of the US National Parks featuring illustrious art from Fifty-Nine Parks.", 33, FALSE, 1, 5, 45, 10, 2),
    ("PARKS: Wildlife", "Expand the award-winning game Parks with Parks: Wildlife! Grab your binoculars and prepare for even more animal sightings at Iconic Wildlife Parks, featuring all-new artwork from Tom Whalen and the Fifty-Nine Parks Print Series, and the newest national park addition, New River Gorge. This expansion is the MORE expansion. Get ready for new trail sites, fresh canteens, new gear, and more season cards.", 33, TRUE, 1, 5, 45, 10, 2),
    ("Patchwork", "In Patchwork, two players compete to build the most aesthetic (and high-scoring) patchwork quilt on a personal 9x9 game board. To start play, lay out all of the patches at random in a circle and place a marker directly clockwise of the 2-1 patch. Each player takes five buttons — the currency/points in the game — and someone is chosen as the start player.", 34, FALSE, 2, 2, 30, 8, 2),
    ("Pentago", "Pentago is an abstract strategy game for two players with four 3x3 grids arranged into a larger 6x6 grid. This game reimplements the well known Connect 4 with a twist: After placing a marble, the player has the option to twist one of the grids by 90°, thus changing the board after every turn. The first player to get five marbles in a row wins.", 35, FALSE, 2, 2, 5, 8, 1),
    ("Princess Bride: I Hate To Kill You, The", "The Princess Bride: I Hate to Kill You is a quick, but crafty, dice and card game that recreates (and re-imagines) the sword duels from The Princess Bride. Play as the Man in Black, Inigo Montoya, Count Rugen, or Prince Humperdinck.", 42, FALSE, 2, 2, 10, 10, 1),
    ("Resistance, The", "The Empire must fall. Our mission must succeed. By destroying their key bases, we will shatter Imperial strength and liberate our people. Yet spies have infiltrated our ranks, ready for sabotage. We must unmask them. In five nights we reshape destiny or die trying. We are the Resistance!", 14, FALSE, 5, 10, 30, 13, 1),
    ("Rivals for Catan", "The Rivals for Catan was released in German in September of 2010, on the 15th anniversary of the original card game. An English edition was released in the fourth quarter of 2010. The designer of the game, Klaus Teuber, has stated that he completely reworked many of the original card game's mechanics to make it easier for newcomers to play the game.", 8, FALSE, 2, 2, 60, 10, 2),
    ("Rummikub", "Rummikub is similar to several central European card games which are played with two decks of playing cards, including Machiavelli and Vatikan. Ephraim Hertzano invented the tile game Rummikub in the 1940s when card-playing was outlawed under the Communist regime. After World War II, Hertzano immigrated to British Mandate of Palestine (now Israel) and developed the first sets with his family.", 2, FALSE, 2, 4, 60, 8, 2),
    ("Santorini", "Santorini is a re-imagining of the purely abstract 2004 edition. Since its original inception over 30 years ago, Santorini has been continually developed, enhanced and refined by designer Gordon Hamilton", 36, FALSE, 2, 4, 20, 8, 2),
    ("Scrabble", "In this classic word game, players use their seven drawn letter-tiles to form words on the gameboard. Each word laid out earns points based on the commonality of the letters used, with certain board spaces giving bonuses. But a word can only be played if it uses at least one already-played tile or adds to an already-played word. This leads to slightly tactical play, as potential words are rejected because they would give an opponent too much access to the better bonus spaces.", 2, FALSE, 2, 4, 90, 10, 2),
    ("Sequoia", "In Sequoia you are trying to grow the tallest trees in 11 different forests. After your 10 turns, if you have the tallest tree, then you get the victory points from that forest. Second place gets a small consolation prize.", 27, FALSE, 2, 5, 10, 6, 1),
    ("Sheriff of Nottingham", "Prince John is coming to Nottingham! Players, in the role of merchants, see this as an opportunity to make quick profits by selling goods in the bustling city during the Prince's visit. However, players must first get their goods through the city gate, which is under the watch of the Sheriff of Nottingham.", 37, FALSE, 3, 5, 60, 14, 2),
    ("Shifting Stones", "Leave no stone unturned! Nine mystical tiles lie before you in a grid of rocky ruins. Rearrange the tiles to match one or more of the patterns in your hand. The catch is that you must sacrifice a card every time you swap or flip a tile. Carve out the most points in Shifting Stones, and your victory will be set in stone!", 21, FALSE, 1, 5, 20, 8, 1),
    ("Similo", "Similo is a co-operative deduction game, and each version of the game — e.g., Fables, History, Myths — comes with a deck of thirty cards, beautifully illustrated by Naïade, showing the portrait and the name of a series of characters with a common theme.", 38, FALSE, 2, 8, 10, 7, 1),
    ("Splendor", "Splendor is a game of chip-collecting and card development. Players are merchants of the Renaissance trying to buy gem mines, means of transportation, shops—all in order to acquire the most prestige points. If you're wealthy enough, you might even receive a visit from a noble at some point, which of course will further increase your prestige.", 39, FALSE, 2, 4, 30, 10, 2),
    ("Splendor Duel", "Confront your rival guild in a race for victory. Take Gem and Pearl tokens from the common board, then purchase cards, gather bonuses, royal favors, and prestige.", 39, FALSE, 2, 2, 30, 10, 2),
    ("Spots", "Spots is a casual push your luck game from CMYK. On your turn, you'll be rolling and placing dice onto dog cards. Dice you can't place get buried in your yard. Bury too many dice and you bust. Complete 6 dogs and you win!", 40, FALSE, 1, 4, 30, 10, 1),
    ("Sriracha: The Game", "Includes 52 cards with all original Sriracha and food themed illustrations.", 41, FALSE, 2, 4, 15, 7, 1),
    ("Starship Captains", "Welcome aboard and congrats on the promotion! Your 'new' starship is ready to embark on its first big voyage. Just scrape off some of the rust, and she'll do fine. And that crew? Might look a little green around the edges, but they're your crew now. Make us proud.", 11, FALSE, 1, 4, 60, 12, 2),
    ("Sushi Go! Party", "Sushi Go Party! expands Sushi Go! with a party platter of mega maki, super sashimi, and endless edamame. You still earn points by picking winning sushi combos, but now you can customize each game by choosing à la carte from a menu of more than twenty delectable dishes. What's more, up to eight players can join in on the sushi-feast. Let the good times roll!", 22, FALSE, 2, 8, 20, 8, 1),
    ("Take 5", "In 6 nimmt!, a.k.a. Category 5 and many other names, you want to score as few points as possible", 42, FALSE, 2, 10, 45, 8, 1),
    ("Tellstones: King's Gambit", "Tellstones: King's Gambit is a bluffing game with perfect information for two or four players", 29, FALSE, 2, 4, 15, 14, 1),
    ("Throw Throw Burrito", "The world's first dodgeball card game. Collect cards. Play your hand. Throw things at your friends.", 28, FALSE, 2, 6, 15, 7, 1),
    ("Uk'atoa", "A battle for life and death on the high Lucidian seas! In the tactical game Uk'otoa, factions of sailors vie to be the last claimed by the raging sea leviathan Uk'otoa. As the ship slowly falls into the ocean, you have to run, push, and sacrifice others to win!", 6, FALSE, 3, 5, 30, 12, 2),
    ("What Do You Meme?", "What Do You Meme? is a party card game for the social media generation. Each round, one player takes the role of judge and plays a photo card, after which everyone else plays a caption card to complete the meme. The judge decides the funniest pairing, and whoever played the winning caption card wins the round. Lather, rinse, and repeat.", 43, FALSE, 3, 20, 60, 17, 1),
    ("What Do You Meme? Game of Thrones Photo Expansion Pack", "Winter is here! Our most binge-worthy expansion pack ever made. Your chance to meme Cersei, Jon Snow, Tyrion Lannister, and all your favorite Game of Thrones characters", 43, TRUE, 3, 20, 60, 17, 1),
    ("Joking Hazard", "From the creators of Cyanide & Happiness comes a card game where players compete to finish an awful comic strip.", 44, FALSE, 3, 10, 60, 18, 1),
    ("30 Seconds", "At first glance the South African game 30 Seconds looks a bit like Trivial Pursuit. Players play in teams of two. Every turn, a player takes a card with five famous names on them, and tries to describe those names to his partner, who tries to guess what is being described. The goal is to guess as many words as possible in, you guessed it, 30 seconds.", 45, FALSE, 3, 24, 30, 12, 1);

-- Categories Inserts
INSERT INTO Categories (
    name
) VALUES
    ('Strategy'), -- 1
    ('Card Game'), -- 2
    ('Economic'), -- 3
    ('City Building'), -- 4
    ('Abstract'), -- 5 
    ('Dice'), -- 6
    ('Bluffing'), -- 7
    ('Deduction'), -- 8
    ('Party'), -- 9
    ('Family'), -- 10
    ('Thematic'), -- 11
    ('Horror'), -- 12
    ('Exploration'), -- 13
    ('Legacy'), -- 14
    ('Territory Building'), -- 15
    ('Negotiation'), -- 16
    ('Word Game'), -- 17
    ('Deck Building'), -- 18
    ('Trivia'), -- 19
    ('Puzzle'), -- 20
    ('Tableau Building'), -- 21
    ('Trick-taking'), -- 22
    ('Real Time'), -- 23
    ('Tile Laying'), -- 24
    ('Speed Game'), -- 25
    ('Cooperative'), -- 26
    ('Dexterity'), -- 27
    ('Worker Management'), -- 28
    ('Memory'), -- 29
    ('Semi-Cooperative'); -- 30


-- BoardGamesGenres Inserts
INSERT INTO BoardGamesCategories (
    bg_id,
    cat_id
) VALUES
    (1,1),
    (1,2),
    (1,3),
    (1,4),
    (2,1),
    (2,2),
    (2,3),
    (2,4),
    (3,1),
    (3,5),
    (3,6),
    (4,6),
    (4,7),
    (4,8),
    (4,9),
    (5,2),
    (5,10),
    (6,2),
    (6,10),
    (7,11),
    (7,12),
    (7,13),
    (8,11),
    (8,12),
    (8,13),
    (9,11),
    (9,12),
    (9,13),
    (9,14),
    (10,1),
    (10,2),
    (10,10),
    (11,2),
    (11,8),
    (12,10),
    (12,15),
    (13,1),
    (13,3),
    (13,10),
    (13,16),
    (14,7),
    (14,9),
    (14,17),
    (15,1),
    (15,10),
    (15,18),
    (16,1),
    (16,10),
    (16,18),
    (17,2),
    (17,8),
    (17,9),
    (17,17),
    (18,2),
    (18,10),
    (19,8),
    (19,9),
    (19,17),
    (20,2),
    (20,19),
    (21,2),
    (21,7),
    (21,8),
    (21,9),
    (22,2),
    (22,9),
    (22,19),
    (22,20),
    (23,2),
    (23,5),
    (23,10),
    (24,2),
    (25,2),
    (25,21),
    (26,1),
    (26,2),
    (26,21),
    (27,1),
    (27,2),
    (27,21),
    (28,1),
    (28,2),
    (28,21),
    (29,1),
    (29,2),
    (29,21),
    (30,1),
    (30,2),
    (30,21),
    (31,1),
    (31,2),
    (31,21),
    (32,1),
    (32,2),
    (32,18),
    (33,1),
    (33,2),
    (33,21),
    (34,9),
    (35,2),
    (35,9),
    (35,10),
    (36,10),
    (36,13),
    (37,2),
    (37,10),
    (37,22),
    (38,10),
    (38,11),
    (38,23),
    (38,24),
    (39,9),
    (39,10),
    (39,25),
    (40,11),
    (40,12),
    (40,26),
    (41,8),
    (41,9),
    (41,10),
    (42,2),
    (42,3),
    (42,10),
    (43,11),
    (43,26),
    (44,9),
    (44,17),
    (45,10),
    (45,27),
    (46,1),
    (46,5),
    (47,1),
    (47,5),
    (47,10),
    (47,24),
    (48,10),
    (48,17),
    (49,1),
    (49,11),
    (49,21),
    (49,26),
    (50,2),
    (51,8),
    (51,10),
    (51,11),
    (51,12),
    (52,1),
    (52,5),
    (53,1),
    (53,11),
    (53,26),
    (54,3),
    (54,10),
    (55,3),
    (55,10),
    (56,1),
    (56,3),
    (56,5),
    (56,20),
    (57,1),
    (57,5),
    (58,2),
    (58,6),
    (59,2),
    (59,7),
    (59,8),
    (59,9),
    (60,1),
    (60,2),
    (60,4),
    (60,15),
    (60,1),
    (60,5),
    (60,10),
    (61,1),
    (61,5),
    (62,10),
    (62,17),
    (63,6),
    (63,10),
    (64,2),
    (64,7),
    (64,8),
    (64,10),
    (64,16),
    (65,1),
    (65,5),
    (65,10),
    (66,2),
    (66,8),
    (66,10),
    (67,2),
    (67,3),
    (67,10),
    (68,2),
    (68,3),
    (68,10),
    (69,6),
    (69,10),
    (70,2),
    (70,23),
    (71,1),
    (71,28),
    (72,2),
    (72,9),
    (72,10),
    (73,2),
    (73,10),
    (74,1),
    (74,5),
    (74,7),
    (74,8),
    (74,29),
    (75,2),
    (75,9),
    (75,27),
    (76,2),
    (76,30),
    (77,2),
    (77,9),
    (78,2),
    (78,9),
    (79,2),
    (79,9),
    (80,9),
    (80,19);