document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Sample blog posts data (your existing data)
    const blogPosts = [
        // ... (your complete blogPosts array remains exactly the same)
          {
    id: 18,
    title: "God and My Mind: The Eternal Struggle",
    excerpt: "Why we doubt divinity despite our inherent need for faith",
    content: `<div class="spiritual-post">
        <!-- Your Complete Unchanged Text -->
        <div class="original-text">
            <p>There is no life without God. God exists, yet why does our mind tell us not to believe in Him? The biggest reason for this is our mind which gets entangled in anger, restlessness, greed, criticism. It makes itself arrogant, due to which it thinks that we have done all this, but it is not so. Whatever we do, we do it according to God's will and not our own. Mind is a tool inside us which helps us to develop or degrade. To believe in God or not is a question of us humans. But do we have no right to believe in Him? Because truth should not need truth.</p>

            <div class="image-container">
                <img src="https://images.unsplash.com/photo-1542272201-b1ca555f8505" 
                     alt="Human shadow reaching toward light" 
                     class="content-image">
            </div>

            <p>Although we humans have faith in God, but many people do not have faith in God. Faith is an important part of our human life due to which we feel happy, excited and pleased. Faith means hope, if you do not believe, then you can never find peace in life. Because God has not given us peace, that is why we keep on wishing, there is no end to desires. If you believe in god then you will find that we are different from everyone else in the world and you can also feel happy. You will always be positive and something different will start happening inside you.</p>

            <div class="image-container">
                
            </div>

            <p>If we humans do any work by handing over everything to god then while doing that work we have hope and faith that god never does anything wrong due to which we get peace and freedom from restlessness. Actually god never makes mistakes, he gives us only when a special time comes. And the special time is achieved with lot of difficulties. So it is probably beneficial for us to believe in god and keep waiting for that special time otherwise nothing is achieved.</p>
        </div>

        <!-- Your Key Message Highlighted -->
        <div class="core-message">
            <blockquote>
                "Mind is a tool inside us which helps us to develop or degrade. To believe in God or not is not a question of us humans."
            </blockquote>
        </div>

        <!-- Only Visual Enhancements -->
        <div class="visual-summary">
            <div class="faith-concept">
                <img src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08" 
                     alt="Golden light through storm clouds">
                <p>Faith means hope</p>
            </div>
            <div class="divine-timing">
                
            </div>
        </div>
    </div>
     <br><br><br>
            <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
    category: "Spirituality",
    tags: ["god", "faith", "mind", "human-nature", "divine-will", "peace", "desires"],
    date: "November 25, 2021",
    image: "https://images.unsplash.com/photo-1542272201-b1ca555f8505",
    readTime: "5 min read"
},
        {
    id: 17,
    title: "Fragments of a Forgotten Love",
    excerpt: "A haunting poetic journey through half-remembered meetings and eternal devotion",
    content: `<div class="poetry-post">
        <!-- Poem preserved EXACTLY as written -->
        <div class="poem-stanza">
            <pre>
Maybe we met somewhere
I don't remember
Why, when and how we met
I just remember that you met ||
            </pre>
            <img src="https://petapixel.com/assets/uploads/2016/05/faded_feature-800x495.jpg" 
                 alt="Foggy path symbolizing vague memories" 
                 class="poem-image">
        </div>

        <div class="poem-stanza">
            <pre>
Oh my love, what happened
That you are upset like this
If you had told me just once
I wouldn't have regretted it ||
            </pre>
            <img src="https://media.istockphoto.com/id/1188236181/photo/close-up-of-pensive-woman-looking-at-sunset-through-airplane-window.jpg?s=612x612&w=0&k=20&c=M-csZCqraQE98tQbW2ZTAJkVOjkFemIe7H6abzjzwtc=" 
                 alt="Tearful face reflected in window" 
                 class="poem-image">
        </div>

        <div class="poem-stanza">
            <pre>
Even when I see you in my dreams
Why do I feel
That when you were near me
Why couldn't I be yours ||
            </pre>
            <img src="https://www.shutterstock.com/image-photo/two-male-hands-reaching-out-600nw-797826181.jpg" 
                 alt="Hands almost touching but separated" 
                 class="poem-image">
        </div>

        <div class="poem-stanza">
            <pre>
Don't be angry, don't worry
I was yours, I am yours
I will always remain yours ||
            </pre>
            
        </div>

        <!-- Original Text Certification -->
        <div class="original-certification">
           
        </div>
    </div>
    <br><br><br>
            <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
    category: "Poetry",
    tags: ["unrequited-love", "eternal-devotion", "dreams", "regret", "hindi-poetry"],
    date: "November 18, 2021",
    image: "https://t3.ftcdn.net/jpg/12/27/14/38/360_F_1227143861_3LZ49AFktbliiiZJUrjUFzHrS3tYN90i.jpg",
    readTime: "2 min read"
},
        {
    id: 16,
    title: "When Fate Betrays: A Poetic Meditation on Luck and Love",
    excerpt: "Raw verses about destiny's cruelty and love's silent misunderstandings",
    content: `<div class="poetry-post">
        <!-- First Poem - Unchanged -->
        <div class="poem-container">
            <h3>The Betrayal of Fate</h3>
            <pre class="original-poem">
You have sent me there
Where even fate betrays me
Whenever I want to lift me up, fate makes me fall
It is people's job to say
Even fate starts saying
That you have come here
You should do something and show it here.
            </pre>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/053/213/305/small_2x/winding-path-leading-into-dark-and-foggy-forest-at-night-photo.jpg" 
                 alt="Broken path in dark forest" 
                 class="poem-image">
        </div>

        <!-- Second Poem - Unchanged -->
        <div class="poem-container">
            <h3>People's Definition of Luck</h3>
            <pre class="original-poem">
People say what is luck. Oh people of the world, 
luck is that thing which lets us experience happiness and sorrow.
            </pre>
            <img src="https://thumbs.dreamstime.com/b/hands-making-heart-shape-sunset-hands-making-heart-shape-against-sunset-background-warm-inviting-love-symbol-nature-peaceful-364057403.jpg" 
                 alt="Yin-yang symbol in nature" 
                 class="poem-image">
        </div>

        <!-- Third Poem - Unchanged -->
        <div class="poem-container">
            <h3>The Silent Hearts</h3>
            <pre class="original-poem">
If you love him
Then why do you do it secretly
You too have that heart and he too has that heart
Then why can't he understand your heart and you can't understand his heart
            </pre>
            <img src="https://media.istockphoto.com/id/168623617/photo/black-and-white-image-of-two-hands-reaching-out.jpg?s=612x612&w=0&k=20&c=gYjOu1mrH6OZgNGlS175GYi-pUFRLEUQXOHQSJsoZ8A=" 
                 alt="Two shadows nearly touching" 
                 class="poem-image">
        </div>

        <!-- Your Words Only - No Interpretation -->
        <div class="poet-note">
         
        </div>
    </div>
     <br><br><br>
            <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
    category: "Poetry",
    tags: ["fate", "love", "luck", "heartbreak", "destiny", "unspoken-love"],
    date: "November 15, 2021",
    image: "https://www.shutterstock.com/image-photo/monochrome-two-desperate-woman-try-260nw-1140298994.jpg",
    readTime: "3 min read"
},
        {
    id: 15,
    title: "A Man: A True 21st Century Story",
    excerpt: "How practical wisdom triumphed over formal education in a village life journey",
    content: `<div class="true-story-post">
        <!-- Your Complete Unchanged Narrative -->
        <div class="original-narrative">
            <p>This is not a story or an imaginary incident or talk, rather it is a true incident of 20th century and 21st century. This is the story of a small village where there is a person who was once the darling of his parents and in childhood he used to tell his mother that right now I am very young, I have not grown up enough for you, when I will grow up enough for you then I will go to school, after this the person completed his 12th. He never used his education in his life, rather he used practical qualities and teachings in his whole life and has been doing so.</p>

            <div class="story-image">
                <img src="image copy.png" 
                     alt="Rural Indian village scene" 
                     class="content-image">
            </div>

            <p>When he was about 25 years old, he was married to a girl, his wife was also not very educated, she was better than him but she had some flaws that she never wanted to forget the things of her past because she never faced happiness except sorrow in her past. Both of them were very happy, they got a lot of love from their parents and also had to face hatred from the neighbors. It is said that everything in the world is two, it is never one.</p>

            <p>Same thing happened with him too, now it was the year 2009, he opened a fertilizer shop and started earning his living and taking care of his children and family. Friends, due to some neighbors, he had to close this business and again he faced many difficulties, then he thought of opening a shop, then he tried and opened a shop and thought of earning his living. But he was not able to earn a good income from that shop and he closed that business too, due to which he became unemployed and faced some difficulties, but he never gave up.</p>

            <div class="story-image">
                <img src="https://i.pinimg.com/736x/f6/75/5f/f6755f516a142e171591850c0f26cf46.jpg" 
                     alt="Indian farmer working in fields" 
                     class="content-image">
            </div>

            <p>Then they started working in their fields to earn their living and now they became settled on their farms, now they did not have the courage to accept any new challenge, now they became stable and became dependent on their farms.</p>

            <blockquote class="moral-quote">
                Friends, we can learn from this that we need that person or that education in our life who teaches us to live, who makes us happy, frees us from restlessness, frees us from desires, it is also clear from this that only that happens in our life which we do not think, what we think sometimes happens according to us. It happens 100% by the grace of God and we have to trust his decision.
            </blockquote>
        </div>

        <!-- Timeline Visualization -->
        <div class="timeline">
            <h3>Life Journey At Glance</h3>
            <div class="timeline-event">
                <span class="year">Childhood</span>
                <p>Promised mother he'd go to school when "grown enough"</p>
            </div>
            <div class="timeline-event">
                <span class="year">After 12th</span>
                <p>Relied on practical wisdom over formal education</p>
            </div>
            <div class="timeline-event">
                <span class="year">~25 years</span>
                <p>Married to a woman carrying past sorrows</p>
            </div>
            <div class="timeline-event">
                <span class="year">2009</span>
                <p>Fertilizer shop venture (closed due to neighbors)</p>
            </div>
            <div class="timeline-event">
                <span class="year">Later</span>
                <p>Second failed shop attempt</p>
            </div>
            <div class="timeline-event">
                <span class="year">Present</span>
                <p>Found stability in farming</p>
            </div>
        </div>

        <!-- Your Moral Repeated -->
        <div class="reiterated-moral">
            <p>"Only that happens in our life which we do not think, what we think sometimes happens according to us. It happens 100% by the grace of God and we have to trust his decision."</p>
        </div>
    </div>
     <br><br><br>
            <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
    category: "True Life Stories",
    tags: ["village-life", "practical-wisdom", "life-struggles", "indian-farmer", "god's-plan", "real-story"],
    date: "November 10, 2021",
    image: "image copy.png",
    readTime: "6 min read"
},
        {
    id: 14,
    title: "The Illusion of Perfect Beauty",
    excerpt: "How our perception limits the world's beauty, and why nothing is truly perfect",
    content: `<div class="blog-post">
        <div class="original-content">
            <blockquote class="main-quote">
                This world is as beautiful as we think. When we see something around us and we like it, it is our illusion that it cannot be more beautiful than this. But when you imagine, you will find that it can really be more beautiful than that. Maybe that is why it is said that nothing is perfect here.
            </blockquote>
        </div>

        <div class="image-container">
            <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                 alt="Beautiful mountain landscape at sunrise" 
                 class="content-image">
            <p class="image-caption">Even this breathtaking view could be more beautiful in our imagination</p>
        </div>

        <div class="reflection-section">
            <h3>Understanding This Truth</h3>
            <div class="reflection-points">
                <div class="point">
                    <h4>1. Beauty is Subjective</h4>
                    <p><em>My observation shows beauty exists in our perception - what we find beautiful today might amaze us more tomorrow</em></p>
                </div>
                <div class="point">
                    <h4>2. The Illusion of Perfection</h4>
                    <p><em>When I  say "it cannot be more beautiful than this," I want to highlight how our minds create artificial limits</em></p>
                </div>
                <div class="point">
                    <h4>3. Imagination Expands Reality</h4>
                    <p><em>My realization that imagination reveals greater beauty explains why artists and poets exist</em></p>
                </div>
            </div>
        </div>

        <div class="conclusion">
            <p>My words remind us that the world's beauty is infinite - our perception is the only limit. The moment we think something is "perfectly beautiful," we've stopped imagining how it could be even more breathtaking.</p>
        </div>
    </div>
    <br><br><br>
            <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
    category: "Philosophy",
    tags: ["beauty", "perception", "imagination", "illusions", "worldview"],
    date: "October 27, 2021",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    readTime: "4 min read"
},
        {
    id: 13,
    title: "The Bitter-Sweet Truth About Desire and Patience",
    excerpt: "How our cravings lead to sorrow, yet patience always bears sweet fruits",
    content: `<div class="blog-post">
        <div class="original-content">
            <p>If seen in truth, we also feel that man's unhappiness is the result of a desire. Because whenever we desire something, we become obsessed with achieving it. If there is a delay or difficulty in achieving it, we feel sad. But we have heard that patience brings sweet fruits. If seen in truth, this is also true somewhere, because we have seen it ourselves in our lives. We have also been patient and whenever we have been patient, we have always got sweet fruits.</p>

            <div class="image-container">
                <img src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00" alt="Hands holding ripe fruits symbolizing patience" class="content-image">
            </div>

            <p>What I mean to say is that if you desire anything from your heart, it will happen to you sometime or the other, but you will have to try to get it. Because we are not like robots. If a robot does not do any work, it is made inactive. Similarly, if we do not do any work, we are also made inactive by our master, due to which we cannot do anything ourselves, instead of just thinking.</p>
        </div>

        <div class="explanation-box">
            <h3>Understanding This Wisdom</h3>
            <p><em>words reveal three universal truths:</em></p>
            <ol>
                <li><strong>Desire → Suffering</strong> - Attachment to outcomes creates pain</li>
                <li><strong>Patience → Reward</strong> - Waiting with effort brings fulfillment</li>
                <li><strong>Action → Activation</strong> - Unlike robots, we must self-initiate</li>
            </ol>
        </div>

        <div class="image-container">
            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" alt="Robot hand vs human hand comparison" class="content-image">
        </div>

        <div class="key-takeaways">
            <h3>Living This Truth</h3>
            <ul>
                <li>Feel desires but don't let them consume you</li>
                <li>Water your dreams with consistent effort</li>
                <li>Remember: Inactivity leads to stagnation</li>
            </ul>
        </div>
    </div>
    <br><br><br>
            <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
    category: "Life Philosophy",
    tags: ["desire", "patience", "action", "suffering", "self-improvement", "wisdom"],
    date: "October 25, 2021",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00",
    readTime: "5 min read"
},
        {
    id: 12,
    title: "The Hidden Test in Every Sunrise",
    excerpt: "Why each beautiful morning comes with secret challenges we must discover",
    content: `<div class="blog-post">
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1498496294664-d9372eb521f3" alt="Golden sunrise over misty hills" class="featured-image">
            <div class="image-caption">Every dawn brings both beauty and hidden tests</div>
        </div>

        <div class="intro-section">
            <p>Have you ever stood watching the sunrise and felt that strange mix of peace and anticipation? That first golden light makes everything seem possible - yet we never know what the day will really bring.</p>
        </div>

        <div class="original-quote">
            <blockquote>
            "I think that there is some secret behind the beautiful morning that man gets every day. That is why we are not able to know which tests we have to pass today."
            </blockquote>
        </div>

        <div class="content-section">
            <h2>The Morning Paradox</h2>
            <p>Nature's cruelest kindness is giving us breathtaking dawns before difficult days. That moment when pink clouds dance across the sky? It's both a gift and a preparation.</p>

            <div class="observation-box">
                <p>Think about it: <br>
                - We wake to birds singing, but by afternoon face struggles<br>
                - The same sun that paints the sky gold later tests us with its heat<br>
                - Morning calm exists precisely because storms will come</p>
            </div>

            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef" alt="Foggy path at dawn" class="content-image">

            <h2>Why the Mystery?</h2>
            <p>I said, why we can't know the day's tests in advance. I believe it's because:</p>
            <ul>
                <li><strong>Revealing all at once would overwhelm us</strong> - like showing a student every exam question for their entire life on day one</li>
                <li><strong>The beauty motivates us</strong> - that morning coffee taste, the crisp air - they're fuel for coming battles</li>
                <li><strong>Discovery is the test itself</strong> - figuring things out is how we grow</li>
            </ul>
        </div>

        <div class="personal-reflection">
            <h3>My Morning Realization</h3>
            <p>Last Tuesday, I watched what might be the most spectacular sunrise of my life. Three hours later, I got laid off. The sunrise didn't prevent my bad news - it gave me the emotional reserves to handle it.</p>
        </div>

        <div class="conclusion">
            <h2>The Truth About Mornings</h2>
            <p>That "idea about how we will spend this day", It's nature's way of giving us:</p>
            <ol>
                <li>A moment of peace before the storm</li>
                <li>False confidence that makes us brave enough to face reality</li>
                <li>Proof that beauty exists regardless of our struggles</li>
            </ol>
            <p>Tomorrow when I see dawn breaking, remember: its beauty isn't a promise of an easy day, but armor for whatever comes.</p>
        </div>

        <div class="discussion-prompt">
            <p>Has a beautiful morning ever preceded your toughest day? Share your story in the comments.</p>
        </div>
    </div>
    <br><br><br>
            <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
    category: "Life Philosophy",
    tags: ["morning", "life challenges", "personal growth", "mindfulness", "daily life"],
    date: "October 20, 2021",
    image: "https://images.unsplash.com/photo-1498496294664-d9372eb521f3",
    readTime: "6 min read"
},
        {
    id: 11,
    title: "A Dream of Maternal Love",
    excerpt: "A nocturnal vision where earthly comfort transforms into cosmic embrace",
    content: `<div class="dream-container">
        <p class="dream-opening">Yesterday I saw in my dream that a boy was sleeping in the lap of a girl. The girl was caressing the boy with her hands and the boy was enjoying it a lot.</p>

        <div class="image-container">
            <img src="https://media.istockphoto.com/id/1365586549/photo/loving-mother-and-daughter-sleeping-together-in-bed-in-the-evening.jpg?s=612x612&w=0&k=20&c=Ztb8FjPAwClr8Rt_-hTtZtY8hn8ciicJeQo9IumTVkI=" alt="Mother and child silhouette at sunset" class="dream-image">
        </div>

        <p class="cosmic-transformation">The boy felt as if he was sleeping alone in the lap of the sky and not in the lap of any girl. And that girl was singing a lullaby full of happiness to him.</p>

        <div class="revelation">
            <p>Dear, let me tell you that the girl was none other than my mother and that boy was me.</p>
        </div>

        <div class="explanation-note">
            <h3>About This Dream</h3>
            <p><em>This beautiful dream sequence shows how a mother's love can feel as vast and comforting as the sky itself. The transformation from physical lap to cosmic embrace reveals the spiritual dimension of maternal bonds.</em></p>
        </div>
    </div>
    <br><br><br>
            <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
    category: "Dream Journal",
    tags: ["mother-love", "dream-interpretation", "spiritual-dream", "mother-son-bond", "cosmic-comfort"],
    date: "October 5, 2021",
    image: "https://images.stockcake.com/public/3/f/1/3f10617b-e988-42b3-82f7-90ecedb85a9d_medium/sunset-silhouette-bond-stockcake.jpg",
    readTime: "3 min read"
},
        {
    id: 10,
    title: "The Art of Making Life Beautiful",
    excerpt: "On the profound responsibility and challenge of living meaningfully",
    content: `<blockquote>
            Indeed, life is a way of learning and teaching. If I can teach anyone how to live life in this life, then it will be a matter of great pride for us in this life.
            </blockquote>

            <div class="image-container">
                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643" alt="Path of life through forest" class="content-image">
            </div>

            <h2>The Dual Nature of Existence</h2>

            <div class="meaning-point">
                <h3>1. Life as Continuous Education</h3>
                <p>The first sentence reveals life's fundamental rhythm - we are eternal students and teachers simultaneously. True wisdom comes when we humbly accept we're always learning while courageously sharing what we've understood.</p>
            </div>

            <div class="meaning-point">
                <h3>2. The Privilege of Guidance</h3>
                <p>Considering it "great pride" to teach living suggests the highest honor isn't in material achievements but in illuminating paths for others. This transforms ordinary existence into sacred mentorship.</p>
            </div>

            <div class="image-container">
                <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773" alt="Person meditating at sunrise" class="content-image">
            </div>

            <blockquote class="highlight-quote">
            Living life is not a big deal, but making it beautiful is very difficult because nothing is easy in life, it has to be made easy, it has to be made beautiful.
            </blockquote>

            <h2>The Paradox of Beauty in Struggle</h2>

            <div class="paradox-container">
                <div class="paradox-card">
                    <h3>The Surface Truth</h3>
                    <p>Breathing, eating, surviving - these biological processes of "living" come naturally to all organisms. In this sense, mere existence requires no special effort.</p>
                </div>

                <div class="paradox-card">
                    <h3>The Deeper Challenge</h3>
                    <p>Transforming raw existence into something beautiful demands conscious effort: cultivating relationships, finding meaning, creating art, developing virtues - these don't occur by accident.</p>
                </div>
            </div>

            <h2>Practical Philosophy</h2>

            <div class="practice-steps">
                <h3>How We Make Life Beautiful</h3>
                <ol>
                    <li><strong>Accept the Difficulty</strong> - Recognize beauty won't emerge spontaneously</li>
                    <li><strong>Become an Artisan</strong> - Approach each day as craft, not routine</li>
                    <li><strong>Teach Through Living</strong> - Let your life demonstrate your philosophy</li>
                    <li><strong>Find Beauty in Effort</strong> - The struggle itself becomes part of the beauty</li>
                </ol>
            </div>

            <div class="image-container">
                <img src="https://images.unsplash.com/photo-1464802686167-b939a6910659" alt="Starry night sky" class="content-image">
            </div>

            <div class="conclusion">
                <p>These words remind us that life's default state is raw material, not finished masterpiece. The grandeur of being human lies in our capacity to transform the ordinary through persistent, loving effort - what the poet calls "making it beautiful." This is our highest calling and most rewarding challenge.</p>
            </div> <br><br><br>
            <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
    category: "Philosophy",
    tags: ["life-lessons", "meaning-of-life", "personal-growth", "existential", "wisdom", "self-improvement", "spiritual-growth"],
    date: "September 15, 2021",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    readTime: "9 min read"
},
        {
    id: 9,
    title: "A Soul's Cry for Divine Grace",
    excerpt: "A heartfelt prayer seeking forgiveness and connection with the divine",
    content: `<blockquote>
            Lord, please come once, O Lord, please come once to me,<br>
            O my sins, please tell me,<br> 
            O my sins, I don't feel like Krishna's gift in this world,<br>
            O Lord, come once, please come once.
            </blockquote>

            <div class="image-container">
                <img src="https://images.unsplash.com/photo-1601758003122-53c40e686a19" alt="Devotional prayer hands" class="content-image">
            </div>

            <h2>Meaning and Interpretation</h2>

            <div class="meaning-point">
                <h3>1. The Cry for Divine Presence</h3>
                <p>The repetition of "come once" shows intense longing for God's presence, not as a permanent state but even a momentary experience of grace. The poet doesn't demand constant communion - just one authentic encounter that could transform everything.</p>
            </div>

            <div class="meaning-point">
                <h3>2. Confronting One's Sins</h3>
                <p>The unusual address to "my sins" suggests taking full responsibility. The poet doesn't blame God for being distant, but courageously interrogates their own shortcomings that created separation.</p>
            </div>

            <div class="image-container">
                <img src="https://i.pinimg.com/564x/41/be/97/41be97b49a2d0cc0b938638065d8babc.jpg" alt="Krishna divine light" class="content-image">
            </div>

            <div class="meaning-point">
                <h3>3. The Paradox of Unworthiness</h3>
                <p>The line "I don't feel like Krishna's gift" reveals crushing humility. Though all creation is God's gift, sin makes the poet feel undeserving - showing how guilt distorts our divine self-image.</p>
            </div>

            <h2>Spiritual Significance</h2>

            <div class="significance-container">
                <div class="significance-item">
                    <i class="fas fa-fire significance-icon"></i>
                    <h3>Bhakti Tradition</h3>
                    <p>This prayer embodies raw emotional devotion valued over ritual perfection in bhakti marga. The imperfections make it more authentic.</p>
                </div>

                <div class="significance-item">
                    <i class="fas fa-heart significance-icon"></i>
                    <h3>Divine Relationship</h3>
                    <p>Shows a personal relationship with God - not distant worship but intimate pleading between lover and beloved.</p>
                </div>
            </div>

            
            <div class="application-card">
                <h3>For Modern Seekers</h3>
                <p>In our achievement-oriented world, this prayer teaches:</p>
                <ul>
                    <li>Spiritual progress begins with honest self-assessment</li>
                    <li>God values emotional authenticity over perfect words</li>
                    <li>Even momentary divine contact can transform a life</li>
                </ul>
            </div>

            <div class="prayer-practice">
                <h3>How to Practice This Prayer</h3>
                <p>Try this 3-step approach:</p>
                <ol>
                    <li><strong>Acknowledge</strong> your spiritual longing honestly</li>
                    <li><strong>Identify</strong> specific barriers (sins) separating you</li>
                    <li><strong>Ask simply</strong> for one moment of connection</li>
                </ol>
            </div> <br><br><br>
                        <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
    category: "Devotional",
    tags: ["prayer", "krishna", "forgiveness", "bhakti", "spiritual-longing", "divine-grace", "sin-and-redemption", "hindu-devotion"],
    date: "September 12, 2021",
    image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19",
    readTime: "12 min read"
},
        {
    id: 8,
    title: "Planning Our Children's Future in a Challenging World",
    excerpt: "The importance of thoughtful parenting in an era of limited resources and growing competition",
    content: `<p>We will have to think now what our children will do and what they will become.<br>
            That is, we want to say that we will have to think about our children before their birth, what they will do.</p>

            <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80" alt="Parent and child planning future">

            <p>Because in this increasing crowd there are many ways to live life but if the parents of the child have some dreams which are not fulfilled according to them. The reason is that there is pollution everywhere around us. Our new generation will have to face a lot of difficulties because here the resources are less and the users are increasing.</p>

            <blockquote>Therefore, the parents of our new generation will have to decide beforehand what they want to make of them so that they can send them to the environment and they get the education that their parents want, only then the dreams of those parents will be fulfilled otherwise not.</blockquote>

            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80" alt="Children in classroom">

            <h2>The Balance of Guidance and Freedom</h2>

            <p>If it is so that the parents see their nature after 14 years of their children, then they should leave it to their children and encourage them, they should get education in the field in which the child wants to go, otherwise he can become a victim of a fanatic.</p>

            <h2>Key Considerations for Modern Parents</h2>

            <p>1. Environmental challenges our children will face<br>
            2. Limited resources in an overpopulated world<br>
            3. Balancing parental dreams with children's natural talents<br>
            4. The danger of forcing career paths versus proper guidance<br>
            5. Importance of adapting to the child's emerging personality</p>

            <img src="https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80" alt="Child choosing career path">
                        <br><br><br> <p> <blockquote>Before 2023 writing journey.</blockquote>Writer/Editor : Nittyshry Prabhu</p>`,
    category: "Parenting",
    tags: ["future-planning", "education", "child-development", "parenting-advice", "environmental-challenges", "career-guidance", "generational-change"],
    date: "September 5, 2021",
    image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80",
    readTime: "8 min read"
    },
        {
                
           id: 7,
    title: "Reflections on Love, Life and Existence",
    excerpt: "A collection of poetic thoughts on the duality of human emotions and existence",
    content: `
        <h2>"I wish I had met you earlier"</h2>
        <blockquote>
            I wish I had met you earlier<br>
            This time would not have been here<br>
            How can I tell you what I am going through<br>
            Seeing you I feel as if the moon has come to earth
        </blockquote>
        <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80" alt="Moonlight reflection">
        <p>There is no one like the moon<br>
        Still the moon is infamous<br>
        What should I say about you now the world knows<br>
        What you are and what you are not</p>

        <p>Come tell me what is in your heart<br>

Tell me the secret hidden in your heart <br>

Of which this world is unaware <br>

What is the heart, what is the mind <br>

All this is just the twist of time. </p>


        
        <h2>The Duality of Emotions</h2>
        <blockquote>
            Hate and love are two ends of the same string, holding on to which, our personality is formed.
        </blockquote>
        <p>Maybe you are that ice<br>
        Seeing which the soul trembles<br>
        Maybe you are that dry fire<br>
        Seeing which this body starts burning<br>
        Maybe you are that love<br>

Thinking about which the heart starts fluttering<br>

Maybe you are also that hatred<br>

Thinking about which the heart becomes restles

</p>
        <img src="https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80" alt="Fire and ice duality">
        
        <h2>Paradoxes of Human Nature</h2>
        <blockquote>
            Love and hate are the powers that make us do things we can never even imagine.
        </blockquote>
        <p>Our life is also like the foot of a rose because just as thorns and flowers grow together on the foot of a rose, similarly happiness and sorrow also come together in our life. There is never only one thing in a human's life. It is always two. Just as we love someone, we also hate its opposite (for someone else).

</p>
<p>People wrongly say that my life is my desire. But no, neither this is my life nor my desire. Only the one who deserves it, only God/Parameshwar has the right over it.

Because we do what our mind or heart says. Just think, is this heart ours?

If only we could make someone else like us, then we would say that our life is our desire. Perhaps this wish will never be fulfilled!
<br><br>
We are not us, we are what he is

That is why what we think does not happen

But what he thinks happens

</p>
        <img src="https://media.istockphoto.com/id/612735418/photo/red-rose-on-dark-background.jpg?s=612x612&w=0&k=20&c=MfRZdhGuVyVuTFSYbhp74CBdoPJKhRCpzBbuzpTzPag=" alt="Rose with thorns">
        
        <h2>The Purpose of Education</h2>
        <blockquote>
            We think that the purpose of education is to make a man rule himself.
        </blockquote>
        <p>Because when we are educated, we understand how to talk to others, i.e. when to speak and what to do, which also reveals our personality. 

When we rule ourselves, why should we not think that we can control anyone, except them. </p>

<p>Ruling ourselves means that we perform our duties with true devotion and honesty, just as a student should focus only on studies with honesty and dedication.

Ruling does not mean to get or make something your own, but ruling means to meditate and always be alert towards it. </p>

<p>There are two types of humans in our body, one who thinks about reality and the other who forces us to think about fantasy and ghosts. But the thing to think about is that what we see as imagination, is it wrong? If you think, unless we imagine, will we be able to discover? No, so we can say that it is not wrong to imagine but it is wrong not to believe in imagination. It would be better if we try to make our imagination come true or turn it into reality from the moment we imagine it. Because at that time we get lost in our imagination and become blind. Just think, if a person can do something blind, then what can he do with two eyes? He can do something beyond himself!
</p>
        
        <h2> Nature and Human Existence</h2>
        <blockquote>
            Everything in nature is present inside us. That is why we are able to feel everything.
        </blockquote>
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80" alt="Nature connection">
        <p>The world is that light in which even though we are there we have no existence. Just like a small needle has no existence in front of a bulb, similarly we are also like that bulb. <br>The world is not aware of our existence rather our existence is also extended till a limited area just like we know that there is a needle in front of the bulb but it is not visible, similarly our existence is known to those who made us.</p>


        <h2>The Intoxication of Love</h2>
        <blockquote>
            We are intoxicated<br>
            You are also intoxicated<br>
            Everything is intoxicated<br>
            When you and I are intoxicated <br>

Talks are intoxicated <br>


Desire is intoxicated <br>


If we are intoxicated, the world is intoxicated <br>


It is intoxication that <br>


I cannot forget you <br>


It is only hope that <br>


I can forget myself <br>


This heart is intoxicated <br>


Ever since I have seen you, it crosses all limits.
        </blockquote>
        <p>It is only hope that I can forget myself. This heart is intoxicated ever since I have seen you.</p>
                 <br><br><br><p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
    category: "Philosophy",
    tags: ["poetry", "life-lessons", "love", "existence", "duality", "spirituality", "self-discovery"],
    date: "August 15, 2021",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80",
    readTime: "12 min read"
        
        },
           {
            id: 6,
            title: "Different Yet Special",
            excerpt: "Lessons of Life, Love, and Nature",
            content: `<p>I am not a genius, but I know I am different from everyone else in the world. In fact, every person is different. Each one of us is a genius in our own way because no two people think exactly the same. Our thoughts, experiences, and perspectives make us unique.</p>
                    <p>Recently, I wrote a ghazal, and honestly, I don’t even know what I have truly written in it—it just came from my heart. But that’s the beauty of expression: sometimes we write or create something without fully understanding it ourselves, yet it carries meaning for others.</p>
                    <p>People often say life is not beautiful. But I believe life is beautiful; we just fail to see it. Many people say that they hate life. But I wonder—have they ever truly loved anyone? Because hatred is often deeper than love. If one can hate deeply, it also means that they are capable of deep love.</p>
                    <img src="https://miro.medium.com/v2/resize:fit:1200/0*5VlsaAj0SPv4b6gm" alt="Life Lesson">
                    <p>Life is full of lessons, and nature is one of the greatest teachers. Have you ever wondered why roses, despite their beauty, are not offered in temples? But the lotus, which grows in mud, is offered to gods. The reason is simple—true beauty lies not just in appearance, but in purity and meaning.</p>
                    <p>This teaches us that life is not about looking perfect or showing success—it is about inner growth, purity of heart, and being valuable to others. Just like the lotus, we too can rise above difficulties and find our true worth, no matter where we come from.</p>
                    <p>Every person is unique. Life is beautiful if we choose to see it with love. Like the lotus, we should aim to grow even in the toughest situations and become someone valuable—not just beautiful on the outside, but meaningful from within.</p>
                               <br><br><br>  <p> <blockquote>Before 2023 writing journey.</blockquote>Writer/Editor : Nittyshry Prabhu</p>`,
            category: "Life Lesson",
            tags: ["language", "learning", "spanish", "self-improvement", "habits", "productivity", "remote work", "time management", "poem", "story", "solo travel", "adventure", "Devotional", "Educational"],
            date: "July 11, 2021",
            image: "https://miro.medium.com/v2/resize:fit:1200/0*5VlsaAj0SPv4b6gm",
            readTime: "9 min read"
        },
        {
            id: 5,
            title: "Why Were You Made?",
            excerpt: "A Deep Question About Existence and Identity.",
            content: `<p>Have you ever asked yourself, “Why was I made?” It’s a question that seems simple but carries the deepest meaning of life.</p>
                    <p>We live in a world full of people, yet sometimes we feel lonely and misunderstood. Everyone is busy playing their roles, but very few truly act like they care. Even those we call our own can sometimes feel like strangers.</p>
                    <p>There are moments when we falter, we doubt ourselves, and we wonder about our purpose. That’s when this question becomes louder:</p>
                    <blockquote>“Why was I made?”</blockquote>
                    <p>Maybe life has given us strengths, but also some deficiencies, some imperfections. And that makes us wonder if our existence has any special meaning—or if we were just created like everyone else.</p>
                    <img src="https://imageio.forbes.com/specials-images/imageserve/655bb6366f3bd2e9c59e4d01/Tree-of-knowledge-from-life-lessons-can-enhance-our-purpose-and-well-being-/960x0.jpg?format=jpg&width=960" alt="Book Reading">
                    <p>This feeling of incompleteness makes us reflect: If I were the creator of myself, would I have made myself any different? Stronger, smarter, better?</p>
                    <p>But perhaps, our imperfections are what make us unique. They remind us that our journey is not about being perfect, but about finding meaning in the way we are.</p>
                    <p>So next time you ask yourself, “Why was I made?”—remember that the answer is not outside, but within you. You were made to live, learn, love, fail, rise, and create a life that becomes your own definition of purpose.</p>
                    <p>Life is not about being flawless—it’s about becoming more yourself every day.</p>
                              <br><br><br>   <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
            category: "Philosophy",
            tags: ["self-improvement", "habits", "productivity", "remote work", "time management", "poem", "story", "solo travel", "adventure", "Devotional", "Educational"],
            date: "July 08, 2021",
            image: "https://imageio.forbes.com/specials-images/imageserve/655bb6366f3bd2e9c59e4d01/Tree-of-knowledge-from-life-lessons-can-enhance-our-purpose-and-well-being-/960x0.jpg?format=jpg&width=960",
            readTime: "7 min read"
        },
        {
            id: 4,
            title: "Is Studying Really Enough to Succeed?",
            excerpt: "A Harsh Truth About Our Education System",
            content: `<h2>Friends</h2>
                    <p>Have you ever thought about whether studying is really the key to success? If I say that studying is not as valuable as we think, most people will disagree. But the truth is, success comes more from doing than just studying.</p>
                    <p>Today, society only looks at status, job, and income. People rarely value ideas or potential unless they can see the results. Everyone has become practical—what you do and how much you earn matters more than what you dream about.</p>
                    <p>Look at the current situation: Lakhs of students prepare for competitive exams every year, but only a few thousand succeed. What about the rest? They spend 4–5 years of their life studying with hope, but when they don’t get jobs, they end up doing whatever work helps them earn a living.</p>
                    <p>A farmer’s son becomes a farmer, a shopkeeper’s son runs the shop—because they have to survive.</p>
                    <h2>The big question is: Why do only a few thousand out of lakhs of students succeed?</h2>
                    <p>The main reason is our flawed education system.</p>
                    <p>The population is increasing, competition is rising, and yet the opportunities are limited. Many jobs pay people for just being there, like administrative roles or other government posts. But not everyone gets these opportunities.</p>
                    <img src="https://www.shutterstock.com/shutterstock/videos/3459654513/thumb/1.jpg?ip=x480" alt="Educational">
                    <p>So, what does our country need now? We need skills, practical knowledge, and real opportunities. Degrees alone are not enough anymore. If we want real growth, we must focus on doing rather than just studying.</p>
                    <p>In the end, education is important, but blindly running after degrees without learning real-world skills only wastes precious years. Instead of just preparing for exams, start building, creating, and doing something practical—because that is where true success lies.</p>
                               <br><br><br>  <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
            category: "Educational",
            tags: ["Psychology", "productivity", "remote work", "time management", "poem", "story", "solo travel", "adventure", "Devotional", "Educational"],
            date: "June 30, 2021",
            image: "https://www.shutterstock.com/shutterstock/videos/3459654513/thumb/1.jpg?ip=x480",
            readTime: "6 min read"
        },
        {
            id: 3,
            title: "Life is like water",
            excerpt: "Life is like the flowing water of a river—ever-changing, ever-moving.",
            content: `<p>Life is like the water of a river which can be turned in any direction by the wind, although sometimes water makes its own path, just like when water starts flowing at a low altitude, then no one can control it. In the same way, human life also moves. It is the destiny which moves our life, without it life cannot move.</p>
                    <p>The lines compare life to the flowing water of a river, symbolizing how life is constantly moving and changing. Just as water can be directed by the wind or obstacles but sometimes carves its own path when flowing downward, life too can be influenced by circumstances, people, and destiny.</p>
                    <p>However, there are moments when, just like water breaking free and flowing powerfully downhill, a person’s life follows its own natural course beyond anyone’s control. This signifies that destiny has a strong role in shaping our journey—we can try to control life, but ultimately, some events are beyond our control.</p>
                    <p>The metaphor reminds us to adapt, flow, and accept life’s uncertainties while also realizing that sometimes our inner strength (like water’s force) can create a new path.</p>
                    <img src="https://plus.unsplash.com/premium_photo-1661963912299-4848fd629f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2luZyUyMHdhdGVyfGVufDB8fDB8fHww" alt="flowing water">
                    <h2>Something Related to It</h2>
                    <p>Life is like a river—sometimes calm, sometimes fierce. It bends, twists, and meets obstacles, but it never stops. We too must keep moving, even when destiny pushes us in directions we never expected. Like water, we should stay flexible, for those who remain rigid break easily. And yet, when we gather courage and determination, we can carve our own way through the hardest rocks, shaping our destiny instead of merely following it.</p>
                    <p>"Life is like the flowing water of a river—ever-changing, ever-moving. Sometimes it follows the direction of the wind, just as our lives are influenced by circumstances and destiny. Yet, like water that carves its own path when flowing with strength, life too finds its own way when guided by inner determination. Destiny may guide our journey, but within us lies the power to create new paths and shape our own future."</p>
                               <br><br><br>  <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
            category: "Philosophy",
            tags: ["philosophy", "productivity", "remote work", "time management", "poem", "story", "solo travel", "adventure", "Devotional"],
            date: "June 22, 2021",
            image: "https://plus.unsplash.com/premium_photo-1661963912299-4848fd629f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2luZyUyMHdhdGVyfGVufDB8fDB8fHww",
            readTime: "8 min read"
        },
        {
            id: 2,
            title: "A Soul’s Question to the Divine Purpose",
            excerpt: "A deep spiritual yearning to understand one’s true purpose in life as given by God",
            content: `<p>What have you sent me to learn, what have you sent me to teach <br>
                    Please tell me O lord, what have you sent me here to do. <br>
                    If you don't know this, please find out and tell me  <br>
                    Whenever you sent me, O lord, what was your thinking when you sent me here?  <br>
                    Please tell me with your own mouth what have you sent me here to do  <br><br>
                    Here everyone is telling their own thoughts  <br> 
                    Please tell me O lord, what have you sent me here to do  <br>
                    Here everyone is entangled in their own affairs and making all kinds of rituals  <br>
                    That this should be done, this should not be done, everyone is telling their own things  <br>
                    If you don't know this, please find out and tell me  <br><br>
                    I have heard that you live everywhere, then why don't you listen to me  <br>
                    I have also heard that you are very generous, then why don't you listen to me  <br>
                    If I have made any mistake, please forget that mistake  <br>
                    Please tell me lord, what have you sent me here to do  <br>
                    What have you sent me to learn, what have you sent me to teach </p>
                    <h2>Detailed Explanation:</h2>
                    <p>These lines reflect a deep spiritual conversation between the devotee and God. The speaker is questioning the very purpose of their existence—why they were sent to this world, what they are supposed to learn, and what they are supposed to teach others.</p>
                    <p>The speaker feels lost and confused, noticing that people around them follow rituals and give their own interpretations of life, but no one truly knows God’s real intention for human life.</p>
                    <p>There is a sense of longing for truth and divine guidance. The devotee asks God to speak directly and reveal the true purpose instead of letting people rely on man-made customs and opinions.</p>
                    <img src="https://img.freepik.com/premium-photo/handsome-man-sit-prayer-black-background-his-hands-are-praying-god-s-blessings_493343-667.jpg" alt="Prayer">
                    <p>The lines also show a mix of faith and helplessness—the speaker has heard that God is merciful and present everywhere, yet wonders why God does not respond to their prayers. They humbly seek forgiveness for any mistakes they may have made, hoping that God will still guide them with love.<br><br>
                    Ultimately, these lines represent a seeker’s journey of self-realization, where they are not satisfied with worldly answers and desire a direct connection with the divine truth about why they were born and what role they are meant to play in the world.</p>
                              <br><br><br>   <p> <blockquote>Before 2023 writing journey.</blockquote>Writer/Editor : Nittyshry Prabhu</p>`,
            category: "Devotional",
            tags: ["poem", "story", "solo travel", "adventure", "Devotional"],
            date: "June 19, 2021",
            image: "https://img.freepik.com/premium-photo/handsome-man-sit-prayer-black-background-his-hands-are-praying-god-s-blessings_493343-667.jpg",
            readTime: "4 min read"
        },
        {
            id: 1,
            title: "My First Written Page",
            excerpt: "Sharing my first written page to the God.",
            content: ` <p> 
                    I can't see your form <br>
                    Neither can I see your color <br>
                    Neither can I see your shape <br>
                    Still you reside in my heart. <br><br>
                    The whole world is false <br>
                    Your love is true <br>
                    There is no one better than you in this world. <br><br>
                    Your face is like Mohan <br>
                    Yes, I look at it again and again <br>
                    I can't see your form <br> 
                    Neither can I see your color <br>
                    Neither can I see your shape <br>
                    Still you reside in my heart. </p>
                    <h2>Meaning Behind Each Part</h2>
                    <p>“I can't see your form, neither can I see your color, neither can I see your shape, still you reside in my heart.”</p>
                    <blockquote>God is formless, beyond human senses and physical attributes. Even though we cannot see God with our eyes, we can feel His presence in our hearts through love, faith, and devotion.</blockquote>
                    <p>“The whole world is false, your love is true, there is no one better than you in this world.”</p>
                    <blockquote>The material world is temporary and ever-changing, but God's love is eternal and pure. The devotee feels that God’s love and grace are the ultimate truth, more valuable than worldly possessions.</blockquote>
                    <p>“Your face is like Mohan, yes, I look at it again and again.” </p>
                    <blockquote>Mohan is another name for Lord Krishna, meaning “the one who enchants the mind.” The devotee compares God’s beauty and charm to that of Krishna, whose divine form is mesmerizing.</blockquote>
                    <img src="https://images.peopleimages.com/picture/202301/2578433-hand-candle-and-woman-writing-in-journal-in-home-with-top-view-for-calm-peace-and-relax-morning-routine-in-home.-woman-notebook-and-diary-planning-goals-idea-vision-or-creative-writer-lifestyle--fit_400_400.jpg" alt="Diary">
                    <h2>Explanation in Simple Words</h2>
                    <p>These lines show unconditional devotion where the devotee loves God not because of His appearance or worldly power, but because of His presence felt deep within the heart. It conveys that:</p>
                    <p>God is beyond physical attributes, yet spiritually present everywhere. <br>
                    The world is temporary, but God’s love is eternal truth. <br>
                    The devotee finds ultimate peace, beauty, and joy in God’s presence, just like devotees of Krishna adore His divine charm.</p>
                                <br><br><br> <p><blockquote>Before 2023 writing journey.</blockquote> Writer/Editor : Nittyshry Prabhu</p>`,
            category: "Poem",
            tags: ["poem", "story", "solo travel", "adventure", "Devotional"],
            date: "May 19, 2021",
            image: "https://images.peopleimages.com/picture/202301/2578433-hand-candle-and-woman-writing-in-journal-in-home-with-top-view-for-calm-peace-and-relax-morning-routine-in-home.-woman-notebook-and-diary-planning-goals-idea-vision-or-creative-writer-lifestyle--fit_400_400.jpg",
            readTime: "5 min read"
        }
    ];

    // Function to create URL-friendly slug from title
    function createSlug(title) {
        return title.toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special chars
            .replace(/[\s_-]+/g, '-') // Replace spaces/underscores with hyphens
            .replace(/^-+|-+$/g, ''); // Trim hyphens from both ends
    }

    // Function to show post detail with hash-based URL
    function showPostDetail(postId) {
        const post = blogPosts.find(p => p.id == postId);
        if (!post) {
            // Redirect to home if post not found
            window.history.replaceState({}, '', '/');
            document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
            document.getElementById('home').classList.add('active');
            return;
        }

        const titleSlug = createSlug(post.title);
        
        // Update URL with hash
        window.history.pushState({ postId }, '', `/#/post/${postId}/${titleSlug}`);
        
        // Update post header
        const postHeader = document.getElementById('post-header');
        if (postHeader) {
            postHeader.innerHTML = `
                <span class="post-category">${post.category}</span>
                <h1>${post.title}</h1>
                <div class="post-meta">
                    <span class="post-date"><i class="far fa-calendar-alt"></i> ${post.date}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
            `;
        }
        
        // Update post content
        const postContent = document.getElementById('post-content');
        if (postContent) postContent.innerHTML = post.content;
        
        // Update post tags
        const postTags = document.getElementById('post-tags');
        if (postTags) {
            postTags.innerHTML = post.tags.map(tag => `
                <span class="post-tag">#${tag}</span>
            `).join('');
        }
        
        // Update navigation links
        const currentIndex = blogPosts.findIndex(p => p.id == postId);
        const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
        const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
        
        const prevPostLink = document.getElementById('prev-post');
        if (prevPostLink) {
            prevPostLink.style.visibility = prevPost ? 'visible' : 'hidden';
            if (prevPost) {
                const prevSlug = createSlug(prevPost.title);
                prevPostLink.setAttribute('href', `#/post/${prevPost.id}/${prevSlug}`);
                prevPostLink.setAttribute('data-id', prevPost.id);
            }
        }
        
        const nextPostLink = document.getElementById('next-post');
        if (nextPostLink) {
            nextPostLink.style.visibility = nextPost ? 'visible' : 'hidden';
            if (nextPost) {
                const nextSlug = createSlug(nextPost.title);
                nextPostLink.setAttribute('href', `#/post/${nextPost.id}/${nextSlug}`);
                nextPostLink.setAttribute('data-id', nextPost.id);
            }
        }
        
        // Show post detail section
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        const postDetailSection = document.getElementById('post-detail');
        if (postDetailSection) postDetailSection.classList.add('active');
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update document title
        document.title = `${post.title} | Your Blog Name`;
    }

    // Handle URL routing
    function handleRouting() {
        const hash = window.location.hash.substring(1);
        const parts = hash.split('/');
        
        if (parts[0] === 'post' && parts[1]) {
            showPostDetail(parts[1]);
        } else {
            // Show home page
            document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
            document.getElementById('home').classList.add('active');
        }
    }

    // Function to create post cards with hash-based links
    function createPostCards(posts, containerId, limit = null) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        let postsToShow = limit ? posts.slice(0, limit) : posts;
        
        container.innerHTML = postsToShow.map(post => `
            <div class="post-card" data-id="${post.id}">
                <div class="post-img-container">
                    <img src="${post.image}" alt="${post.title}" class="post-img">
                </div>
                <div class="post-content">
                    <span class="post-category">${post.category}</span>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-meta">
                        <span class="post-date"><i class="far fa-calendar-alt"></i> ${post.date}</span>
                        <a href="#/post/${post.id}/${createSlug(post.title)}" class="read-more" data-id="${post.id}">
                            Read More <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add click event to post cards
        document.querySelectorAll(`#${containerId} .post-card`).forEach(element => {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                const postId = this.getAttribute('data-id');
                if (postId) showPostDetail(postId);
            });
        });
    }

    // Initialize routing
    handleRouting();
    window.addEventListener('popstate', handleRouting);

    // ... (rest of your existing code for:
    // - Navigation functionality
    const navLinks = document.querySelectorAll('[data-section]');
    const sections = document.querySelectorAll('section');
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            
            // Update URL for home
            if (sectionId === 'home') {
                window.history.pushState({}, '', '/');
            }
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
            
            // Close mobile menu if open
            if (navLinksContainer) {
                navLinksContainer.classList.remove('active');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Update title
            if (sectionId === 'home') {
                document.title = "Your Blog Name";
            }
        });
    });

    // - Hamburger menu toggle
    // - Back to top button
    // - Contact form submission
    // - Newsletter form submission
    // - Toast notifications
    // - Dark mode toggle
    // - Category filtering)
     if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
        });
    } 
      // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = contactForm.querySelector('input[name="name"]').value.trim();
            const email = contactForm.querySelector('input[name="email"]').value.trim();
            const message = contactForm.querySelector('textarea[name="message"]').value.trim();
            
            if (name && email && message) {
                document.querySelector('.loader').style.display = 'flex';
                setTimeout(() => {
                    document.querySelector('.loader').style.display = 'none';
                    showToast('Message sent successfully!');
                    contactForm.reset();
                }, 1500);
            } else {
                showToast('Please fill in all fields');
            }
        });
    }
    // newsletter form, toast notifications, post navigation, 
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value.trim();
            if (email) {
                showToast('Thanks for subscribing!');
                this.reset();
            } else {
                showToast('Please enter a valid email');
            }
        });
    }

    // Show toast notification
    function showToast(message) {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }

    // Post navigation
    const prevPostLink = document.getElementById('prev-post');
    if (prevPostLink) {
        prevPostLink.addEventListener('click', function(e) {
            e.preventDefault();
            const postId = this.getAttribute('data-id');
            if (postId) showPostDetail(postId);
        });
    }
    
    const nextPostLink = document.getElementById('next-post');
    if (nextPostLink) {
        nextPostLink.addEventListener('click', function(e) {
            e.preventDefault();
            const postId = this.getAttribute('data-id');
            if (postId) showPostDetail(postId);
        });
    }

    // dark mode toggle, category filtering, etc.)
     const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Check for saved user preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }

    // Category filtering
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category').toLowerCase();
            const filteredPosts = category === 'all' ? blogPosts : blogPosts.filter(post => 
                post.category.toLowerCase() === category
            );
            
            // Update all relevant post containers
            const postContainers = ['all-posts', 'featured-posts', 'popular-posts', 'recent-posts'];
            postContainers.forEach(containerId => {
                const container = document.getElementById(containerId);
                if (container) {
                    createPostCards(filteredPosts, containerId);
                }
            });
            
            // Update active section
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active');
            });
            const blogSection = document.getElementById('blog');
            if (blogSection) {
                blogSection.classList.add('active');
            }
            
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            const blogNavLink = document.querySelector('.nav-links a[data-section="blog"]');
            if (blogNavLink) {
                blogNavLink.classList.add('active');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });


    // Initialize posts for multiple sections
    const postContainers = [
        { id: 'recent-posts', limit: 3 },
        { id: 'all-posts', limit: null },
        { id: 'featured-posts', limit: 4 },
        { id: 'popular-posts', limit: 5 }
    ];
    
    postContainers.forEach(container => {
        if (document.getElementById(container.id)) {
            createPostCards(blogPosts, container.id, container.limit);
        }
    });
    
    // Hide loader after content is loaded
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) loader.style.display = 'none';
    }, 1000);
});