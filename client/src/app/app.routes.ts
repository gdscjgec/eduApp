import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'pop-up', component: PopUpComponent },
    { path: 'student-login', component: StudentLoginComponent },
    { path: 'student-registration', component: StudentRegistrationComponent },
    { path: 'teacher-login', component: TeacherLoginComponent },
    { path: 'student-registration', component: StudentRegistrationComponent },
    { path: 'quiz', component: QuizComponent },
    { path: '**', redirectTo: 'home' }
];
