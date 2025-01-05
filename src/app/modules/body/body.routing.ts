import { RouterModule, Routes } from "@angular/router";
import { BodyComponent } from "./body.component";
import { NgModule } from "@angular/core";
import { DownloadListComponent } from "./components/download-list/download-list.component";

const routes: Routes = [
    {
        path: '',
        component: BodyComponent,
        children: [
            {
                path: 'downloader',
                component: DownloadListComponent
            },
            // {
            //     path: ':id',
            //     component: VerifikasiBerkasFormComponent,
            //     resolve: {
            //         task: VerifikasiBerkasFormResolver
            //     },
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BodyRoutingModule { }