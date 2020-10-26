---
title: "NPR's COPE and Content APIs"
episode: 11
transcript: partial
date: 2013-03-15
guid: 3dd7033b-22d2-49bd-b178-4059cbf4cff3
audiofile: insert-content-here-11.mp3
audiosize: 14385340
description: "Daniel Jacobson recaps the history of NPR's COPE, his work at Netflix, and the future of content APIs."
duration: 2264
guests: 
  - name: Daniel Jacobson
    company: Netflix
    home: http://www.danieljacobson.com
    twitter: daniel_jacobson
links: 
  - title: "APIs A Strategy Guide"
    url: https://www.oreilly.com/library/view/apis-a-strategy/9781449321628/
  - title: "7 Ways to Improve Your API"
    url: http://www.danieljacobson.com/blog/231
  - title: "NPR API Reference"
    url: http://www.npr.org/api
  - title: "Create Once, Publish Everywhere"
    url: http://blog.programmableweb.com/2009/10/13/cope-create-once-publish-everywhere
  - title: "Netflix Tech Blog"
    url: http://techblog.netflix.com
---
Jeff Eaton
:  Hi, I'm Jeff Eaton, senior architect at Lullabot. And your host for insert content here. today I'm here with Daniel Jacobson, the, the illustrious Daniel Jacobson. he, he's not necessarily someone that you, that you may have seen him in. Content circles or nerding out in the CMS world that much, but he's actually one of the, one of the movers and shakers.
:  His role for quite a few years was Director of Application Development at NPR, where he oversaw the development of COPE -- the Create Once Publish Everywhere infrastructure that made all kinds of waves in the content strategy and CMS world. He's the author of O'Reilly and Associates' *APIs: A Strategy Guide*. And now, he's the director of engineering for the Netflix API. So, he is just all over the place when it comes to content, APIs, and reusable structured content. It's a pleasure to have you here, Daniel, thank you for joining us.

Daniel Jacobson
:  Thanks for having me, Jeff. Thanks for that very nice intro. 

Jeff Eaton
:  Well, you know, it's funny, I was actually we reading your blog a couple of weeks ago. And, you talked about a presentation that you had done at a conference on the co parkitecture and you said, wow. You know, a bunch of people in the room knew about it and you know, they, they were, they were familiar with it.
:  And it seems like you were, you were almost a little startled by that. Did you expect the work that you were doing on that project to become such a. Oh, a big discussion topic, 

Daniel Jacobson
:  You know, I really didn't. we had been working, this goes back to the time of NPR. We'd been working on these concepts and implementation since 2002.
:  I can give you the history on that if you're interested, but, Yeah, we were just doing what we thought was right. You know, thinking about architecture, thinking about longevity of application development and, you know, knowing that there are going to be a host of things that we're not going to be aware of down the road, so trying to prepare for nimbleness.
:  so then, you know, in 2009, that's when I first published that blog post on programmable web about COPE, I was just. You know, taking this step of, okay, we've done all this stuff in the spirit of sharing, let's share it. And, you know, it was interesting to see how, you know, some people latched onto it.
:  But what really has surprised me is we're in 2013, people are still talking about it. it's, it's mind boggling for me. And if you look at the blog post, Over half of the, the comments were from 2012 in there. I don't know, 70 or 80 comments. so what's really kind of staggering for me is the fact that, we published it in 2009.
:  We've been thinking of it for a number of years and implementing it for, for that time. But it's still, or it is now resonating. It's very weird. 

Jeff Eaton
:  Well, I'll, I'll back up for a second for, for those, for anybody who might not be familiar, what is COPE? you know what, what's, what's the idea behind it.

