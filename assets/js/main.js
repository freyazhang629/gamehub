console.log('GameHub loading...');

// GameHub Main JavaScript - monstersurvivors.bio
document.addEventListener('DOMContentLoaded', function() {
    // 扩展的游戏数据库 - 使用本地截图
    const gamesDatabase = [
        // Zombie Horde 首位推荐
        {
            id: 'zombie-horde-build-survive',
            title: 'Zombie Horde: Build & Survive',
            category: 'action',
            theme: 'zombie',
            description: 'Build defenses and survive zombie hordes in this intense action game',
            rating: 4.8,
            plays: 2800000,
            url: '/games/action/zombie-horde-build-survive.html',
            screenshot: '/games/3.zombie-horde-build-survive.png',
            iframeUrl: 'https://games.crazygames.com/en_US/zombie-horde-build-survive/index.html',
            trending: true,
            featured: true,
            latest: false
        },
        // 其他游戏
        {
            id: 'loot-island-treasure-digger',
            title: 'Loot Island - Treasure Digger',
            category: 'adventure',
            theme: 'treasure',
            description: 'Dig for treasure on mysterious islands',
            rating: 4.5,
            plays: 125000,
            url: '/games/adventure/loot-island-treasure-digger.html',
            screenshot: '/games/1.loot-island-treasure-digger.png',
            iframeUrl: 'https://games.crazygames.com/en_US/loot-island/index.html',
            trending: true,
            featured: true,
            latest: false
        },
        {
            id: 'asmr-girl-livestream-mukbang',
            title: 'ASMR Girl: Livestream Mukbang',
            category: 'casual',
            theme: 'simulation',
            description: 'Relaxing ASMR mukbang experience',
            rating: 4.2,
            plays: 89000,
            url: '/games/casual/asmr-girl-livestream-mukbang.html',
            screenshot: '/games/2.asmr-girl-livestream-mukbang.png',
            iframeUrl: 'https://games.crazygames.com/en_US/asmr-girl-livestream-mukbang/index.html',
            trending: false,
            featured: true,
            latest: true
        },
        
        // 新增的10个流行游戏（使用本地截图）
        {
            id: 'slope',
            title: 'Slope',
            category: 'action',
            theme: 'running',
            description: 'Navigate the endless downhill challenge',
            rating: 4.8,
            plays: 2500000,
            url: '/games/action/slope.html',
            screenshot: '/games/4.subway-surfers.png',
            iframeUrl: 'https://slope-game.github.io/rungame/slope/index.html',
            trending: true,
            featured: true,
            latest: false
        },
        {
            id: 'vex-3',
            title: 'VEX 3',
            category: 'puzzle',
            theme: 'physics',
            description: 'Master precision platforming challenges',
            rating: 4.6,
            plays: 1800000,
            url: '/games/puzzle/vex-3.html',
            screenshot: '/games/5.stickman-hook.png',
            iframeUrl: 'https://www.silvergames.com/en/vex-3/iframe',
            trending: true,
            featured: true,
            latest: false
        },
        {
            id: 'smash-karts',
            title: 'Smash Karts',
            category: 'racing',
            theme: 'multiplayer',
            description: 'Armed combat kart racing action',
            rating: 4.7,
            plays: 1200000,
            url: '/games/racing/smash-karts.html',
            screenshot: '/games/6.smash-karts.png',
            iframeUrl: 'https://smashkarts.io/',
            trending: true,
            featured: true,
            latest: false
        },
        {
            id: 'moto-x3m',
            title: 'Moto X3M',
            category: 'racing',
            theme: 'motorcycle',
            description: 'Extreme motorcycle stunts',
            rating: 4.5,
            plays: 950000,
            url: '/games/racing/moto-x3m.html',
            screenshot: '/games/7.moto-x3m.png',
            iframeUrl: 'https://moto-x3m.github.io/motox3m/',
            trending: true,
            featured: false,
            latest: true
        },
        {
            id: 'shell-shockers',
            title: 'Shell Shockers',
            category: 'shooting',
            theme: 'multiplayer',
            description: 'Egg-based FPS multiplayer',
            rating: 4.4,
            plays: 800000,
            url: '/games/shooting/shell-shockers.html',
            screenshot: '/games/8.shell-shockers.png',
            iframeUrl: 'https://www.crazygames.com/embed/shell-shockers',
            trending: true,
            featured: false,
            latest: false
        },
        {
            id: 'temple-run-2',
            title: 'Temple Run 2',
            category: 'adventure',
            theme: 'running',
            description: 'Endless temple adventure',
            rating: 4.6,
            plays: 1500000,
            url: '/games/adventure/temple-run-2.html',
            screenshot: '/games/9.temple-run-2.png',
            iframeUrl: 'https://www.crazygames.com/embed/temple-run-2',
            trending: false,
            featured: true,
            latest: false
        },
        {
            id: 'basketball-stars',
            title: 'Basketball Stars',
            category: 'sports',
            theme: 'basketball',
            description: 'Fast-paced basketball action',
            rating: 4.3,
            plays: 700000,
            url: '/games/sports/basketball-stars.html',
            screenshot: '/games/10.basketball-stars.png',
            iframeUrl: 'https://www.crazygames.com/embed/basketball-stars',
            trending: false,
            featured: true,
            latest: true
        },
        {
            id: 'geometry-dash',
            title: 'Geometry Dash',
            category: 'puzzle',
            theme: 'rhythm',
            description: 'Rhythm-based platformer',
            rating: 4.5,
            plays: 1100000,
            url: '/games/puzzle/geometry-dash.html',
            screenshot: '/games/11.geometry-dash.png',
            iframeUrl: 'https://www.crazygames.com/embed/geometry-dash',
            trending: false,
            featured: false,
            latest: true
        },
        {
            id: 'snow-rider-3d',
            title: 'Snow Rider 3D',
            category: 'sports',
            theme: 'skiing',
            description: 'Thrilling 3D snowboarding',
            rating: 4.4,
            plays: 650000,
            url: '/games/sports/snow-rider-3d.html',
            screenshot: '/games/12.snow-rider-3d.png',
            iframeUrl: 'https://www.crazygames.com/embed/snow-rider-3d',
            trending: false,
            featured: false,
            latest: true
        },
        {
            id: 'among-us-online',
            title: 'Among Us Online',
            category: 'strategy',
            theme: 'social',
            description: 'Discover the impostor among crewmates',
            rating: 4.2,
            plays: 900000,
            url: '/games/strategy/among-us-online.html',
            screenshot: '/games/13among-us-online.png',
            iframeUrl: 'https://www.crazygames.com/embed/among-us-online',
            trending: false,
            featured: false,
            latest: false
        }
    ];

    // 轮播图现在直接使用游戏数据库中的热门游戏

    // 生成游戏卡片 HTML - 使用真实截图
    function generateGameCard(game) {
        // 使用真实游戏截图
        const imagePath = game.screenshot || `/games/${game.id}.png`;
        
        return `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card game-card h-100 border-0 shadow-sm">
                    <div class="card-img-wrapper position-relative">
                        <img src="${imagePath}" 
                             alt="${game.title}" 
                             class="game-screenshot" 
                             loading="lazy"
                             onload="this.style.opacity='1'"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="fallback-icon" style="display: none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); align-items: center; justify-content: center; color: white; font-size: 2rem; border-radius: 8px 8px 0 0;">
                            <i class="fas fa-gamepad"></i>
                        </div>
                        <div class="rating-badge position-absolute top-0 end-0 m-2 bg-dark bg-opacity-75 text-white px-2 py-1 rounded">
                            <i class="fas fa-star text-warning"></i>
                            <span class="ms-1">${game.rating}</span>
                        </div>
                        ${game.trending ? '<div class="trending-badge position-absolute top-0 start-0 m-2 bg-danger text-white px-2 py-1 rounded"><i class="fas fa-fire"></i> Trending</div>' : ''}
                    </div>
                    <div class="card-body p-3">
                        <h6 class="card-title mb-2">${game.title}</h6>
                        <p class="card-text text-muted small mb-3">${game.description}</p>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <small class="text-muted">
                                <i class="fas fa-play me-1"></i>${formatPlays(game.plays)}
                            </small>
                            <span class="badge bg-primary">${game.category}</span>
                        </div>
                        <a href="${game.url}" class="btn btn-outline-primary btn-sm w-100">
                            <i class="fas fa-play me-1"></i>Play Now
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    // 格式化播放次数显示
    function formatPlays(plays) {
        if (plays >= 1000000) {
            return Math.floor(plays / 100000) / 10 + 'M';
        } else if (plays >= 1000) {
            return Math.floor(plays / 100) / 10 + 'K';
        }
        return plays.toString();
    }

    // 加载热门游戏
    function loadTrendingGames() {
        const trendingContainer = document.getElementById('trending-games');
        if (!trendingContainer) return;

        const trendingGames = gamesDatabase
            .filter(game => game.trending)
            .sort((a, b) => b.plays - a.plays)
            .slice(0, 8);

        const gamesHTML = trendingGames.map(generateGameCard).join('');
        trendingContainer.innerHTML = gamesHTML;
    }

    // 加载最新游戏
    function loadLatestGames() {
        const latestContainer = document.getElementById('latest-games');
        if (!latestContainer) return;

        const latestGames = gamesDatabase
            .filter(game => game.latest)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 8);

        const gamesHTML = latestGames.map(generateGameCard).join('');
        latestContainer.innerHTML = gamesHTML;
    }

    // 搜索功能
    function initializeSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        if (searchInput && searchBtn) {
            searchBtn.addEventListener('click', performSearch);
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }
    }

    function performSearch() {
        const searchInput = document.getElementById('searchInput');
        const query = searchInput.value.toLowerCase().trim();
        
        if (query) {
            window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    }

    // 获取游戏占位符类（轮播图用）
    function getPlaceholderClass(gameId) {
        const placeholderMap = {
            'loot-island-treasure-digger': 'treasure-placeholder',
            'asmr-girl-livestream-mukbang': 'asmr-placeholder',
            'zombie-horde-build-survive': 'zombie-placeholder',
            'subway-surfers': 'subway-placeholder',
            'vex-3': 'stickman-placeholder',
            'smash-karts': 'kart-placeholder'
        };
        return placeholderMap[gameId] || 'default-placeholder';
    }

    // 获取游戏图标（轮播图用）
    function getGameIcon(gameId) {
        const iconMap = {
            'loot-island-treasure-digger': 'fas fa-gem',
            'asmr-girl-livestream-mukbang': 'fas fa-microphone',
            'zombie-horde-build-survive': 'fas fa-skull',
            'subway-surfers': 'fas fa-running',
            'vex-3': 'fas fa-running',
            'smash-karts': 'fas fa-car'
        };
        return iconMap[gameId] || 'fas fa-gamepad';
    }

    // 初始化轮播图
    function initializeCarousel() {
        const carouselInner = document.querySelector('#heroCarousel .carousel-inner');
        if (!carouselInner) return;

        // 使用热门游戏作为轮播图内容
        const featuredGames = gamesDatabase
            .filter(game => game.featured && game.trending)
            .sort((a, b) => b.plays - a.plays)
            .slice(0, 3);

        const carouselHTML = featuredGames.map((game, index) => {
            const imagePath = game.screenshot || `/games/${game.id}.png`;
            return `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <div class="hero-slide position-relative d-flex align-items-center" 
                         style="min-height: 60vh; background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('${imagePath}'); background-size: cover; background-position: center;">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-7">
                                    <div class="hero-content">
                                        <h1 class="display-4 fw-bold text-white mb-4">${game.title}</h1>
                                        <p class="lead text-white mb-4">${game.description}</p>
                                        <div class="hero-stats mb-4">
                                            <span class="badge bg-warning text-dark me-3">
                                                <i class="fas fa-star"></i> ${game.rating}
                                            </span>
                                            <span class="text-white-50">
                                                <i class="fas fa-play me-1"></i> ${formatPlays(game.plays)} plays
                                            </span>
                                        </div>
                                        <div class="hero-actions">
                                            <a href="${game.url}" class="btn btn-primary btn-lg me-3">
                                                <i class="fas fa-play me-2"></i>Play Now
                                            </a>
                                            <a href="#trending-games" class="btn btn-outline-light btn-lg">
                                                <i class="fas fa-fire me-2"></i>View Trending
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        carouselInner.innerHTML = carouselHTML;
    }

    // 页面加载完成后初始化
    loadTrendingGames();
    loadLatestGames();
    initializeSearch();
    initializeCarousel();

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 防止加载闪烁
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // 游戏详情页字段处理函数
    function handleGameFieldDisplay() {
        // 处理缺失的评分显示
        const ratingElements = document.querySelectorAll('.game-rating, .rating');
        ratingElements.forEach(el => {
            if (!el.textContent.trim() || el.textContent.includes('undefined')) {
                el.innerHTML = '<i class="fas fa-star"></i> 4.0';
                el.classList.add('default-rating');
            }
        });

        // 处理缺失的播放次数
        const playCountElements = document.querySelectorAll('.play-count');
        playCountElements.forEach(el => {
            if (!el.textContent.trim() || el.textContent.includes('undefined')) {
                el.innerHTML = '<i class="fas fa-users"></i> New Game';
                el.classList.add('default-plays');
            }
        });

        // 处理过长的游戏标题
        const gameTitles = document.querySelectorAll('.game-title, h1');
        gameTitles.forEach(title => {
            if (title.textContent.length > 50) {
                title.title = title.textContent; // 保存完整标题作为tooltip
                title.textContent = title.textContent.substring(0, 47) + '...';
            }
        });

        // 处理过长的游戏描述
        const gameDescriptions = document.querySelectorAll('.game-description');
        gameDescriptions.forEach(desc => {
            const paragraphs = desc.querySelectorAll('p');
            paragraphs.forEach(p => {
                if (p.textContent.length > 200) {
                    const fullText = p.textContent;
                    const shortText = fullText.substring(0, 197) + '...';
                    
                    p.innerHTML = `
                        <span class="short-text">${shortText}</span>
                        <span class="full-text" style="display: none;">${fullText}</span>
                        <br><a href="#" class="read-more-link text-primary" style="font-size: 0.9rem;">Read More</a>
                    `;
                    
                    // 添加展开/收起功能
                    const readMoreLink = p.querySelector('.read-more-link');
                    const shortTextSpan = p.querySelector('.short-text');
                    const fullTextSpan = p.querySelector('.full-text');
                    
                    readMoreLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        if (shortTextSpan.style.display === 'none') {
                            shortTextSpan.style.display = 'inline';
                            fullTextSpan.style.display = 'none';
                            readMoreLink.textContent = 'Read More';
                        } else {
                            shortTextSpan.style.display = 'none';
                            fullTextSpan.style.display = 'inline';
                            readMoreLink.textContent = 'Read Less';
                        }
                    });
                }
            });
        });

        // 处理缺失的发布日期
        const releaseDateElements = document.querySelectorAll('.release-date');
        releaseDateElements.forEach(el => {
            if (!el.textContent.trim() || el.textContent.includes('undefined')) {
                el.innerHTML = '<i class="fas fa-calendar"></i> 2024';
                el.classList.add('default-date');
            }
        });

        // 处理缺失的游戏标签
        const tagContainers = document.querySelectorAll('.game-tags .tags');
        tagContainers.forEach(container => {
            if (container.children.length === 0) {
                container.innerHTML = `
                    <a href="#" class="tag">action</a>
                    <a href="#" class="tag">adventure</a>
                    <a href="#" class="tag">fun</a>
                `;
            }
        });

        // 处理404图片错误
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', function() {
                if (this.src.includes('placeholder-game.jpg') || this.src.includes('assets/images/games/')) {
                    // 使用现有的游戏截图作为占位符
                    this.src = '/games/3.zombie-horde-build-survive.png';
                    this.alt = 'Game Screenshot';
                }
            });
        });

        // 处理空的元游戏信息显示
        const gameMetaElements = document.querySelectorAll('.game-meta');
        gameMetaElements.forEach(meta => {
            const spans = meta.querySelectorAll('span');
            spans.forEach(span => {
                if (!span.textContent.trim()) {
                    span.style.display = 'none';
                }
            });
        });
    }

    // 格式化长数字显示
    function formatLargeNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    // 在页面加载时调用字段处理函数
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleGameFieldDisplay);
    } else {
        handleGameFieldDisplay();
    }

    // 导出函数供其他脚本使用
    window.handleGameFieldDisplay = handleGameFieldDisplay;
    window.formatLargeNumber = formatLargeNumber;
});

// 全局函数：游戏数据库访问
window.GameHub = {
    getGameById: function(id) {
        const gamesDatabase = []; // 需要在全局作用域重新定义
        return gamesDatabase.find(game => game.id === id);
    },
    
    getGamesByCategory: function(category) {
        const gamesDatabase = [];
        return gamesDatabase.filter(game => game.category === category);
    },
    
    searchGames: function(query) {
        const gamesDatabase = [];
        return gamesDatabase.filter(game => 
            game.title.toLowerCase().includes(query.toLowerCase()) ||
            game.description.toLowerCase().includes(query.toLowerCase()) ||
            game.category.toLowerCase().includes(query.toLowerCase()) ||
            game.theme.toLowerCase().includes(query.toLowerCase())
        );
    }
};
 