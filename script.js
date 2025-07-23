document.addEventListener('DOMContentLoaded', () => {
    // 이 코드는 웹 페이지의 DOM(문서 객체 모델)이 완전히 로드되고 파싱된 후에 실행됩니다.
    // 이는 JavaScript가 HTML 요소를 안전하게 조작할 수 있도록 보장하며,
    // HTML 요소가 아직 로드되지 않은 상태에서 스크립트가 실행되어 발생하는 오류를 방지합니다.

    // === 1. 초기 로드 시 'Home' 내비게이션 링크 활성화 ===
    // 사용자가 페이지에 접속했을 때 가장 먼저 보게 되는 'Home' 섹션에 맞춰
    // 내비게이션 바의 'Home' 링크를 활성화된 상태로 표시하여 현재 위치를 명확히 합니다.
    const homeLink = document.querySelector('.nav-list a[href="#home"]'); // '.nav-list' 클래스를 가진 요소 내에서 href 속성이 "#home"인 'a' 태그를 선택합니다.
    if (homeLink) { // homeLink 요소가 존재하는지 확인합니다. (null이 아닌지)
        homeLink.classList.add('active'); // homeLink 요소에 'active' 클래스를 추가하여 CSS를 통해 시각적으로 활성화 상태를 만듭니다.
    }

    // === 2. Hero Section 텍스트 타이핑 효과 및 페이드인 애니메이션 ===
    // 웹 페이지에 접속했을 때 사용자의 시선을 가장 먼저 사로잡는 Hero Section의
    // 환영 메시지, 제목, 소개 텍스트, 그리고 버튼에 동적인 타이핑 및 페이드인 효과를 적용합니다.
    const greeting = document.querySelector('.hero-content .greeting'); // '.hero-content' 내의 '.greeting' 요소를 선택합니다.
    const heading = document.querySelector('.hero-content h2');         // '.hero-content' 내의 'h2' 요소를 선택합니다.
    const introText = document.querySelector('.hero-content .intro-text'); // '.hero-content' 내의 '.intro-text' 요소를 선택합니다.
    const btn = document.querySelector('.hero-content .btn');           // '.hero-content' 내의 '.btn' 요소를 선택합니다.

    if (greeting && heading && introText && btn) { // 네 가지 핵심 Hero Section 요소가 모두 존재하는지 확인합니다.
        // 초기에는 모든 Hero Section 요소를 숨깁니다.
        greeting.style.opacity = 0;    // 'greeting' 요소의 투명도를 0으로 설정하여 숨깁니다.
        heading.style.opacity = 0;     // 'heading' 요소의 투명도를 0으로 설정하여 숨깁니다.
        introText.style.opacity = 0;   // 'introText' 요소의 투명도를 0으로 설정하여 숨깁니다.
        btn.style.opacity = 0;         // 'btn' 요소의 투명도를 0으로 설정하여 숨깁니다.

        /**
         * 지정된 요소에 텍스트 타이핑 효과를 적용하는 함수.
         * @param {HTMLElement} element - 텍스트를 표시할 HTML 요소.
         * @param {string} text - 타이핑할 전체 텍스트.
         * @param {number} delay - 각 문자 타이핑 사이의 지연 시간 (밀리초). 기본값은 70ms.
         * @param {Function} [callback] - 타이핑이 완료된 후 실행될 콜백 함수.
         */
        function typeEffect(element, text, delay = 70, callback) {
            let i = 0; // 현재 타이핑할 문자의 인덱스
            element.textContent = ''; // 요소의 기존 텍스트 내용을 지웁니다.
            element.style.opacity = 1; // 타이핑을 시작할 요소의 투명도를 1로 설정하여 보이게 합니다.
            const interval = setInterval(() => { // 일정 시간 간격으로 함수를 반복 실행합니다.
                if (i < text.length) { // 모든 문자를 타이핑했는지 확인합니다.
                    element.textContent += text.charAt(i); // 현재 문자를 요소에 추가합니다.
                    i++; // 다음 문자로 인덱스를 증가시킵니다.
                } else {
                    clearInterval(interval); // 모든 문자를 타이핑했으면 setInterval을 멈춥니다.
                    if (callback) callback(); // 콜백 함수가 있으면 실행합니다.
                }
            }, delay); // delay 시간 간격으로 반복합니다.
        }

        // Hero Section의 요소들을 순차적으로 보여주는 함수
        const showElements = () => {
            const originalGreetingText = greeting.textContent; // 'greeting' 요소의 원래 텍스트를 저장합니다.
            // 'greeting' 요소에 타이핑 효과를 적용하고, 완료되면 콜백 함수를 실행합니다.
            typeEffect(greeting, originalGreetingText, 70, () => {
                heading.style.transition = 'opacity 1s ease-in'; // 'heading' 요소의 opacity 변화에 1초 동안 부드러운 전환 효과를 적용합니다.
                heading.style.opacity = 1; // 'heading' 요소를 서서히 보이게 합니다.

                setTimeout(() => { // 0.5초 후에 실행될 타이머를 설정합니다.
                    introText.style.transition = 'opacity 1s ease-in'; // 'introText' 요소의 opacity 변화에 1초 동안 부드러운 전환 효과를 적용합니다.
                    introText.style.opacity = 1; // 'introText' 요소를 서서히 보이게 합니다.
                }, 500); // 500ms (0.5초) 지연 후 실행

                setTimeout(() => { // 1초 후에 실행될 타이머를 설정합니다.
                    btn.style.transition = 'opacity 1s ease-in'; // 'btn' 요소의 opacity 변화에 1초 동안 부드러운 전환 효과를 적용합니다.
                    btn.style.opacity = 1; // 'btn' 요소를 서서히 보이게 합니다.
                }, 1000); // 1000ms (1초) 지연 후 실행
            });
        };

        showElements(); // 페이지 로드 시 Hero Section 효과를 시작합니다.
    } else {
        // Hero Section 요소 중 하나라도 없으면 경고를 표시하고,
        // 존재하는 요소는 즉시 보이게 하여 페이지가 깨져 보이지 않도록 합니다.
        console.warn("Hero Section 요소 중 일부가 없어 인터랙션 스크립트를 실행할 수 없습니다. 모든 요소를 표시합니다.");
        if(greeting) greeting.style.opacity = 1; // 'greeting' 요소가 있으면 바로 보이게 합니다.
        if(heading) heading.style.opacity = 1;   // 'heading' 요소가 있으면 바로 보이게 합니다.
        if(introText) introText.style.opacity = 1; // 'introText' 요소가 있으면 바로 보이게 합니다.
        if(btn) btn.style.opacity = 1;           // 'btn' 요소가 있으면 바로 보이게 합니다.
    }

    

    // === 3. 스크롤 시 헤더 그림자 효과 추가 ===
    // 사용자가 페이지를 아래로 스크롤하기 시작할 때,
    // 헤더에 시각적인 변화(그림자)를 주어 페이지 상단에서 벗어났음을 시각적으로 알립니다.
    const header = document.getElementById('header'); // ID가 'header'인 요소를 선택합니다.
    if (header) { // header 요소가 존재하는지 확인합니다.
        window.addEventListener('scroll', () => { // window 객체에 'scroll' 이벤트 리스너를 추가합니다.
            if (window.scrollY > 50) { // 현재 스크롤 위치가 Y축으로 50px를 초과하면
                header.classList.add('scrolled'); // header 요소에 'scrolled' 클래스를 추가합니다. (CSS에서 이 클래스를 이용해 그림자 등을 적용)
            } else {
                header.classList.remove('scrolled'); // 스크롤 위치가 50px 이하면 'scrolled' 클래스를 제거합니다.
            }
        });
    }

    

    // === 4. Portfolio Swiper 초기화 ===
    // 포트폴리오 섹션에 포함된 Swiper 슬라이더를 초기화하여,
    // 사용자가 좌우로 넘기거나 페이지네이션을 통해 포트폴리오 항목을 탐색할 수 있도록 합니다.
    if (document.querySelector('.myPortfolioSwiper')) { // '.myPortfolioSwiper' 클래스를 가진 요소가 존재하는지 확인합니다.
        const myPortfolioSwiper = new Swiper('.myPortfolioSwiper', { // 새로운 Swiper 인스턴스를 생성하고 초기화합니다.
            slidesPerView: 1, // 한 번에 보여질 슬라이드 개수를 1개로 설정합니다.
            spaceBetween: 30, // 슬라이드 사이의 간격을 30px로 설정합니다.
            loop: true, // 슬라이더를 무한 반복 모드로 설정합니다.

            pagination: { // 페이지네이션 (슬라이더 하단의 점들) 설정을 정의합니다.
                el: '.swiper-pagination', // 페이지네이션 요소의 CSS 선택자를 지정합니다.
                clickable: true, // 페이지네이션 점을 클릭하여 해당 슬라이드로 이동할 수 있도록 합니다.
            },

            navigation: { // 내비게이션 버튼 (이전/다음 버튼) 설정을 정의합니다.
                nextEl: '.swiper-button-next', // 다음 버튼 요소의 CSS 선택자를 지정합니다.
                prevEl: '.swiper-button-prev', // 이전 버튼 요소의 CSS 선택자를 지정합니다.
            },

            breakpoints: { // 반응형 설정을 정의합니다. 화면 너비에 따라 슬라이더 동작을 변경합니다.
                768: { // 화면 너비가 768px 이상일 때 적용될 설정
                    slidesPerView: 2, // 슬라이드 개수를 2개로 변경합니다.
                    spaceBetween: 30, // 슬라이드 간격을 30px로 유지합니다.
                },
                1024: { // 화면 너비가 1024px 이상일 때 적용될 설정
                    slidesPerView: 3, // 슬라이드 개수를 3개로 변경합니다.
                    spaceBetween: 30, // 슬라이드 간격을 30px로 유지합니다.
                }
            },
            // autoplay: { // (주석 처리됨) 자동 재생 설정을 정의합니다.
            //     delay: 3000, // 각 슬라이드 표시 시간 지연을 3000ms (3초)로 설정합니다.
            //     disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생을 비활성화하지 않고 계속 진행합니다.
            // },
        });
    }

    

    // === 5. 내비게이션 링크 클릭 시 스무스 스크롤 및 활성화 클래스 추가 ===
    // 사용자가 내비게이션 링크를 클릭했을 때, 해당 섹션으로 부드럽게 스크롤되고,
    // 현재 보고 있는 섹션에 해당하는 내비게이션 링크가 활성화 상태로 표시됩니다.
    const navLinks = document.querySelectorAll('.nav-list a'); // '.nav-list' 내의 모든 'a' 태그 (내비게이션 링크)를 선택합니다.
    if (navLinks.length > 0) { // 내비게이션 링크가 하나 이상 존재하는지 확인합니다.
        navLinks.forEach(link => { // 각 내비게이션 링크에 대해 반복합니다.
            link.addEventListener('click', (e) => { // 각 링크에 'click' 이벤트 리스너를 추가합니다.
                e.preventDefault(); // 기본 링크 동작(페이지 새로고침 또는 즉시 이동)을 막습니다.
                const targetId = e.target.getAttribute('href').substring(1); // 클릭된 링크의 href 속성 값에서 '#'을 제외한 부분(섹션 ID)을 가져옵니다.
                const targetSection = document.getElementById(targetId); // 해당 ID를 가진 섹션 요소를 선택합니다.

                if (targetSection) { // 대상 섹션이 존재하는지 확인합니다.
                    const headerOffset = header ? header.offsetHeight : 0; // 헤더 요소가 있다면 그 높이를 가져오고, 없으면 0으로 설정합니다. (고정 헤더에 의한 스크롤 오프셋 보정)
                    const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset; // 대상 섹션의 현재 뷰포트 내 위치와 스크롤 위치를 합하여 문서 전체에서의 절대 위치를 계산합니다.
                    const offsetPosition = elementPosition - headerOffset; // 헤더 높이만큼 빼서 헤더 아래에 섹션이 시작되도록 스크롤 위치를 조정합니다.

                    window.scrollTo({ // 윈도우를 지정된 위치로 스크롤합니다.
                        top: offsetPosition, // 스크롤할 Y축 위치를 설정합니다.
                        behavior: 'smooth' // 스크롤 동작을 부드럽게 애니메이션합니다.
                    });

                    navLinks.forEach(nav => nav.classList.remove('active')); // 모든 내비게이션 링크에서 'active' 클래스를 제거합니다.
                    e.target.classList.add('active'); // 클릭된 내비게이션 링크에 'active' 클래스를 추가하여 활성화합니다.
                }
            });
        });
    }

    

    // === 6. 스크롤 시 섹션에 따라 내비게이션 활성화 ===
    // 사용자가 페이지를 스크롤할 때, 현재 뷰포트에 보이는 섹션에 따라
    // 내비게이션 바의 해당 링크가 자동으로 활성화되어 사용자가 현재 위치를 쉽게 파악할 수 있게 합니다.
    const sections = document.querySelectorAll('main section'); // 'main' 태그 내의 모든 'section' 태그를 선택합니다.
    if (sections.length > 0 && navLinks.length > 0) { // 섹션과 내비게이션 링크가 모두 존재하는지 확인합니다.
        window.addEventListener('scroll', () => { // window 객체에 'scroll' 이벤트 리스너를 추가합니다.
            let current = ''; // 현재 활성화될 섹션의 ID를 저장할 변수
            const headerOffset = header ? header.offsetHeight : 0; // 헤더의 높이를 가져와 스크롤 위치 보정에 사용합니다.
            const scrollY = window.pageYOffset; // 현재 스크롤된 Y축 위치를 가져옵니다.

            const scrollHeight = document.documentElement.scrollHeight; // 문서 전체의 스크롤 가능한 높이를 가져옵니다.
            const clientHeight = document.documentElement.clientHeight; // 뷰포트의 높이를 가져옵니다.

            // 페이지 최하단 근처에 도달하면 'Contact' 섹션을 활성화합니다.
            // (뷰포트 하단이 문서 하단에 50px 이내로 접근했을 때)
            if (scrollY + clientHeight >= scrollHeight - 50) {
                current = 'contact'; // 'contact' 섹션을 현재 활성화할 섹션으로 설정합니다.
            } else {
                sections.forEach(section => { // 각 섹션에 대해 반복합니다.
                    const activationOffset = 50; // 활성화 오프셋 (스크롤 시 섹션 시작점보다 약간 위에서 활성화되도록 조정)
                    // 섹션의 상단 위치를 계산합니다. (섹션의 실제 offsetTop - 헤더 높이 - 활성화 오프셋)
                    const sectionTop = section.offsetTop - headerOffset - activationOffset;
                    // 섹션의 하단 위치를 계산합니다. (섹션의 실제 offsetTop + 섹션의 높이 - 헤더 높이 - 활성화 오프셋)
                    const sectionBottom = section.offsetTop + section.clientHeight - headerOffset - activationOffset;

                    // 현재 스크롤 위치가 섹션의 상단과 하단 사이에 있는지 확인합니다.
                    if (scrollY >= sectionTop && scrollY < sectionBottom) {
                        current = section.id; // 현재 스크롤 위치에 해당하는 섹션의 ID를 current 변수에 저장합니다.
                    }
                });
            }

            navLinks.forEach(link => { // 모든 내비게이션 링크에 대해 반복합니다.
                link.classList.remove('active'); // 모든 링크에서 'active' 클래스를 제거합니다.
                // 현재 활성화할 섹션 ID를 포함하는 href 속성을 가진 링크를 찾아 'active' 클래스를 추가합니다.
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active'); // 해당 링크에 'active' 클래스를 추가하여 활성화합니다.
                }
            });
        });
    }
});