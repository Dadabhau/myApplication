import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/Products/products.component';
import { ReversenewPipe } from './shared/reversenew.pipe';
import { OpratorsComponent } from './Components/oprators/oprators.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { PromiseComponent } from './Components/promise/promise.component';
import { HomeComponent } from './Components/home/home.component';
import { ObservableComponent } from './Components/observable/observable.component';
import { AllComponent } from './Components/observable/all/all.component';
import { FromEventComponent } from './Components/observable/from-event/from-event.component';
import { IntervalComponent } from './Components/observable/interval/interval.component';
import { OfAndFromComponent } from './Components/observable/of-and-from/of-and-from.component';
import { ToarrayComponent } from './Components/observable/toarray/toarray.component';
import { CustomObservableComponent } from './Components/observable/custom-observable/custom-observable.component';
import { MapComponent } from './Components/observable/map/map.component';
import { PluckComponent } from './Components/observable/pluck/pluck.component';
import { FilterComponent } from './Components/observable/filter/filter.component';
import { TapComponent } from './Components/observable/tap/tap.component';
import { TakeComponent } from './Components/observable/take/take.component';
import { RetryComponent } from './Components/observable/retry/retry.component';
import { DebouncetimeComponent } from './Components/observable/debouncetime/debouncetime.component';
import { SubjectComponent } from './Components/observable/subject/subject.component';
import { Comp1Component } from './comp/comp1/comp1.component';
import { Comp2Component } from './comp/comp2/comp2.component';
import { Comp3Component } from './comp/comp3/comp3.component';
import { ReplaySubjectComponent } from './Components/observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Components/observable/async-subject/async-subject.component';

import { ConcatComponent } from './Components/observable/concat/concat.component';
import { MergeComponent } from './Components/observable/merge/merge.component';
import { MergemapComponent } from './Components/observable/mergemap/mergemap.component';
import { ConcatmapComponent } from './Components/observable/concatmap/concatmap.component';
import { Concatmap2Component } from './Components/observable/concatmap2/concatmap2.component';
import { SwitchmapComponent } from './Components/observable/switchmap/switchmap.component';
import { Switchmap2Component } from './Components/observable/switchmap2/switchmap2.component';
import { ExhaustmapComponent } from './Components/observable/exhaustmap/exhaustmap.component';
import { SharereplayComponent } from './Components/observable/sharereplay/sharereplay.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReversenewPipe,
    OpratorsComponent,
    HeaderComponent,
    FooterComponent,
    PromiseComponent,
    HomeComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfAndFromComponent,
    ToarrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebouncetimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergemapComponent,
    ConcatmapComponent,
    Concatmap2Component,
    SwitchmapComponent,
    Switchmap2Component,
    ExhaustmapComponent,
    SharereplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
