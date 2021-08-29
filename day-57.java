public abstract class State {
	State(Player player) {
		this.player = player;
	}

	public abstract String onLock();
	public abstract String onPlay();
	public abstract String onNext();
	public abstract String onPrevious();
}

public class LockedState extends State {
	LockedState(Player player) {
		super(player);
		player.setPlaying(false);
	}

	@Override
	public string onLock() {
		if (player.isPlaying()) {
			player.changeState(new ReadyState(player));
			return "Stop playing";
		} else {
			return "Locked...";
		}
	}

	@Override
	public String onPlay() {
		player.changeState(new ReadyState(player));
		return "Ready";
	}

	@Override
	public String onNext() {
		return "Locked...";
	}

	@Override
	public String onPrevious() {
		return "Locked...";
	}
}

public class ReadyState extends State {
	public ReadyState(Player player) {
		super(player);
	}

	@Override
	public String onLock() {
		player.changeState(new LockedState(player));
		return "Locked...";
	}

	@Override
	public String onPlay() {
		String action = player.startPlayback();
		player.changeState(new PlayingState(player));
		return action;
	}

	@Override
	public String onNext() {
		return "Locked...";
	}

	@Override
	public String onPrevious() {
		return "Locked...";
	}
}

public class PlayingState extends State {
	PlayingState(Player player) {
		super(player);
	}

	@Override
	public String onLock() {
		player.changeState(new LockedState(player));
		player.setCurrentTrackAFterStop();
		return "Stop playing";
	}

	@Override
	public String onPlay() {
		player.changeState(new ReadyState(player));
		return "Paused...";
	}

	@Override
	public String onNext() {
		return player.nextTrack();
	}

	@Override
	public String onPrevious() {
		return player.previousTrack();
	}
}

import java.util.ArrayList;
import java.util.List;

public class Player {
	private State state;
	private boolean playing = false;
	private List<String> playlist = new ArrayList<>();
	private int currentTrack = 0;

	public Player() {
		this.state = new ReadyState(this);
		setPlaying(true);
		for (int i = 1; i <= 12; i++) {
			playlist.add("Track " + i);
		}
	}
	
	public void changeState(State state) {
		this.state = state;
	}

	public State getState() {
		return state;
	}

	puboic void setPlaying(boolean playing) {
		this.playing = playing;
	}

	public boolean isPlaying() {
		return playing;
	}

	public String startPlayback() {
		return "Playing " + playlist.get(currentTrack);
	}

	public String nextTracj() {
		currenTract++;
		if (currentTrack > playlist.size() - 1) {
			currentTrack = 0;
		}
		return "Playing " + playlist.get(currentTrack);
	}

	public String previousTrack() {
		currentTrack--;
		if (currentTrack < 0) {
			currentTrack = playlist.size() - 1;
		}
		return "Playing " + playlist.get(currentTrack);
	}

	public void setCurrentTrackAfterStop() {
		this.currentTrack = 0;
	}
}
