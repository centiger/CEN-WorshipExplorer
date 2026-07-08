const DATA = {
  festivals: [
    {id:'passover', emoji:'🐑', title:'유월절', group:'🟢 봄 절기', desc:'구원의 시작, 어린양의 피', ready:true,
      badges:['🟢 봄 절기','⭐ 7대 절기','📖 출애굽 시대','✝️ 십자가 예표'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','유월절'],['영어','Passover'],['히브리어','페사흐(Pesach)'],['뜻','넘어가다'],['관련','무교절과 함께 언급되는 경우가 많음']]},
        {key:'definition', title:'📖 유월절이란?', body:['유월절은 하나님께서 이스라엘 백성을 애굽의 종살이에서 구원하신 사건을 기념하기 위해 제정하신 절기입니다.', '‘유월’은 심판이 넘어갔다는 뜻입니다. 어린양의 피가 발라진 집은 마지막 재앙의 심판을 피했습니다.', '이스라엘에게 유월절은 하나님의 백성으로 새롭게 시작한 구원의 출발점입니다.']},
        {key:'practice', title:'🏛 어떻게 지켰을까?', type:'flow', intro:'니산월 14일 저녁에 지켰습니다.', items:['🐑 흠 없는 어린양 준비','🩸 어린양을 잡음','🚪 피를 문설주와 인방에 바름','🍞 무교병과 쓴 나물을 먹음','🎒 급히 식사','🙏 하나님의 구원을 기념']},
        {key:'why', title:'✨ 왜 중요할까?', body:['유월절은 구원의 시작을 선포하는 절기입니다.', '하나님께서는 어린양의 피를 통해 이스라엘을 심판에서 보호하시고 애굽에서 해방시키셨습니다.', '구원은 인간의 능력이 아니라 하나님의 은혜와 어린양의 희생으로 이루어진다는 사실을 보여 줍니다.']},
        {key:'date', title:'📅 언제 지켰을까?', body:['유대력: 니산월 14일 저녁', '오늘날: 3월 말 ~ 4월 중순', '유대력을 사용하므로 매년 날짜가 조금씩 달라집니다.', '계절: 봄 절기']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['👨‍👩‍👧‍👦 애굽의 종살이','⚖️ 열 가지 재앙','🐑 유월절 어린양','🩸 어린양의 피','🚪 문설주와 인방','🛡️ 심판이 넘어감','🚶 출애굽','🎉 하나님의 백성이 됨']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['🐑 어린양','🩸 희생의 피','🛡️ 하나님의 구원','🙏 믿음으로 순종','❤️ 감사하는 삶'], outro:'유월절은 구원이 하나님의 은혜로 주어지며, 믿음으로 그 은혜를 받아들이는 자에게 생명이 주어진다는 사실을 가르쳐 줍니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🐑 유월절','🚶 출애굽','🏜️ 광야','⛺ 성막','🏛️ 성전','🍷 마지막 만찬','✝️ 십자가','⛪ 교회'], outro:'유월절은 출애굽에서 시작되어 예수 그리스도의 십자가에서 완성되고, 성만찬을 통해 계속 기억됩니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['🐑 유월절 어린양','🍷 마지막 만찬','✝️ 십자가','❤️ 새 언약','⛪ 성만찬'], outro:'예수님은 유월절 절기에 십자가를 지심으로 참된 유월절 어린양이 되셨습니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 출애굽기 12장, 레위기 23:4~8, 민수기 9:1~14, 신명기 16:1~8', '신약: 마태복음 26:17~29, 누가복음 22:7~20, 요한복음 1:29, 고린도전서 5:7']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['유월절은 어린양의 피로 하나님의 심판을 면하고 구원을 얻은 사건을 기념하는 절기이며, 예수 그리스도의 십자가를 가장 선명하게 보여 주는 구속사의 출발점입니다.']}
      ]
    },
    {id:'unleavened', emoji:'🍞', title:'무교절', group:'🟢 봄 절기', desc:'누룩 없는 떡, 거룩한 삶', ready:true,
      badges:['🟢 봄 절기','⭐ 7대 절기','📖 출애굽 시대','✨ 거룩한 삶'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','무교절'],['다른 명칭','무교병의 절기'],['영어','Feast of Unleavened Bread'],['히브리어','하그 하마초트(Hag HaMatzot)'],['관계','유월절 다음 날부터 7일 동안 이어지는 절기']]},
        {key:'definition', title:'📖 무교절이란?', body:['무교절은 누룩을 넣지 않은 빵, 곧 무교병을 먹으며 출애굽의 급박했던 순간을 기억하는 절기입니다.', '이스라엘은 애굽을 급히 떠나야 했기 때문에 빵을 부풀릴 시간이 없었습니다.', '또한 누룩은 죄와 부패를 상징하기도 하므로, 무교절은 구원받은 백성이 죄를 버리고 거룩하게 살아야 함을 가르칩니다.']},
        {key:'practice', title:'🏛 어떻게 지켰을까?', type:'flow', intro:'니산월 15일부터 21일까지 7일 동안 지켰습니다.', items:['🍞 무교병을 준비함','🧹 집 안의 누룩 제거','🥖 7일 동안 무교병을 먹음','🙏 거룩함을 기억','🎉 하나님의 구원을 감사']},
        {key:'why', title:'✨ 왜 중요할까?', body:['무교절은 단순히 빵의 종류를 바꾸는 절기가 아닙니다.', '하나님께서는 이 절기를 통해 구원받은 백성이 옛 삶을 버리고 거룩한 삶으로 응답해야 함을 가르치셨습니다.', '유월절이 구원의 시작이라면, 무교절은 구원받은 백성이 살아가야 할 삶의 방향을 보여 줍니다.']},
        {key:'date', title:'📅 언제 지켰을까?', body:['유대력: 니산월 15~21일', '오늘날: 3월 말 ~ 4월 중순', '기간: 7일', '계절: 봄 절기']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['🐑 유월절','🍞 무교병','🧹 누룩 제거','✨ 거룩함','🙏 순종','🌿 새로운 삶']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['🍞 무교병','❌ 죄를 버림','❤️ 깨끗한 삶','🙏 하나님께 순종'], outro:'무교절은 구원받은 백성이 옛 죄와 부패를 버리고 하나님 앞에서 깨끗하고 진실하게 살아야 함을 가르쳐 줍니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🐑 유월절','🍞 무교절','🌾 초실절','🌾 칠칠절','✝️ 예수님의 죽음','⛪ 성도의 거룩한 삶'], outro:'무교절은 유월절의 구원 사건과 이어지며, 신약에서는 그리스도 안에서 새롭게 살아가는 성도의 삶으로 연결됩니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['🍞 무교병','✨ 죄 없으심','✝️ 십자가','❤️ 진실함과 순결','⛪ 성도의 새 삶'], outro:'예수님은 죄가 없으신 참된 무교병과 같은 분입니다. 신약은 성도에게 묵은 누룩을 버리고 순전함과 진실함으로 살아가라고 가르칩니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 출애굽기 12:15~20, 레위기 23:6~8, 신명기 16:3~8', '신약: 고린도전서 5:6~8']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['무교절은 누룩 없는 빵을 먹으며 출애굽을 기억하고, 죄를 버리고 거룩한 삶을 살아가야 함을 배우는 절기입니다.']}
      ]
    },
    {id:'firstfruits', emoji:'🌾', title:'초실절', group:'🟢 봄 절기', desc:'첫 열매를 하나님께', ready:true,
      badges:['🟢 봄 절기','⭐ 7대 절기','📖 가나안 정착','🌅 부활 예표'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','초실절'],['다른 명칭','첫 이삭 드리는 절기'],['영어','Feast of Firstfruits'],['히브리어','레쉬트 카치르(Reshit Katzir)'],['뜻','첫 수확을 하나님께 먼저 드리는 절기']]},
        {key:'definition', title:'📖 초실절이란?', body:['초실절은 한 해의 첫 수확을 하나님께 감사하며 가장 먼저 드리는 절기입니다.', '이스라엘 백성은 첫 열매를 자신의 것으로 여기지 않고 하나님께 먼저 바침으로, 모든 수확이 하나님께로부터 왔음을 고백했습니다.', '첫 열매를 드리는 것은 남은 모든 수확도 하나님께서 채워 주실 것을 믿는 믿음의 표현이었습니다.']},
        {key:'practice', title:'🏛 어떻게 지켰을까?', type:'flow', intro:'무교절 기간 중 첫 수확을 하나님께 드렸습니다.', items:['🌾 첫 이삭을 거둠','🙌 제사장에게 가져감','🌾 첫 이삭을 흔들어 드림','🔥 번제를 드림','🙏 하나님께 감사']},
        {key:'why', title:'✨ 왜 중요할까?', body:['초실절은 감사의 절기인 동시에 믿음의 절기입니다.', '아직 모든 곡식을 거두기 전인데도 첫 열매를 하나님께 먼저 드림으로, 앞으로의 모든 수확도 하나님께서 책임져 주실 것을 믿었습니다.', '초실절은 하나님께 먼저 드리는 삶, 그리고 하나님이 채우실 것을 신뢰하는 삶을 가르칩니다.']},
        {key:'date', title:'📅 언제 지켰을까?', body:['유대력: 니산월 16일로 이해되며, 무교절 기간 중 첫 수확과 연결됩니다.', '오늘날: 3월 말 ~ 4월 중순', '계절: 봄 절기', '유대력을 사용하므로 매년 날짜가 조금씩 달라집니다.']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['🌱 첫 수확','🌾 첫 이삭','🙌 하나님께 드림','🙏 감사','🎁 풍성한 수확의 약속']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['🌾 첫 열매','🙏 하나님께 먼저','❤️ 믿음','🎁 하나님이 채우심'], outro:'초실절은 가장 먼저 얻은 것을 하나님께 드림으로, 모든 것이 하나님께 속했고 앞으로의 삶도 하나님께 맡긴다는 믿음을 보여 줍니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🌾 초실절','🌾 첫 열매','✝️ 예수님의 부활','⛪ 교회의 시작','🌍 영원한 생명의 소망'], outro:'초실절은 첫 열매를 드리는 절기에서 시작되어, 신약에서는 예수님의 부활과 믿는 자들의 부활 소망으로 연결됩니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['🌾 초실절','✝️ 예수님의 부활','🌅 부활의 첫 열매','⛪ 믿는 자의 부활','🌍 영원한 생명'], outro:'예수님은 죽은 자 가운데서 다시 살아나신 첫 열매이십니다. 예수님의 부활은 앞으로 모든 믿는 자들이 부활할 것을 보증합니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 레위기 23:9~14', '신약: 고린도전서 15:20~23, 마태복음 28장, 마가복음 16장, 누가복음 24장, 요한복음 20장']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['초실절은 첫 열매를 하나님께 드리는 감사의 절기이며, 예수 그리스도의 부활을 가장 아름답게 예표하는 절기입니다.']}
      ]
    },
    {id:'weeks', emoji:'🌾', title:'칠칠절', group:'🟢 봄 절기', desc:'오순절, 맥추 감사', ready:true,
      badges:['🟢 봄 절기','⭐ 7대 절기','📖 시내산 언약','🔥 성령강림'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','칠칠절'],['강조 명칭','오순절(Pentecost)'],['다른 명칭','맥추절'],['히브리어','샤부옷(Shavuot)'],['뜻','유월절 후 50일째 되는 절기']]},
        {key:'definition', title:'📖 칠칠절이란?', body:['칠칠절은 유월절 이후 일곱 안식일, 곧 49일을 지난 다음 날인 50일째에 지키는 절기입니다.', '밀 수확을 감사하며 하나님께 첫 열매를 드리는 절기였고, 후대에는 하나님께서 시내산에서 율법을 주신 사건도 함께 기억하게 되었습니다.', '신약에서는 성령께서 오신 오순절과 연결되는 매우 중요한 절기입니다.']},
        {key:'practice', title:'🏛 어떻게 지켰을까?', type:'flow', intro:'유월절 후 50일째 되는 날에 지켰습니다.', items:['🌾 밀의 첫 열매를 거둠','🍞 누룩을 넣은 떡 두 개를 준비','🙌 하나님께 흔들어 드림','🔥 번제와 화목제를 드림','🎉 하나님께 감사']},
        {key:'why', title:'✨ 왜 중요할까?', body:['칠칠절은 하나님께서 풍성한 수확을 주신 것에 감사하는 절기입니다.', '또한 하나님께서 말씀을 주셔서 하나님의 백성으로 살아갈 길을 알려 주셨음을 기억하는 절기이기도 합니다.', '신약에서는 성령께서 오심으로 교회가 시작된 날이 되어 더욱 큰 의미를 갖습니다.']},
        {key:'date', title:'📅 언제 지켰을까?', body:['유대력: 시완월 6일로 이해됩니다.', '오늘날: 5월 말 ~ 6월', '유월절 후: 50일째', '계절: 초여름에 가까운 봄 절기']},
        {key:'timeline50', title:'📅 50일 타임라인', type:'flow', items:['🐑 유월절','📅 50일','🌾 칠칠절','🔥 성령강림','⛪ 교회의 시작'], outro:'칠칠절은 유월절에서 50일 뒤에 지키는 절기입니다. 그래서 신약에서는 오순절이라는 이름으로 더 익숙합니다.'},
        {key:'flow', title:'➡ Flow', type:'flow', items:['🐑 유월절','📅 50일','🌾 밀 수확','🙌 첫 열매','🔥 성령강림','⛪ 교회의 시작']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['🌾 첫 열매','🙏 감사','📜 말씀','🔥 성령','❤️ 새로운 공동체'], outro:'칠칠절은 하나님께서 주신 수확과 말씀에 감사하며, 신약에서는 성령을 통해 새 공동체가 시작되었음을 보여 줍니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🐑 유월절','🌾 칠칠절','📜 율법','🔥 성령강림','⛪ 교회의 탄생','🌍 복음의 확장'], outro:'구약의 칠칠절은 첫 열매의 감사였고, 신약의 오순절은 복음의 첫 열매가 맺히기 시작한 날입니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['✝️ 예수님의 십자가','🌅 부활','☁️ 승천','🔥 성령강림','⛪ 교회의 시작'], outro:'예수님께서 부활하시고 승천하신 후, 오순절에 성령께서 제자들에게 임하셨습니다. 이날 교회가 시작되었고 복음이 세상으로 퍼져 나가기 시작했습니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 출애굽기 34:22, 레위기 23:15~22, 신명기 16:9~12', '신약: 사도행전 2장, 고린도전서 12장']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['칠칠절은 첫 수확을 감사하는 절기이며, 신약에서는 성령강림으로 교회가 시작된 오순절과 연결되는 절기입니다.']}
      ]
    },
    {id:'trumpets', emoji:'📯', title:'나팔절', group:'🟠 가을 절기', desc:'나팔 소리와 새 시작', ready:true,
      badges:['🟠 가을 절기','⭐ 7대 절기','📖 광야·성전 예배','👑 다시 오심의 소망'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','나팔절'],['다른 명칭','나팔 부는 날'],['성경 표현','기념하여 나팔을 부는 날'],['현대 유대교','로쉬 하샤나'],['영어','Feast of Trumpets']]},
        {key:'definition', title:'📖 나팔절이란?', body:['나팔절은 나팔을 불어 거룩한 절기의 시작을 알리고, 하나님 앞에 자신을 돌아보도록 부르는 절기입니다.', '가을 절기의 첫 절기로, 이후 이어지는 속죄일과 초막절을 준비하는 의미가 있습니다.', '나팔 소리는 하나님의 백성을 깨우고, 거룩한 모임으로 부르는 신호였습니다.']},
        {key:'practice', title:'🏛 어떻게 지켰을까?', type:'flow', intro:'티쉬리월 1일에 지켰습니다.', items:['📯 나팔을 붐','🛑 일을 멈춤','🙏 거룩한 모임','🧎 회개와 준비','🙏 속죄일을 기다림']},
        {key:'why', title:'✨ 왜 중요할까?', body:['나팔절은 하나님의 백성이 영적으로 깨어나도록 부르는 절기입니다.', '나팔 소리는 단순한 악기 소리가 아니라, 하나님의 부르심과 회개의 요청, 심판과 구원의 준비를 상징합니다.', '가을 절기의 시작에서 나팔절은 마음을 깨우고 하나님 앞에 설 준비를 하게 합니다.']},
        {key:'date', title:'📅 언제 지켰을까?', body:['유대력: 티쉬리월 1일', '오늘날: 9월 ~ 10월', '계절: 가을 절기', '나팔절은 가을 절기의 문을 여는 첫 절기입니다.']},
        {key:'autumn', title:'🍂 가을 절기 흐름', type:'flow', items:['📯 나팔절','🙏 속죄일','⛺ 초막절'], outro:'가을 절기는 나팔 소리로 깨어나고, 속죄일에 하나님 앞에서 죄를 다루며, 초막절의 기쁨으로 이어집니다.'},
        {key:'flow', title:'➡ Flow', type:'flow', items:['📯 나팔 소리','👂 하나님의 부르심','🧎 회개','🙏 속죄일 준비','⛺ 초막절의 기쁨']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['📯 깨어나라','🧎 돌아오라','🙏 준비하라','👑 주님을 기다리라'], outro:'나팔절은 하나님의 백성이 영적으로 잠들지 말고 깨어 하나님께 돌아오라는 부르심을 들려줍니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['📯 나팔절','🙏 속죄일','⛺ 초막절','📯 마지막 나팔','👑 그리스도의 다시 오심'], outro:'나팔절은 마지막 나팔과 주님의 다시 오심을 생각하게 하며, 하나님의 백성이 깨어 기다려야 함을 가르쳐 줍니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['📯 나팔 소리','👂 하나님의 부르심','🧎 깨어 있음','📯 마지막 나팔','👑 주님의 다시 오심'], outro:'나팔절이 예수님의 재림을 직접적으로 확정하는 절기라고 단정하기보다는, 하나님의 부르심과 깨어 있음, 마지막 나팔의 소망을 생각하게 하는 절기로 연결하는 것이 좋습니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 레위기 23:23~25, 민수기 29:1~6', '신약: 고린도전서 15:52, 데살로니가전서 4:16']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['나팔절은 나팔 소리로 하나님의 백성을 깨우고, 속죄일을 준비하게 하는 가을 절기의 시작입니다.']}
      ]
    },
    {id:'atonement', emoji:'🙏', title:'속죄일', group:'🟠 가을 절기', desc:'죄를 속하고 회복', ready:true,
      badges:['🟠 가을 절기','⭐ 7대 절기','📖 대속죄일','✝️ 십자가 완성'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','속죄일'],['다른 명칭','대속죄일'],['영어','Day of Atonement'],['히브리어','욤 키푸르(Yom Kippur)'],['뜻','죄를 속하고 하나님과의 관계를 회복하는 날']]},
        {key:'definition', title:'📖 속죄일이란?', body:['속죄일은 이스라엘 백성과 성소의 죄를 하나님 앞에서 깨끗하게 하기 위해 1년에 한 번 지키는 가장 거룩한 날입니다.', '이날은 대제사장만 지성소에 들어갈 수 있었고, 희생 제물의 피를 가지고 하나님 앞에 나아가 백성의 죄를 속했습니다.', '속죄일은 죄의 문제를 가볍게 넘기지 않고, 하나님께서 정하신 방식으로 해결해야 함을 보여 줍니다.']},
        {key:'practice', title:'🏛 어떻게 지켰을까?', type:'flow', intro:'티쉬리월 10일에 온 백성이 자신을 낮추며 지켰습니다.', items:['🙏 금식하며 자신을 낮춤','👨‍🦳 대제사장 준비','🐂 자신을 위한 제사','🐐 두 염소 제비뽑기','🩸 피를 가지고 지성소 입장','📦 속죄소에 피를 뿌림','🐐 아사셀 염소를 광야로 보냄','🎉 죄 사함과 회복']},
        {key:'why', title:'✨ 왜 중요할까?', body:['속죄일은 죄를 해결하는 길은 하나님께서 마련하신 희생뿐임을 보여 주는 절기입니다.', '이스라엘 백성은 이 날을 통해 자신들의 죄를 인정하고, 하나님께서 베푸시는 용서와 회복을 경험했습니다.', '죄는 그냥 덮어지는 것이 아니라, 피 흘림과 대속을 통해 하나님 앞에서 다루어져야 함을 가르칩니다.']},
        {key:'date', title:'📅 언제 지켰을까?', body:['유대력: 티쉬리월 10일', '오늘날: 9월 ~ 10월', '계절: 가을 절기', '나팔절 이후에 이어지며 초막절을 앞두고 지켰습니다.']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['🙏 회개','👨‍🦳 대제사장','🩸 희생의 피','🏛 지성소','📦 속죄소','🐐 죄를 짊어진 염소','❤️ 죄 사함']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['😔 죄를 인정','🩸 하나님께서 속죄','❤️ 용서','🤝 하나님과 화목'], outro:'속죄일은 하나님 앞에서 죄를 인정하고, 하나님께서 마련하신 대속을 통해 용서와 회복을 받는 길을 보여 줍니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🙏 속죄일','🏛 대제사장','🩸 희생 제사','✝️ 예수님의 십자가','👑 영원한 속죄','⛪ 하나님께 담대히 나아감'], outro:'속죄일은 레위기의 핵심 절기이며, 신약에서는 예수님의 십자가와 대제사장 사역 안에서 완성됩니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['👨‍🦳 대제사장','🩸 희생의 피','🏛 지성소','✝️ 예수님의 십자가','👑 단번에 이루신 영원한 속죄'], outro:'예수님은 대제사장이자 희생 제물이 되어 단 한 번의 희생으로 영원한 속죄를 이루셨습니다. 히브리서는 속죄일의 제도가 예수님의 사역 안에서 완성되었다고 설명합니다.'},
        {key:'related', title:'🏛 함께 탐험하기', type:'flow', items:['🏛 지성소 Explorer','📦 언약궤 Explorer','🔥 제사 Explorer'], outro:'현재는 안내 카드입니다. 이후 성막·성전 Explorer와 실제 링크로 연결할 수 있습니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 레위기 16장, 레위기 23:26~32', '신약: 히브리서 9장, 히브리서 10장, 로마서 3:25']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['속죄일은 하나님께서 죄를 용서하시는 길을 보여 준 절기이며, 예수 그리스도의 단 한 번의 십자가 희생으로 완성된 구속을 가장 분명하게 예표하는 절기입니다.']}
      ]
    },
    {id:'tabernacles', emoji:'⛺', title:'초막절', group:'🟠 가을 절기', desc:'광야 기억과 추수 감사', ready:true,
      badges:['🟠 가을 절기','⭐ 7대 절기','📖 광야 생활 기념','🏠 하나님이 함께하심'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','초막절'],['다른 명칭','장막절'],['또 다른 명칭','수장절'],['영어','Feast of Tabernacles / Feast of Booths'],['히브리어','수코트(Sukkot)']]},
        {key:'definition', title:'📖 초막절이란?', body:['초막절은 이스라엘 백성이 광야 생활 동안 하나님께서 보호하시고 인도하신 은혜를 기억하기 위해 7일 동안 초막에서 생활하는 절기입니다.', '또한 한 해의 모든 수확을 마친 뒤 하나님께 감사드리는 기쁨과 감사의 절기이기도 합니다.', '초막절은 광야의 불안정한 삶 속에서도 하나님께서 자기 백성과 함께하셨음을 기억하게 합니다.']},
        {key:'practice', title:'🏛 어떻게 지켰을까?', type:'flow', intro:'티쉬리월 15일부터 21일까지 7일 동안 지켰습니다.', items:['⛺ 초막을 만듦','🏕 초막에서 생활','🌾 수확을 감사','🎉 하나님 앞에서 기뻐함','🙏 하나님의 함께하심을 기억']},
        {key:'why', title:'✨ 왜 중요할까?', body:['초막절은 하나님께서 자기 백성과 함께하신다는 사실을 기념하는 절기입니다.', '이스라엘은 광야에서 집도 땅도 안정도 없었지만, 하나님께서 먹이시고 보호하시고 인도하셨습니다.', '그래서 초막절은 오늘도 하나님의 백성이 하나님을 의지하며 감사와 기쁨으로 살아가야 함을 가르칩니다.']},
        {key:'date', title:'📅 언제 지켰을까?', body:['유대력: 티쉬리월 15~21일', '오늘날: 9월 ~ 10월', '기간: 7일', '계절: 가을 절기']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['🏜 광야 생활','⛺ 초막','🛡 하나님의 보호','🌾 풍성한 수확','🎉 감사와 기쁨','🏠 하나님과 함께함']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['⛺ 임시 거처','🙏 하나님을 의지','❤️ 감사','🏠 하나님이 함께하심'], outro:'초막절은 삶의 안정이 집이나 소유가 아니라 하나님께 있음을 기억하게 합니다. 하나님이 함께하시면 광야도 은혜의 장소가 됩니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🏜 광야','⛺ 초막절','🏛 성전','✝️ 예수님의 오심','⛪ 교회','🌍 새 하늘과 새 땅'], outro:'초막절은 광야의 임시 거처에서 시작되어, 하나님께서 자기 백성과 영원히 함께 거하실 완성을 바라보게 합니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['⛺ 하나님이 함께하심','✝️ 예수님의 오심','💧 생수의 약속','⛪ 성령 안의 공동체','🌍 하나님이 함께하시는 완성'], outro:'예수님께서는 초막절 기간에 성전에서 자신을 생수의 근원으로 선포하셨습니다. 초막절은 하나님께서 우리와 함께하신다는 약속을 예수님 안에서 더 깊이 보게 합니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 레위기 23:33~43, 신명기 16:13~17, 스가랴 14:16~19', '신약: 요한복음 7장, 요한계시록 21:3']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['초막절은 광야에서 함께하신 하나님을 기억하며 감사하는 절기이며, 하나님께서 영원히 자기 백성과 함께하실 완성을 바라보게 하는 절기입니다.']}
      ]
    },
    {id:'sabbath-year', emoji:'🌱', title:'안식년', group:'⭐ 특별한 해', desc:'일곱째 해의 쉼과 신뢰', ready:true,
      badges:['⭐ 특별한 해','📖 7년마다','🌾 땅의 안식','🙏 하나님을 신뢰'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','안식년'],['다른 명칭','제7년'],['영어','Sabbatical Year'],['히브리어','쉐미타(Shemittah)'],['뜻','7년마다 땅과 사람에게 쉼을 주는 해']]},
        {key:'definition', title:'📖 안식년이란?', body:['안식년은 7년마다 농사를 쉬고, 빚을 탕감하며, 하나님의 공급을 신뢰하도록 제정된 특별한 해입니다.', '이스라엘은 땅도 하나님의 것이며, 모든 삶이 하나님의 은혜로 유지된다는 사실을 배우게 되었습니다.', '안식년은 매년 지키는 절기는 아니지만, 하나님께서 시간과 땅과 삶의 주인이심을 보여 주는 중요한 제도입니다.']},
        {key:'practice', title:'🏛 어떻게 지켰을까?', type:'flow', intro:'여섯 해 동안 경작하고 일곱째 해에는 땅을 쉬게 했습니다.', items:['🌾 6년 동안 경작','🛑 7년째 땅을 쉼','💰 빚을 탕감','🍇 저절로 난 것은 함께 나눔','🙏 하나님을 신뢰']},
        {key:'why', title:'✨ 왜 중요할까?', body:['안식년은 사람뿐 아니라 땅도 쉼이 필요하며, 하나님께서 모든 것을 공급하신다는 사실을 배우는 제도입니다.', '이스라엘은 쉬는 해에도 하나님께서 먹이신다는 믿음을 훈련했습니다.', '안식년은 소유와 생산보다 하나님을 신뢰하는 삶이 더 중요하다는 것을 가르칩니다.']},
        {key:'date', title:'📅 언제 지켰을까?', body:['주기: 매 7년마다', '성격: 매년 지키는 절기가 아니라 특별한 해', '핵심: 땅의 안식, 빚 탕감, 하나님 신뢰']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['6️⃣ 여섯 해 경작','7️⃣ 일곱째 해 쉼','🌱 땅의 안식','🤝 빚 탕감','🙏 하나님을 신뢰']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['🌱 쉼','🤲 공급','❤️ 신뢰','🙏 순종'], outro:'안식년은 삶을 유지하는 힘이 인간의 생산력만이 아니라 하나님의 공급하심에 있음을 가르쳐 줍니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🌱 안식년','👑 희년','✝️ 예수님의 안식','🌍 하나님 나라'], outro:'안식년은 희년으로 확장되고, 궁극적으로 예수님 안에서 누리는 참된 안식으로 연결됩니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['🌱 쉼의 약속','🙏 하나님 신뢰','✝️ 예수님의 초청','❤️ 참된 안식'], outro:'예수님께서는 수고하고 무거운 짐 진 자들에게 참된 안식을 주시겠다고 말씀하셨습니다. 안식년은 예수님 안에서 누리는 안식을 바라보게 합니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 출애굽기 23:10~11, 레위기 25:1~7, 신명기 15:1~11', '신약 연결: 마태복음 11:28~30']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['안식년은 하나님께서 모든 삶의 주인이심을 인정하며 쉼과 신뢰를 배우는 특별한 해입니다.']}
      ]
    },
    {id:'jubilee', emoji:'👑', title:'희년', group:'⭐ 특별한 해', desc:'자유와 회복의 해', ready:true,
      badges:['⭐ 특별한 해','📖 50년마다','📯 자유의 선포','❤️ 회복과 은혜'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','희년'],['다른 명칭','자유의 해'],['영어','Jubilee'],['히브리어','요벨(Yovel)'],['뜻','50년마다 자유와 회복을 선포하는 해']]},
        {key:'definition', title:'📖 희년이란?', body:['희년은 안식년을 일곱 번, 곧 49년이 지난 다음 해에 선포되는 특별한 해입니다.', '희년에는 종이 자유를 얻고, 땅은 원래 주인에게 돌아가며, 공동체가 새롭게 회복되었습니다.', '희년은 하나님께서 자기 백성에게 자유와 회복을 주시는 은혜의 해입니다.']},
        {key:'practice', title:'🏛 어떻게 지켰을까?', type:'flow', intro:'일곱 번째 안식년 다음 해에 자유와 회복을 선포했습니다.', items:['📯 나팔을 붐','🔓 종을 자유롭게 함','🏡 땅을 원주인에게 돌려줌','🤝 공동체 회복','❤️ 하나님의 은혜를 기뻐함']},
        {key:'why', title:'✨ 왜 중요할까?', body:['희년은 모든 것을 회복시키시는 하나님의 은혜를 보여 주는 제도입니다.', '가난과 빚과 종살이가 영원히 고착되지 않도록 하나님께서 회복의 길을 열어 주셨습니다.', '희년은 경제적 회복을 넘어, 하나님의 백성이 다시 자유를 누리게 되는 은혜의 선언입니다.']},
        {key:'date', title:'📅 언제 지켰을까?', body:['주기: 50년마다', '계산: 안식년 7번 후', '성격: 매년 절기가 아니라 특별한 해', '핵심: 자유 선포, 땅 반환, 공동체 회복']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['7️⃣×7 안식년','📯 나팔','🔓 자유','🏡 회복','❤️ 하나님의 은혜']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['📯 자유','🤝 회복','❤️ 은혜','👑 하나님 나라'], outro:'희년은 하나님께서 잃어버린 것을 회복시키시고, 묶인 자에게 자유를 주시는 분임을 보여 줍니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['👑 희년','📜 이사야의 약속','✝️ 예수님의 복음','❤️ 은혜','🌍 새 하늘과 새 땅'], outro:'희년의 자유와 회복은 예수님의 복음 안에서 더 깊이 성취되며, 하나님 나라의 완성을 바라보게 합니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['📜 주의 은혜의 해','✝️ 예수님의 선포','🔓 죄와 사망에서 자유','❤️ 복음의 은혜','👑 하나님 나라'], outro:'예수님께서는 누가복음 4장에서 “주의 은혜의 해”를 선포하시며 자신의 사역을 밝히셨습니다. 희년은 예수님 안에서 주어지는 참된 자유와 회복을 보여 줍니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 레위기 25:8~55, 이사야 61:1~2', '신약: 누가복음 4:16~21']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['희년은 자유와 회복을 선포하는 특별한 해이며, 예수 그리스도 안에서 완성된 하나님의 은혜를 보여 줍니다.']}
      ]
    }
  ],
  sacrifices: [
    {id:'burnt', emoji:'🔥', title:'번제', group:'🔥 5대 제사', desc:'전부 드리는 헌신의 제사', ready:true,
      badges:['🔥 5대 제사','❤️ 헌신','🐂 짐승 제물','✝️ 온전한 드림'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','번제'],['뜻','온전히 불태워 드리는 제사'],['영어','Burnt Offering'],['히브리어','올라(Olah)'],['핵심','하나님께 전부를 드림']]},
        {key:'definition', title:'📖 번제란?', body:['번제는 제물을 하나님께 온전히 불살라 드리는 제사입니다.','제물을 남기지 않고 모두 태워 드림으로써 하나님께 자신의 삶 전체를 맡기고 헌신하는 예배를 의미합니다.','5대 제사 가운데 가장 기본적인 제사이며, 속죄와 헌신의 의미를 함께 담고 있습니다.']},
        {key:'offering', title:'🐂 무엇을 드렸을까?', type:'flow', items:['🐂 소','🐑 양','🐐 염소','🕊️ 산비둘기나 집비둘기'], outro:'형편에 따라 제물을 드릴 수 있었지만, 모두 흠 없는 제물을 드려야 했습니다.'},
        {key:'practice', title:'🏛 어떻게 드렸을까?', type:'flow', intro:'제물을 가져온 사람이 안수하고, 제사장이 피를 뿌린 뒤 제물 전체를 번제단에서 태웠습니다.', items:['🙋 제물을 가져옴','🙏 제물의 머리에 안수','🔪 제물을 잡음','🩸 피를 번제단에 뿌림','🔥 제물 전체를 태움','🌫️ 하나님께 향기로운 제사']},
        {key:'why', title:'✨ 왜 중요할까?', body:['번제는 하나님께 나의 일부가 아니라 전부를 드리는 예배를 가르칩니다.','제물의 죽음은 죄인을 대신한 희생을 보여 주고, 모두 태워 드리는 행위는 온전한 헌신을 보여 줍니다.']},
        {key:'date', title:'📅 언제 드렸을까?', body:['매일 아침과 저녁에 드렸습니다.', '안식일과 절기에도 드렸습니다.', '개인이 자원하여 하나님께 드릴 수도 있었습니다.', '성격: 기본 제사, 헌신의 제사']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['🐂 제물','🙏 안수','🩸 피','🔥 모두 태움','❤️ 온전한 헌신']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['❤️ 나 자신','🔥 하나님께 드림','🙏 헌신','✨ 삶의 예배'], outro:'번제는 하나님께 드리는 예배가 단순한 의식이 아니라 삶 전체를 하나님께 맡기는 헌신임을 보여 줍니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🔥 번제','⛺ 성막','🏛️ 성전','✝️ 예수님의 희생','❤️ 삶의 예배'], outro:'번제는 성막과 성전 예배의 중심에 있었고, 신약에서는 예수님의 온전한 희생과 성도의 삶의 예배로 연결됩니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['🔥 온전히 드림','✝️ 예수님의 순종','🩸 십자가','❤️ 완전한 헌신'], outro:'예수님은 자신을 온전히 하나님께 드리신 완전한 제물이십니다. 번제는 그리스도의 순종과 십자가의 헌신을 미리 보여 줍니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 레위기 1장, 출애굽기 29장', '신약: 히브리서 10장, 로마서 12:1']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['번제는 제물을 모두 하나님께 드림으로써, 나 자신을 하나님께 온전히 드리는 헌신의 제사입니다.']}
      ]
    },
    {id:'grain', emoji:'🌾', title:'소제', group:'🔥 5대 제사', desc:'곡식으로 드리는 감사의 제사', ready:true,
      badges:['🔥 5대 제사','🌾 곡식 제사','🙏 감사','🚫 피 없는 제사'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','소제'],['뜻','곡식으로 드리는 제사'],['영어','Grain Offering'],['히브리어','민하(Minchah)'],['핵심','감사와 봉헌']]},
        {key:'definition', title:'📖 소제란?', body:['소제는 짐승이 아니라 곡식으로 하나님께 드리는 제사입니다.','고운 가루와 기름과 유향을 드리며, 하나님께서 주신 양식과 삶의 은혜에 감사하는 제사였습니다.','5대 제사 중 피가 없는 제사라는 점이 특징입니다.']},
        {key:'offering', title:'🌾 무엇을 드렸을까?', type:'flow', items:['🌾 고운 가루','🫒 기름','🌿 유향','🧂 소금','🚫 누룩과 꿀은 제외'], outro:'소제에는 소금을 넣었고, 누룩과 꿀은 태워 드리지 않았습니다.'},
        {key:'practice', title:'🏛 어떻게 드렸을까?', type:'flow', intro:'곡식 예물을 제사장에게 가져오면 일부는 하나님께 태워 드리고, 나머지는 제사장의 몫이 되었습니다.', items:['🌾 고운 가루 준비','🫒 기름을 섞음','🌿 유향을 더함','🔥 일부를 기념물로 태움','👨‍🦳 나머지는 제사장에게 돌림']},
        {key:'why', title:'✨ 왜 중요할까?', body:['소제는 하나님께서 주신 일상의 양식과 삶의 은혜에 감사하는 제사입니다.','짐승의 피를 흘리는 제사는 아니지만, 하나님께 받은 것을 다시 하나님께 드린다는 봉헌의 의미가 있습니다.']},
        {key:'date', title:'📅 언제 드렸을까?', body:['번제와 함께 드리는 경우가 많았습니다.', '절기와 감사의 상황에서 드렸습니다.', '개인이 자원하여 드릴 수도 있었습니다.', '성격: 감사와 봉헌의 제사']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['🌾 곡식','🫒 기름','🌿 유향','🔥 하나님께 드림','🙏 감사']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['🍞 일상의 양식','🙏 감사','❤️ 하나님께 봉헌','✨ 거룩한 삶'], outro:'소제는 하나님께 받은 일상의 은혜를 기억하고 감사로 응답하는 예배입니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🌾 소제','⛺ 성막','🏛️ 성전','🍞 생명의 떡','🙏 감사의 삶'], outro:'소제는 하나님께서 주시는 양식의 은혜를 기억하게 하며, 신약에서는 생명의 떡이신 예수님과 감사의 삶으로 연결됩니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['🌾 곡식의 예물','🍞 생명의 떡','✝️ 예수님','🙏 감사의 삶'], outro:'예수님은 하늘에서 내려온 생명의 떡이십니다. 소제는 하나님께서 주시는 참된 양식과 감사의 삶을 바라보게 합니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 레위기 2장, 레위기 6:14~23', '신약 연결: 요한복음 6:35, 히브리서 13:15']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['소제는 곡식으로 하나님께 감사와 봉헌을 드리는 피 없는 제사입니다.']}
      ]
    },
    {id:'peace', emoji:'🤝', title:'화목제', group:'🔥 5대 제사', desc:'하나님과 함께 나누는 교제의 제사', ready:true,
      badges:['🔥 5대 제사','🤝 교제','🎉 기쁨','🍽️ 함께 먹음'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','화목제'],['뜻','평화와 교제의 제사'],['영어','Peace Offering / Fellowship Offering'],['히브리어','쉘라밈(Shelamim)'],['핵심','하나님과 화목하고 함께 기뻐함']]},
        {key:'definition', title:'📖 화목제란?', body:['화목제는 하나님과의 화목과 교제를 기뻐하며 드리는 제사입니다.','제물의 일부는 하나님께 태워 드리고, 일부는 제사장에게 주며, 나머지는 제사를 드린 사람이 가족과 함께 먹었습니다.','5대 제사 중 함께 먹는 기쁨이 가장 뚜렷한 제사입니다.']},
        {key:'offering', title:'🐂 무엇을 드렸을까?', type:'flow', items:['🐂 소','🐑 양','🐐 염소'], outro:'화목제의 제물은 흠 없는 짐승이어야 했고, 감사·서원·자원 제사로 드릴 수 있었습니다.'},
        {key:'practice', title:'🏛 어떻게 드렸을까?', type:'flow', intro:'제물의 피와 기름은 하나님께 드리고, 고기는 함께 먹으며 하나님과의 화목을 기뻐했습니다.', items:['🙋 제물을 가져옴','🙏 안수','🔪 제물을 잡음','🩸 피를 뿌림','🔥 기름을 태움','🍽️ 가족과 함께 먹음']},
        {key:'why', title:'✨ 왜 중요할까?', body:['화목제는 하나님과의 관계가 회복된 기쁨을 보여 줍니다.','죄인이 하나님께 가까이 나아갈 수 있을 뿐 아니라, 하나님 앞에서 기쁨과 감사를 나눌 수 있음을 가르칩니다.']},
        {key:'date', title:'📅 언제 드렸을까?', body:['감사할 일이 있을 때 드렸습니다.', '서원을 이행할 때 드렸습니다.', '자원하여 하나님께 드릴 수 있었습니다.', '성격: 교제와 감사와 기쁨의 제사']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['🤝 화목','🩸 피','🔥 하나님께 드림','🍽️ 함께 먹음','🎉 기쁨과 감사']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['😔 멀어진 관계','🤝 화목','🍽️ 교제','🎉 기쁨'], outro:'화목제는 하나님과 화목한 사람이 하나님 앞에서 기쁨과 감사를 나누는 예배입니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🤝 화목제','⛺ 성막의 식탁','🏛️ 성전 예배','✝️ 그리스도의 화목','🍞 주의 만찬'], outro:'화목제는 하나님과의 교제를 보여 주며, 신약에서는 그리스도 안에서 이루어진 화목과 주의 만찬의 기쁨을 떠올리게 합니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['🤝 하나님과 화목','✝️ 예수님의 십자가','❤️ 원수에서 자녀로','🍞 주의 만찬'], outro:'예수님은 십자가로 하나님과 사람 사이의 화목을 이루셨습니다. 화목제는 그리스도 안에서 누리는 평화와 교제를 보여 줍니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 레위기 3장, 레위기 7:11~21', '신약: 로마서 5:1, 에베소서 2:14~18, 고린도전서 10:16']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['화목제는 하나님과 화목한 백성이 감사와 기쁨으로 하나님 앞에서 교제를 나누는 제사입니다.']}
      ]
    },
    {id:'sin', emoji:'🩸', title:'속죄제', group:'🔥 5대 제사', desc:'죄 사함과 정결을 위한 제사', ready:true,
      badges:['🔥 5대 제사','🩸 속죄','🧼 정결','✝️ 죄 사함'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','속죄제'],['뜻','죄를 속하는 제사'],['영어','Sin Offering'],['히브리어','하타트(Chattat)'],['핵심','죄 사함과 정결']]},
        {key:'definition', title:'📖 속죄제란?', body:['속죄제는 죄와 부정을 하나님 앞에서 처리하기 위해 드리는 제사입니다.','특히 모르고 지은 죄나 공동체의 죄를 속하기 위해 드렸습니다.','피를 통해 죄를 속하고 하나님과의 관계를 회복하는 데 초점이 있습니다.']},
        {key:'offering', title:'🐂 무엇을 드렸을까?', type:'flow', items:['🐂 제사장·회중: 수송아지','🐐 족장: 숫염소','🐐 평민: 암염소나 어린양','🕊️ 가난한 사람: 비둘기','🌾 매우 가난한 사람: 고운 가루'], outro:'신분과 형편에 따라 제물이 달랐지만, 죄를 속하기 위해 피가 중요하게 사용되었습니다.'},
        {key:'practice', title:'🏛 어떻게 드렸을까?', type:'flow', intro:'속죄제에서는 피를 어디에 바르고 뿌리는지가 매우 중요했습니다.', items:['🙋 죄를 인정하고 제물을 가져옴','🙏 안수','🔪 제물을 잡음','🩸 피를 바르거나 뿌림','🔥 기름을 태움','🧼 죄와 부정을 정결하게 함']},
        {key:'why', title:'✨ 왜 중요할까?', body:['속죄제는 죄가 하나님과의 관계를 깨뜨린다는 사실을 보여 줍니다.','죄는 그냥 넘어갈 수 없으며, 하나님께서 정하신 속죄의 길을 통해 해결되어야 합니다.','속죄제는 하나님 앞에서 죄 사함과 정결이 필요함을 가르칩니다.']},
        {key:'date', title:'📅 언제 드렸을까?', body:['개인이나 공동체가 죄를 범했을 때 드렸습니다.', '정결 예식과 절기에도 드렸습니다.', '속죄일에는 특별히 중요한 역할을 했습니다.', '성격: 죄 사함과 정결의 제사']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['😔 죄','🙏 안수','🩸 피','🧼 정결','❤️ 용서']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['😔 죄를 인정','🩸 속죄의 피','🧼 깨끗하게 됨','🤝 하나님과 회복'], outro:'속죄제는 죄를 숨기는 것이 아니라 하나님 앞에서 인정하고, 하나님께서 마련하신 길로 용서받는 것을 가르칩니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🩸 속죄제','⛺ 성막','🙏 속죄일','✝️ 십자가','❤️ 완전한 용서'], outro:'속죄제는 속죄일과 연결되고, 궁극적으로 예수 그리스도의 십자가에서 완성됩니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['😔 인간의 죄','🩸 희생의 피','✝️ 예수님의 십자가','❤️ 죄 사함','🧼 정결한 백성'], outro:'예수님은 우리의 죄를 담당하신 완전한 속죄 제물이십니다. 그분의 피로 우리는 죄 사함과 정결을 얻습니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 레위기 4장, 레위기 16장', '신약: 히브리서 9장, 히브리서 10장, 요한일서 1:7']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['속죄제는 죄를 하나님 앞에서 해결하고, 피를 통해 죄 사함과 정결을 얻는 제사입니다.']}
      ]
    },
    {id:'guilt', emoji:'⚖️', title:'속건제', group:'🔥 5대 제사', desc:'배상과 회복의 제사', ready:true,
      badges:['🔥 5대 제사','⚖️ 배상','🤝 회복','❤️ 관계 회복'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','속건제'],['뜻','잘못을 보상하고 회복하는 제사'],['영어','Guilt Offering / Trespass Offering'],['히브리어','아샴(Asham)'],['핵심','배상과 관계 회복']]},
        {key:'definition', title:'📖 속건제란?', body:['속건제는 하나님이나 이웃에게 손해를 끼친 잘못을 속하고 회복하기 위해 드리는 제사입니다.','속죄제와 비슷하지만, 속건제는 죄 사함뿐 아니라 실제 손해에 대한 배상과 회복을 강조합니다.','잘못한 것을 인정하고, 배상하고, 하나님 앞에 제사를 드리는 구조입니다.']},
        {key:'offering', title:'🐏 무엇을 드렸을까?', type:'flow', items:['🐏 숫양','💰 배상금','➕ 오분의 일 추가 배상'], outro:'손해를 끼친 경우에는 원금에 오분의 일을 더하여 갚고, 하나님께 속건제를 드렸습니다.'},
        {key:'practice', title:'🏛 어떻게 드렸을까?', type:'flow', intro:'속건제는 제사와 배상이 함께 이루어지는 제사입니다.', items:['😔 잘못을 인정','💰 손해를 배상','➕ 오분의 일 더함','🐏 숫양을 제물로 드림','🩸 피로 속죄','🤝 관계 회복']},
        {key:'why', title:'✨ 왜 중요할까?', body:['속건제는 죄가 단순히 마음의 문제가 아니라 실제 관계와 삶에 손해를 일으킨다는 사실을 보여 줍니다.','하나님께 용서받는 것과 함께, 이웃에게 끼친 손해를 바로잡는 것이 중요하다는 것을 가르칩니다.']},
        {key:'date', title:'📅 언제 드렸을까?', body:['성물에 대해 잘못했을 때 드렸습니다.', '이웃에게 손해를 끼쳤을 때 드렸습니다.', '부정하거나 잘못한 일이 드러났을 때 드렸습니다.', '성격: 배상과 회복의 제사']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['😔 잘못','💰 배상','➕ 더하여 갚음','🐏 속건제','🤝 회복']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['😔 죄의 책임','⚖️ 공의','💰 배상','❤️ 회복'], outro:'속건제는 참된 회개가 말로만 끝나지 않고, 실제 삶의 회복과 책임 있는 행동으로 이어져야 함을 보여 줍니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['⚖️ 속건제','📜 율법의 공의','🤝 관계 회복','✝️ 예수님의 대속','❤️ 새 삶'], outro:'속건제는 죄의 책임과 회복을 보여 주며, 신약에서는 우리의 죗값을 대신 담당하신 예수님의 대속으로 연결됩니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['😔 인간의 죄책','⚖️ 갚을 수 없는 빚','✝️ 예수님의 대속','❤️ 용서와 회복'], outro:'예수님은 우리가 갚을 수 없는 죄의 빚을 대신 담당하셨습니다. 속건제는 그리스도의 대속과 회복의 은혜를 바라보게 합니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 레위기 5:14~6:7, 레위기 7:1~10, 이사야 53:10', '신약 연결: 마가복음 10:45, 골로새서 2:13~14']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['속건제는 잘못을 배상하고 관계를 회복하게 하는 제사이며, 예수님의 대속을 통해 완전한 회복을 바라보게 합니다.']}
      ]
    }
  ]
};

