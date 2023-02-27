import React, { useState } from "react"
import * as cssStyles from './index.module.css'

const pageStyles = {
  fontFamily:"'Courier New', Courier, monospace",
}


const posts = [
  {
    title:'History of Javascript',
    key:'0',
    p1:"While it was still in its infancy, Javascript had no name to speak of. It's primary creator, Brendan Eich, wanted to write a language that was a bit closer to human language than to the languages of the time; which were only a few steps removed from the old assembley languages that barely resembled human language at all. He points to modern day Python as resembling something similar to what he had in mind back then, but he was unfortunately not the high man on the totem pole. He had supervisors and overseers who insisted that this new language should resemble Java. Which is a veiled way of saying it should resemble C - not the most natural or intuitive of programming languages by any stretch of the imagination. Regardless, Eich did as he was told and in a ten day crunch period he put together much of what we know as Javascript today. Even now, although the name has stuck, Eich feels that there were perhaps better choices for what to call the language. One example name considered was 'Mocha', which has a Java-esque ring to it without sounding derivative. I remember when I first began my journey as a programmer, I assumed that these two languages were created by the same people and would probably operate the same way. Alas, this is certainly not the case.",
    p2:"I find it a small miracle, as well, that Eich and his colleagues managed to avoid a lawsuit or at least a letter to cease and desist. From what I've learned, apparently Java's parent company was flagrantly litigious at that time - even attacking individuals using Java in their webnames because Java was in their legal names. Somehow, JS squeaked through. Perhaps it helped a bit that after a while the language began to also be known by another name - ECMA Script, after the European Computer Manufacturers Association which is in charge of setting the standards for Javascript as a whole.",
    p3:"As is the case with other languages such as Linux, part of the romance in learning the history comes from learning about the creator of the language themselves. Eich apparently wanted to be a physicist when he was growing up, but he found himself disappointed with the state of Physics during his lifetime. He wanted to be working on things that were well beyond the limitations of our time. So, instead, he pioneered a new path - as one of the most important computer programmers in history. Javascript is the most commonly used and most widespread programming language on the internet, and it was largely created by a single man in about ten days. Remarkable."
  },
  {
    title:'Deploying an API',
    key:'1',
    p1:"Before deploying an API, you first have to create it. In development, it is common to make use of the local server. When you eventually deploy the API, however, you will need to provide the API a way to connect with the database over the internet and not from just your local device. One way this can be accomplished is to create a variable for your API and database URL. You should provide a condition wherein the API will use local host if it is running in development mode and will reach out to a different source if it has been deployed. Often, the latter will be represented by an environment variable that you will need to set on the deployment service website; and the service itself will do the rest. This one particular step highlights a general theme about the process of API deployment - namely that you must prepare your API to run under different conditions. ",
    p2:"There are many deployment options. Personally, I have experience with using both Netlify and Heroku. In the case of Heroku, there are a few things to keep in mind. Firstly, you will want to keep an up-to-date Git repository on a Git hosting site like Github. You may have to go into the settings of your repository and select pages. From here, you can tell Github to 'deploy from branch' and then specify the branch you would like to deploy from. Save this and this branch should now become an available option for your deployment selection on Heroku.",
    p3:"I recommend intalling Heroku's CLI, as it's not at all uncommon to run into some unexpected errors along the deployment process. Sometimes the build log in the browser will tell you what you need to know to troubleshoot, and other times you'll need to either look through the logs manually from your dashboard or open up your terminal, log into Heroku, and run 'heroku logs --tail --app yourAppName'. The most common problem to run into is not having a properly installed dependency or having an incompatible version of one or more dependencies. When you do fix this up and deployment is successful, be sure to view your work and make sure everything functions as intended. Your API will now be accessible online to anyone with the Heroku link, and you will have successfully completed deployment."
  },
  {
    title:'Deploying on Multiple Platforms',
    key:'2',
    p1:"We live in an age where everyone has a device, and most of us have multiple. We may want to use an application or reach a website when we're at our desktop or laptop, on our tablet or on our mobile device; and each of these can have different types and sizes of displays. Likewise, they may also have different ways to interact. I admit, sometimes I go back and forth so often from my desktop to my phone that I try to swipe the screen of my PC and click the imaginary mouse attached to my phone. To effectively deploy to multiple platforms, you are going to want to keep a few things in mind. The first of these are to consider how the end user will interact with your app or website when using different devices. For instance, you will be perfectly fine using buttons and click events for a person using a computer or laptop, but it would behoove you to also adapt your program for touch. React Native, for instance, has several means for touch events - including different events for long and short touches, flicking, and other subtly different interactions.",
    p2:"Another, more elementary but vitally important, thing to consider is how your app or webiste is going to be displayed on different devices. There are, frankly, a ridiculous number of web services which are not optimized for the changes in screen size - and thus when the service is accessed in a way the developer did not expect, they are caught with their figurative pants down - their work now rendered to look amatuerish and difficult to use. In some cases, failing to prepare for these differences will result in the app or website breaking completely.",
    p3:"One way to optimize for different sized screens is to use the CSS @media query. Using this technique, you can set provisions for when the screen size detected falls below or above a certain width. For instance, you may have a right-side navigation beside your header logo when the screen is large enough to fit a latop or computer screen. When the screen shrinks to that of, say, a mobile device, you can set things up so that your navigation will appear below your header logo - tidying up the space by stacking up rather than contorting the look by trying to squeeze everything in together. Using React Native's Platform component, you can also set the appearance and functionality of your app or website to change depending upon which platform is detected. iOS, Android, and more. The more you can prepare your work to adjust to different platforms, the more people will be able to use your service with whatever device or OS they're using at the time."
  },
  {
    title:'Password Hashing',
    key:'3',
    p1:"Encryption is of vital importance to all internet users, especially where there is data involved; and there most always is. Of course, we always think of banking services as being of particular importance to protect from potential threats. But how is this done? If you've ever taken the time to research cryptography, you will know just how hard it is to create a code that cannot be broken down and solved over time. If there is a key or any kind of pattern to how the coding is done, it will eventually be figured out - no matter how clever or convoluted. So, if we were to rely on a single kind of coding method which followed a particular structure, none of our information would be safe and encryption would be a pointless exercise in futility. Luckily, this is not the way the encryption works. Rather, encryption is a lot more random to the human eye than any human-invented code scheme. What's more, most encryptions undergo a handful (or more) of scrambling processes. Even if you might be able to figure the password after one scramble, after ten or twenty you won't have any way to piece together what the garbled mess of letters, numbers, and other characters are supposed to represent.",
    p2:"One tool that can be used to encrypt, say, a password, is a package you can install called bcrypt. Using bcrypt you can both hash a password to encrypt it and evaluate an encryption to determine if it matches a user entry. So, how does this work? Let's start with hashing. To begin with, brypt will take the user input and put it through a process of scrambling. You can add as much 'salt' as you want. Salt is, to put it simply, a kind of digital noise. The more salt you add, the more scrambled and thoroughly encrypted the password will be. Keep in mind, however, that more salt will also take more time and processing power to complete. There is a stack line of diminishing returns after, perhaps, around twenty rounds of salt. The difference between twenty and two thousand rounds will not really make much difference in regards to the efficacy of the encryption - but it will certainly take a lot longer to complete.",
    p3:"The other method you can use through bcrypt is the match evaluation. This is where bcrypt evaluates whether or not the password entered by the user matches the password stored. The trick here is, the actual plain-lettered password is not stored at all. If it were, anyone that gained access somehow to bcrypts storage could find any password they wanted. Instead, it is the encrypted password which is stored. Bcrypt is then able to compare the plain-letter password entered by the user with the scrambled encryption and determine accurately whether or not the password entered is correct. Through these methods, the user can truly be protected - as it is, in a way, a double blind system which - even if not impregnable - will protect the password by several layers of security."
  }
]

