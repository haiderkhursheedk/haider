import Video from "./video";
import Linky from "./linky";


export default function Hero() {

  return (
    <section className="w-full max-w-4xl rounded-[24px] m-8 md:rounded-t-[44px] p-8">
      <div className="text-lg font-regular text-black space-y-4">
        <h1 className="text-7xl font-bold mb-12">hi i&apos;m haider.</h1>

        <Video/>

        <Linky/>
        {/* <p className="-mt-2">i'm just a guy that loves creating things for others.</p>
        
        <p>i started my first company at 13 when i sold dragon ball z tenkaichi budokai 2 in 2009 on ebay.</p>
        
        <p>selling stuff online turned into my high school obsession and i grew that company to $100K in revenue per year by expanding to products like these and these.</p>
        
        <p>these days im shipping random stuff and seeing what i want to spend more time on. recently built freeewrite, tidbit, and some other viral stuff.</p>
        
        <p>in the past, i was the founder of buildspace — it was the largest school in the world for people working on their own ideas from youtube videos to edm music to companies.</p>
        
        <p>during the company we scaled nights & weekends online to over 100,000 students, raised from a16z/yc, constructed a physical campus in sf for those that wanted to go full-time on their ideas, grew content to millions, and built an ai social product to help people find others like themselves trying to build stuff.</p>
        
        <p>worked on the co for five years. but, i ended up closing it down. here's a letter i wrote about it.</p>
        
        <p>buildspace was special. really special.</p>
        <p>if you were a fan. thank you. you changed our lives.</p>
        
        <p>did a bunch of stuff before.</p>
        
        <p>founded an online elementary school called zipschool focused on homeschoolers and grew it to 150,000 kiddos, trained a real time cv model that would coach you in overwatch named visor (we got really big actually, then, blizzard banned us oops), was cto at kanga where we built our own models to recommend gamers content they'd enjoy, trained my own open-source deep learning models for esports analytics, built random products for league of legends that got to 1m+ users, built a dumb ar menu app that got no where, and built a bunch of other random stupid shit that was meaningless but fun (lol).</p>
        
        <p>some stuff above worked out.</p>
        <p>most of it didn't.</p>
        <p>but, i learned a lot.</p> */}
      </div>
    </section>
  );
}