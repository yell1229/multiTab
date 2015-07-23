## MultiTab 


 1. 탭 사용시  으로 접근한다.
 2. 반드시 a Tag를 사용하고, 해당 내용을 가르키는 id를 href에 작성한다.
 3. id는 중복으로 사용하면 안된다.
 4. 기본이벤트는 click

스크립트 예시)

    <script src="jquery.multiTab.js"></script>
    <script type="text/javascript">
    // 기본 설정으로 사용할 때
    $('#tab_box li a').multiTab();

    // 속성만 설정하고자 할 때
    $('#tab_box2 li').multiTab('attr: data-target');

    // 이벤트만 설정하고자 할 때
    $('#tab_box3 li a').multiTab('evt: mouseleave');

    // 속성과 이벤트 모두 설정하고자 할 때
    $('#tab_box4 li').multiTab({
        attr : 'data-target',
        evt  : 'mouseenter'
    });
    </script>

- 수정 : yamoo9







