import React from "react";

function ConceptsPage() {
  return (

    <>
      <h2>Web Development Concepts</h2>
        <nav id="second-nav">
          <a className="second-a" href="#web-servers">Servers</a>
          <a className="second-a" href="#frontend-design">Design</a>
          <a className="second-a" href="#img-optimization">Images</a>
          <a className="second-a" href="#css-definitions">Stylesheets</a>
          <a className="second-a" href="#forms">Forms</a>
          <a className="second-a" href="#express">Express</a>
          <a className="second-a" href="#javascript">JavaScript</a>
          <a className="second-a" href="#dom">DOM</a>
        </nav>

        <article id="web-servers">
          <h3>About Web Servers</h3>

          <p>An index file is the default name for a 'home' page of a website hosted on an Apache web server, which is
            what OSU's Engineering server is using. In VS Code I created a new file and named it index.html, then using
            'ctrl + i' I added the HTML Sample tag to the file, I modified h1 to include my first and last name and h2 to
            reflect Assignment 1. Paragraphs were added as needed.</p>

          <p>From the local index file, I was able to gather the HTTP request information: the status code is 200 (same
            for both the web server and the local computer). The request line displayed 'Provisional headers are
            shown...', this means that the request wasn't sent over the network but was served from a local cache, which
            doesn't store the original request headers (This fact was gathered from Chrome Developers Documentation). This
            was different on the web server versus the local computer in that on the web server the request line was
            displayed as 'GET /~cernadap/a1-cernadap/ HTTP/1.1'. The HTTP Response on the local computer did not display a
            status line, while on the web server it showed as 'HTTP/1.1 200 OK'. The response headers on both displayed as
            'Content-Type: text/html'. The response 'body' in both includes the whole HTML page, what the browser will
            output to the user.</p>

          <p>Some important information the browser inspector tools tells me about the index file is the request URL's
            address, the request method is: GET, and the status code is: 200 OK. I have not created a favicon file since
            it is on the OSU server by default. From the server the information gathered using the inspector tools is my
            URL's address, the request method is: GET, the status code is: 200 OK, and the remote address is
            128.193.40.12:443. The favicon.ico file has a status 200 since it is on the server by default. The main.css
            and main.js files have a 404 status code provided that the server cannot find the requested resource.</p>

          <p>My URL is made up of the scheme
            'https://', the subdomain is 'web.engr.', the domain is 'oregonstate.edu', and the path to resource are
            '~cernadap/a1-cernadap/' which are the folder and file name.</p>
        </article>

        <article id="frontend-design">
          <h3>Frontend Design</h3>

          <p>Frontend design is focused on designing an engaging user experience for a website in terms of aesthetics,
            ease of use, efficiency, and functionality, geared towards a wide audience of different backgrounds and needs,
            such as creating a fast and aesthetically-pleasing page for color-blind users or a language independent page
            with clear iconography for users of different foreign languages. In terms of color, scheme, font and
            typography scheme, imagery, icon and illustration scheme, and user-friendly, intuitive navigation tools, a
            website's aesthetics (graphical user interface, or GUI) must be consistent. It's important to note that
            keeping up with frontend design trends is vital if you want to deliver the most enjoyable experience possible
            and meet the users' expectations.</p>

          <p>The five "E"s of usability:</p>

          <dl>
            <dt>Effective</dt>
            <dd>Provides information about how websites, applications, and/or software are able to successfully and
              quickly assist users in achieving their goals or reasons for visiting your site or app.</dd>
            <dt>Efficient</dt>
            <dd>Refers to how fast and easily a user can obtain the desired results.</dd>
            <dt>Easy to navigate</dt>
            <dd>Is concerned with how intuitive, clear, and concise all interactions are, and whether the user is able to
              easily locate what they are looking for with the least amount of effort.</dd>
            <dt>Error-free</dt>
            <dd>The ability of a website, app, or software to handle/address user errors. Furthermore, the content is
              straightforward and unlikely to provoke misunderstanding.</dd>
            <dt>Enjoyable</dt>
            <dd>Refers to how the website's content design fulfills the specific demands of the target audience. Indicates
              if the interaction and experience were pleasant.</dd>
          </dl>

          <p>The different elements that make up a website page are called page layout tags. Their main purpose is to
            assist screen readers and search engine robots, such as web spiders, identify which sections of the page
            contain specific elements. Moreover, it gives semantic meaning to your code so other developers can easily
            follow your site and work together with you. A standard internet page has a header (of a document or section),
            navigation bar (a set of navigation links), main (main content of the body) article part (group of related
            content), asides (sidebars/unrelated content), and a footer (website owner's copyright statement).
            Additionally, devices often display page layout tags with a newline before and after the element.</p>

          <p>We can use anchors to link to content and from page to page. This can be accomplished by using an anchor
            element (&lt;a&gt; &lt;/a&gt;) along with its href attribute which is used to indicate the URL that we want to
            link to. We can also utilize anchors to link to specific content within a page. This can be accomplished by
            adding an id attribute to the HTML element we would like to direct the anchor to. Then, at the end of the URL
            we add # followed by the id attribute and this tells the anchor exactly where we want it to go. Anchors are
            excellent for navigating within a page and linking to other pages.</p>

        </article>

        <article id="img-optimization">
          <h3>Optimizing Images</h3>

          <p>
            The performance of a website is increased when images are optimized during web development.
            Visitors can bounce of a page quickly if they need to wait extra seconds. Additionally,
            optimizing images alleviates the server loads all of the data required for a website to show on your screen.
            In order to optimize images you need to following six specifications:
          </p>


          <dl>
            <dt>Descriptive file name</dt>
            <dd>Improves the SEO of a website and helps search engine bots to categorize elements of the website.</dd>
            <dt>Small file size</dt>
            <dd>Reduced file sizes take less space on the server, and improves loading times for your pages.</dd>
            <dt>Exact dimensions</dt>
            <dd>Exact dimensions help with the page layout design and speed.</dd>
            <dt>Correct file format</dt>
            <dd>Helps with overall look and quality of the images.</dd>
            <dt>Reduced resolution</dt>
            <dd>Helps reduce the size of your image files and gives you more flexibility with different screen sizes.</dd>
            <dt>Color Mode</dt>
            <dd>RGB for .PNG, .JPG, .SVG, and .WebP, and Indexed for .GIF. All these formats provide more needed color
              flexibility.</dd>
          </dl>

          <h4>File Formats</h4>

          <dl>
            <dt>GIF</dt>
            <dd>Most appropriate for: Short photos, video sequences, and animations.</dd>
            <dt>PNG</dt>
            <dd>Most appropriate for: Biomorphic shapes and line art, and solid colors.</dd>
            <dt>SVG</dt>
            <dd>Most appropriate for: Vector Graphics and animated images.</dd>
            <dt>JPG</dt>
            <dd>Most appropriate for: Photos and Google Drawings.</dd>
            <dt>WebP</dt>
            <dd>Most appropriate for: Photos and transparent backgrounds.</dd>
          </dl>

        </article>

        <article id="css-definitions">
          <h3>Cascading Stylesheets</h3>

          <p>
            The main reason to incorporate stylesheets in websites are the greater flexibility and control of the overall
            style of a website and the fact that placing style sheets in separate files makes them easy to reutilize.
          </p>

          <h4>Five Ways to Incorporate Stylesheets</h4>

          <dl>
            <dt>External CSS rules</dt>
            <dd>Makes different styles easily reusable.</dd>
            <dt>Embedded within a style tag</dt>
            <dd>Used when applying minimal styling on a single page.</dd>
            <dt>Inline within an HTML element</dt>
            <dd>When not working with an external CSS file or making minor style changes to a single HTML element.</dd>
            <dt>In JavaScript literals</dt>
            <dd>Enable for easy variable and expression string interpolation in order to modify CSS rules.</dd>
            <dt>In regular JavaScript</dt>
            <dd>When using JavaScript DOM functionality to modify the existing style of a the page's document after a user
              action.</dd>
          </dl>

        </article>

        <article id="forms">
          <h3>Forms</h3>

          <p>
            The six major goals of accessible forms are as follows:

            <strong>to make clear instructions</strong> visible above the form and on the labels, provided that, only
            people with vision will benefit from placeholder values.

            <strong>To inform users why you're collecting data</strong> and specify which fields are required.

            <strong>To set the first field to autofocus</strong>, so that people may begin typing without needing to use
            the keyboard.

            <strong>To provide flexibility for people who cannot or do not want to use a mouse or trackpad</strong>, as
            this ensures that each form control can be filled out using the keyboard.

            <strong>To add tab indexing to complicated forms</strong>, to make it obvious which fields should be filled in
            which order.

            <strong>To check that validation messages are legible on the screen</strong>, since the messages shown by the
            built-in HTML browser are not viewable on the screen.
          </p>

          <p>
            The form tag encloses all the form information and fields. It has two attributes, 'action' which specifies
            where the request should be sent and 'method' which specifies the HTTP method to be used.
            The label tag helps users understand the purpose of their data entry. It has one attribute, 'for' which
            indicates which HTML element it is targeting.
            The fieldset and the legend tags are used to separate and group different controls.
            The input tag creates different types of form elements. It has two attributes, 'type' which specifies the type
            of user input needed and 'name' which communicates to the server which part of the form the data is associated
            with.
            The select tag creates a drop-down list of choices.
            The option tag creates the list of choices inside the list created by the select tag. It has one attribute
            'value', which represents the option selected by the user sent to the server.
            The text area tag allows a user to input multiple lines of text. It has several attributes, such as
            autocomplete, autofocus, disabled, placeholder, readonly, and required.
            The button tag receives user input in order to submit all the provided form information to the server.
          </p>

          <p>
            The following are the major form styles to improve usability:
            Inputs, selections, and buttons should be around the size of the tip of a finger in height and breadth.
            You should add margin above each fieldset to provide for breathing room.
            Padding should be included within the fieldset to prevent the labels and controls from contacting the edges.
            Each fieldset should contain a legend that describes or prompts the user about its collection of form
            controls.
            Text size should be increased to accommodate larger fingers and arthritic hands.
            Font-family should be inherited from the body to keep the typography consistent.
            CSS style should assist users comprehend where they left off or what they just finished.
            The 'required' state of a field is vital for informing users which fields are needed and which they may
            disregard.
            Use asterisks to denote all selectors that include the mandatory property.
            Change the border color from gray to red when an input is invalid and green when valid.
            When the users hover over an input, change the color, and placeholder text to increase contrast.
          </p>
        </article>

        <article id="express">
          <h3>Express</h3>

          <p>
            Node is a server-side technology that allows us to run JavaScript outside of the browser.
            NPM is a Node package management that allows us to install and manage different community created libraries
            and packages for our Node application.
            Express is a Node.js framework for building RESTful APIs.
            These three technologies improve the web development experience by allowing us to develop robust web
            applications outside of the browser by providing broad features and pre-built tools for building web and
            mobile applications.
          </p>

        </article>

        <article id="javascript">
          <h3>JavaScript</h3>

          <p>
            The main data types in JavaScript are: a number, a boolean value (true/false), a string, a symbol, the special
            values undefined and null, and an object.
          </p>

          <p>
            Objects, arrays, and JSON are widely used in JavaScript, arrays and objects
            are data structures used to store information. An object is a set of name-value pairs, whereas an array is a
            list of
            values.The properties of an object can be modified using CRUD operations.
            JSON, which stands for JavaScript Object Notation, is a popular standard for communicating data between
            programs.
          </p>

          <p>
            A loop is a group of statements that is provided once but can be executed several in a row.
            The code within the loop is executed a certain number of times until
            a certain condition is satisfied for each item in the collection or indefinitely.
            JavaScript's conditional statements regulate behavior and decide whether or not certain bits of code can
            execute.
            The different types of conditionals in JavaScript include if-else and switch statements.
          </p>

          <p>
            The concept of objects serves as the cornerstone of object-oriented programming.
            In object-oriented programming, data structures and objects with unique traits or features are defined.
            Each object may also come with its own set of methods.
          </p>

          <p>
            Functional programming is a method for writing maintainable code that makes use of functions.
            Additionally, by employing functions as variables, parameters, and return values, FP produces code that is
            clean and easy to follow.
          </p>
        </article>

        <article id="dom">
            <h3>DOM</h3>

            <p>
              One of the most common things you'll want to do when creating web pages and applications is use React and
              JavaScript to modify the document structure in some way. This is frequently achieved by utilizing the
              Document Object Model (DOM), a collection of APIs for altering HTML and style information that mainly rely
              on the Document object.
            </p>

            <p>
              Scripting languages such as JavaScript may access and update the DOM to change the appearance of a web page.
              One of the simplest methods to alter the content of an HTML element is by using JavaScript to manage the DOM
              and properties like the inner HTML property. Moreover, we can produce dynamic HTML content and alter the
              DOM's configuration using JavaScript DOM manipulation.
            </p>
        </article>
    </>
  );
}

export default ConceptsPage;