Daniel Jacobson
:  Okay. I'll give you a little bit of a history on how we arrived at COPE and some of the sensibilities that went into it, but COPE stands for create. Once publish everywhere. And the idea there is, you know, you want to maximize your, or leverage the content creation and minimize the effort to distribute. The way that the whole thing really started, it goes back a little deeper. Was actually in 2002, when we, we had a series of content, ways of publishing content to MPR, and we had, HTML files. We had, fusion system with a SQL server database that publish very thin radio pieces to the, to the web.
:  And then I. Had built this other system, a Java based system with an informant state. Yeah. To capture a little bit richer content and offer an opportunity for co-branding with local stations. And, you know, in 2002, we looked at this and said, well, this is kind of a mess. You know, we're spending all this energy publishing in three different ways and we have three different presentation layers.
:  what we really need to do is we need to collapse this into a system that really leverages our editorial time. And gets us an opportunity to distribute to all these different places. so interestingly, part of the story is I pitched the idea with my boss at the time Robert Holt, who's now at Microsoft.
:  we pitched the idea of, alright, we need to actually spend a bunch of time collapsing this and building kind of a, you know, An awesome system that takes care of all of this. and at the  time the VP, her name was MJ bear. She, she wanted us to do due diligence and explore all these different avenues and, you know, content management systems like TeamSite and vignette, which are all quite expensive.
:  and you know, we did all that due diligence. I wasn't convinced that that was the right route. And in fact, I knew we could do a better job. By building it in house and the inflection point was she quit. She left the job and, I basically said, great, let's go build it. There's no impediment anymore. 
:  before  things settle, let's get this built.

Daniel Jacobson
:  Yeah. Yeah. The next person. And, so we did that. We hunkered down and that's where we really started thinking about the philosophies of. You separate content from display and, and content modularity and things like that. so this was back in 2002 and it was partially driven by the idea that right, everything we're doing here of collapsing these data systems, we're also doing a redesign of the presentation layer.
:  If we're doing that, it's highly likely that in the future, we're going to have another presentation layer, either a new one to replace the old one or an additional one. And it's almost like this keeps happening. Yeah, it really does. It's this cyclical thing, you know, like, well, this is really great, but over time it's not so great anymore.
:  We, we need something great. so let's throw out the old, and so we really said, all right, well, this, this presentation layer is going to go away too. So we really need a decoupling there. And that's where a lot of these coped philosophies started to soak in. And actually we launched that CMS and.
:  November, 2002. And it's still the centerpiece of NPR today. Holy cow. Yeah, CMS has last 10 or 11 years and, and, See that kind of success. So we take a lot of pride in that imagine, 

Jeff Eaton
:  well, I mean, it seems like that that decoupling that you talked about, I mean, from, from a pure like software development and architecture standpoint, you know, that, that feels like the right thing to do, but you know what you mentioned the idea of, of.
:  Teasing apart the core, you know, the business assets that are this content that gets created and managed over time from the changing sort of ephemeral presentation, teasing those things apart. It feels like it makes good business sense too. It's not just about architectural purity. It's a way to make sure that you don't have to dig up the foundation every time the house needs to get painted.

Daniel Jacobson
:  Absolutely. And I will say it's not without some costs because there were certainly some cultural battles that went into those discussions. so you know, the teasing out an example that I can offer is. When we were doing this design, what we intentionally said, red is the story is the item. That was another philosophy of what we were doing.
:  And so that's like the center of the, the, NPR system  universe. And, and we basically said the story is super thin. And generally speaking in NPR, people think of the story as being a radio piece. And we said, no, no, no, no radio pieces and unnecessary component. Of a story. it's an enhancing and enriching part, but so are images.
:  So his texts so are pull quotes. So whatever else you want to imagine that you want to put in there, but they're not necessarily the only parts that are necessary are, it's basically the title, a unique ID, a date. And I think we said a teaser, that's it. That's all you need for a story. 

Jeff Eaton
:  Interesting. 

Daniel Jacobson
:  And from there, there's a hierarchical data model. Tell me if I'm getting too geeky. 

Jeff Eaton
:  Oh, this is the kind of stuff I love. 

Daniel Jacobson
:  So we had higher data model where we basically had a story. Own what we call it a resource and a resource was any enhancing component of a story. And that resource was generic. And then the sub hierarchy underneath that, where the particulars, which would be texts, you know, images, videos, whatever else, external links, internal references, 

Jeff Eaton
:  transcripts, I think just went live a little while ago.

Daniel Jacobson
:  Transcripts is another one for sure. Those were all enhancing enriching components, but not necessary to have a presence on the site. You know, a story. And I know that you and others on this podcast have talked about. You know, blobs and chunks. So, we, we tried to be very surgical with this idea of, you know, we wanted to have everything be its own entity.
:  We don't want these blobs of data. in fact, every paragraph in the text are they're stored separately and very distinct fields. you know, we, we really thought how we can manage this stuff modular ways. So that, as you were saying, we're teasing it out so that our business can, gain value down the road.
:  And the controversial part is. Especially in 2002, NPR is a journalism company focused on broadcast. I'm saying the radio or the audio piece is not essential, is pretty controversial. And it takes a little, it took a little massaging inside to get people to understand the power of this. And, you know, it took actually a number of years to really get everybody on board.

