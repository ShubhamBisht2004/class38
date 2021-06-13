class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index; //storing player and player index(player 1,player 2, player 3) in database
        database.ref(player.index).set({
            name: this.name,
            distance: this.distance
        })
    }

    static getPlayer_info() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}