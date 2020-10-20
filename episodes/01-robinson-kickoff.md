---
title: "What the Heck is Strategy?"
episode: 1
transcript: partial
date: 2012-09-14
guid: 283e01d7-9386-4031-86f6-4363b269f68f
filename: insert-content-here-01.mp3
filesize: 22089237
description: "Jeff Robbins discusses the meaning of Content Strategy, reminisces about Dreamweaver, and introduces a dazzling new jingle."
guests: 
  - name: Jeff Robbins
    title: CEO
    company: Lullabot
    home: http://jjeff.com
    twitter: jjeff
---
Jeff Eaton
:  Hi, I'm Jeff Eaton, your host of Insert Content Here, a podcast about a content strategy and -- as I like to think of it -- content tactics. I'm here with Jeff Robbins, and we're both from Lullabot. If you're a longtime listener to the Lullabot podcast, this is actually a new podcast we're launching. Put simply, we keep getting involved in content strategy, over and over, in every project we work on.
:  As we've gotten deeper and deeper into it we said, "We kind of like this, we're good at it, and we want to start talking more about it." So this podcast is our platform for digging a little deeper into these topics, talking more about them, engaging with the other people in the web world who are involved with them. Hopefully everybody learns something, and we'll get a snappy new jingle out of it, too.

Jeff Robbins
:  So, do you like the jingle?

Jeff Eaton
:  It's stuck in my wife's head. We're humming it now. That's what you hope for out of a jingle.

Jeff Robbins
:  I'm always a little hesitant on jingles. I think theme music is a good way to go, but jingles? I don't know. I mean, it's just they they can be done wrong.

Jeff Eaton
:  I mean, John Williams was booked until October.

Jeff Robbins
:  We did our best. So Jeff, tell us, how did you get into this content strategy game?

Jeff Eaton
:  There are two answers to that. One is that over the years, as Lullabot worked on various projects with other companies, we were almost entirely working on the development and design and architectural side of things. Content was one of those things that lived elsewhere. You know, that's the clients responsibility! We keep bugging them about it, and eventually, they give us the content, usually 45 minutes before the site launch. That's sort of the traditional arc that I think anybody who's worked on websites for a long time has gone through.
:  As time went on, and we were working on larger and more complex projects, we realized that we needed to engage more directly with the people who were making the content. We didn't just need to bug them earlier in the process, we needed to actually work closely with them when planning out the design, and figuring out how the site was going to be built. Because the content's not just decorative stuff that gets layered on after the real meat is built in PHP, or Python or whatever. It's why the whole site's being built.
:  I think Kristina Halvorson at the Chicago Content Strategy Meetup made a comment like, "No one comes to your website to figure out how you were loading things from the database."

Jeff Robbins
:  I'll just zoom out a little bit. For people from the content strategy world who have been pointed to this podcast, they might not know Lullabot. And so Lullabot historically, has been known as Drupal development company. It's how we got started. Drupal is well known as a content management system, and in our first few years, we were, really focusing on the *system* part of content management system. But over time, we realized that focusing on the *content* end of things was an important area.

Jeff Eaton
:  The funny thing is that before I started out as a developer doing web stuff, I was a freelance tech writer. My background was that I was a writer and content guy, who ended up sitting next to the old Windows NT server in the marketing agency that I worked for, and had to learn how to reboot it. Then I woke up six years later to say, wait a minute, I haven't written an article in three years, but suddenly I'm designing database schemas. What happened? For probably 15 years I was doing pure development. But that's actually how I originally got in -- writing articles for magazines, working with clients, and actually creating the content for their marketing websites. When content strategy started hitting the scene, it really rang a lot of bells. It catalyzed all of the nagging concerns I think we'd all had, going into projects where content wasn't an emphasis. The projects over the last three or four years, we have taken a more deliberate approach to it. We've seen how much more successful things are when it's actually a part of the process. 

Jeff Robbins
:  Over the years, Lullabot has led architecture and development on a lot of high profile websites. Oftentimes, we come in and say, What do you need? What kind of database do you need? How do you know what's the functionality you want? And we realized over time that the best people to talk to were the production people, the people that entered content and used the website on a on a daily basis. For projects like Martha Stewart and WWE, and The Grammys, we sat down with them and said, "We really want to talk to your content team, so that we can construct tools that support them." Like, customizing the administrative interfaces has become part of our process these days.

Jeff Eaton
:  That's an interesting point, because one of the things that we spend a lot of time on is stuff like building tools to facilitate good editorial workflow. Traditionally, I don't think that gets treated as content strategy as much. I definitely don't want to get into quibbles about what content strategy is and isn't. That's why I don't want to just call this a content strategy podcast, because I want to capture some of the tactics, too. There's the content strategy like, "Why are we putting this on our website? Why are we doing it? How are we going to maintain it?" A lot of it is about, you know, institutional knowledge: Why do we even have that page? What kind of things do we want to emphasize on our front page? And how are we going to support that?
:  Then there's the tactical side of it: what kind of CMS tools support it, how do we improve the copywriting process. I think some of the lines can get blurry, and I want to make sure that the topics we cover here capture the high level strategic discussions (I think they're really interesting, for people who come from a development background), but I also want to make sure we have a chance to drill down into some of the nitty gritty stuff. How do we build a better editorial interface for somebody who's got tasks that need doing?

Jeff Robbins
:  This is a content podcast from the standpoint of a company that does complete development stuff, so everything from "How are you going to model this in the database? How are you going to interrelate these things together? How are you going to do your database queries and list things?" through to, "How people are using it? How are end users are going to see it? How content creators are going to interact with it?"
:  I think we learned some really big lessons early on. When you sit down in a vacuum with the decision makers at the client company, you ask them what they need, and they describe… I don't know, what would be a good example? Well, actually, one I've used over time is one of the first big projects that we did: The MTV UK website. When we first sat down and looked at their homepage, it was this aggregation of the most popular news items, interspersed with some upcoming events. We sat there for a while scratching our heads trying to figure out what the algorithm was going to be to get this information in there.
:  Then we came back the next week and looked at it. The Glastonbury Festival was coming up, and the whole homepage was a Glastonbury Festival ad. We thought, okay, so we need to create this algorithm that is also swappable. Then we sat down and talked to them and they said, Oh, we've got those three guys that sit over there. They sit in front of Dreamweaver all day, and they're really amazing designers, and they do the homepage, that's their job. 

Jeff Eaton
:  That really gets to the heart of the challenges people coming from a development standpoint face; we're very keen reverse engineering the existing patterns that we see, coming up with the algorithm. Sometimes a conversation with the decision makers behind it reveals the fact that… They don't know!

Jeff Robbins
:  We gave them a text area, we just, you know, they were just able to paste in their Dreamweaver code, and it worked great.

Jeff Eaton
:  Oh, no, see, see that's a that's a hot topic of debate now! That can be really good for transient stuff, but it does end up hampering in the long term.

Jeff Robbins
:  Yeah, this was 2006. But from a production standpoint, it was great for them -- they had complete control over it. These days, we'd probably asked them to do some special tagging and things like that. And, and Dreamweaver might not be the, the tool of choice.

Jeff Eaton
:  This plays right into one of the questions that someone on Twitter just fired over to us. He said, "there's a lot of talk about CMS as needing to be more 'content adaptive' in publishing; it's something that's come up in a lot of sessions at conferences and articles lately. But what does adaptive content even mean? What would a CMS supporting that even look like?"
