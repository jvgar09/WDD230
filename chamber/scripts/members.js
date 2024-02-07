document.addEventListener("DOMContentLoaded", function () {

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => displayMembers(data.members));

    function displayMembers(members) {
        const membersContainer = document.getElementById('members-container');

        function createMemberCard(member) {
            return `
                <div class="member-card">
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p>${member.website}</p>
                    <p>${member.membershipLevel}</p>
                    <p>${member.otherInfo}</p>
                    
                </div>
            `;
        }

        function createMemberListItem(member) {
            return `
                <div class="member-list-item">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>

                </div>
            `;
        }

        function renderMembers(viewType) {
            const html = members.map(
                viewType === 'grid' ? createMemberCard : createMemberListItem
            ).join('');
            membersContainer.innerHTML = html;
            membersContainer.className = viewType + '-view';
        }


        renderMembers('grid');

        window.toggleView = function (viewType) {
            renderMembers(viewType);
        };
    }
});
