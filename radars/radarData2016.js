//This is the title for your window tab, and your Radar
document.title = "My Personal Technology Radar (March 2016)";

//This is the concentic circles that want on your radar
var radar_arcs = [
	{'r': 100, 'name': "Adopt"},
	{'r': 200, 'name': "Trial"},
	{'r': 300, 'name': "Assess"},
	{'r': 400, 'name': "Hold"}
	// ,{"r":500,"name":'Possible Extra if you want it'}
];

//This is your raw data !!! we need at least one (1) element in each circle (Adopt/Trial/Assess/Hold) !!!
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//  r = distance away from origin ("radial coordinate")
//  - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//  - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
// Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
	{
		"quadrant": "Techniques",
		"left": 45,
		"top": 18,
		"color": "#8FA227",
		"items": [
			{"name": "Dependency Injection", "pc": {"r": 40, "t": 130}, "movement": "c"},
			{"name": "Pair Programming", "pc": {"r": 50, "t": 160}, "movement": "c"},
			{"name": "Build Pipelines", "pc": {"r": 180, "t": 100}, "movement": "c"},
			{"name": "Polygot Programming", "pc": {"r": 80, "t": 170}, "movement": "c"},
			{"name": "Clean Code", "pc": {"r": 85, "t": 120}, "movement": "c"},
			{"name": "Property based testing", "pc": {"r": 150, "t": 165}, "movement": "c"},
			{"name": "Evolutionary architecture", "pc": {"r": 140, "t": 115}, "movement": "c"},
			{"name": "Code Reviews", "pc": {"r": 155, "t": 105}, "movement": "c"},
			{"name": "Valuable, cheap tests", "pc": {"r": 130, "t": 150}, "movement": "c"},
			{"name": "Git", "pc": {"r": 65, "t": 145}, "movement": "c"},
			{"name": "Continuous Integration", "pc": {"r": 230, "t": 110}, "movement": "c"},
			{"name": "Scrum", "pc": {"r": 240, "t": 115}, "movement": "c"},
		]
	},
	{
		"quadrant": "Tools",
		"left": w - 200 + 30,
		"top": 18,
		"color": "#587486",
		"items": [
			{"name": "Liquibase", "pc": {"r": 80, "t": 76}, "movement": "c"},
			{"name": "Docker", "pc": {"r": 170, "t": 19}, "movement": "t"},
			{"name": "Vagrant", "pc": {"r": 150, "t": 69}, "movement": "c"},
			{"name": "GitLab", "pc": {"r": 130, "t": 73}, "movement": "c"},
			{"name": "Trello", "pc": {"r": 260, "t": 75}, "movement": "c"},
			{"name": "Hibernate ^", "pc": {"r": 360, "t": 56}, "movement": "c"},
			{"name": "Cassandra", "pc": {"r": 330, "t": 5}, "movement": "c"},
			{"name": "MySQL", "pc": {"r": 320, "t": 5}, "movement": "c"},
			{"name": "Subversion", "pc": {"r": 330, "t": 18}, "movement": "c"}
		]
	},
	{
		"quadrant": "Platforms",
		"left": 45,
		"top": (h / 2 + 18),
		"color": "#DC6F1D",
		"items": [
			{"name": "JVM as platform", "pc": {"r": 90, "t": 265}, "movement": "c"},
			{"name": "Ubuntu", "pc": {"r": 170, "t": 215}, "movement": "c"},
			{"name": "Mac OSX", "pc": {"r": 170, "t": 225}, "movement": "c"},
			{"name": "Postgres as NoSQL", "pc": {"r": 220, "t": 255}, "movement": "c"},
			{"name": "Digital Ocean", "pc": {"r": 240, "t": 268}, "movement": "t"},
			{"name": "Akka", "pc": {"r": 390, "t": 215}, "movement": "c"},
			{"name": "Play2", "pc": {"r": 390, "t": 185}, "movement": "c"}
		]
	},
	{
		"quadrant": "Languages & Frameworks",
		"color": "#B70062",
		"left": (w - 200 + 30),
		"top": (h / 2 + 18),
		"items": [
			{"name": "Java 6 and earlier", "pc": {"r": 35, "t": 350}, "movement": "c"},
			{"name": "Java 8", "pc": {"r": 130, "t": 355}, "movement": "c"},
			{"name": "Groovy", "pc": {"r": 190, "t": 280}, "movement": "c"},
			{"name": "Scala - the good parts ^", "pc": {"r": 290, "t": 320}, "movement": "c"},
			{"name": "Functional Reactive Programming", "pc": {"r": 285, "t": 330}, "movement": "c"},
			{"name": "Web Components", "pc": {"r": 260, "t": 330}, "movement": "c"},
			{"name": "Spring", "pc": {"r": 360, "t": 330}, "movement": "c"},
		]
	}
];
