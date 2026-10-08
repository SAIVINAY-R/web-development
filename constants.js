var movies = [
    {
        Name : 'THOR',
        Poster : 'thor.png',
        Description : 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
        Plot : "As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki (Tom Hiddleston), Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
        ReleaseYear : '2008',
        ProducerName : 'Kevin',
        Actors : 'Chris, Natalie, Tessa',
        Genres : 'Action, Fiction'
    },
    {
        Name : 'THE INCREDIBLE HULK',
        Poster : 'hulk.png',
        Description : "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
        Plot : "Eric Bana ('Black Hawk Down') stars as scientist Bruce Banner, whose inner demons transform him in the aftermath of a catastrophic experiment; Jennifer Connelly portrays Betty Ross, whose scientific genius unwittingly helps unleash the Hulk; Nick Nolte plays Banner's brilliant father, who passes on a tragic legacy to his son; and Sam Elliott portrays the commander of a top-secret military research center.",
        ReleaseYear : '2003',
        ProducerName : 'James',
        Actors : 'Eric, Jennifer, Sam',
        Genres : 'Action, Fiction'
    },
    {
        Name : 'IRON MAN',
        Poster : 'ironman.png',
        Description : "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        Plot : "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
        ReleaseYear : '2008',
        ProducerName : 'Kevin',
        Actors : 'Robert, Jon, Gwyneth',
        Genres : 'Action, Science-Fiction'
    },
    {
        Name : 'BREAKFAST',
        Poster : 'breakfast.png',
        Description : "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
        Plot : "Five high school students from different walks of life endure a Saturday detention under a power-hungry principal (Paul Gleason). The disparate group includes rebel John (Judd Nelson), princess Claire (Molly Ringwald), outcast Allison (Ally Sheedy), brainy Brian (Anthony Michael Hall) and Andrew (Emilio Estevez), the jock. Each has a chance to tell his or her story, making the others see them a little differently -- and when the day ends, they question whether school will ever be the same.",
        ReleaseYear : '1985',
        ProducerName : 'John',
        Actors : 'Emilio, Paul, Anthony',
        Genres : 'Comedy'
    },
    {
        Name : 'FRIDAY',
        Poster : 'friday.png',
        Description : "It's Friday, and Craig and Smokey must come up with $200 they owe a local bully or there won't be a Saturday.",
        Plot : "It's Friday and Craig Jones (Ice Cube) has just gotten fired for stealing cardboard boxes. To make matters worse, rent is due, he hates his overbearing girlfriend, Joi (Paula Jai Parker), and his best friend, Smokey (Chris Tucker), owes the local drug dealer money -- and that's all before lunch. As the hours drag on, Jones and Smokey experience the gamut of urban life, complete with crackheads, shoot-outs and overly sexual pastors, concentrated into one single, unbelievable Friday.",
        ReleaseYear : '1995',
        ProducerName : 'Patricia',
        Actors : 'Chris, Nia, Bernie',
        Genres : 'Comedy'
    },
    {
        Name : 'FUTURE',
        Poster : 'future.png',
        Description : "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
        Plot : "In this 1980s sci-fi classic, small-town California teen Marty McFly (Michael J. Fox) is thrown back into the '50s when an experiment by his eccentric scientist friend Doc Brown (Christopher Lloyd) goes awry. Traveling through time in a modified DeLorean car, Marty encounters young versions of his parents (Crispin Glover, Lea Thompson), and must make sure that they fall in love or he'll cease to exist. Even more dauntingly, Marty has to return to his own time and save the life of Doc Brown.",
        ReleaseYear : '1985',
        ProducerName : 'Gina',
        Actors : 'Miranda, Hamish',
        Genres : 'Drama, Science-Fiction'
    },
    {
        Name : 'HARRY POTTER',
        Poster : 'harrypotter.png',
        Description : "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        Plot : "The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).",
        ReleaseYear : '2001',
        ProducerName : 'David',
        Actors : 'Daniel, Rupert, Emma',
        Genres : 'Fiction'
    },
    {
        Name : 'HOME ALONE',
        Poster : 'homealone.png',
        Description : "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
        Plot : "When bratty 8-year-old Kevin McCallister (Macaulay Culkin) acts out the night before a family trip to Paris, his mother (Catherine O'Hara) makes him sleep in the attic. After the McCallisters mistakenly leave for the airport without Kevin, he awakens to an empty house and assumes his wish to have no family has come true. But his excitement sours when he realizes that two con men (Joe Pesci, Daniel Stern) plan to rob the McCallister residence, and that he alone must protect the family home.",
        ReleaseYear : '1990',
        ProducerName : 'John',
        Actors : 'Joe, Daniel, John',
        Genres : 'Comedy'
    },
    {
        Name : 'INTERSTELLAR',
        Poster : 'interstellar.png',
        Description : "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        Plot : "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
        ReleaseYear : '2014',
        ProducerName : 'Emma',
        Actors : 'Mathew, Anne, Jessica',
        Genres : 'Science-Fiction'
    },
    {
        Name : 'LUCY',
        Poster : 'lucy.png',
        Description : "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
        Plot : "When a boyfriend tricks Lucy (Scarlett Johansson) into delivering a briefcase to a supposed business contact, the once-carefree student is abducted by thugs who intend to turn her into a drug mule. She is surgically implanted with a package containing a powerful chemical, but it leaks into her system, giving her superhuman abilities, including telekinesis and telepathy. With her former captors in pursuit, Lucy seeks out a neurologist (Morgan Freeman), who she hopes will be able to help her.",
        ReleaseYear : '2014',
        ProducerName : 'Virginie',
        Actors : 'Scarlette, Morgan',
        Genres : 'Science-Fiction'
    },
    {
        Name : 'SCREAM',
        Poster : 'scream.png',
        Description : "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game",
        Plot : "Wes Craven re-invented and revitalised the slasher-horror genre with this modern horror classic, which manages to be funny, clever and scary, as a fright-masked knife maniac stalks high-school students in middle-class suburbia. Craven is happy to provide both tension and self-parody as the body count mounts - but the victims aren't always the ones you'd expect.",
        ReleaseYear : '1996',
        ProducerName : 'William',
        Actors : 'Melissa, Mason, Jenna',
        Genres : 'Horror'
    },
    {
        Name : 'STEP BROTHERS',
        Poster : 'stepbrothers.png',
        Description : "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.",
        Plot : "Brennan Huff (Will Ferrell) and Dale Doback (John C. Reilly) have one thing in common: they are both lazy, unemployed leeches who still live with their parents. When Brennan's mother and Dale's father marry and move in together, it turns the overgrown boys' world upside down. Their insane rivalry and narcissism pull the new family apart, forcing them to work together to reunite their parents.",
        ReleaseYear : '2008',
        ProducerName : 'Jimmy',
        Actors : 'Will, John, Richard',
        Genres : 'Comedy'
    }
]