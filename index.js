Survey
    .StylesManager
    .applyTheme("modern");


var json = {
    "title": "MBTI로 알아보는 리더십 유형",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "html",
                    "name": "income_intro",
                    "html": "<article class='intro'><div class='intro__body wysiwyg' style='font-size:17px'><p> 안녕하세요, 한화시스템/ICT 조직문화 개선 협의체 ‘블루보드’입니다.</p> <p>리더십은 직원 몰입도 향상에 영향을 미치는 중요한 요소로, 직원들은 나의 리더와 소통하여 회사의 비전을 이해하고, 업무를 통해 육성하기를 원합니다. 또한, 나의 팀장님에 대하여 알고 싶고, 배우고 싶어 합니다.</p> <p>간소화한 MBTI 검사*를 통하여 팀장님의 리더십 스타일을 알아봄으로써, 서로를 이해하고 진정성 있는 소통을 나눌 수 있는 시간을 가져보고자 합니다.</p> <p>소요시간은 약 3분으로 부담 없이 참여 부탁 드립니다.</p> <p>본 설문은 이번 활동 외에는 사용되지 않으며, 수집한 데이터는 2020년 12월 31일자로 파기할 예정입니다.</p> <p style='font-size:15px'>*MBTI(Myers-Briggs Type Indicator) : 현대 분석심리학의 대가인 카를 융의 ‘심리학적 유형론’에 근거해 사람들의 성격을 분류한 성격 유형 검사 </p></div> </article>"
                }, {
                    "type": "text",
                    "name": "team",
                    "title": "팀명을 적어주세요",
                    "isRequired": true
                }, {
                    "type": "text",
                    "name": "name",
                    "title": "성함을 적어주세요",
                    "isRequired": true
                }, {
                    "type": "radiogroup",
                    "name": "leader",
                    "title": "당신은 팀/Unit장인가요?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Y",
                            "text": "그렇다."
                        },
                        {
                            "value": "N",
                            "text": "그렇지 않다."
                        },
                    ]
                }
            ]
        },
        {
            "name": "page2",
            "title": "This is the page {pageno} of {pagecount}.",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "1",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "새로 생긴 팀을 맡으면 나는 그룹 토의 방식으로 의견을 나눈다."
                        },
                        {
                            "value": "B",
                            "text": "새로 생긴 팀을 맡으면 나는 선발된 사람과 개별적 대화로 의견을 나눈다."
                        },
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "2",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 일을 할 때 현실적인 사람들과 잘 맞는다."
                        },
                        {
                            "value": "B",
                            "text": "나는 일을 할 때 상상력이 풍부한 사람들과 잘 맞는다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "3",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "다른 사람들은 나를 굳센 사람으로 여길 것이다."
                        },
                        {
                            "value": "B",
                            "text": "다른 사람들은 나를 정이 많은 사람으로 여길 것이다."
                        }
                    ],
                    // "otherText": "Other",
                    // "colCount": 3
                }, {
                    "type": "radiogroup",
                    "name": "4",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 일을 계획 할 때 사전에 잘 구조화하고 설계한다."
                        },
                        {
                            "value": "B",
                            "text": "나는 일을 계획 할 때 유연하고 빈번한 조절이 가능하게 설계한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "5",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 다른 사람들에게 말하기를 좋아하고, 쉽게 친해지게 되는 사람으로 여겨진다."
                        },
                        {
                            "value": "B",
                            "text": "나는 다른 사람들에게 말없고 조용하며, 친해지기 어려운 사람으로 여겨진다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "6",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 비즈니스 전략을 구상 할 때 세부적인 계획에 대하여 고려한다."
                        },
                        {
                            "value": "B",
                            "text": "나는 비즈니스 전략을 구상 할 때 넓은 안목에서 고려한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "7",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "조직에서 다른 사람과 대화 할 때 나는 사실 그대로 말할려고 한다."
                        },
                        {
                            "value": "B",
                            "text": "조직에서 다른 사람과 대화 할 때 나는 다른 사람의 기분을 상하게하거나 상처를 주지않도록 말할려고 한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "8",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 체계적인 것을 더 좋아한다."
                        },
                        {
                            "value": "B",
                            "text": "나는 융통성 있는 것을 더 좋아한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "9",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 사람들이나 사물에 더 관심이 많다."
                        },
                        {
                            "value": "B",
                            "text": "나는 아이디어나 사고에 더 관심이 많다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "10",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 보수성, 정통성에서 긍지를 느낀다."
                        },
                        {
                            "value": "B",
                            "text": "나는 새로움, 독창성에서 긍지를 느낀다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "11",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 다른 사람들의 실수를 못 참는다."
                        },
                        {
                            "value": "B",
                            "text": "나는 다른 사람들의 실수를 이해한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "12",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 새로운 것을 발굴해 나가는 편이다."
                        },
                        {
                            "value": "B",
                            "text": "나는 기존의 상황을 인식하고 개선해 나가는 편이다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "13",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 다소 친밀하지는 않지만 많은 사람들과의 교제를 선호한다."
                        },
                        {
                            "value": "B",
                            "text": "나는 소수의 사람들과 친밀한 교제를 선호한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "14",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 기존의 기술을 적용하는 것을 선호한다."
                        },
                        {
                            "value": "B",
                            "text": "나는 새로운 기술을 배우는 것을 선호한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "15",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 사고하는 사람이다."
                        },
                        {
                            "value": "B",
                            "text": "나는 감성으로 느끼는 사람이다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "16",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 대부분의 경우 나의 의견을 옳다는데 긍지를 느낀다."
                        },
                        {
                            "value": "B",
                            "text": "나는 다른 사람의 의견을 잘 받아들인다는데 긍지를 느낀다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "17",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "어떤 생각이나 느낌이 떠올랐을 때 나는 말로 즉각적인 표현을 한다."
                        },
                        {
                            "value": "B",
                            "text": "어떤 생각이나 느낌이 떠올랐을 때 나는 표현을 안 하는 편이다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "18",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 현실적인 측면에서 생각하는 편이다."
                        },
                        {
                            "value": "B",
                            "text": "나는 가능성의 측면에서 생각하는 편이다."
                        }
                    ]
                }
            ]
        },
        {
            "name": "page3",
            "title": "This is the page {pageno} of {pagecount}.",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "19",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 타인이나 어떤 이슈에 대하여 직접 맞서는 편이다."
                        },
                        {
                            "value": "B",
                            "text": "나는 논쟁이나 어려운 이슈는 피하는 편이다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "20",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 다른 사람들에게 질서정연한 사람이라는 인상을 준다."
                        },
                        {
                            "value": "B",
                            "text": "나는 다른 사람들에게 태평스럽다는 인상을 준다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "21",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 다른 사람들과의 대화를 통하여 정보를 얻는다."
                        },
                        {
                            "value": "B",
                            "text": "나는 내가 직접 자료를 읽고 정보를 얻는다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "22",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 점진적이고 단계적인 변화를 선호한다."
                        },
                        {
                            "value": "B",
                            "text": "나는 전면적이고 드라마틱한 변화를 선호한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "23",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 용납할 수 없는 일을 저지른 직원을 해고 할 수 있다."
                        },
                        {
                            "value": "B",
                            "text": "나는 용납할 수 없는 일을 저지른 직원을 계속 유지시키며 능력을 발전 시킬 수 있게끔 해준다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "24",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 결정을 내릴 때 즉각적인 편이다."
                        },
                        {
                            "value": "B",
                            "text": "나는 결정을 내릴 때 점진적인 편이다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "25",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 그룹으로 일하기를 좋아한다."
                        },
                        {
                            "value": "B",
                            "text": "나는 혼자 일하기를 좋아한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "26",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 업무의 실제적인 측면을 토론하고 평가한다."
                        },
                        {
                            "value": "B",
                            "text": "나는 업무의 개념적 측면을 토론하고 평가한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "27",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 우선 비평하고, 그 다음에 칭찬하는 경향이 있다."
                        },
                        {
                            "value": "B",
                            "text": "나는 우선 칭찬하고, 그 다음에 비평하는 경향이 있다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "28",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 미리 계획을 세워 마감일 전에 일을 마치는 편이다."
                        },
                        {
                            "value": "B",
                            "text": "나는 마감 일에 쫓겨 일을 끝내는 편이다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "29",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "중요한 외적 변화에 있어 나는 먼저 행동하고, 생각하고, 행동한다."
                        },
                        {
                            "value": "B",
                            "text": "중요한 외적 변화에 있어 나는 먼저 생각하고, 행동하고, 생각한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "30",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 세부적인 것을 이해하고 나서 전체 그림을 본다."
                        },
                        {
                            "value": "B",
                            "text": "나는 전체 그림을 이해하고 나서 세부사항을 본다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "31",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 프로그램을 통하여 조직의 역량을 향상시키고저 한다."
                        },
                        {
                            "value": "B",
                            "text": "나는 사람들을 통하여 조직의 역량을 향상시키고자 한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "32",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 한가지 전략을 오랫동안 고수함으로써 전략적 실수를 할 수 있다."
                        },
                        {
                            "value": "B",
                            "text": "나는 쉽게 전략을 바꿈으로써 전략적 실수를 할 수 있다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "33",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "다른 사람들은 나를 다소 외향적이라고 여길 것이다."
                        },
                        {
                            "value": "B",
                            "text": "다른 사람들은 나를 다소 내성적이라고 여길 것이다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "34",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 업무를 평가할 때 현재의 성과를 생각한다."
                        },
                        {
                            "value": "B",
                            "text": "나는 업무를 평가할 때 장래 잠재력을 생각한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "35",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "나는 실수를 지적해 줌으로써 일의 결과를 향상시키고자 한다."
                        },
                        {
                            "value": "B",
                            "text": "나는 그들의 노력에 대하여 칭찬해 줌으로서 일의 결과를 향상시키고자 한다."
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "36",
                    "title": " ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A",
                            "text": "미래를 준비하는 최상의 방법은 신중하게 미래를 위한 계획을 세우는 것이다."
                        },
                        {
                            "value": "B",
                            "text": "미래를 준비하는 최상의 방법은 대담하게 미래를 만들어 가는 것이다."
                        }
                    ]
                }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {

        var EI, SN, TF, JP, resultType;

        var EIa = 0;
        var EIb = 0;

        var SNa = 0;
        var SNb = 0;

        var TFa = 0;
        var TFb = 0;

        var JPa = 0;
        var JPb = 0;


        var arr = new Array();

        for (var i = 1; i <= 36; i++) {

            arr[i - 1] = result.data[i]

            var idx = i.toString();
            var condition = i % 4;

            if (result.data[idx] == "A") {
                switch (condition) {
                    case 1: EIa++;
                        break;
                    case 2: SNa++;
                        break;
                    case 3: TFa++;
                        break;
                    case 0: JPa++;
                        break;
                }
            }
            else if (result.data[idx] == "B") {
                switch (condition) {
                    case 1: EIb++;
                        break;
                    case 2: SNb++;
                        break;
                    case 3: TFb++;
                        break;
                    case 0: JPb++;
                        break;
                }
            }

        }


        if (EIa > EIb) EI = "E"
        else EI = "I"

        if (SNa > SNb) SN = "S"
        else SN = "N"

        if (TFa > TFb) TF = "T"
        else TF = "F"

        if (JPa > JPb) JP = "J"
        else JP = "P"


        resultType = EI + SN + TF + JP;
        // resultType = "ENTJ";


        var resultText = "";

        if (result.data["leader"] == "L") {
            resultText = result.data["team"] + " 리더 " + result.data["name"] + "님의 리더십 유형은!";
        }
        else {
            resultText = result.data["name"] + "님이 선택한 리더십 유형은!";
        }

        var resultPeople = "";
        var resultComment = "";
        var resultImg = "./images/" + resultType;
        var resultMSG = "";

        if (resultType == "ISTJ") {
            resultComment = "Paypal 창업자!";
            resultPeople = "피터 틸";
            resultImg += ".jpg";
            resultMSG = "<p> - 목표 설정시 현재까지 수집한 정보와 과거의 경험을 기반으로 고려하여 결정한다.</p>\
            <p> - 도달하고자 하는 목표가 무엇인지 명확하게 정의한다.</p>\
            <p> - 구성원들에게 어떤 일은 언제까지 해야 하는지 정확하게 인지시키고, 마감기한과 업무 진행 상황을 확인하며 일할 수 있도록 한다.</p>\
            <p> - 다른 리더들을 존중하며, 자신이 아닌 다른 리더들에게 시선이 집중되는 것을 편안해 한다.</p>\
            <p> - 구성원들이 목표에 도달할 수 있도록 보이지 않는 곳에서 성실하게 일하고 지원한다.</p>\
            <p> - 구성원들의 역할 모델이 되는 것과 일을 완수하기 위해 든든한 버팀목이 되는 것을 좋아한다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 현실과 다른 새로운 아이디어를 생각해내거나 새로운 시도를 하는 것이 어렵다.</p>\
            <p> - 업무에 대한 내적 동기가 지나칠 때가 있어 구성원들이 거리감을 느낄 수 있다.</p>\
            <p> - 자신의 경험에 근거한 빠른 결정으로 조직에 새로운 아이디어가 제공되는 것을 막는 경향이 있다.</p>\
            <p> - 구성원들이 해야 할 일들의 세부사항까지 관여하기 경향이 있어 구성원들의 능력 개발의 기회를 막을 수 있다.</p>\
            ";
        }
        else if (resultType == "ISTP") {
            resultComment = "IT계의 에디슨! 트위터 창업자!";
            resultPeople = "잭 도로시";
            resultImg += ".jpg";
            resultMSG = "<p> - 즉시 실행할 수 있는 처리 방법을 가지고, 구체적인 행동 계획을 세우는 것을 선호한다.</p>\
            <p> - 상황에 맞추어 추진 방향을 설정하고, 새로운 변화에도 빠른 적응력을 보인다.</p>\
            <p> - 격식을 따지는 것 보다는 편안한 분위기를 추구하여, 구성원들과의 소통이 잘 이루어지는 편이다.</p>\
            <p> - 의사결정을 효율적으로 한다.</p>\
            <p> - 때로는 경쟁적인 분위기를 조성하여 구성원들이 최선을 다하는 환경을 만든다.</p>\
            <p> - 갈등이 생겼을 때, 감정적으로 대응하지 않는다.</p>\
            <p> - 상황에 따라 유연하게 대처하며, 본래의 계획 또한 달성한다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 선택의 의미를 충분히 고려하지 않고 행동으로 바로 옮기는 경향이 있다.</p>\
            <p> - 지나친 융통성을 보일 경우, 방향성을 중요시 하는 사람들에게 혼란을 줄 수 있다.</p>\
            <p> - 구성원들에게 적절한 시기에 감사의 표시나 격려를 못하는 경향이 있을 수 있다.</p>\
            ";
        }
        else if (resultType == "ESTP") {
            resultComment = "번복 그만....";
            resultPeople = "트럼프";
            resultImg += ".jpg";
            resultMSG = "<p> - 현실 감각이 뛰어나며, 당면한 과제를 신속히 파악한다.</p>\
            <p> - 기회를 잘 활용하는 타입이다.</p>\
            <p> - 구성원들을 이끄는 카리스마가 있으며, 피드백도 직접 주는 경향이 있다.</p>\
            <p> - 감정적으로 흔들리지 않으며, 상황에 유연하게 대처한다.</p>\
            <p> - 말보다 실행을 더 중요하게 여긴다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 현실주의적인 리더 유형이기 때문에 일의 목표와 비전에 대해 깊이 있에 질문할 필요가 있다.</p>\
            <p> - 혼자서 일하는 것을 좋아하는 경향이 있어, 동료들과 함께 신뢰를 형성하고 좋은 관계를 지속시켜 보는 것도 좋다.</p>\
            <p> - 행동하는 속도가 너무 빨라 구성원들이 필요한 행동을 할 기회를 주지 않을 수 있다.</p>\
            ";
        }
        else if (resultType == "ESTJ") {
            resultComment = "자동차의 왕!!";
            resultPeople = "헨리 포드";
            resultImg += ".jpg";
            resultMSG = "<p> - 의사결정이 빠르며, 일을 가장 적절한 시점에 시작하는 경향이 있다.</p>\
            <p> - 목표를 완수하기 위해 무엇이 필요한지 분명히 알고 있다.</p>\
            <p> - 구성원들에게 동기부여를 할 때, 목적과 계획을 나열하는 편이다.</p>\
            <p> - 협동하는 것을 좋아하며, 일이 잘 진행되고 결과가 좋을 때 자신이 속한 조직을 자랑스럽게 여긴다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 부정적인 피드백을 더 많이하는 편이라 구성원들이 비난받는 느낌을 받을 수 있다.</p>\
            <p> - 늘 해왔던 방식을 선호하는경향이 있어 더 나은 방식을 도입해 보는 것도 좋다.</p>\
            <p> - 이미 한 일 보다는 현재 진행하고 있는 일에 초점을 맞추면 문제 발생이 줄어들 수 있다.</p>\
            ";
        }
        else if (resultType == "ISFJ") {
            resultComment = "";
            resultPeople = "엘리자베스 2세";
            resultImg += ".jpg";
            resultMSG = "<p> - 업무 추진 방향을 설정할 때에는 각 상황의 세부사항 뿐만 아니라, 고객의 요구를 함께 고려합니다.</p>\
            <p> - 주어진 자원과 조직의 지난 과정들을 모두 고려하여, 현실적인 업무 추진 방향과 구체적인 실행 방법을 수립합니다.</p>\
            <p> - 자신이 맡은 일을 확실하게 다 하는 성격으로 내가 이렇게 하는데 다른 직원들도 이렇게 해주길 기대합니다.</p>\
            <p> - 충섬심을 불러 일으키는 관계를 형성하는 경우가 많습니다.</p>\
            <p> - 타의 모범이 되도록 work와 life의 balance를 잘 유지하는 편이며, 맡은 일은 deadline 전에 끝내버리는 경향이 있습니다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 현실적인 요청에 많은 관심을 가져 때때론 상황을 객관적으로 보지 못하는 경향이 있습니다.</p>\
            <p> - 구성원들이 책임 완수에 소홀한 경우 실망하는 경향이 있습니다.</p>\
            <p> - 정면돌파를 회피하는 경향이 있습니다.</p>\
            ";
        }
        else if (resultType == "ISFP") {
            resultComment = "애플 수석 디자이너!";
            resultPeople = "조나단 이브";
            resultImg += ".png";
            resultMSG = "<p> - 방향 설정을 돕기 위한 구성원들의 관점을 받아드립니다.</p>\
            <p> - 목표를 실행하는 첫 단계에서부터 현재 상황을 날카롭게 파악합니다.</p>\
            <p> - 상황이 변화와 전후 관계에 따라 필요한 경우 목표를 조정합니다.</p>\
            <p> - 조직 구성원들에게 친근감을 만들어 주기 위해 노력합니다.</p>\
            <p> - 가장 빨리 실현 가능한 대안을 찾아내고, 현실적인 목표를 설정합니다.</p>\
            <p> - 구성원 각자가 자신의 일을 잘 해낼 수 있도록 유도하며, 조용하고 꾸준하게 조력자 역할을 합니다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 방향을 확정적으로 제시하는 것을 내키지 않아하는 경향이 있습니다.</p>\
            <p> - 즉각적인 상황에 초점을 맞추는 경향이 있어, 장기적인 잠재가능성을 놓치는 경우가 발생할 수 있습니다.</p>\
            <p> - 구성원들을 압박해야 하는 시점이 와도 내버려 두는 경향이 있습니다.</p>\
            ";
        }
        else if (resultType == "ESFP") {
            resultComment = "전 미국 대통령!";
            resultPeople = "빌 클린턴";
            resultImg += ".png";
            resultMSG = "<p> - 개개인을 이롭게 할 선택권을 만들고, 자신의 가치에 부합하는 선택을 하는 사람입니다.</p>\
            <p> - 정직하고 실용적인 해결책을 추구하며, 현재와 미래의 필요한 부분도 빠르게 파악합니다.</p>\
            <p> - 구성원들의 성장에 기여할 수 있도록 오랜 기간 관계를 형성하려 합니다.</p>\
            <p> - 성공하는 방법을 알고 있는 리더십 유형입니다.</p>\
            <p> - 구성원들을 성공하도록 자극하는 일에 직접 참여하며, 이를 즐깁니다.</p>\
            <p> - 팀원들의 동기 유지를 위해 중요합 업무 후에 축하하고 보상합니다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 상반된 관점을 불편하게 느끼며, 목표 선택시 타인의 기분을 많이 고려합니다.</p>\
            <p> - 외향적인 사람에게 끌리는 경향이 있어, 조용한 사람들을 간과할 수 있습니다.</p>\
            <p> - 반복적인 일을 피하려는 경향이 있습니다.</p>\
            <p> - 자기반성이 별로 없어, 구성원들의 피드백에 수용력이 없는 것처럼 보일 수 있습니다.</p>\
            ";
        }
        else if (resultType == "ESFJ") {
            resultPeople = "프란치스코 교황";
            resultImg += ".png";
            resultMSG = "<p> - 유용하고 실제적인 결과를 얻는 행동 계획에 집중하고, 빠른 진행을 추구합니다.</p>\
            <p> - 팀원들에게 업무 전달 시, 계획을 세부적으로 세우며 명확하게 구조화 시킵니다.</p>\
            <p> - 팀원들의 가치를 존중하고 조화를 이루는 것을 강조합니다.</p>\
            <p> - 팀원들의 의견을 잘 수용하고 피드백도 잘 주는 등 동기부여에 뛰어난 리더 유형입니다.</p>\
            <p> - 계획에 맞춰 수행하기 위해 빠르게 움직이며, 세부사항 관리에도 능숙합니다.</p>\
            <p> - 팀원들을 적재적소 업무에 잘 배치합니다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 실제로 성취가능한 것이 무엇인지를 놓쳐, 야망이 부족한 사람으로 보일 수 있습니다.</p>\
            <p> - 자신의 욕구와 타인의 욕구를 잘 구분하지 못해, 구성원들에게 효과적인 영향력을 미치지 못할 수 있습니다.</p>\
            <p> - 스트레스를 받으면 본인이나 상대방을 과도하게 비판할 수 있습니다. 이때 비판을 본인의 것으로 받아들인다면 상처받고, 좌절과 무력감에 빠질 수 있습니다.</p>\
            <p> - 조직의 규범이 더이상 유용하지 않을 때조차도 규범을 지키려고 노력합니다.</p>\
            ";
        }
        else if (resultType == "INFJ") {
            resultComment = "명언 제조기!";
            resultPeople = "넬슨 만델라";
            resultImg += ".jpg";
            resultMSG = "<p> - 모든 면에서 완벽함을 추구하고 많은 관점을 수용합니다.</p>\
            <p> - 좋은 관계를 유지하는 것에 우선순위를 두고 잘 경청하는 편입니다.</p>\
            <p> - 누락시켜야 할 정보가 있다면, 남들이 중요하다고 여겨도 크게 개의치 않습니다.</p>\
            <p> - 긍정적인 관점을 보여주어 구성원들이 열심히 일 하도록 열정을 불러일으킵니다.</p>\
            <p> - 목표 도달에 더 쉬운 방법이 있다면, 현 시스템도 문제 없이 바꾸어 버리는 리더입니다.</p>\
            <p> - 빠르게 실천하는 모습이 팀원들에게 훌륭한 모델이 되는 정신적 리더입니다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 시간/돈에 관해선 객관적 분석을 충분히 하지 않는 경향이 있습니다.</p>\
            <p> - 조직의 방향성을 빠르게 수립하려는 경향이 있어, 자칫 정보들 사이의 모순을 간과할 수 있습니다.</p>\
            <p> - 지시적인 성향이 아니며, 다른 이들에게 무엇을 해야 할 지에 대해 말하는 것이 불편합니다.</p>\
            <p> - 정치적인 흐름을 상대적으로 잘 파악하지 못해 영향력을 잃을 수 있습니다.</p>\
            <p> - 갈등을 싫어하며, 결과보다는 조직 내 우호적 관계 형성에 관심을 더 둡니다.</p>\
            <p> - 팀원들이 수행한 업무를 지적하지 않거나, 불명확하게 피드백하고 인내하는 경향이 있습니다.</p>\
            ";
        }
        else if (resultType == "INFP") {
            resultPeople = "잔 다르크!";
            resultImg += ".png";
            resultMSG = "<p> - 옳은 일에 기여하고자 하는 열망이 있으며, 모든 구성원들에게 가치가 있는 일을 만들고 싶어 합니다.</p>\n\n\
            <p> - 미래에 발생할 수 있는 여러 가능성들과 전체적인 맥락을 쉽게 파악합니다.</p>\
            <p> - 일대일의 인간관계를 선호하는 경향이 있으며, 팀원들의 마음을 읽고 동기를 불어일으킵니다.</p>\
            <p> - 가장 좋은 결과를 보여주고자 하는 욕구가 강합니다.</p>\
            <p> - 팀원들의 수행 능력을 믿어줌으로써 업무 수행을 잘할 수 있도록 격려하는 편입니다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 지나치게 높은 이상을 추구하기 때문에, 적당한 진보를 이룰 수 있는 기회를 놓칠 수 있습니다.</p>\
            <p> - 본인이 가지고 있는 추측을 밖으로 꺼내지 않아 팀원들을 오해할 수 있습니다.</p>\
            <p> - 때떄로 사람들에게 책임을 묻는 것이 그들의 성장을 촉진한 다는 것을 간과합니다.</p>\
            <p> - 그다지 비판적이지 않은 어조에도 공격 받았다고 오해하는 경향이 있습니다.</p>\
            ";
        }
        else if (resultType == "ENFP") {
            resultComment = "(쿨럭) 누가.. 기침 소리를 내었는가..?";
            resultPeople = "태조 왕건!";
            resultImg += ".png";
            resultMSG = "<p> - 미래지향적인 유형으로, 이상적인 목표를 수립하며 미래에 대해 낙관적입니다.</p>\
            <p> - 여러 비전과 실현 방법을 제시하고, 하나로 결정내기 전에 다양한 대한을 고려하는 데 익숙합니다.</p>\
            <p> - 열정적이고 탁월한 의사소통 능력을 활용하여, 팀원들이 비전을 공유하도록 고취시킵니다.</p>\
            <p> - 동료들을 이해하고, 그들의 가치와 신뢰를 구축하는 데 집중합니다.</p>\
            <p> - 구성원들이 놓칠 수 있는 부분을 잘 체크하고, 새롭고 효율적인 방법들을 잘 적용합니다. </p>\
            <p> - 주인의식과 몰입을 독려하기 위해 권한 공유에 익숙합니다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 부정적인 피드백을 주거나 구성원들에게 상처 주는 것을 꺼립니다.</p>\
            <p> - 일과 관계의 분리를 잊고 사람들과의 관계에 역량을 집중하는 경향이 있습니다.</p>\
            <p> - 세부적으로 정의해야 하는 업무가 많을 경우, 아이디어를 실현하고자 하는 열정을 잃을 수 있습니다.</p>\
            ";
        }
        else if (resultType == "ENFJ") {
            resultComment = "전 미국 대통령!";
            resultPeople = "버락 오바마";
            resultImg += ".jpg";
            resultMSG = "<p> - 구성원들이 조직의 공동 가치와 목표에 공감하고, 동참하도록 활성화 시킵니다.</p>\
            <p> - 결단력이 있고, 행동지향적입니다.</p>\
            <p> - 성과 중심적이며, 특히 고객이나 팀원들에게 영향을 미치는 부분에 있더 더더욱 그러한 태도를 보입니다.</p>\
            <p> - 구성원들이 공헌한 바를 알아주고, 그 사람의 가치를 인정합니다.</p>\
            <p> - 문제를 확인하고 나면, 어떤 것들을 실행해야 하는지 그림을 쉽게 그려낸다.</p>\
            <p> - 효과적으로 권한을 나누어, 구성원들의 성장 촉진을 위해 적당한 긴장감을 주는 경향이 있다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 다른 사람의 영향을 많이 받아, 원하는 방향으로 가지 못할만큼 의견을 내세우지 못할 수 있다.</p>\
            <p> - 결과에 대한 비판이나 구성원들의 어려움을 자신의 것으로 받아들일 수 있습니다.</p>\
            <p> - 갈등을 피하고 싶어 하는 경향이 있습니다.</p>\
            <p> - 긍정적인 자료들을 선호하는 경향이 있어 어려운 결과의 신호를 놓칠 수 있습니다.</p>\
            ";

        }
        else if (resultType == "INTJ") {
            resultComment = "주가란 이런거죠ㅎㅎㅎㅎㅎ";
            resultPeople = "엘론 머스크";
            resultImg += ".jpg";
            resultMSG = "<p> - 여성들의 검사 결과에서는 잘 안 나오는 유형이며, 전체 인구의 대략 2% 정도 여기에 속한다고 한다. </p>\
            <p> - 박학다식한 정보력과 결단력으로 상위 계층에 있는 경우가 많다고 한다. </p>\
            <p> - 성공에 대한 욕구가 있지만 실제로 그걸 나타내지는 않으며, 쓸데없이 감성이나 에너지를 소모하는 걸 매우 싫어한다. </p>\
            <p> - 기본적으로 내가 모르는 정보, 지식에 대한 호기심이 매우 뛰어나며, 어릴 때부터 책 읽는 걸 좋아하기도 한다. </p>\
            <p> - 그래서인지 별 의미없는 얘기들보다 특정 전공에 대한 이야기나 깊은 주제에 대해 대화하는 걸 선호하는 편이다. </p>\
            <p> - 그들은 샘솟는 아이디어를 직접 실천하고, 성취하는 것을 두려워하지 않는데 그렇다고 해서 마냥 충동적인 것은 아니다. </p>\
            <p> - 그들의 뛰어난 전략이나 계획으로 다른 사람들의 머리 위에서 그들을 통제하고 이끌어 나가는 것에 능숙한데 실제로 많은 소설 속의 인물들이 INTJ 유형이라고 묘사되는 경우가 많다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - - 타인의 피드백과 제안을 수용할 필요가 있으며 감정의 가치에 주의를 기울일 필요가 있다. </p>\
            <p> - - 남을 인정하는 방법을 배울 필요가 있으며 비현실적 아이디어를 포기하는 것을 배울 필요가 있다.</p>\
            <p> - - 자신의 아이디어와 스타일이 남에게 미치는 영향에 대해 좀더 주의를 기울일 필요가 있다. </p>\
            <p> - - 지나치게 확신적이고 조금도 양보가 없으며 남들이 접근하거나 도전하는 것을 두려워한다. </p>\
            <p> - - 자신의 이상을 추구함에 있어서, 상이한 비젼을 가진 타인을 비평하는 경향이 있다.</p>\
            ";


        }
        else if (resultType == "INTP") {
            resultComment = "구글의 CEO!";
            resultPeople = "래리 페이지";
            resultImg += ".jpeg";
            resultMSG = "<p> - 인구의 단 3%만을 차지하며, 일반적인 규칙이나 상식에 얽매이지 않는 것으로 유명한 타입이다. </p>\
            <p> - 보통 천재라고 일컫는 인물들이 많이 포함되어있으며, 흔히 티비나 드라마에서 괴짜 박사처럼 나오는 인간형이라고 볼 수 있다.</p>\
            <p> - 그 특징으로는 우선, 어떤 사건을 바라볼 때 한쪽 면에서 바라보는 것보다는 다양한 면에서 살펴보길 좋아하며, 그 내부의 모순이나 문제에 대해서 끊임없이 궁금해하고 탐구해나가는 특성 덕분에 인류 발전에 기여할만한 성과 또한 많이 이뤄낸다.</p>\
            <p> - 호기심이 워낙 왕성하며, 무엇이든 그 내면을 파헤쳐야 직성이 풀리는지라 보는 사람으로 하여금 다소 위태해보일 수도 있지만환경만 갖춰진다면 자신이 할 수 있는 모든 것을 내쏟기도 한다. </p>\
            <p> - 자신과 관계없는 주제나 일상에 대해서는 전혀 관심을 보이지 않지만 반대로 관심사만 맞다면 적극적으로 대화를 시도하며 즐거워하는 모습을 볼 수 있다. </p>\
            <p> - 인과관계나 논리에 대해서 집착을 하기에 개연성 없이 일어나는 일들이나 우연에 대해서 곧잘 받아들이지 않고, 왜 그렇게 되었는지에 대해서 궁금해하며 풀어나가려고 한다. </p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 타인의 노력을 인정하는 태도 필요</p>\
            <p> - 팀으로 하는 일에 적극적으로 뛰어들 필요가 있다</p>\
            <p> - 생각보다 종이에 적어보고 정리해 보는 연습이 필요</p>\
            <p> - 다른 사람들에게 우호적인 관심을 보여줄 필요가 있다.</p>\
            <p> - 다른 사람에게 온정과 동료애를 발산하도록 노력해야 한다.</p>\
            <p> - 자신의 마음속 감정을 표현하도록 배워라. </p>\
            <p> - 충돌이 있는 상황에서 조화를 이루도록 노력하는 것이 필요하다.</p>\
            <p> - 방, 배경, 사람에 대한 모든 사항을 유심히 관찰하려는, 세부사항에 대한 안목을 키우는것이 필요.</p>\
            <p> - 현실적, 실질적, 사실에 근거하도록 하라. 다른 사람이 하지 못하거나 분명히 나타나는 사실을 간단 명료한 말이나 문장으로 표현하라.</p>\
            ";
        }
        else if (resultType == "ENTP") {
            resultComment = "세기의 천재!";
            resultPeople = "폰 노이만";
            resultImg += ".png";
            resultMSG = "<p> - 선천적으로 입담이 좋고, 말을 잘하기 때문에 상대와의 논쟁이나 변론 등을 좋아한다. </p>\
            <p> - 또, 상대방 의견에 있어서 모순을 정확하게 찝어낼 수 있는 능력 덕분에 대화에 있어 주도권을 끌고 나가거나 날카로운 비판으로 압도하는 경우도 많다. </p>\
            <p> - 즉, 남들과의 타협이나 이해를 바탕으로 합의점을 찾는 게 아니라, 끊임없이 자신의 주장에 대해 타당성을 제시하며, 반대 진영의 약점에 대해선 즉각적인 공격을 통해서 해결 방안을 찾아나가는 타입이라는 뜻이다. 이는 자기가 가진 생각이 소수파일지라도 다르지 않다. </p>\
            <p> - 대다수가 받아들이는 통념에 대해서 왜 무조건 그렇게 해야 하는지에 대해서 의문을 품으며, 이들에게 있어서 무조건 옳거나 따라야하는 규칙은 없다. </p>\
            <p> - 물론 이런 점 때문에 반복적이고 일상적인 업무에 있어서 효율성은 상당히 떨어지는 편이다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 합의에 의한 해결을 좋아하지 않기에 항상 심한 언쟁의 대상이 되곤 하지만, 상대방의 말에 귀기울이고 존중하는 마음을 훈련.</p>\
            <p> - 지루하거나 반복된 일에 대해선 급격히 의욕이 떨어지며 효율이 나쁘다. 인정하고, 효율성을 높이는 방법을 연구하라.</p>\
            <p> - 지금 당장의 세부사항이나 작은 것이라도 미래에 벌어질 일에 대해 관심을 가지고 꼼꼼하게 보도록 한다.</p>\
            <p> - 다른 사람의 입장에선 적절한 해결책임에을 인정하고 타인의 감정을 공감하며, 이해하려고 노력하여 불필요한 갈등을 없애라.</p>\
            ";
        }
        else if (resultType == "ENTJ") {
            resultComment = "전자기기에 감성을 불어 넣다!";
            resultPeople = "스티브 잡스";
            resultImg += ".jpeg";
            resultMSG = "<p> - 타고난 카리스마로 사람들을 통제하고 이끌며, 뛰어난 판단력으로 부하들을 지휘하는데 익숙하다. </p>\
            <p> - 흔히 대기업의 총수들이 이에 많이 속해있는데 그래서인지 몰라도 대담한 통솔자들은 사회적으로 높은 위치에 있거나 큰 부를 축적한 경우가 많은 편이다. </p>\
            <p> - 가끔은 목표를 이루기 위해서 물,불 안 가리고 뛰어드는 탓에 큰 실수를 하기도 하지만 전반적으로 볼 때 다수의 삶을 윤택하게끔 만들어주며, 기관에 꼭 필요한 인재라고 할 수 있다.</p>\
            <p> - 훌륭한 전략으로 일반인들이 이루지 못할 목표를 달성할 수 있는 힘을 가지고 있지만 때로는 그 과정에서 합리주의라는 오명 하에 많은 사람들을 희생시킬 지도 모른다.</p>\
            <br>\
            <h3>아쉬운점</h3>\
            <p> - 강한 자신감은 때로는 오만함을 불러온다. 겸손한 마음을 가져야 한다.</p>\
            <p> - 일이 비효율적으로 처리되고 있다고 느껴지면 쉽게 예민해지니 여유있게 차분한 마음을 가지는 훈련이 필요하다.</p>\
            <p> - 기업, 기관의 목표를 위해서라면 냉철함을 뛰어넘어 냉혹할 수도 있으니 문장으로 적어서 여러번 생각하는 훈련이 필요하다.</p>\
            <p> - 자기보다 능력이나 지위가 낮은 사람의 감정이나 사고를 무시하거나 공격하지 않도록 한다.</p>\
            ";
        }
        else {

        }


        document
            .querySelector('#surveyText')
            .textContent = resultText;

        document
            .querySelector('#surveyResult')
            .textContent = resultPeople;

        document
            .querySelector('#surveyResultComment')
            .textContent = resultComment;

        document
            .querySelector('#surveyMBTI')
            .textContent = "혹시 당신의 MBTI는... " + resultType + "..?";

        document.getElementById('image').src = resultImg;

        document
            .querySelector('#surveyContents')
            .innerHTML = resultMSG;

        // var encoded = CryptoJS.AES.encrypt(result.data["team"], "1111");

        // alert(encoded);

        // var decoded = CryptoJS.AES.decrypt(encoded, "1111").toString(CryptoJS.enc.Utf8);
        // alert(decoded, "1111");

        var firebaseConfig = {
            apiKey: "AIzaSyAbqoVfjy0q6QKcNdRnFbjalmZR5smreaQ",
            authDomain: "lbti-4199c.firebaseapp.com",
            databaseURL: "https://lbti-4199c-default-rtdb.firebaseio.com",
            projectId: "lbti-4199c",
            storageBucket: "lbti-4199c.appspot.com",
            messagingSenderId: "262129377511",
            appId: "1:262129377511:web:e87c347b1eb4699dd5c242",
            measurementId: "G-WESRC0Y5RH"
        };
        // Initialize Firebase
        var init = firebase.initializeApp(firebaseConfig);
        var db = init.firestore();
        // firebase.analytics();

        // let ref = db.collection('LBTI');
        // Add a new document in collection "cities"
        db.collection("LBTI").doc().set({
            team: String(CryptoJS.AES.encrypt(result.data["team"], "1111")),
            name: String(CryptoJS.AES.encrypt(result.data["name"], "1111")),
            leader: String(result.data["leader"]),
            survey: String(arr),
            type: String(resultType)
        })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    });

$("#surveyElement").Survey({ model: survey });