Jeff Eaton
:  I would imagine that, you know, some of the decisions that you made earlier, like, you know, same, it. The story is, is central. Even if every single story has a radio component for the first several years, there's sort of a, there's a stake in the ground, just in the nomenclature that you've been, 

Daniel Jacobson
:  that you get in there.
Sure. you know, we really talked about stories and lists. Those were the two core concepts and, you know, you start talking about it and, you know, eventually that becomes part of the vernacular and part of the culture. And really, you know, every story can belong. And number of lists, any number of types of lists and lists are really just aggregating mechanisms.
And that also cut against the culture as well. And NPR, because you think about morning edition for, you know, March 13th, you know, you think there's a rundown, there are 15 stories there. That's really just another list. And you know, it's not really. A program. It is, you know, it happens to be that this name is morning edition, whatever, but 

Jeff Eaton
:  it's a particular branded aggregation of stories, not necessarily this thing that is the primary means that people approach and find content, right?

Daniel Jacobson
:  It's not a radio program anymore. It's a list, and you know, you can identify it by titles, but you gotta think about it more generically and, You know, that's when we started introducing, you know, broader set of top topics, you know, news music and things like that. And it really created, tremendous opportunity for NPR actually.

Jeff Eaton
:  I think in the past, probably, you know, maybe yeah, we are. So there've been a couple of things that have been written about the actual, like longterm impact of it and what it's allowed NPR to do in terms of turning around new products that are targeted at, you know, emerging devices or platforms without having to go through the same sort of just profound, painful rearchitecting of.
:  Everything that a lot of other companies are having to do. do you think that it's interesting, do you think that this set up, NPR well, for, for taking advantage of mobile, because of all the work that had already been in place. 

Daniel Jacobson
:  Unquestionably. Yes. You know, following on from the story of the content management system creation, no, I've talked a bunch about, you know, not being a web publishing tool.
:  Right? So, we felt like we were building a content management system and we thought about it in terms of the content management edit editing tool is just another, their presentation layer. And you can have any number of presentation, layers. And so that actually gave a lot of 'em. It gave us a lot of thought about, okay, well, if that's just one and the website is just one, we can have any number of these things and we just tackle a new presentation layers, some of which have right capabilities and some don't.
:  So as that started to mature a little bit back in, was it. 2004 or whenever RSS started to emerge, it was easy just to spin up another PHP file and have it render a RSS feeds and you pass into parameters and it's going to be this topic or this program. And then shortly after that podcast started to emerge and we can just easily float and MP3 file and RSS feeds and, you know, do those kinds of things.
:  And, it was about 2007. When the music site NPR music, started to. Yeah. We started to imagine that as a reporter and that's when we said all right, that couple, but the fact that we have this single point of failure, an Oracle database, which we're kind of growing out of, we actually need a different data, redundancy model.
:  we need to, you know, a cluster of databases we needed, to be able to scale it. And NPR was a nonprofit, so we can't afford a million Oracle's servers. so. There were a couple of things that, that had me thinking, okay, we need another level of abstraction. And that's when we introduced the API. and what that it gave us an opportunity to do was, basically put the NPR music development on a different trajectory, as well as.
:  Now that everything is, or at least, you know, we were moving in the direction of having our sites fueled from the API. We can more easily abstract away the database underneath the API and swap in a cluster of my SQL servers, multiple databases. And, so we started thinking of the API in those terms. And then sometime after that, we opened it up.
:  But after we opened it up, we realized, wow, We should be using that for other presentation layers like mobile sites and iPhones and iPads and feeding into like the Livio radio, you know, those, uh, radio devices that are feeding NPR content. now it's going into cars. So, you know, all of this strategy, which started early in 2002, I think was in retrospect, we were lucky with, you know, having that kind of architecture.
:  It put us in a great position to just tack on more presentation layers and allow them all to feed off of one central distribution channel, which was the API. 

