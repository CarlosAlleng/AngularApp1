import { Injectable } from "@angular/core";
import { Reservation } from "./reservation.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
  private reservations: Reservation[] = [
    new Reservation(1, "Conservation Area 1 - Lakeview", "9:00 AM - 12:00 PM", "Reservation for Lakeview area in Conservation Area 1", 50),
    new Reservation(2, "Conservation Area 1 - Lakeview", "12:00 PM - 3:00 PM", "Reservation for Lakeview area in Conservation Area 1", 50),
    new Reservation(3, "Conservation Area 1 - Lakeview", "3:00 PM - 6:00 PM", "Reservation for Lakeview area in Conservation Area 1", 50),
    new Reservation(4, "Conservation Area 2 - Mountain Ridge", "9:00 AM - 12:00 PM", "Reservation for Mountain Ridge area in Conservation Area 2", 50),
    new Reservation(5, "Conservation Area 2 - Mountain Ridge", "12:00 PM - 3:00 PM", "Reservation for Mountain Ridge area in Conservation Area 2", 50),
    new Reservation(6, "Conservation Area 2 - Mountain Ridge", "3:00 PM - 6:00 PM", "Reservation for Mountain Ridge area in Conservation Area 2", 50),
    new Reservation(7, "Conservation Area 3 - Forest Trail", "9:00 AM - 12:00 PM", "Reservation for Forest Trail area in Conservation Area 3", 50),
    new Reservation(8, "Conservation Area 3 - Forest Trail", "12:00 PM - 3:00 PM", "Reservation for Forest Trail area in Conservation Area 3", 50),
    new Reservation(9, "Conservation Area 3 - Forest Trail", "3:00 PM - 6:00 PM", "Reservation for Forest Trail area in Conservation Area 3", 50),
    new Reservation(10, "Conservation Area 4 - River Bend", "9:00 AM - 12:00 PM", "Reservation for River Bend area in Conservation Area 4", 50),
    new Reservation(11, "Conservation Area 4 - River Bend", "12:00 PM - 3:00 PM", "Reservation for River Bend area in Conservation Area 4", 50),
    new Reservation(12, "Conservation Area 4 - River Bend", "3:00 PM - 6:00 PM", "Reservation for River Bend area in Conservation Area 4", 50)
  ];

  getReservations(): Observable<Reservation[]> {
    return from([this.reservations]);
  }
}