const IndexPage = () => {

  const [current, setCurrent] = useState(null)

  const handleClick = (key) => {
    console.log(key)
    setCurrent(posts[key])
  }

  return (
    <main style={pageStyles}>
    <div className={cssStyles.upper}>
    <button className={cssStyles.pageBut} onClick={() => window.location.reload(false)}>
      <div style={{display:'flex', flexDirection:'column',
      justifyContent:'space-evenly'}}>
        <h1 style={{fontSize:64, marginBottom:0}}>Blog</h1>
        <p style={{fontSize:32, marginBottom:0}}>Of</p>
        <h1 style={{fontSize:64}}>Code</h1>
      </div></button>
      
      <div className={cssStyles.archiveSection}>
        <h1 className={cssStyles.archive}>Archive</h1>
        <hr className={cssStyles.hr}></hr>
        <hr className={cssStyles.hrShort}></hr>
        {
          posts.map(post =>
          <div className={cssStyles.postList}>
            <button className={cssStyles.postLink} onClick={(() => handleClick(post.key))} value={post.key} style={{textDecoration:'underline', border:'none', background:'none', fontSize:18, cursor:'pointer'}}><p>{post.title}</p></button>
          </div>
         )
        }
      </div>
    </div>
    
    <div>
    {current !== null ?
        <div className={cssStyles.postContainer}>
          <h1 className={cssStyles.blogTitle}>{current.title}</h1>
          <h5 className={cssStyles.blogAuthor}>by Cody Dalton</h5>
          <p className={cssStyles.blogText}>{current.p1}<br></br><br></br></p>
          <p className={cssStyles.blogText}>{current.p2}<br></br><br></br></p>
          <p className={cssStyles.blogText}>{current.p3}<br></br><br></br></p>
          <br></br><hr className={cssStyles.hr}></hr>
          
        </div>
          :
          posts.map(post =>
          <div className={cssStyles.postContainer}>
            <h1 className={cssStyles.blogTitle}>{post.title}</h1>
            <h5 className={cssStyles.blogAuthor}>by Cody Dalton</h5>
            <p className={cssStyles.blogText}>{post.p1}<br></br><br></br></p>
            <p className={cssStyles.blogText}>{post.p2}<br></br><br></br></p>
            <p className={cssStyles.blogText}>{post.p3}<br></br><br></br></p>
            <br></br><hr className={cssStyles.hr}></hr>
            <br></br>     
          </div>

          )}
    </div>
    <footer style={{backgroundColor:'rgba(51,255,0,0.85)', textAlign:'center', padding:'1%', fontSize:16, width:'100%', marginLeft:'-1%', position:'absolute'}}>©Blog of Code \ No Rights Reserved</footer>        
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
