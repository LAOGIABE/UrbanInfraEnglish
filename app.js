// Core Application Logic for UrbanInfraEnglish SPA
// Relies on data.js for vocabulary and reading database

const MEME_RESOURCES = {
  file1: [
    './final/file 1/f1 (2).jpg',
    './final/file 1/f1 (3).jpg',
    './final/file 1/f1 (4).jpg',
    './final/file 1/f1 (5).jpg',
    './final/file 1/f1 (6).jpg',
    './final/file 1/f1.jpg'
  ],
  file2: [
    './final/file 2/f2 (2).jpg',
    './final/file 2/f2 (3).jpg',
    './final/file 2/f2 (4).jpg',
    './final/file 2/f2 (5).jpg',
    './final/file 2/f2 (6).jpg',
    './final/file 2/f2 (7).jpg',
    './final/file 2/f2 (8).jpg',
    './final/file 2/f2 (9).jpg',
    './final/file 2/f2 (10).jpg',
    './final/file 2/f2.jpg'
  ],
  file3: [
    './final/file 3/f3 (2).jpg',
    './final/file 3/f3 (3).jpg',
    './final/file 3/f3 (4).jpg',
    './final/file 3/f3 (5).jpg',
    './final/file 3/f3.jpg'
  ],
  file4: [
    './final/file 4/f4 (2).jpg',
    './final/file 4/f4 (3).jpg',
    './final/file 4/f4 (4).jpg',
    './final/file 4/f4 (5).jpg',
    './final/file 4/f4.jpg'
  ],
  file5: [
    './final/file 5/f5 (2).jpg',
    './final/file 5/f5 (3).jpg',
    './final/file 5/f5 (4).jpg',
    './final/file 5/f5 (5).jpg',
    './final/file 5/f5.jpg'
  ],
  file6: [
    './final/file 6/f6 (2).jpg',
    './final/file 6/f6 (3).jpg',
    './final/file 6/f6 (4).jpg',
    './final/file 6/f6 (5).jpg',
    './final/file 6/f6 (6).jpg',
    './final/file 6/f6 (7).jpg',
    './final/file 6/f6 (8).jpg',
    './final/file 6/f6.jpg'
  ],
  videos: [
    './final/video/1.mp4',
    './final/video/2.mp4',
    './final/video/3.mp4',
    './final/video/4.mp4',
    './final/video/5.mp4',
    './final/video/6.mp4',
    './final/video/7.mp4',
    './final/video/8.mp4'
  ]
};

class QuizApp {
  constructor() {
    this.currentChapter = null;
    this.questions = [];
    this.currentIndex = 0;
    this.score = { correct: 0, total: 0 };
    this.isAnswered = false;
    this.streakDung = 0;
    this.streakSai = 0;
    this.theme = localStorage.getItem('urban_infra_theme') || 'light';
    this._memeGeneration = 0; // Guards against stale image callbacks
    
    this.init();
  }

