/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        /* Function to verify existance of url field and its emptiness
         * feedId - ID of feed in allFeeds data structure which to verify
         */
        function testEachFeedInallFeedsforURL(feedId) {
            it('has a URL defined and that the URL is not empty for feed ' + feedId, function() {
                //URL field should be defined
                expect(allFeeds[feedId].url).toBeDefined();
                //Length of url should not be 0
                expect(allFeeds[feedId].url.length).not.toBe(0);
            });
        }

        /* Loop to verify each feed in allFeeds
         */
        for(var feed = 0; feed < allFeeds.length; feed++) {
            testEachFeedInallFeedsforURL(feed);
        }

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        /* Function to verify existance of name field and its emptiness
         * feedId - ID of feed in allFeeds data structure which to verify
         */
        function testEachFeedInallFeedsforName(feedId) {
            it('has a name defined and that the name is not empty for feed ' + feedId, function() {
                //Name field should be defined
                expect(allFeeds[feedId].name).toBeDefined();
                //Length of name should not be 0
                expect(allFeeds[feedId].name.length).not.toBe(0);
            });
        }

        /* Loop to verify each feed in allFeeds
         */
        for(var feed = 0; feed < allFeeds.length; feed++) {
            testEachFeedInallFeedsforName(feed);
        }
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function(){
            // According to index.html and style.css if body hase
            // class 'menu-hidden' then menu is hidden. If this class
            // is not presented then menu is not hidden.
            // Verify that menu is hidden.
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function(){
            // Click on menu icon
            $('.menu-icon-link').click();
            // Verify that menu is NOT hidden
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // Click menu icon once again
            $('.menu-icon-link').click();
            // Verify that menu is hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        /* Function to verify existance at least one feed entry when the
         * loadFeed function is called and completes its work.
         * feedId - ID of feed in allFeeds data structure which to verify
         */
        function testEachFeedForInitialEntries(feedId) {
            // loadFeed function is asynchronous so BeforeEach and done
            // should be used
            beforeEach(function(done) {
                loadFeed(feedId, function() {
                    done();
                });
            });

            it('exist when feed ' + feedId + ' is loaded', function(done){
                // If length of .entry is more than 0 then entry exist
                expect($('.entry').length).toBeGreaterThan(0);
                done();
            });
        }

        /* Loop to verify each feed in allFeeds
         */
        for(var feed = 0; feed < allFeeds.length; feed++) {
            testEachFeedForInitialEntries(feed);
        }
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        // Variable to save text from previous and new feeds
        var prevContent = '';
        // loadFeed function is asynchronous so BeforeEach and done
        // should be used
        beforeEach(function(done) {
            // Load feed from feed 0 of allFeeds
            loadFeed(0, function() {
                // Save previous feeds content
                prevContent = $('.feed').text();
                // Load feed from feed 1 of allFeeds
                loadFeed(1, function() {
                    done();
                });
            });
        });

        it('changes content when new feed is loaded', function(done){
            // Verify that content loaded from feed new feed is not equal
            // to content from previous feed
            //prevContent = $('.feed').text();
            expect($('.feed').text()).not.toEqual(prevContent);
            done();
        });
    });

    /* Test suite that is testing addition of new feed to allFeeds
     */
    describe('New Feed', function() {
        it('should be added to allFeeds data structure by addFeed function', function(){
            var prevLen = allFeeds.length;
            addFeed('someName', 'someURL');
            expect(allFeeds.length).toBe(prevLen+1);
            //Name field of the last new added feed should be defined
            expect(allFeeds[allFeeds.length-1].name).toBeDefined();
            //Length of name of the last new added feed should not be 0
            expect(allFeeds[allFeeds.length-1].name.length).not.toBe(0);
            //URL field of the last new added feed should be defined
            expect(allFeeds[allFeeds.length-1].url).toBeDefined();
            //Length of url of the last new added feed should not be 0
            expect(allFeeds[allFeeds.length-1].url.length).not.toBe(0);
        });
    });
}());