Jeff Eaton
:  No, it definitely makes sense. I mean, although I think it is interesting that the, the real, the rise of mobile web traffic, especially apps, this idea that you know, that a given.
:  Business that has content might need, you know, this cluster of different ways that people can get to their stuff. I think it feels like that's, that's broken and a lot of existing sites and a lot of existing workflows and a lot of existing platforms that companies have built out. And I think that. I think that sort of corresponds to where the huge spike in interest in the work that's been done on COPE, really took off because suddenly everyone was feeling just such a tremendous amount of pain around that issue.
:  What you're describing is interesting because it's not the same kind of story, you know, you'd been, your team had been working on this for a long time based on, you know, deeper needs than simply we need to go mobile or something like that. 

Daniel Jacobson
:  Yeah, that's that's right. I mean, we, I think we were lucky to have had a series of challenges, like financial challenges can't afford vignette.
:  we were lucky and that we were doing a series of things all at once. And, you know, we knew that we were redesigning and we were likely to have to redesign again. There's a confluence of things that got us thinking early about. I'm needing this. We had no idea the iPhone was going to go nuts. Right. I mean, if we had that kind of foresight, I should have been betting on the stock.
:  but you know, like we were very lucky. and I think we actually made a series of decent decisions thereafter that put us in a good position. When I hear about folks who, who have been, I guess, who weren't quite as lucky to have that confluence of events and they have to go back and retrofit. Well, now the space is much more complicated and you're already embedded in your web publishing tool or whatever it is.
:  So the, the rearchitecture at that stage is actually much more expensive and much more painful. And, it just seems like, we did it at the right time. Actually, things were very lucky. 

Jeff Eaton
:  You mentioned that the, the actual editorial tools, the, you know, the things that the actual, you know, Content creation people use is just another presentation layer in that sort of approach.
:  How did that side of things evolve? Cause you know, this, the structured content approach that you're describing isn't necessarily like a natural fit or a natural transition for people who aren't used to say data modeling is their weekend hobby 

Daniel Jacobson
:  data modeling is really at the center of it all.
:  I felt it was. Critically essential to, to start with a very clean data model. That that was the starting point. How do we, how do we imagine this content to be stored and thinking about it in those very, teased out, ways, you know, so yeah. Text is very different than teaser, which is very different than images.
:  And, you know, everything was really isolated. That's where the content modularity part comes in. So we, that's where we started. And if you have that well, that's just your data repository. And then any number of apps can hit against that. And, You know, we had the website hitting against that, but we also had this suite of tools that could write to it.
:  they can also access it as well, but, you know, then we started, over time experimenting with areas of the website, writing different, user related things to the database. Basically, you know, it starts with the database. That's all you have. And then every, everything else is either reading or writing or both to that database.
:  And we just thought about it in those terms. 

Jeff Eaton
:  Was the, was like the, the, the user experience aspects of, of building out those tools, something that, you know, you were involved with or was that something that there was a different team of people trying to make the tools usable for this way of approaching things.

Daniel Jacobson
:  Okay. So I'm actually really glad you brought that up because I kind of glossed over that. first I want to be clear and maybe this kind of gives people some hope, When you say the team of people, the total team that I can think of that executed on this entire. CMS project back in 2002, it was about four people.

Jeff Eaton
:  Oh, this is like learning how bacon gets made. 

Daniel Jacobson
:  Yeah. Yeah. I hope I don't disappoint anybody. 

Jeff Eaton
:  I think that'll encourage a lot of people actually. 

Daniel Jacobson
:  Yeah. I mean, it really started with, you know, this first it was this massive document that I put together that we use for due diligence to send out the vendors per the VPs request.
:  Right. So we had a vision that. You kind of pieced together. and that vision, both encompassed, you know, what's the data structure's going to look like. What's it going to look like in terms of conceptually the CMS or the content capture part as well as, directions for the website and. you know, obviously we brought it in house.
:  We didn't have the VP. I was, it was me and one of the, their backend developer at the time. And there was one front end developer and there was a designer. And then my boss, so that, that was kind of the team. We had a suite of editorial folks who, who contributed meaningfully to this. I don't want to discount them, but in terms of the engineering.
:  That was it. so me and the other backend engineer, we wrote all the tools around this, the content management system. But before we did that, we were heavily informed by the designer. And I was pretty involved in this as well. We did a series of usability tests. We took data from, you know, both the usage patterns of those.
:  Of our users online and your, the npr.org users. we took information about the three discreet ways that we publish. You know, we had the cold fusion system, that Java system, the HTML files, what are the kinds of things we're building? we, we knew that actually yeah, in the, in the mode right now, at that moment too, to, we had very limited sets of assets.
:  It was very audio focused, but we knew that things coming down the road were going to be much more expansive in terms of the available assets, images. And, you know, it was probably to come later, but you know, full text and we were hiring editors too on the online side specifically to build out those stories.
:  So we were informed by all of those things and did a whole series of mockups and clickable prototypes for the editors and sat down with them and said, okay, well, what do you think of this? What do you think of that? And then here's the interesting part. We took all that data and we had to discount fair amount of it because we thought that they were still thinking about it too much like NPR, right?

