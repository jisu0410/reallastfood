
// 한국 음식 데이터베이스 (예시 데이터)
const foodDatabase = {
    "사과": {
        name: "사과",
        category: "과일",
        calories: "52 kcal",
        protein: "0.3g",
        fat: "0.2g",
        carbs: "13.8g",
        sodium: "1mg",
        cholesterol: "0mg",
        saturatedFat: "0g",
        transFat: "0g",
        calcium: "6mg",
        iron: "0.1mg",
        phosphorus: "11mg",
        potassium: "107mg",
        benefits: ["항산화 효과", "식이섬유 풍부", "심혈관 건강", "혈당 조절", "면역력 강화"]
    },
    "바나나": {
        name: "바나나",
        category: "과일",
        calories: "89 kcal",
        protein: "1.1g",
        fat: "0.3g",
        carbs: "22.8g",
        sodium: "1mg",
        cholesterol: "0mg",
        saturatedFat: "0.1g",
        transFat: "0g",
        calcium: "5mg",
        iron: "0.3mg",
        phosphorus: "22mg",
        potassium: "358mg",
        benefits: ["칼륨 풍부", "에너지 공급", "소화 개선", "근육 기능", "스트레스 완화"]
    },
    "쌀밥": {
        name: "쌀밥",
        category: "곡류",
        calories: "130 kcal",
        protein: "2.7g",
        fat: "0.3g",
        carbs: "28g",
        sodium: "1mg",
        cholesterol: "0mg",
        saturatedFat: "0.1g",
        transFat: "0g",
        calcium: "3mg",
        iron: "0.2mg",
        phosphorus: "43mg",
        potassium: "35mg",
        benefits: ["탄수화물 공급", "에너지원", "포만감", "소화 용이", "글루텐 프리"]
    },
    "닭가슴살": {
        name: "닭가슴살",
        category: "육류",
        calories: "165 kcal",
        protein: "31g",
        fat: "3.6g",
        carbs: "0g",
        sodium: "74mg",
        cholesterol: "85mg",
        saturatedFat: "1g",
        transFat: "0g",
        calcium: "15mg",
        iron: "1mg",
        phosphorus: "228mg",
        potassium: "256mg",
        benefits: ["고단백 저지방", "근육 발달", "다이어트 도움", "필수아미노산", "면역력 강화"]
    },
    "달걀": {
        name: "달걀",
        category: "동물성 식품",
        calories: "155 kcal",
        protein: "13g",
        fat: "11g",
        carbs: "1.1g",
        sodium: "124mg",
        cholesterol: "373mg",
        saturatedFat: "3.3g",
        transFat: "0g",
        calcium: "50mg",
        iron: "1.2mg",
        phosphorus: "172mg",
        potassium: "126mg",
        benefits: ["완전단백질", "비타민 D", "뇌 건강", "시력 보호", "근육 발달"]
    },
    "우유": {
        name: "우유",
        category: "유제품",
        calories: "42 kcal",
        protein: "3.4g",
        fat: "1g",
        carbs: "5g",
        sodium: "44mg",
        cholesterol: "5mg",
        saturatedFat: "0.6g",
        transFat: "0g",
        calcium: "113mg",
        iron: "0mg",
        phosphorus: "84mg",
        potassium: "150mg",
        benefits: ["칼슘 공급", "뼈 건강", "단백질 공급", "성장 발육", "수면 질 개선"]
    },
    "두부": {
        name: "두부",
        category: "콩류",
        calories: "76 kcal",
        protein: "8.1g",
        fat: "4.8g",
        carbs: "1.9g",
        sodium: "7mg",
        cholesterol: "0mg",
        saturatedFat: "0.7g",
        transFat: "0g",
        calcium: "350mg",
        iron: "5.4mg",
        phosphorus: "87mg",
        potassium: "121mg",
        benefits: ["이소플라본", "콜레스테롤 저하", "항암 효과", "식물성 단백질", "칼슘 공급"]
    },
    "김치": {
        name: "김치",
        category: "채소류",
        calories: "23 kcal",
        protein: "2.6g",
        fat: "0.6g",
        carbs: "2.4g",
        sodium: "498mg",
        cholesterol: "0mg",
        saturatedFat: "0.1g",
        transFat: "0g",
        calcium: "45mg",
        iron: "2.5mg",
        phosphorus: "28mg",
        potassium: "154mg",
        benefits: ["프로바이오틱스", "소화 개선", "면역력 강화", "항산화", "비타민 C"]
    }
};

// DOM 요소들
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const foodInfo = document.getElementById('foodInfo');
const foodTags = document.querySelectorAll('.food-tag');

// 검색 기능
function searchFood(foodName) {
    hideAllSections();
    showLoading();

    // 실제 API 호출을 시뮬레이션 (2초 대기)
    setTimeout(() => {
        const food = foodDatabase[foodName];
        
        if (food) {
            displayFoodInfo(food);
        } else {
            showError(`"${foodName}"에 대한 정보를 찾을 수 없습니다. 다른 음식을 검색해보세요.`);
        }
        
        hideLoading();
    }, 1500);
}

// 음식 정보 표시
function displayFoodInfo(food) {
    document.getElementById('foodName').textContent = food.name;
    document.getElementById('foodCategory').textContent = food.category;
    
    // 기본 영양 정보
    document.getElementById('calories').textContent = food.calories;
    document.getElementById('protein').textContent = food.protein;
    document.getElementById('fat').textContent = food.fat;
    document.getElementById('carbs').textContent = food.carbs;
    
    // 상세 영양 성분
    document.getElementById('sodium').textContent = food.sodium;
    document.getElementById('cholesterol').textContent = food.cholesterol;
    document.getElementById('saturatedFat').textContent = food.saturatedFat;
    document.getElementById('transFat').textContent = food.transFat;
    
    // 미네랄 & 비타민
    document.getElementById('calcium').textContent = food.calcium;
    document.getElementById('iron').textContent = food.iron;
    document.getElementById('phosphorus').textContent = food.phosphorus;
    document.getElementById('potassium').textContent = food.potassium;
    
    // 건강 효능
    const benefitsContainer = document.getElementById('healthBenefits');
    benefitsContainer.innerHTML = '';
    food.benefits.forEach(benefit => {
        const benefitElement = document.createElement('span');
        benefitElement.className = 'health-benefit';
        benefitElement.textContent = benefit;
        benefitsContainer.appendChild(benefitElement);
    });
    
    foodInfo.classList.remove('hidden');
}

// 로딩 표시
function showLoading() {
    loadingSpinner.classList.remove('hidden');
}

function hideLoading() {
    loadingSpinner.classList.add('hidden');
}

// 에러 메시지 표시
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

// 모든 섹션 숨기기
function hideAllSections() {
    foodInfo.classList.add('hidden');
    errorMessage.classList.add('hidden');
}

// 이벤트 리스너들
searchBtn.addEventListener('click', () => {
    const foodName = searchInput.value.trim();
    if (foodName) {
        searchFood(foodName);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const foodName = searchInput.value.trim();
        if (foodName) {
            searchFood(foodName);
        }
    }
});

// 인기 음식 태그 클릭
foodTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const foodName = tag.dataset.food;
        searchInput.value = foodName;
        searchFood(foodName);
    });
});

// 초기 메시지
console.log('🍎 음식 정보 검색기가 준비되었습니다!');
console.log('사용 가능한 음식:', Object.keys(foodDatabase).join(', '));