let state = {view:'home', category:null, itemId:null, sectionIndex:0, modal:null, transition:''};
const app = document.getElementById('app');
function setState(p){ state={...state,...p}; render(); }
function home(){return `<main class="screen"><section class="hero"><div class="eyebrow">CEN BIBLE 2.0</div><h1>절기와 제사</h1><p class="subtitle">하나님께서 주신 예배의 시간과 방법을 이해하는 탐험</p></section><div class="grid"><button class="home-card" onclick="setState({view:'list',category:'festivals'})"><div class="icon">🎉</div><div><h2>절기 Explorer</h2><p>봄 절기, 가을 절기, 특별한 해를 따라갑니다.</p></div></button><button class="home-card" onclick="setState({view:'list',category:'sacrifices'})"><div class="icon">🔥</div><div><h2>제사 Explorer</h2><p>번제, 소제, 화목제, 속죄제, 속건제를 이해합니다.</p></div></button><button class="home-card" onclick="alert('비교 화면은 다음 단계에서 연결합니다.')"><div class="icon">📊</div><div><h2>한눈에 비교</h2><p>절기와 제사의 차이를 표와 흐름으로 정리합니다.</p></div></button></div><p class="small-note">v1.6 · 절기와 5대 제사 반영</p></main>`}
function list(){const arr=DATA[state.category]; let groups=[...new Set(arr.map(x=>x.group))]; const isFest=state.category==='festivals'; return `<main class="screen"><div class="topbar"><button onclick="setState({view:'home'})">🏠 홈</button><span>› ${isFest?'절기 Explorer':'제사 Explorer'}</span></div><section class="page-title"><h1>${isFest?'🎉 절기 Explorer':'🔥 제사 Explorer'}</h1><p>${isFest?'절기는 하나님의 구원 계획을 시간의 흐름 속에서 보여 주는 거룩한 절기입니다.':'제사는 하나님께 나아가는 예배의 방법을 보여 줍니다.'}</p></section>${groups.map(g=>`<div class="group-title">${g}</div><div class="${isFest?'flow-list':'plain-list'}">${arr.filter(x=>x.group===g).map((x,idx,groupArr)=>`<button class="list-card ${x.ready?'ready':'not-ready'}" onclick="openItem('${x.id}')"><div class="left"><div class="emoji">${x.emoji}</div><div><strong>${x.title}</strong><span>${x.desc}</span></div></div><div>${x.ready?'▶':'준비중'}</div></button>${isFest && idx<groupArr.length-1?'<div class="list-connector">│</div>':''}`).join('')}</div>`).join('')}</main>`}
function openItem(id){ const item=DATA[state.category].find(x=>x.id===id); if(!item.ready){alert('아직 준비중입니다. 유월절 카드로 구조를 먼저 검토합니다.'); return;} setState({view:'card',itemId:id,sectionIndex:0}); }
function currentItem(){return DATA[state.category].find(x=>x.id===state.itemId)}
function card(){const item=currentItem(); const sec=item.sections[state.sectionIndex]; const dir=state.transition||''; return `<main class="screen card-view"><div class="card-shell ${dir}"><section class="card-head"><div class="crumb"><button onclick="setState({view:'home',modal:null})">🏠 홈</button> › ${state.category==='festivals'?'절기':'제사'} › ${item.group} › ${item.emoji} ${item.title}</div><h1><span class="title-emoji">${item.emoji}</span><span class="title-text">${item.title}</span></h1><div class="badges">${item.badges.map(b=>`<span class="badge">${b}</span>`).join('')}</div></section><div class="swipe-hint">좌우로 넘기거나 아래 버튼을 누르세요</div><section class="section-card">${renderSection(sec)}</section><div class="progress">${item.sections.map((_,i)=>`<span class="dot ${i===state.sectionIndex?'active':''}"></span>`).join('')} <span>${state.sectionIndex+1}/${item.sections.length}</span></div></div></main>${bottomNav(item)}`}
function renderSection(sec){let html=`<h2>${sec.title}</h2>`; if(sec.type==='names'){html+=`<div class="names">${sec.rows.map(r=>`<div class="name-row"><b>${r[0]}</b><span>${r[1]}</span></div>`).join('')}</div>`} else if(sec.type==='flow'){ if(sec.intro) html+=`<p class="muted">${sec.intro}</p>`; html+=`<div class="timeline">${sec.items.map((x,i)=>`<div class="tl-row"><div class="tl-line"><span class="tl-dot"></span></div><div class="tl-text">${x}</div></div>`).join('')}</div>`; if(sec.outro) html+=`<p>${sec.outro}</p>`;} else {html+=sec.body.map(p=>`<p>${p}</p>`).join('')} return html;}
function bottomNav(item){const last=state.sectionIndex===item.sections.length-1; return `<nav class="bottom-nav"><div class="bottom-nav-inner"><button class="nav-btn" onclick="prevSection()" ${state.sectionIndex===0?'disabled':''}>◀ 이전</button><button class="nav-btn" onclick="setState({view:'home',modal:null})">🏠 홈</button><button class="nav-btn" onclick="setState({modal:'explorer'})">☰ 전체</button><button class="nav-btn" onclick="setState({modal:'sections'})">📑 목차</button><button class="nav-btn primary" onclick="${last?"setState({view:'list',category:state.category,modal:null})":"nextSection()"}">${last?'목록으로':'다음 ▶'}</button></div></nav>`}
function prevSection(){ if(state.sectionIndex>0) setState({sectionIndex:state.sectionIndex-1,transition:'prev'}); }
function nextSection(){ const item=currentItem(); if(state.sectionIndex<item.sections.length-1) setState({sectionIndex:state.sectionIndex+1,transition:'next'}); }
function modal(){ if(!state.modal) return ''; const item=currentItem(); if(state.modal==='explorer'){const arr=DATA[state.category]; const groups=[...new Set(arr.map(x=>x.group))]; return `<div class="modal" onclick="setState({modal:null})"><div class="sheet" onclick="event.stopPropagation()"><button class="close" onclick="setState({modal:null})">닫기</button><h2>${state.category==='festivals'?'🎉 절기 전체':'🔥 제사 전체'}</h2>${groups.map(g=>`<div class="group-title">${g}</div>${arr.filter(x=>x.group===g).map(x=>`<button class="item ${x.id===state.itemId?'active':''}" onclick="${x.ready?`setState({itemId:'${x.id}',sectionIndex:0,modal:null})`:`alert('준비중입니다.')`}">${x.id===state.itemId?'▶ ':''}${x.emoji} ${x.title}<br><span class="muted">${x.desc}</span></button>`).join('')}`).join('')}</div></div>`}
return `<div class="modal" onclick="setState({modal:null})"><div class="sheet" onclick="event.stopPropagation()"><button class="close" onclick="setState({modal:null})">닫기</button><h2>📑 ${item.title} 목차</h2>${item.sections.map((s,i)=>`<button class="item ${i===state.sectionIndex?'active':''}" onclick="setState({sectionIndex:${i},modal:null})">${i===state.sectionIndex?'▶ ':''}${s.title}</button>`).join('')}</div></div>`}
function render(){app.innerHTML = state.view==='home'?home():state.view==='list'?list():card(); app.insertAdjacentHTML('beforeend', modal());}

let touchStartX=0, touchStartY=0;
app.addEventListener('touchstart', e=>{
  if(state.view!=='card' || state.modal) return;
  const t=e.changedTouches[0]; touchStartX=t.clientX; touchStartY=t.clientY;
},{passive:true});
app.addEventListener('touchend', e=>{
  if(state.view!=='card' || state.modal) return;
  const t=e.changedTouches[0];
  const dx=t.clientX-touchStartX, dy=t.clientY-touchStartY;
  if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.35){
    if(dx<0) nextSection(); else prevSection();
  }
},{passive:true});

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
render();