  init() {
    // Apply initial theme
    document.documentElement.setAttribute('data-theme', this.theme);
    
    // Bind DOM events after DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.cacheDom();
      this.bindEvents();
      this.renderDashboard();
      this.updateThemeToggleUI();
      this.preloadAllMemeImages();
    });
  }

  // Preload all meme images into browser cache so they display instantly
  preloadAllMemeImages() {
    const allLists = [
      ...MEME_RESOURCES.file1,
      ...MEME_RESOURCES.file2,
      ...MEME_RESOURCES.file3,
      ...MEME_RESOURCES.file4,
      ...MEME_RESOURCES.file5,
      ...MEME_RESOURCES.file6
    ];
    allLists.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }

  cacheDom() {
    this.dashboardView = document.getElementById('dashboard-view');
    this.quizView = document.getElementById('quiz-view');
    this.chapterGrid = document.getElementById('chapter-grid');
    
    // Quiz View Elements
    this.chapterTitleHeader = document.getElementById('quiz-chapter-title');
    this.backBtn = document.getElementById('btn-back');
    this.progressText = document.getElementById('quiz-progress-text');
    this.progressBarFill = document.getElementById('quiz-progress-fill');
    
    // Question Cards
    this.vocabCard = document.getElementById('vocab-card');
    this.sentenceCard = document.getElementById('sentence-card');
    
    // Vocab Elements
    this.vocabEng = document.getElementById('vocab-eng');
    this.vocabInput = document.getElementById('vocab-input');
    this.vocabCheckBtn = document.getElementById('btn-vocab-check');
    this.vocabNextBtn = document.getElementById('btn-vocab-next');
    this.vocabFeedback = document.getElementById('vocab-feedback');
    this.vocabCorrectAnswer = document.getElementById('vocab-correct-answer');
    
    // Sentence Elements
    this.sentenceEng = document.getElementById('sentence-eng');
    this.sentenceInput = document.getElementById('sentence-input');
    this.sentenceSampleBtn = document.getElementById('btn-sentence-sample');
    this.sentenceNextBtn = document.getElementById('btn-sentence-next');
    this.sentenceTranslationBlock = document.getElementById('sentence-translation-block');
    this.sentenceSampleTranslation = document.getElementById('sentence-sample-translation');
    
    // Theme Toggle
    this.themeToggle = document.getElementById('theme-toggle');
    
    // Results
    this.resultsCard = document.getElementById('results-card');
    this.resultsPercentage = document.getElementById('results-percentage');
    this.resultsScore = document.getElementById('results-score');
    this.btnRestart = document.getElementById('btn-restart');

    // Meme Card Elements
    this.memeCard = document.getElementById('quiz-meme-card');
    this.memeImage = document.getElementById('meme-image');
    this.memeStreakBadge = document.getElementById('meme-streak-badge');
    this.memeMessage = document.getElementById('meme-message');
    this.memeNextBtn = document.getElementById('btn-meme-next');

    // Video End Card Elements
    this.videoPlayer = document.getElementById('end-video-player');
  }

  bindEvents() {
    // Back to dashboard
    this.backBtn.addEventListener('click', () => this.showDashboard());
    
    // Vocab logic
    this.vocabCheckBtn.addEventListener('click', () => this.checkVocabAnswer());
    this.vocabNextBtn.addEventListener('click', () => this.nextQuestion());

    // ========================================================
    // ENTER KEY 2-BEAT LOGIC
    // Beat 1: Enter triggers Check when not yet answered
    // Beat 2: Enter triggers Next when already answered
    // Uses keyup on document to transition state, while preventing 
    // native browser click behaviors on buttons.
    // ========================================================
    this._lastEnterTime = 0;

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      console.log('DEBUG: Global keydown Enter caught. isAnswered:', this.isAnswered, 'target:', e.target);
      // Only act when quiz view is visible and vocab card is active
      if (this.quizView.classList.contains('hidden')) return;
      if (this.vocabCard.classList.contains('hidden')) return;

      e.preventDefault();

      // Timestamp debounce: ignore Enter presses within 400ms of last action
      const now = Date.now();
      console.log('DEBUG: Debounce check. Diff:', now - this._lastEnterTime);
      if (now - this._lastEnterTime < 450) {
        console.log('DEBUG: Enter ignored due to debounce');
        return;
      }
      this._lastEnterTime = now;

      if (!this.isAnswered) {
        console.log('DEBUG: Triggering checkVocabAnswer()');
        this.checkVocabAnswer();
      } else {
        console.log('DEBUG: Triggering nextQuestion()');
        this.nextQuestion();
      }
    });

    // Prevent default Enter behavior on input (submitting form)
    this.vocabInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });

    // Crucial: Prevent Enter key from triggering native click on the buttons
    const preventButtonEnter = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    this.vocabCheckBtn.addEventListener('keydown', preventButtonEnter);
    this.vocabCheckBtn.addEventListener('keyup', preventButtonEnter);
    this.vocabNextBtn.addEventListener('keydown', preventButtonEnter);
    this.vocabNextBtn.addEventListener('keyup', preventButtonEnter);
    this.memeNextBtn.addEventListener('keydown', preventButtonEnter);
    this.memeNextBtn.addEventListener('keyup', preventButtonEnter);

    // Sentence logic
    this.sentenceSampleBtn.addEventListener('click', () => this.revealSentenceSample());
    this.sentenceNextBtn.addEventListener('click', () => this.nextQuestion());
    
    // Restart quiz
    this.btnRestart.addEventListener('click', () => this.startQuiz(this.currentChapter.id));
    
    // Theme toggle
    this.themeToggle.addEventListener('click', () => this.toggleTheme());

    // Meme next click
    this.memeNextBtn.addEventListener('click', () => this.nextQuestion());

  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('urban_infra_theme', this.theme);
    this.updateThemeToggleUI();
  }

  updateThemeToggleUI() {
    if (!this.themeToggle) return;
    if (this.theme === 'dark') {
      this.themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m2.828-9.9a5 5 0 117.07 7.07l-2.828-2.828z" />
        </svg>
      `;
    } else {
      this.themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      `;
    }
  }

  renderDashboard() {
    this.chapterGrid.innerHTML = '';
    
    // SVGs mapping for beautiful cards
    const chapterIcons = [
      // Ch 1: Sustainable cities (Buildings, Green)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`,
      // Ch 2: Transport (Roads, bus)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>`,
      // Ch 3: Energy (Power line, lightning)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
      // Ch 4: Water (Water drop)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5" /></svg>`,
      // Ch 5: Drainage (Waves, water filter)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M3 14h18m-9-4v8m-7 0h14" /></svg>`,
      // Ch 6: Environment (Leaf, pollution cloud)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`,
      // Ch 7: IoT (Chip, wireless connection)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>`
    ];

    chaptersData.forEach((chapter, idx) => {
      const savedProgress = localStorage.getItem(`urban_infra_progress_ch_${chapter.id}`) || 0;
      
      const card = document.createElement('div');
      card.className = 'card-chapter bg-[var(--bg-card)] rounded-xl p-6 flex flex-col justify-between cursor-pointer';
      card.setAttribute('role', 'button');
      card.setAttribute('id', `chapter-card-${chapter.id}`);
      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="p-3 bg-teal-50 dark:bg-cyan-950/40 rounded-lg">
              ${chapterIcons[idx]}
            </div>
            <span class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">CHƯƠNG ${chapter.id}</span>
          </div>
          <h3 class="text-lg font-bold mb-2 line-clamp-2 text-[var(--text-main)] transition-colors hover:text-[var(--accent)]">
            ${chapter.title}
          </h3>
          <p class="text-xs text-[var(--text-muted)] mb-4">
            ${chapter.vocabulary.length} từ vựng • ${chapter.sentences.length} câu kỹ thuật
          </p>
        </div>
        <div>
          <div class="flex justify-between items-center mb-1 text-xs">
            <span class="text-[var(--text-muted)]">Tiến độ hoàn thành</span>
            <span class="font-bold text-[var(--accent)]">${savedProgress}%</span>
          </div>
          <div class="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
            <div class="bg-[var(--accent)] h-2 rounded-full transition-all duration-500" style="width: ${savedProgress}%"></div>
          </div>
        </div>
      `;
      
      card.addEventListener('click', () => this.startQuiz(chapter.id));
      this.chapterGrid.appendChild(card);
    });
  }

  showDashboard() {
    this.currentChapter = null;
    this.quizView.classList.add('hidden');
    this.dashboardView.classList.remove('hidden');
    this.renderDashboard();
  }

  startQuiz(chapterId) {
    this.currentChapter = chaptersData.find(c => c.id === chapterId);
    if (!this.currentChapter) return;

    this.streakDung = 0;
    this.streakSai = 0;
    this.hideMeme();

    // Show Quiz View, Hide Dashboard
    this.dashboardView.classList.add('hidden');
    this.quizView.classList.remove('hidden');
    
    // Hide results and show questions content
    this.resultsCard.classList.add('hidden');
    
    this.chapterTitleHeader.textContent = `Chương ${this.currentChapter.id}: ${this.currentChapter.title}`;
    
    // Generate questions sequence:
    // 1. Shuffle vocabulary items
    const shuffledVocab = this.shuffle([...this.currentChapter.vocabulary]);
    // 2. Shuffle reading sentences
    const shuffledSentences = this.shuffle([...this.currentChapter.sentences]);
    
    // Interleave sentences: 1 sentence after every 10 vocabulary words (at index 10, 21, etc.)
    this.questions = [];
    let sentenceIndex = 0;
    
    shuffledVocab.forEach((vocab, index) => {
      this.questions.push({
        type: 'vocab',
        data: vocab
      });
      // Check if we need to insert a sentence (after exactly 10 vocab cards)
      if ((index + 1) % 10 === 0 && sentenceIndex < shuffledSentences.length) {
        this.questions.push({
          type: 'sentence',
          data: shuffledSentences[sentenceIndex++]
        });
      }
    });

    // If there are still sentences left and we have fewer than 10 words, or just to make sure all sentences are practiced
    // we can append them at the end if the user has not completed them
    while (sentenceIndex < shuffledSentences.length) {
      this.questions.push({
        type: 'sentence',
        data: shuffledSentences[sentenceIndex++]
      });
    }

    this.currentIndex = 0;
    this.score = { correct: 0, total: this.questions.length };
    
    this.loadQuestion();
  }

  loadQuestion() {
    this.isAnswered = false;
    this.updateProgress();

    if (this.currentIndex >= this.questions.length) {
      this.showResults();
      return;
    }

    const currentQ = this.questions[this.currentIndex];
    
    // Hide both templates first
    this.vocabCard.classList.add('hidden');
    this.sentenceCard.classList.add('hidden');
    
    if (currentQ.type === 'vocab') {
      this.vocabCard.classList.remove('hidden');
      this.vocabCard.className = "fade-in bg-[var(--bg-card)] shadow-md rounded-xl p-8 border border-[var(--border)] relative overflow-hidden";
      
      // Load vocabulary word
      this.vocabEng.textContent = currentQ.data.word;
      this.vocabInput.value = '';
      this.vocabInput.disabled = false;
      this.vocabInput.readOnly = false;
      this.vocabInput.className = "w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-app)] text-[var(--text-main)] font-medium transition focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20";
      
      this.vocabCheckBtn.classList.remove('hidden');
      this.vocabNextBtn.classList.add('hidden');
      this.vocabFeedback.classList.add('hidden');
      this.vocabFeedback.innerHTML = '';
      
      setTimeout(() => this.vocabInput.focus(), 100);
    } else {
      this.sentenceCard.classList.remove('hidden');
      this.sentenceCard.className = "fade-in bg-[var(--bg-card)] shadow-md rounded-xl p-8 border border-[var(--border)] relative overflow-hidden";
      
      // Load sentence paragraph
      this.sentenceEng.textContent = currentQ.data.english;
      this.sentenceInput.value = '';
      this.sentenceTranslationBlock.classList.add('hidden');
      
      this.sentenceSampleBtn.classList.remove('hidden');
      this.sentenceNextBtn.classList.remove('hidden');
    }
  }

  updateProgress() {
    const total = this.questions.length;
    const current = Math.min(this.currentIndex + 1, total);
    
    this.progressText.textContent = `Câu hỏi ${current} / ${total}`;
    
    const percentage = ((current - 1) / total) * 100;
    this.progressBarFill.style.width = `${percentage}%`;
  }

  checkVocabAnswer() {
    console.log('DEBUG: checkVocabAnswer() called');
    const currentQ = this.questions[this.currentIndex];
    const userAnswer = this.vocabInput.value;
    
    const cleanUser = this.normalizeText(userAnswer);
    
    // Check matches against acceptable meanings OR the primary meaning
    const isCorrect = currentQ.data.meanings.some(meaning => {
      return this.normalizeText(meaning) === cleanUser;
    }) || this.normalizeText(currentQ.data.primaryMeaning) === cleanUser;

    this.isAnswered = true;
    this.vocabInput.readOnly = true;
    this.vocabCheckBtn.classList.add('hidden');
    this.vocabNextBtn.classList.remove('hidden');
    // Don't focus the Next button here — the global Enter key handler
    // manages the 2-beat flow, and focusing here would cause keyup to
    // auto-click the button on the same Enter press.

    this.vocabFeedback.classList.remove('hidden');
    
    if (isCorrect) {
      this.score.correct++;
      this.streakDung++;
      this.streakSai = 0;
      
      this.vocabInput.classList.add('border-[var(--success)]', 'bg-[var(--success-bg)]');
      this.vocabFeedback.innerHTML = `
        <div class="flex items-center space-x-2 text-[var(--success)] font-semibold mb-1">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Chính xác! (Streak: ${this.streakDung} 🔥)</span>
        </div>
      `;
      // Soft success glow interaction
      this.vocabCard.classList.add('animate-success-glow');
    } else {
      this.streakSai++;
      this.streakDung = 0;
      
      this.vocabInput.classList.add('border-[var(--error)]', 'bg-[var(--error-bg)]', 'animate-shake');
      this.vocabFeedback.innerHTML = `
        <div class="flex items-center space-x-2 text-[var(--error)] font-semibold mb-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Chưa chính xác! (Streak sai: ${this.streakSai} 😿)</span>
        </div>
        <div class="text-sm border-l-4 border-[var(--accent)] pl-3 py-1 bg-[var(--accent-light)] dark:bg-cyan-950/20 text-[var(--text-main)] rounded-r-md">
          Đáp án đúng là: <strong class="text-[var(--accent)]">${currentQ.data.primaryMeaning}</strong>
        </div>
      `;
    }

    // Show meme popup
    const memeUrl = this.getMemeImage(isCorrect);
    this.showMeme(memeUrl, isCorrect);
  }

  revealSentenceSample() {
    const currentQ = this.questions[this.currentIndex];
    this.sentenceSampleTranslation.textContent = currentQ.data.vietnamese;
    this.sentenceTranslationBlock.classList.remove('hidden');
    this.sentenceSampleBtn.classList.add('hidden');
    this.sentenceNextBtn.focus();
  }

  nextQuestion() {
    console.log('DEBUG: nextQuestion() called');
    // Hide meme modal if it was open
    this.hideMeme();

    // Clean animations classes before transitioning
    this.vocabCard.classList.remove('animate-success-glow');
    this.vocabCard.classList.remove('animate-shake');
    this.sentenceCard.classList.remove('animate-shake');

    this.currentIndex++;
    this.loadQuestion();
  }

  showResults() {
    this.hideMeme();
    this.vocabCard.classList.add('hidden');
    this.sentenceCard.classList.add('hidden');
    this.resultsCard.classList.remove('hidden');
    this.resultsCard.className = "fade-in bg-[var(--bg-card)] shadow-md rounded-xl p-8 border border-[var(--border)] relative overflow-hidden max-w-4xl mx-auto w-full";
    
    // Calculate percentage based on vocabulary quiz mode answers
    // Let's count how many vocabulary questions were answered correctly
    const vocabCount = this.questions.filter(q => q.type === 'vocab').length;
    // Calculate completion score
    const completionPercentage = Math.round((this.score.correct / vocabCount) * 100);
    
    this.resultsPercentage.textContent = `${completionPercentage}%`;
    this.resultsScore.textContent = `Bạn đã dịch chính xác ${this.score.correct} / ${vocabCount} thuật ngữ kỹ thuật.`;
    
    // Save completion score to LocalStorage to show on dashboard cards
    const previousBest = parseInt(localStorage.getItem(`urban_infra_progress_ch_${this.currentChapter.id}`)) || 0;
    if (completionPercentage > previousBest) {
      localStorage.setItem(`urban_infra_progress_ch_${this.currentChapter.id}`, completionPercentage);
    }

    // Play random celebration video directly inside results card
    const videos = MEME_RESOURCES.videos;
    if (videos.length > 0) {
      const randomVideo = videos[Math.floor(Math.random() * videos.length)];
      this.videoPlayer.src = randomVideo;
      this.videoPlayer.load();
      this.videoPlayer.play().catch(err => {
        console.log("Autoplay was prevented on results card:", err);
      });
    }

    // Trigger confetti effect
    this.triggerConfetti();
  }

  getMemeImage(isCorrect) {
    let list = [];
    if (isCorrect) {
      if (this.streakDung === 1) {
        list = MEME_RESOURCES.file4;
      } else if (this.streakDung === 2) {
        list = MEME_RESOURCES.file5;
      } else if (this.streakDung === 3) {
        list = MEME_RESOURCES.file6;
      } else {
        list = [...MEME_RESOURCES.file4, ...MEME_RESOURCES.file5, ...MEME_RESOURCES.file6];
      }
    } else {
      if (this.streakSai === 1) {
        list = MEME_RESOURCES.file1;
      } else if (this.streakSai === 2) {
        list = MEME_RESOURCES.file2;
      } else if (this.streakSai === 3) {
        list = MEME_RESOURCES.file3;
      } else {
        list = [...MEME_RESOURCES.file1, ...MEME_RESOURCES.file2, ...MEME_RESOURCES.file3];
      }
    }
    
    if (list.length === 0) return '';
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }

  showMeme(imageUrl, isCorrect) {
    if (!imageUrl) return;
    
    // Increment generation to invalidate any pending previous preload callbacks
    const gen = ++this._memeGeneration;
    
    // Prepare all text content while the card is still hidden
    if (isCorrect) {
      this.memeStreakBadge.textContent = `Streak: ${this.streakDung} 🔥`;
      this.memeStreakBadge.className = "mb-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400";
      
      const positiveMessages = [
        "Quá đỉnh! Tiếp tục phát huy nhé! 🚀",
        "Tuyệt vời ông mặt trời! ☀️",
        "Bạn là thiên tài kỹ thuật hạ tầng! 🤓",
        "Không thể ngăn cản! Chuỗi đúng đang tăng! 💪"
      ];
      this.memeMessage.textContent = positiveMessages[Math.min(this.streakDung - 1, positiveMessages.length - 1)];
    } else {
      this.memeStreakBadge.textContent = `Streak sai: ${this.streakSai} 😿`;
      this.memeStreakBadge.className = "mb-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400";
      
      const negativeMessages = [
        "Đừng nản chí, làm lại nào! 💪",
        "Hơi tiếc một chút, cố lên nhé! ❤️",
        "Ôi không, mèo con đang khóc kìa! 😿",
        "Tập trung hơn ở câu tiếp theo nhé! 🧠"
      ];
      this.memeMessage.textContent = negativeMessages[Math.min(this.streakSai - 1, negativeMessages.length - 1)];
    }
    
    // Use a detached Image to preload + decode before touching the visible <img>
    const preloader = new Image();
    preloader.src = imageUrl;
    
    // decode() returns a promise that resolves when the image is fully decoded
    // and ready to be painted without any delay or flicker
    const revealWhenReady = () => {
      // Guard: if user already moved on (hideMeme incremented generation), abort
      if (gen !== this._memeGeneration) return;
      
      // Set the visible image src — since preloader already decoded it,
      // the browser serves it from cache instantly with zero flicker
      this.memeImage.src = imageUrl;
      this.memeImage.style.opacity = '1';
      
      // Reveal the card with bounce animation
      if (this.memeCard) {
        this.memeCard.classList.remove('hidden');
        this.memeCard.classList.remove('animate-spring-bounce');
        void this.memeCard.offsetWidth; // Force reflow to restart animation
        this.memeCard.classList.add('animate-spring-bounce');
      }
    };
    
    // Try the modern decode() API first — guarantees zero-flicker rendering
    if (typeof preloader.decode === 'function') {
      preloader.decode()
        .then(revealWhenReady)
        .catch(revealWhenReady); // Show even on decode error
    } else {
      // Fallback for older browsers without decode()
      preloader.onload = revealWhenReady;
      preloader.onerror = revealWhenReady;
    }
  }

  hideMeme() {
    // Increment generation to cancel any pending preload callbacks
    this._memeGeneration++;
    
    if (this.memeCard) {
      this.memeCard.classList.add('hidden');
      this.memeCard.classList.remove('animate-spring-bounce');
      // Immediately clear the image — no transition, no stale frame
      this.memeImage.style.opacity = '0';
      this.memeImage.removeAttribute('src');
    }
  }

  triggerConfetti() {
    if (typeof confetti === 'function') {
      // First main burst
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });

      // Side cannons for 2.5 seconds
      const duration = 2500;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 99 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 20 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
    }
  }

  // Utilities
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  normalizeText(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/[\/\\,;]/g, ' ') // Replace separators like /, \, comma, semicolon with spaces first
      .replace(/[.!$%\^&\*:{}=\-_`~()\[\]?]/g, '') // Strip remaining punctuation
      .trim()
      .replace(/\s+/g, ' ') // Collapse multiple spaces
      .normalize('NFC'); // Normalize unicode accents for Vietnamese
  }
}

// Instantiate the application
const app = new QuizApp();