Jeff Eaton
:  Yeah. They, they were thinking, Oh, you're building the new version of what we're used to. 

Daniel Jacobson
:  Yes. Right. So, we took on all that. There were a lot of really great ideas and fundamental things that drove the direction of where we're going. But again, we had to think, we're thinking bigger than this. We're thinking there's another design, there's this and that.
:  So, we needed to discount a portion of that. And, yeah, so all of that kind of boiled into the content management system. And I think you've you and Karen have talked about this fair amount that. you can't just build tools as an engineer would build a tool, right? you're building your website to, to have it be meaningfully useful to the website user.
:  You need the same mindset when you're building the CMS. You want it to be, you know, infused with the sensibilities that will make them effective at what they're doing. so we tried to take all those sensibilities and make something that they would succeed with, and evolve it over time.

Jeff Eaton
:  Especially with sites that have an existing, you know, there's an existing infrastructure and stuff like that. It's very easy to see those kinds of things. And imagine it's just insurmountable, you know, there's, there's definitely a lot of hurdles, you know, especially, it feels like every year that passes, there's more, you know, there's more weight that's being put on a lot of the web properties, the different companies, but the idea is, you know, it doesn't necessarily, we take an army to do this.
:  It seems like it's more of a, No the wheel inside of the organization to take this kind of 

Daniel Jacobson
:  path. Yeah. Yeah. I have a couple of thoughts on that. first, generally I agree. I think the one area I would disagree in is that, the world is different now than 10 years ago. And I think, again, that was, we were lucky to have gone down that route at the time that we did, because like you said, the weight is lighter.
:  In 2002, then 2013. but in every other capacity, I agree. And, you know, it's, you know, you have to have the commitment and the commitment not only starts with, you know, the commitment to vision, but resourcing appropriately. You know, if you need these engineers to build this out, hire engineers, and, I'm a big believer in the idea that, you know, excellent engineers are going to be.
:  X times, you know, some people say 10 times more effective than average engineers. so having really smart people who are execute on these things, you can really tease out what you're going for. What's the best way to execute on it. That's going to pay way more dividends than just. Hiring a bunch of people on, you know, throwing money at it.

Jeff Eaton
:  what you were describing earlier was it was a very CRA very cross functional team, all working on these things. You know, you were talking about working in close conjunction with the designers who are planning out, you know, what the new visual appearance of the site was going to be in how it was going to operate, working with the, you know, the content creators and the editorial team.
:  You know, it, wasn't just a matter of, you know, Wireframes were thrown over the wall and you guys implemented it, which I think is one of the hardest scenarios for a lot of, a lot of people who build an implement to find themselves in these days. 

Daniel Jacobson
:  Yeah. It was kind of a scrum before scrum started taking off.
:  I mean, that's basically what it was. it, it, the only way it could have succeeded was very close collaboration and everybody. No on board with the message. 

Jeff Eaton
:  So I guess coming back to that initial question, you know, it, is it a little weird now to hear the stuff that you worked on turned into sort of the GoTo Dem the GoTo example, slide in everyone's presentations about structured content and reuse?

Daniel Jacobson
:  Yeah. It still freaks me out. it's great. I love seeing it. I love talking to people about it and if there's a way that I can help people, you know, I love doing that. It is still  a little, surreal to, you know, however many, I haven't even been at NPR for the last two and a half years. And, so it's a little, it's interesting to see it coming through the tweet stream once in a while.

Jeff Eaton
:  I can imagine, well, Well, you mentioned that, you know, you're, you're now at Netflix actually, and you're the director of engineering for the Netflix API. 

Daniel Jacobson
:  How 

Jeff Eaton
:  is that different? I mean, it seems like it's, it's an API and it deals with content, but you know, it is really a big shift. 

