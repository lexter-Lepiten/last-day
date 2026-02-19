/* ===============================================================
   SERVICES PAGE - NX-STEP
   =============================================================== */

/* ===============================================================
   SERVICE CONTENT — bilingual modal data
   Key structure: serviceContent[lang][serviceName]
   =============================================================== */

const serviceContent = {
    en: {
        'Custom Learning': {
            intro: 'We develop training programs designed specifically for your organization\'s workflows and objectives. Every course reflects your unique business context and real-world scenarios.',
            approach: {
                title: 'Our Approach',
                content: 'We create training that mirrors your actual work environment, using your company\'s terminology and processes. Every scenario is built around your specific context, ensuring immediate recognition and relevance.'
            },
            methodology: {
                title: 'Our Methodology',
                content: 'We collaborate with your subject matter experts to create content that addresses real workplace situations. Through iterative reviews, we refine the training for maximum impact.'
            },
            quote: 'Training that feels like it was built for you — because it was. Every module, every scenario, every example comes directly from your world.'
        },
        'Team Collaboration': {
            intro: 'Enable seamless teamwork with integrated collaboration tools. We create environments where teams can learn together, share knowledge, and build collective expertise.',
            approach: {
                title: 'Our Approach',
                content: 'We design collaborative learning experiences that foster knowledge sharing and peer learning. Our platforms integrate discussion forums, group projects, shared workspaces, and real-time collaboration features that mirror how modern teams work together.'
            },
            methodology: {
                title: 'Our Collaboration Framework',
                content: 'We implement features including team channels, collaborative documents, peer review systems, and group learning activities. Our tools facilitate asynchronous and synchronous collaboration with activity tracking, notification systems, and team analytics that show collaboration patterns and knowledge flow.'
            },
            quote: 'Great teams don\'t just work together — they learn together. Our collaboration tools turn individual knowledge into collective strength.'
        },
        'Data Protection': {
            intro: 'Safeguard sensitive information with enterprise-grade data protection strategies. We ensure your learning data and user information remain secure and compliant with global privacy regulations.',
            approach: {
                title: 'Our Approach',
                content: 'We implement comprehensive data protection frameworks that cover collection, storage, processing, and disposal. Our approach prioritizes privacy by design, embedding protection measures into every system component while maintaining usability.'
            },
            methodology: {
                title: 'Our Protection Strategy',
                content: 'We employ data encryption, anonymization techniques, and strict access controls. Our compliance framework aligns with GDPR, CCPA, and industry-specific regulations. Regular privacy audits, data mapping, and breach response protocols ensure continuous protection and regulatory compliance.'
            },
            quote: 'Your data is your most valuable asset. We treat it with the same care and rigor you would expect from the most trusted institutions in the world.'
        },
        'Video Production': {
            intro: 'Professional video content that transforms complex concepts into engaging visual stories. High-quality training videos that capture attention and enhance learning retention.',
            approach: {
                title: 'Our Approach',
                content: 'We design videos with cinematic quality while maintaining focus on learning objectives. Professional aesthetics balance with instructional effectiveness — dynamic camera angles, professional lighting, and polished editing create content that learners want to watch.'
            },
            methodology: {
                title: 'Our Production Process',
                content: 'We begin with storyboarding sessions that translate learning objectives into visual narratives. Our production team handles scriptwriting, filming, animation, and post-production. Professional equipment and on-location filming available for authentic workplace scenarios.'
            },
            quote: 'When content looks great, people pay attention. Our videos are crafted to be as visually compelling as they are educationally effective.'
        },
        'Storyboard and Scriptwriting': {
            intro: 'Transform learning objectives into compelling visual narratives. Our expert team crafts detailed storyboards and engaging scripts that bring your training content to life.',
            approach: {
                title: 'Our Approach',
                content: 'We design visual narratives that balance educational goals with storytelling principles. Our storyboards map every scene, transition, and interaction, ensuring a cohesive flow that maintains learner engagement from start to finish.'
            },
            methodology: {
                title: 'Our Creative Process',
                content: 'We begin with content analysis to identify key learning moments, then develop scripts that present information naturally and memorably. Our storyboards include detailed shot descriptions, dialogue, on-screen text, and interactive elements. Multiple revision cycles ensure alignment with your vision and learning objectives.'
            },
            quote: 'Every great training course starts with a great story. We turn your learning objectives into narratives that resonate, stick, and inspire action.'
        },
        'Cloud Access': {
            intro: 'Seamless access to training on any device, whenever it\'s needed. Learning remains consistently available and synchronized across all devices.',
            approach: {
                title: 'Our Approach',
                content: 'We design for true mobility with responsive interfaces that adapt to any screen. The experience remains consistent across desktop, tablet, and smartphone with quick loading times.'
            },
            methodology: {
                title: 'Our Platform Infrastructure',
                content: 'Our cloud infrastructure uses enterprise-grade servers for fast loading. Automatic synchronization tracks progress across devices. Offline functionality allows downloads for learning without connectivity.'
            },
            quote: 'Learning shouldn\'t stop when the office closes. Our cloud platform keeps your team growing — on any device, in any location, at any time.'
        },
        'Course Design': {
            intro: 'Clean, structured training materials focused on what your team needs. Our design eliminates complexity, delivering effective and engaging learning experiences.',
            approach: {
                title: 'Our Approach',
                content: 'We prioritize clarity with intuitive navigation and consistent formatting. Content is organized into digestible segments. Visual hierarchy guides learners naturally using whitespace, typography, and color.'
            },
            methodology: {
                title: 'Our Design Methodology',
                content: 'We identify core objectives and eliminate non-essential information. Our designers create clear visual hierarchies. Each module incorporates videos, infographics, and interactive components.'
            },
            quote: 'The best course design is invisible — learners focus entirely on the content, never the interface. We build experiences that get out of the way and let learning happen.'
        },
        'Multi-language Support': {
            intro: 'Learning materials in English, Tagalog, Japanese, and any language your team requires. Professional localization ensures effectiveness across all languages.',
            approach: {
                title: 'Our Approach',
                content: 'We design for global audiences with flexible layouts that accommodate different text lengths and cultural preferences. We adapt examples and scenarios to resonate with each language group.'
            },
            methodology: {
                title: 'Our Localization Process',
                content: 'We employ native-speaking translators with subject matter expertise. Our quality assurance includes translation, technical review, and cultural adaptation. Translation memory systems ensure consistency.'
            },
            quote: 'Language is the bridge between knowledge and understanding. We make sure that bridge is never the reason your team can\'t cross it.'
        },
        'Technical Support': {
            intro: 'Responsive assistance for technical challenges, ensuring smooth system operation. From setup to maintenance, we deliver proactive monitoring and rapid solutions.',
            approach: {
                title: 'Our Approach',
                content: 'We design support systems that anticipate problems with automated monitoring and preventive maintenance. User-facing interfaces prioritize clarity — intuitive ticketing, searchable knowledge bases, and real-time chat.'
            },
            methodology: {
                title: 'Our Support Framework',
                content: 'Our tiered support system has Level 1 specialists handling common inquiries through chat, email, and phone. Complex issues escalate to Level 2 technical experts with deep platform knowledge.'
            },
            quote: 'Technical problems don\'t wait for business hours — and neither do we. Our support team is always ready to keep your learning environment running smoothly.'
        },
        'Data Insights': {
            intro: 'Transform learning data into actionable intelligence. Our intuitive dashboards reveal what\'s working and demonstrate business impact.',
            approach: {
                title: 'Our Approach',
                content: 'We design dashboards that transform complex data into clear visual stories. Charts, graphs, and heat maps highlight trends instantly. Information is role-based — executives see strategic metrics, leaders see operational details.'
            },
            methodology: {
                title: 'Our Analytics Framework',
                content: 'We track all learning activities, capturing engagement, completion rates, and assessment scores. Our analytics engine identifies patterns specific to your organization with automated reporting and predictive analytics.'
            },
            quote: 'Data without context is just noise. We turn your learning metrics into clear narratives that help leaders make smarter decisions every day.'
        },
        'Data Security': {
            intro: 'Comprehensive protection for your learning platform and sensitive information. We implement robust security measures to safeguard your data and maintain compliance.',
            approach: {
                title: 'Our Approach',
                content: 'We design multi-layered security systems with encryption, access controls, and continuous monitoring. Our approach emphasizes proactive threat detection and rapid response to potential vulnerabilities.'
            },
            methodology: {
                title: 'Our Security Framework',
                content: 'Our team implements end-to-end encryption for data in transit and at rest. We manage security protocols including user authentication, role-based access control, and regular security audits. Continuous monitoring and automated alerts ensure immediate response to security events.'
            },
            quote: 'Security isn\'t a feature — it\'s the foundation. Every layer of our platform is built with the assumption that your data must be protected at all costs.'
        }
    },

    ja: {
        'Custom Learning': {
            intro: '組織のワークフローや目標に特化したトレーニングプログラムを開発します。すべてのコースは、あなた独自のビジネス環境と実際のシナリオを反映しています。',
            approach: {
                title: '私たちのアプローチ',
                content: '会社の用語やプロセスを使用して、実際の職場環境を反映したトレーニングを作成します。すべてのシナリオはお客様固有の状況に基づいて構築されており、即座に認識・理解できるよう設計されています。'
            },
            methodology: {
                title: '私たちの方法論',
                content: '担当者の専門家と協力して、実際の職場状況に対応したコンテンツを作成します。反復的なレビューを通じて、最大の効果を発揮できるようトレーニングを洗練させます。'
            },
            quote: 'あなたのために作られたと感じられるトレーニング — それは事実です。すべてのモジュール、すべてのシナリオ、すべての例があなたの世界から直接生まれています。'
        },
        'Team Collaboration': {
            intro: '統合されたコラボレーションツールでシームレスなチームワークを実現します。チームが一緒に学び、知識を共有し、集合的な専門知識を構築できる環境を作成します。',
            approach: {
                title: '私たちのアプローチ',
                content: '知識共有とピアラーニングを促進する協働学習体験を設計します。ディスカッションフォーラム、グループプロジェクト、共有ワークスペース、リアルタイムコラボレーション機能を統合し、現代チームの働き方を反映します。'
            },
            methodology: {
                title: 'コラボレーションフレームワーク',
                content: 'チームチャンネル、共同ドキュメント、ピアレビューシステム、グループ学習活動などの機能を実装します。非同期・同期コラボレーションを促進し、活動追跡・通知・チーム分析機能でコラボレーションパターンと知識の流れを可視化します。'
            },
            quote: '優れたチームはただ一緒に働くだけでなく — 一緒に学びます。私たちのコラボレーションツールは個人の知識を集合的な強みに変えます。'
        },
        'Data Protection': {
            intro: 'エンタープライズグレードのデータ保護戦略で機密情報を守ります。学習データとユーザー情報がグローバルなプライバシー規制に準拠しながら安全を保つよう確保します。',
            approach: {
                title: '私たちのアプローチ',
                content: '収集・保管・処理・廃棄を網羅する包括的なデータ保護フレームワークを実装します。プライバシー・バイ・デザインを優先し、ユーザビリティを維持しながらすべてのシステムコンポーネントに保護措置を組み込みます。'
            },
            methodology: {
                title: '保護戦略',
                content: 'データ暗号化、匿名化技術、厳格なアクセス制御を採用します。コンプライアンスフレームワークはGDPR、CCPA、業界固有の規制に準拠します。定期的なプライバシー監査、データマッピング、侵害対応プロトコルにより継続的な保護と規制遵守を確保します。'
            },
            quote: 'あなたのデータは最も価値ある資産です。世界で最も信頼される機関が期待するのと同じ注意と厳密さでそれを扱います。'
        },
        'Video Production': {
            intro: '複雑な概念を魅力的なビジュアルストーリーに変える、プロフェッショナルな動画コンテンツ。注意を引き、学習定着を高める高品質なトレーニング動画を制作します。',
            approach: {
                title: '私たちのアプローチ',
                content: '学習目標に集中しながら映画品質の動画を設計します。ダイナミックなカメラアングル、プロフェッショナルな照明、洗練された編集により、学習者が見たいと思えるコンテンツを制作します。'
            },
            methodology: {
                title: '制作プロセス',
                content: '学習目標をビジュアルナラティブに変換するストーリーボードセッションから始めます。制作チームが脚本、撮影、アニメーション、ポスト制作を担当します。本物の職場シナリオのためのプロ機材とロケ撮影も対応可能です。'
            },
            quote: 'コンテンツが魅力的に見えると、人は注目します。私たちの動画は視覚的にcompellingであると同時に教育的に効果的であるよう丁寧に制作されています。'
        },
        'Storyboard and Scriptwriting': {
            intro: '学習目標をcompellingなビジュアルナラティブに変換します。専門チームがトレーニングコンテンツに命を吹き込む詳細なストーリーボードと魅力的な脚本を制作します。',
            approach: {
                title: '私たちのアプローチ',
                content: '教育目標とストーリーテリングの原則を融合したビジュアルナラティブを設計します。ストーリーボードはすべてのシーン、トランジション、インタラクションをマッピングし、最初から最後まで学習者の関心を維持します。'
            },
            methodology: {
                title: 'クリエイティブプロセス',
                content: 'コンテンツ分析で重要な学習ポイントを特定してから、自然で記憶に残る形で情報を提示する脚本を開発します。ストーリーボードには詳細なショット説明、台詞、画面テキスト、インタラクティブ要素が含まれます。複数の修正サイクルでビジョンと学習目標への整合を確保します。'
            },
            quote: '優れたトレーニングコースはすべて優れたストーリーから始まります。私たちは学習目標を、響き、記憶に残り、行動を促すナラティブに変えます。'
        },
        'Cloud Access': {
            intro: '必要なときにいつでも、どのデバイスでもトレーニングにシームレスにアクセス。すべてのデバイスで学習が一貫して利用可能で同期されます。',
            approach: {
                title: '私たちのアプローチ',
                content: 'あらゆる画面に適応するレスポンシブインターフェースで真のモビリティを設計します。デスクトップ、タブレット、スマートフォン間で一貫した体験を高速ロードで提供します。'
            },
            methodology: {
                title: 'プラットフォームインフラ',
                content: 'クラウドインフラはエンタープライズグレードのサーバーで高速ロードを実現します。自動同期でデバイス間の進捗を追跡します。オフライン機能により接続なしでも学習できます。'
            },
            quote: 'オフィスが閉まっても学習は止まりません。私たちのクラウドプラットフォームはどのデバイスでも、どこでも、いつでもチームの成長を支援します。'
        },
        'Course Design': {
            intro: 'チームが必要とすることに焦点を当てた、クリーンで構造化されたトレーニング教材。複雑さを排除し、効果的で魅力的な学習体験を提供します。',
            approach: {
                title: '私たちのアプローチ',
                content: '直感的なナビゲーションと一貫したフォーマットで明確さを優先します。コンテンツは消化しやすいセグメントに整理されます。ホワイトスペース、タイポグラフィ、カラーを使用した視覚的階層が学習者を自然に誘導します。'
            },
            methodology: {
                title: 'デザイン方法論',
                content: '核となる目標を特定し、不必要な情報を排除します。デザイナーが明確な視覚的階層を作成します。各モジュールに動画、インフォグラフィック、インタラクティブコンポーネントを組み込みます。'
            },
            quote: '最高のコースデザインは見えないもの — 学習者はコンテンツだけに集中し、インターフェースを意識しません。私たちは邪魔にならず、学習が起こる体験を構築します。'
        },
        'Multi-language Support': {
            intro: '英語、タガログ語、日本語、そしてチームが必要とするあらゆる言語での学習教材。プロフェッショナルなローカライゼーションですべての言語での効果を確保します。',
            approach: {
                title: '私たちのアプローチ',
                content: '異なるテキスト長と文化的好みに対応する柔軟なレイアウトでグローバルオーディエンスのために設計します。各言語グループに響くよう例やシナリオを適応させます。'
            },
            methodology: {
                title: 'ローカライゼーションプロセス',
                content: '専門知識を持つネイティブスピーカーの翻訳者を採用します。品質保証には翻訳、技術レビュー、文化的適応が含まれます。翻訳メモリシステムで一貫性を確保します。'
            },
            quote: '言語は知識と理解の橋です。その橋がチームの前進を妨げることがないよう確保します。'
        },
        'Technical Support': {
            intro: '技術的な課題に対する迅速なサポートで、システムの円滑な運用を確保します。セットアップからメンテナンスまで、プロアクティブなモニタリングと迅速なソリューションを提供します。',
            approach: {
                title: '私たちのアプローチ',
                content: '自動化されたモニタリングと予防的メンテナンスで問題を予測するサポートシステムを設計します。直感的なチケッティング、検索可能なナレッジベース、リアルタイムチャットで明確さを優先します。'
            },
            methodology: {
                title: 'サポートフレームワーク',
                content: '階層型サポートシステムで、レベル1スペシャリストがチャット、メール、電話で一般的な問い合わせを処理します。複雑な問題はプラットフォームの深い知識を持つレベル2技術専門家にエスカレートします。'
            },
            quote: '技術的な問題はビジネスアワーを待ちません — 私たちも同様です。サポートチームは常に学習環境をスムーズに稼働させる準備ができています。'
        },
        'Data Insights': {
            intro: '学習データを実用的なインテリジェンスに変換します。直感的なダッシュボードが何が機能しているかを明らかにし、ビジネスインパクトを実証します。',
            approach: {
                title: '私たちのアプローチ',
                content: '複雑なデータを明確なビジュアルストーリーに変換するダッシュボードを設計します。チャート、グラフ、ヒートマップがトレンドを瞬時に強調します。情報はロールベース — 経営者は戦略指標を、リーダーは運用詳細を確認できます。'
            },
            methodology: {
                title: '分析フレームワーク',
                content: 'すべての学習活動を追跡し、エンゲージメント、完了率、評価スコアを把握します。分析エンジンが組織固有のパターンを自動レポートと予測分析で特定します。'
            },
            quote: 'コンテキストのないデータはただのノイズです。学習指標をリーダーが毎日よりスマートな意思決定を行うための明確なナラティブに変えます。'
        },
        'Data Security': {
            intro: 'ラーニングプラットフォームと機密情報の包括的な保護。データを守り、コンプライアンスを維持するための堅固なセキュリティ対策を実装します。',
            approach: {
                title: '私たちのアプローチ',
                content: '暗号化、アクセス制御、継続的モニタリングによる多層セキュリティシステムを設計します。プロアクティブな脅威検出と潜在的な脆弱性への迅速な対応を重視します。'
            },
            methodology: {
                title: 'セキュリティフレームワーク',
                content: 'チームは転送中および保存中のデータのエンドツーエンド暗号化を実装します。ユーザー認証、ロールベースのアクセス制御、定期的なセキュリティ監査などのセキュリティプロトコルを管理します。継続的なモニタリングと自動アラートでセキュリティイベントへの即時対応を確保します。'
            },
            quote: 'セキュリティは機能ではなく — 基盤です。プラットフォームのあらゆる層は、データが何があっても保護されなければならないという前提で構築されています。'
        }
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeServiceCards();
    initializeServiceModal();
    Utils.initScrollReveal({ selectors: '.service-card, .services-header' });
});

