import { Component, inject } from "@angular/core";
import { DocumentService } from "./services/document.service/document.service.service";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  private service: DocumentService = inject(DocumentService);

  ngOnInit(): void {
    this.printCookie();
  }

  printCookie() {
    console.log("🍪", this.service.myCookie);
  }
}