Daniel Jacobson
:  Yeah. It's, it's a huge shift in certain categories and it's actually quite similar in others.
:  the similarities are, we're both media companies, but actually. Netflix considers ourselves technology, company and media. I think NPR should be striving if they are not already for the same thing, but any case, media distribution, I'm trying to get on multiple devices, reaching consumers with rich multimedia experiences.
:  Those kinds of things are similar. the scale. is fundamentally  different. you know, NPR, I think is a reasonably decent scale operation. but again, you know, by the time I left it, it was, you know, my team was including some contractors around 20, I think, here the engineering team is about 600 or whatever that number is.
:  the scale of, you know, just the comparing the API APIs, I think the NPR API is, you know, however many millions of requests a day. Maybe it's a hundred, maybe it's 50. I don't remember the exact number. the API here does two and a half billion transactions a day with me. and so, you know, what goes into those problems, you know, solving those problems.
:  It's a fundamentally different approach. And so textually at NPR, it was even when I left, it was basically one team. you know, broken down into different groupings, but. focused on one pipeline and that pipeline was pretty interconnected. So, you know, you have the content management system that publishes into a cluster of databases.
:  As the cluster of databases are drawn on by an API. And the API distributes out to end number of destinations and the, the engineering team NPR was building pretty much all of that. Wow. 20 people or so here it's highly distributed. It's an SOA model. lots of engineering teams focusing on especially tasks.
:  And my team does not really store any data. We don't really have any editorial tools or anything like that. We're basically a broker that takes data from other people's systems and pass it across HTTP over to devices and people. so yeah, the core responsibility for this team is. you know, making sure that we have, a solid distribution pipe scaling the system effectively with the growth of the, of the company and growth of the system and yeah.
:  And ensuring resiliency. Those are the three key responsibilities I played out for the team. Whereas NPR, it's building a lab features and presentation layers, or, you know, managing a CMS. So yeah, the scale I think is really at the core fundamentals, like different, and that drives a lot of the differences in other categories.

Jeff Eaton
:  Yeah. I think, you know, at Netflix, you guys are responsible for what I think a double digit percentage of evening internet traffic or something, something like that. 

Daniel Jacobson
:  Yeah. It's 33%, right? 

Jeff Eaton
:  That's definitely a statistic. Not many people could, I can like lame too. 

Daniel Jacobson
:  I mean, there are all kinds of different ways that Netflix has massive scale.
That's one of them, you know, the two and a half billion transactions a day, but we're also an 800 different means. It's kind of mind boggling. When you think about some of these numbers. 

Jeff Eaton
:  I am just blown away that there are that many kinds of devices to be on. I mean, you know, it, it, I guess it makes sense, but it's just, it is staggering.
When you think about that, the, the, the device proliferation that we're seeing is, is really, really difficult to keep up with. 

Daniel Jacobson
:  Yeah. And the scary part is it's not done. Know, it's your fridge is going to have a screen on it. Why not have Netflix there? Right. uh, basically this is the beginning of it, actually, in my view.

Jeff Eaton
:  So how has it been, how has it been different? Just philosophically, like at NPR? I think a lot of the. You know, case for the API is about very public distribution of a lot of different of a lot of information. but with Netflix, it's, it's different, you know, it's, it's basically you're the API is, you know, it's part of a tool chain that allows you to provide a particular service to customers.
:  Are there ripple effect differences in, in how the two get approached? 

Daniel Jacobson
:  You know, I actually think you've mischaracterized NPR a little bit. Even by the time I left, I was starting to position differently and I think that's still the case. So, Yeah, Javan  Marathi and, he's the PM there now for the API and the rest of the folks there.
:  I think they focus intently on internal consumption. They still have the public API and I still use it for a, a M distribution mechanism to the member stations. But an overwhelming percentage of the traffic to the API is from NPR properties. It's not from the general public domain. and then the next category would be the stations and then to the general public.
:  So I think in that regard, it's very similar to Netflix. now that the percentages and the numbers are very different. So I think whatever their percentage is, 60, 70% is NPR. 99.9 plus percent of the traffic. Is from Netflix ready devices here. and we still have a public API, but that's sees an incredibly small percentage of the traffic 

