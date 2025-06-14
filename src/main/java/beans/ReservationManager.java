package beans;

import java.io.Serializable;

import model.DataManager;

public class ReservationManager implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private DataManager dm = new DataManager();
	private String roomType;
	private User user;
	private Reservation reservation;
	

	public String getRoomType() {
		roomType = dm.getRoomType(101);
		return roomType;
	}

	public void setRoomType(String s) {
		// Do nothing
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Reservation getReservation() {
		return reservation;
	}

	public void setReservation(Reservation reservation) {
		this.reservation = reservation;
	}
}