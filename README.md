# Workknot

This project is started with an idea to help local labourers get a job.

![Jekyll site CI](https://github.com/WorkKnot/Workknot-Web/workflows/Jekyll%20site%20CI/badge.svg?branch=master)

## Our Motto

WE BELIEVE, OUR PLATFORM IS A SMALL STEP IN CONTRIBUTING 
TO A GREAT VISION OF REDUCING UNEMPLOYMENT-RELATED PROBLEMS IN INDIA.

## Team Workknot

1. [Ankit Kumar (Founder & Marketing head)](https://www.linkedin.com/in/ankit-kumar-44488a191/)
2. [Nishant Mishra (Co-founder & Web developer)](https://www.linkedin.com/in/nishant-mishra-16b76b1a4/)
3. [Hardik Kumar (Technical head & App developer)](https://www.linkedin.com/in/hardikkr/)
4. [Harshit Ruwali (Technical support, Web-Developer & AI developer)](https://www.linkedin.com/in/harshitruwali/)
5. Dayasheel (Innovator & Legal helper)
6. Anjana Haridas (Content writer & Speaker)
7. [Avani Mishra (Marketing strategist & Content creator)](https://www.linkedin.com/in/avani-mishra-b85282190/)
8. [Ashi Sachan (Graphic designer)](https://www.linkedin.com/in/ashi-sachan-58801b182/)

## About Workknot

Workknot, as a platform, originated through a simple idea followed by a well scrutinized plan. This idea, which aims at connecting skilled as well as unskilled workers with the customers through an online medium, came out when Ankit (Founder & Marketing Head) and his friend Dayasheel (Innovator & Legal Helper) were on a phone call.

In India, the Labour Force Participation Rate is just 49.80% (source: [Periodic Labour Force Survey (PLFS) of the National Sample Survey Office (NSSO)](https://thewire.in/labour/periodic-labour-force-survey-data-employment)). We found that the lack of proper communication between the workers and the customers is one of the main causes behind this low rate. After a lot of research, we came to know that a Workknot-like platform existed in foreign land but is unimplemented in our country. So, Ankit wanted to create such an online platform and hence he took help for layout and website development from his friend, Nishant, who is an outstanding Web Developer. After the layout was planned, we consulted some Chartered Accountants, Lawyers and Business Consultants to know more about the sustainability of this idea. And to our surprise, they were flabbergasted after listening it. Their great response motivated us to plan further.

Then the time came when we started connecting the dots and so, we gave the technical responsibility to a talented budding programmer and one of the hardest working members of our team, Hardik, for the Workknot App development.

While the project was in its intermediate stage, we enthusiastically welcomed our new member, Anjana, to give a magical touch to the descriptive & preliminary aspects of our project with her beautiful oratory & scription skills. During the creation of the platform, we faced some technical difficulties which were won over by Harshit (AI Developer). He helped us by modifying some algorithms and he also made Workknot more user-friendly by adding Artificial Intelligence. Then we felt that we needed someone to analyse lots of data which could help us to improve Workknot further. So, we greeted Avani into our team. She is a research enthusiast and a superb content creator. She also helps the team through her marketing management skills. Finally, we welcomed Ashi. There's no word to describe her artistry. She almost fills life in lifeless things through a variety of artistic skills. She fulfilled all of our design-related requirements and also created the Logo of Workknot.

Workknot is an online platform which will be initially implemented on a small scale. It facilitates the customers and the workers to connect at the ease of their fingertips. The facilities provided under Workknot get enhanced once the users sign up for their individual profiles on Workknot. As most of the workers we come across are not so familiar with this technology, so at the beginning, we will fill their details on our own. We have tried our best to keep this platform in close proximity to the contractors, civil engineers, labourers, masons, technicians and people in similar fields.

For Team Workknot, revenue or source generation does not hold any priority right now. Our main aim is to make Workknot a valuable social asset and to give a powerful support to the Indian workforce through establishing a good customer-worker connection. However, we may need some financial resources to support this kind act. So, we may use advertisements or other healthy ways to support ourselves as well as Workknot.

As a future plan, we have also decided that we may provide some valuable support (like healthcare facilities, insurance, etc.) to the necessitous workers connecting to Workknot. Though all such plans depend on the success of this small step of Workknot, we are hopeful for the best.

## Android app
You can get the Android app from Google Play Store from [link](https://play.google.com/store/apps/details?id=com.kumarhardik.obliqueapp).<br>
Currently the app is only for Gaya and Bodh-Gaya Disrict, and we aim to spread it.

## Using and updating the webpage locally for developers

Get the `.env` file form the developers by contacting them and copy it the root directory. 

### Using git 
Firstly clone the repo by running `https://github.com/WorkKnot/Workknot-Web.git` <br>

Change the directory using `cd Workknot-Web` <br>

Install the required node packges by running `npm install` in the web-app directory.<br>

After getting the `.env` file,
  run `nodemon index.js`

### Using docker

_This is recommended only for the users who are familier with Docker, if not use the above git method._

You may get the docker image by running `docker pull harshitruwali/workknot-web`<br>

You may have to pull the git repo in the docker container to make sure that the changes are up to date. <br>

For running the web at local host run 
`docker run -it -d -p <outside-port-of-your-choice>:8000 harshitruwali/workknot-web`

Now just for conformation that you have correct setup run `docker ps -a` <br>

You should see the image `ruwaliharshit/workknot-web`, if so you are good to proceed.


## Contacting the Developers

Shoot out a mail at workknot@gmail.com and we will resopond as soon as possible.
