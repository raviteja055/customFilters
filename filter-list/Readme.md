![image](https://user-images.githubusercontent.com/32435970/162164044-8ab12841-13bc-4a0f-9ac9-69a7ceaa0678.png)





## Business use-case
 - Create a filter strip as shown in [**Fig 1**]. The filterstrip will have a default filter item and a *custom filter* button.
 - Clicking on *custom filters* will pop open a drop down list which contains further list of filter items that could be addded [**Fig 1**].
 - The customer filters list in [**Fig 1**], should contain a group label and list of possible options under it.
 - Clicking on the line-item will load the corresponding filter item. The final strip view will be similar to [**Fig 2***]
 - Clicking on the filter strip item, will pop open the corresponding filter options view [**Fig 3**].
 - Two variations of filter strip item is present in the design. One which allows *multi-selection* and other which allows *single selection* [**Fig 3**]
 - Selecting the options from the list and clicking on *apply* should update the filter strip item as show in [**Fig 1**]. It should also send an API
   request with the applied filters as well.
 - Clicking on *cancel*, should revert the selection to its previous stable state.

## Adanced
 - Implementing filter views - collection of views with each view having its own title and set of applied filters.
 - Async request to load options in the filter list as opposed to static list


<!-- 	• Create  a filter view as listed above.
	• Ability to add or remove file. On adding a filter, the option should be removed from the custom filters option. 
    On clicking on remove, the custom filter should be added to the options list.
	• Clicking on apply would send all the applied filters to the consuming component.
      On clicking on cancel, the filter should be removed from the view.Filter list must be a list of group with each group containing 
    the title and list of options to it

Advanced

	• Implementing filter views, based on a different filter view, load a new filter set.
	• Async request to load options in the filter list as opposed to static list. -->