Jeff Eaton
:  then I guess that is, I guess that is sort of a perception thing then, you know, I mean, I had always, I've always heard a lot about the context of, of, of.
:  A public open API being there. And that's actually a question that, you know, I think a lot of people have it's well, if my business doesn't make sense for, you know, putting out a giant fire hose of all of my stuff to the world, how can I really leverage this stuff? And I think that that's part of it. You know, you don't have to think about it as just, you know, the, all you can eat buffet of our stuff.
:  It can be used for internal purposes too. 

Daniel Jacobson
:  Yeah. I'd go a step further and I'd say I'm the majority. In fact, the overwhelming majority of value cases of API use will be, be the internal consumption. and this is from. My background at NPR and at Netflix. but also I talked to a lot of people in the space.
:  I see other companies like Evernote and the guardian and the New York times and whoever else. they all have various similar pie chart where the overwhelming consumption is internally. so I actually think that we are seeing a shift shift in the marketplace towards internal consumption people. Are looking at their businesses differently.
:  It's like, how can we get on all these different devices? Let's not worry as much about. Trying to piggyback on developers in their free time in their garage. And let's dedicate our resources to building these things on our own. How do we get there? Let's build an API so we can leverage the distribution rather than building one-offs all the time for 

Jeff Eaton
:  either individuals, you know, developers or, you know, who are, who are looking at dealing with the massive explosion of devices and channels.
:  What would, what kind of advice would you have for them? You know, what, what kind of, you know, What kind of major pitfalls would you tell them to steer clear of, 

Daniel Jacobson
:  to steer clear, clear of? well, definitely steer clear of, lots of one off development and steer clear of thinking, depending on who you, who you are and what your business is, steered clear thinking of, of yourself as not being a software company.
:  I think that's, to me, that's the number one thing. if you can. Re-imagine whatever your business is and think of yourself as being a. Technology company, or at least partially a technology company, then you're going to dedicate the resources to that. and if you're dedicating resources to that, then you're gonna have smart people who are thinking about these problems in the right way.
:  And you know, I don't think there's a one size fits all device for. You know for everybody, but I think if you have good people thinking about it, you're going to end up with highly leverageable, content management or distribution channels. You're going to end up being much more nimble than you were otherwise.
:  so it's probably sidestepping your question, but, I don't know how else to say it because. You know, even at Netflix, we have very clearly stepped away from trying to be a one size fits all for reaching, you know, all the platforms we're hitting because, you know, that device was, you know, the rest API device was a, you know, a one size fits all model that we use for quite a while.
:  And it felt like the right thing to do, but. My view on that is that that's a tool that's a pragmatic way of approaching it. And when that tool runs its course, we need to move on to something that has greater pragmatic value. so I wouldn't be beholden to any given technology. I'd be beholden to smart technologists who you trust to make good decisions.

Jeff Eaton
:  And it sounds like, you know, an important part of that is, is having a really clear, you know, coherent grasp of what it is that you're trying to accomplish and what the longterm goals are too. 

Daniel Jacobson
:  Absolutely. Yep. That goes right in with the commitment. Right. If you're committed to this, then think about how this is going to play out in five years and start planning for that.

Jeff Eaton
:  Well, I want to say thank you very much for joining us. it's been a pleasure and, I hope that we'll cross paths again in the future. 

Daniel Jacobson
:  Okay. Absolutely. Thanks a lot, Jeff. I really appreciate it. And yeah, definitely. 

Jeff Eaton
:  Thanks for listening to insert content here. If you'd like to catch up on our archives or keep up on our new episodes, visit us at  dot com slash ideas slash podcasts slash insert content queue.
:  And you can also visit us directly at insert content here. Dot com.

Daniel Jacobson
:  Me and another engineer, when we were doing a modeling exercise, we really got caught up on what to call that story, Adam, in the database. And we debated about this for way too long. And her stance was let's call it page, no meaning like a web page or some page representation. And I wanted nothing to do with that.
:  because I thought that was too bound to. The given presentation concept, I really wanted something way more generic. So I started throwing out ideas like object or something that really didn't have a whole lot of meaning, but abstract, totally abstract. Exactly. Yeah. And we did, we went around this time and time again, and ultimately what we decided on was thinking.
:  So the central table in the system, and I think it still is the case today is called. Thanks. We did that specifically so that we could not be worried about, is it going to end up on them on a mobile app or on a, you know, an led on a radio, right. Which doesn't really have a concept of page or anything else.
:  It's just, here's this thing, we're distributing it out and that's it.