---
sidebar_position: 4
---

# Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ExampleCarBrowser from './img/example-car-browser.png';
import ExampleCar from './img/example-car.png';
import ExampleMapBrowser from './img/example-map-browser.png';
import ExampleMapOverview from './img/example-map-overview.png';

import CaptionWrapper from "@site/src/components/CaptionWrapper";

We include one drivable car and an example map on which the deformation can be tested. 

<Tabs className="unique-tabs">
  <TabItem value="map" label="Car (Chaos)" default>
    <!-- <div style={{display: "flex", maxWidth: "100%"}}>
      <img src={ExampleCarBrowser} style={{width: "50%"}} />
      <img src={ExampleCar} style={{width: "50%"}} />
    </div> -->
    <img src={ExampleCar} />
    <div style={{display: "flex", maxWidth: "100%"}}>
      <div style={{width: "50%"}}>**Left**: Vehicle while in editor (only skeletal mesh is visible)</div>
      <div style={{width: "50%"}}>**Right**: Vehicle while playing (deformable mesh is visible)</div>
    </div>
    **Location**: /Plugins/DeformableStaticMesh/Content/Example/ChaosVehicleExample/

    The example car is a ChaosVehicle (``AWheeledVehiclePawn``) that uses a [_placeholder skeletal mesh_](../advanced-guides/skeletal-placeholder.md). This is NOT necessary, but because the skeletal mesh is only used for collision it (*most of the time*) does not matter how it looks.

    There is a special material override that overrides the default material of the mesh with a [_deformable_ material](../advanced-guides/deformation-material.md). This makes dents even more visible. In addition to that there's also a [protection box](../advanced-guides/protectionbox.md) that prevents the driver side (left) from deforming too much.

    Other than that it's really just a simple _ChaosVehicle_ with basic movement and three special shortcuts:
    - **R**: Reset Vehicle (position)
    - **E**: Reset Deformation
    - **Z**: Toggle Scratchmask (= deformable material)

    Here are some useful links for ChaosVehicles in general:
    - [How to Set up Vehicles (UE Documentation)](https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-set-up-vehicles-in-unreal-engine)
    - [Setting up the Chaos Vehicles Plugin in Unreal Engine 5.4](https://dev.epicgames.com/community/learning/tutorials/ZeKz/unreal-engine-setting-up-the-chaos-vehicles-plugin)
  </TabItem>
  <TabItem value="car" label="Map">
    <!-- <div style={{display: "flex", maxWidth: "100%"}}>
      <img src={ExampleMapBrowser} style={{width: "50%"}} />
      <img src={ExampleMapOverview} style={{width: "50%"}} />
    </div> -->
    <img src={ExampleMapOverview}/>
    **Location**: /Plugins/DeformableStaticMesh/Content/Map/

    - Swings (*left*)
    - Balls falling from the sky (*between the two big ramp*s)
    - Two vehicle spawner, that launch a accelerating vehicle towards the player (*in the back*)
    - Ramps, Obstacles, ...
  </TabItem>
</Tabs>