package com.example.tft_tracker.player;

public class Player {
    private String playerId;
    private String region;
    private String email;
    private String password;

    public Player(String playerId, String region, String email, String password) {
        this.playerId = playerId;
        this.region = region;
        this.email = email;
        this.password = password;
    }

    public String getRegion() {
        return region;
    }

    public String getPlayerId() {
        return playerId;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
}
