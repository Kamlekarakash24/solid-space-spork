import "./edyodastories.css"

const Storiesdata=[{
    id:1,
    imageurl:"https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    title:"Fresh Graduate or IT professional Looking for a job ",
    author:"Arman Ahmed",
    date:"05 Jul 2019",
    desc:"If you are a fresh graduate - or new to IT - looking for the next job, you need to read this."
},
{
    id:2,
    imageurl:"https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
    title:"Introduction To A Machine Learning Online Course",
    author:"EdYoda",
    date:"23 Aug 2019",
    desc:"We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds. To begin with, one must understand what machine learning is."
},
{
    id:3,
    imageurl:"https://edyoda.s3.amazonaws.com/media/blog-images/understanding-devops.jpg",
    title:"Understanding DevOps",
    author:"EdYoda",
    date:"23 Jul 2019",
    desc:"DevOps is a term derived after combining development and operation for a common purpose- driving the development of operational processes."
},
{
    id:4,
    imageurl:"https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg",
    title:"Amazon Web Services (AWS) Cloud Day - Bangalore",
    author:"Kalyan Mahalingam  ",
    date:"05 Jul 2019",
    desc:"It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels keeping the plates so heavy. :D)"
},
{
    id:5,
    imageurl:"https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg",
    title:"edYoda Meetup #01 : A Date with Cloud",
    author:"Ashish Pandey",
    date:"05 Jul 2019",
    desc:"Being a Cloud and DevOps evangelist, it is my job to talk to engineers and managers about the features and future of the cloud."
},
{
    id:6,
    imageurl:"https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview_jvxxxO3.png",
    title:"Automation Testing: An Overview",
    author:"EdYoda",
    date:"29 Jul 2019",
    desc:"Software is all around us and it shapes the world differently. It shapes how the objects are designed, what information we receive, how and where we work, who we meet and communicate."
}];

const Blogcard=Storiesdata.map((item,id)=>{
    return(
    <div className="blog">
        <img className="image" src={item.imageurl} alt="blog_image"></img>
        <h2 className="title">{item.title}</h2>
        <p className="auth">{item.author}</p>
        <p className="date">|{item.date}</p>
        <p className="desc">{item.desc}</p>



    </div>
    )
}
);


function Stories(){
    return(
        <div>
            <div className="topbar">
                <div>
                    <h1 className="topbar1">EDYODA</h1>
                    <p className="topbar2">Stories</p>
                </div>
                <div>
                    <h4>CATEGORIES<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" alt="dropdown"></img></h4>
                </div>
                <div className="topbar3">
                    <p>EdYoda is a learning and knowledge sharing platform for techies</p>
                </div>
                <div>
                    <button className="topbar4">GOTO MAINWEBSITE</button>
                </div>

            </div>
            <div className="main">
                <h2 className="lat">Latest Posts</h2>
                <h4><img className="filimg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=" alt="filter"></img>Filter by Categories</h4>
                <div>
                    <p className="filter">ALL</p>
                    <p className="filter">Artificial Intelligence</p>
                    <p className="filter">Cloud Computing</p>
                    <p className="filter">DevOps</p>
                    <p className="filter">Programming Languages</p>
                    <p className="filter">Mobile Application Development</p>
                    <p className="filter">Technology and Tools</p>
                    <p className="filter">Get a job in Tech Company</p>
                    <p className="filter">Others</p>
                </div>
                <div className="blogs">
                    {Blogcard}
                </div>
            </div>
           
<div className="footer">
    <div>
        <h6>EDYODA</h6>
        <p>About us</p>
        <p>Contact us</p>
        <p>Careers</p>
        <p>Terms of use</p>
        <p>privacy policy</p>
        <img src="https://www.edyoda.com/static/media/startup-india.75c895fb.svg" alt=""></img>

    </div>
    <div>
    <h6>CAREER TRACKS</h6>
        <p>React Developer</p>
        <p>Full Stack Developer</p>
        <p>Data Scientist</p>
        <p>Data Scientist for Professional</p>
        <p>Software Engineer</p>

    </div>
    <div>
    <h6>MICRO DEGREE</h6>
        <p>Python Development</p>
        <p>Python For AI/MI</p>
        <p>Data Analysis</p>
        <p>Artificial Intelligence & Machine Learning</p>
        <p>Java Development</p>
        <p>Advance Java Development</p>
        <p>Frontend Development</p>

    </div>
    <div>
    <h6>RESOURCES</h6>
        <p>Jobs</p>
        <p>Learning paths</p>
        <p>Courses</p>
        <p>Learning videos</p>
        <p>Educators</p>

    </div>
    <div>
    <h6>FOR ENTERPRIZES</h6>
        <p>Hire Edyoda Candidates</p>
        <p>Train Your Employees</p>
        <p>Learn and Earn</p>
        <p>Certification</p>
        <p>Affliation</p>

    </div>
    <div className="addr">
    <h6>CONNECT</h6>
        <p>1st Floor,Gopalan Millennium Tower,ITPL Main Road, Brookefield,Bengaluru, Karnataka-560037,India</p>
        <p>hello@edyoda.com</p>
        <p>+91 8971554184  (11 AM to 6 PM)</p>
        <p></p>
        <p></p>
    </div>


</div>
        </div>
    )
} 


export default Stories