/* ================= SERVICE CARDS ================= */
function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            openServiceModal(card);
        });
    });
}

/* ================= SERVICE MODAL ================= */
function initializeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.close');
    const overlay  = modal.querySelector('.overlay');
    const modalBox = modal.querySelector('.modal-box');

    if (closeBtn) closeBtn.addEventListener('click', closeServiceModal);
    if (overlay)  overlay.addEventListener('click', closeServiceModal);
    if (modalBox) modalBox.addEventListener('click', (e) => e.stopPropagation());

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeServiceModal();
        }
    });
}

function getCurrentLang() {
    return localStorage.getItem('preferredLanguage') || 'en';
}

function openServiceModal(card) {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;

    const serviceKey = card.dataset.serviceKey || card.dataset.title;
    const lang       = getCurrentLang();

    // Get localised content; fall back to English if no Japanese entry exists
    const content = (serviceContent[lang] && serviceContent[lang][serviceKey])
        ? serviceContent[lang][serviceKey]
        : serviceContent['en'][serviceKey];

    if (!content) {
        console.warn('No content found for service:', serviceKey);
        return;
    }

    // --- Populate LEFT side ---
    const modalTitle    = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalIcon     = document.getElementById('modalIcon');

    // Use the already-translated h3 text from the card
    const titleEl        = card.querySelector('h3[data-translate]');
    const translatedTitle = titleEl ? titleEl.textContent : card.dataset.title;

    if (modalTitle)    modalTitle.textContent    = translatedTitle;
    if (modalSubtitle) modalSubtitle.textContent = lang === 'ja'
        ? '組織の卓越性を支援します'
        : 'EMPOWERING YOUR ORGANIZATION WITH EXCELLENCE';
    if (modalIcon)     modalIcon.src = card.dataset.icon || '';

    // --- Populate RIGHT side ---
    const body = document.querySelector('#serviceModal .modal-body');

    if (body) {
        const cardImg  = card.querySelector('.service-card-image img');
        const imageSrc = cardImg ? cardImg.getAttribute('src') : '';
        const imageAlt = cardImg ? (cardImg.getAttribute('alt') || serviceKey) : serviceKey;

        body.innerHTML = `
            ${imageSrc ? `
            <div style="width:100%;height:200px;border-radius:16px;overflow:hidden;
                        border:1px solid rgba(255,255,255,0.07);margin-bottom:8px;flex-shrink:0;">
                <img src="${imageSrc}" alt="${imageAlt}"
                     style="width:100%;height:100%;object-fit:cover;display:block;">
            </div>` : ''}

            <p class="modal-intro">${content.intro}</p>

            <div class="modal-section">
                <h4>${content.approach.title}</h4>
                <p>${content.approach.content}</p>
            </div>

            <div class="modal-section">
                <h4>${content.methodology.title}</h4>
                <p>${content.methodology.content}</p>
            </div>

            ${content.quote ? `
            <div class="modal-quote">
                <p>${content.quote}</p>
            </div>` : ''}
        `;

        // Reset scroll
        const contentSide = document.querySelector('#serviceModal .modal-content-side');
        if (contentSide) contentSide.scrollTop = 0;
    }

    Utils.manageModal('serviceModal', 'open');
}

function closeServiceModal() {
    Utils.manageModal('serviceModal', 'close');
}

/* ================= PARALLAX EFFECTS ================= */
const isDesktop = window.innerWidth > 1024;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (isDesktop && !prefersReducedMotion) {
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            scrollTicking = true;
            requestAnimationFrame(() => {
                const y    = window.scrollY;
                const hero = document.querySelector('.services-hero');
                if (hero && y < 800) hero.style.transform = `translateY(${y * 0.3}px)`;
                scrollTicking = false;
            });
        }
    }, { passive: true });
}

/* ================= GLOBAL FUNCTIONS ================= */
window.closeModal = closeServiceModal;