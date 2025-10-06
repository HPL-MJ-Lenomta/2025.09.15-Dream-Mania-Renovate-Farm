var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.JointSpring' )
  var i761 = data
  i760.spring = i761[0]
  i760.damper = i761[1]
  i760.targetPosition = i761[2]
  return i760
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.JointMotor' )
  var i763 = data
  i762.m_TargetVelocity = i763[0]
  i762.m_Force = i763[1]
  i762.m_FreeSpin = i763[2]
  return i762
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.JointLimits' )
  var i765 = data
  i764.m_Min = i765[0]
  i764.m_Max = i765[1]
  i764.m_Bounciness = i765[2]
  i764.m_BounceMinVelocity = i765[3]
  i764.m_ContactDistance = i765[4]
  i764.minBounce = i765[5]
  i764.maxBounce = i765[6]
  return i764
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.JointDrive' )
  var i767 = data
  i766.m_PositionSpring = i767[0]
  i766.m_PositionDamper = i767[1]
  i766.m_MaximumForce = i767[2]
  i766.m_UseAcceleration = i767[3]
  return i766
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i769 = data
  i768.m_Spring = i769[0]
  i768.m_Damper = i769[1]
  return i768
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i771 = data
  i770.m_Limit = i771[0]
  i770.m_Bounciness = i771[1]
  i770.m_ContactDistance = i771[2]
  return i770
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i773 = data
  i772.m_ExtremumSlip = i773[0]
  i772.m_ExtremumValue = i773[1]
  i772.m_AsymptoteSlip = i773[2]
  i772.m_AsymptoteValue = i773[3]
  i772.m_Stiffness = i773[4]
  return i772
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i775 = data
  i774.m_LowerAngle = i775[0]
  i774.m_UpperAngle = i775[1]
  return i774
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i777 = data
  i776.m_MotorSpeed = i777[0]
  i776.m_MaximumMotorTorque = i777[1]
  return i776
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i779 = data
  i778.m_DampingRatio = i779[0]
  i778.m_Frequency = i779[1]
  i778.m_Angle = i779[2]
  return i778
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i781 = data
  i780.m_LowerTranslation = i781[0]
  i780.m_UpperTranslation = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i783 = data
  i782.name = i783[0]
  i782.width = i783[1]
  i782.height = i783[2]
  i782.mipmapCount = i783[3]
  i782.anisoLevel = i783[4]
  i782.filterMode = i783[5]
  i782.hdr = !!i783[6]
  i782.format = i783[7]
  i782.wrapMode = i783[8]
  i782.alphaIsTransparency = !!i783[9]
  i782.alphaSource = i783[10]
  i782.graphicsFormat = i783[11]
  i782.sRGBTexture = !!i783[12]
  i782.desiredColorSpace = i783[13]
  i782.wrapU = i783[14]
  i782.wrapV = i783[15]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i785 = data
  i784.pivot = new pc.Vec2( i785[0], i785[1] )
  i784.anchorMin = new pc.Vec2( i785[2], i785[3] )
  i784.anchorMax = new pc.Vec2( i785[4], i785[5] )
  i784.sizeDelta = new pc.Vec2( i785[6], i785[7] )
  i784.anchoredPosition3D = new pc.Vec3( i785[8], i785[9], i785[10] )
  i784.rotation = new pc.Quat(i785[11], i785[12], i785[13], i785[14])
  i784.scale = new pc.Vec3( i785[15], i785[16], i785[17] )
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i787 = data
  i786.cullTransparentMesh = !!i787[0]
  return i786
}

Deserializers["Item"] = function (request, data, root) {
  var i788 = root || request.c( 'Item' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'itemImage')
  request.r(i789[2], i789[3], 0, i788, 'collectItemImage')
  request.r(i789[4], i789[5], 0, i788, 'itemCountText')
  i788.ItemCount = i789[6]
  request.r(i789[7], i789[8], 0, i788, 'completeSprite')
  request.r(i789[9], i789[10], 0, i788, 'data')
  request.r(i789[11], i789[12], 0, i788, 'UIMovement')
  request.r(i789[13], i789[14], 0, i788, 'FurnitureImage')
  i788.portraitLocation = new pc.Vec2( i789[15], i789[16] )
  i788.landscapeLocation = new pc.Vec2( i789[17], i789[18] )
  return i788
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.Image' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_Sprite')
  i790.m_Type = i791[2]
  i790.m_PreserveAspect = !!i791[3]
  i790.m_FillCenter = !!i791[4]
  i790.m_FillMethod = i791[5]
  i790.m_FillAmount = i791[6]
  i790.m_FillClockwise = !!i791[7]
  i790.m_FillOrigin = i791[8]
  i790.m_UseSpriteMesh = !!i791[9]
  i790.m_PixelsPerUnitMultiplier = i791[10]
  request.r(i791[11], i791[12], 0, i790, 'm_Material')
  i790.m_Maskable = !!i791[13]
  i790.m_Color = new pc.Color(i791[14], i791[15], i791[16], i791[17])
  i790.m_RaycastTarget = !!i791[18]
  i790.m_RaycastPadding = new pc.Vec4( i791[19], i791[20], i791[21], i791[22] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i793 = data
  i792.name = i793[0]
  i792.tagId = i793[1]
  i792.enabled = !!i793[2]
  i792.isStatic = !!i793[3]
  i792.layer = i793[4]
  return i792
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i794 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i795 = data
  i794.m_hasFontAssetChanged = !!i795[0]
  request.r(i795[1], i795[2], 0, i794, 'm_baseMaterial')
  i794.m_maskOffset = new pc.Vec4( i795[3], i795[4], i795[5], i795[6] )
  i794.m_text = i795[7]
  i794.m_isRightToLeft = !!i795[8]
  request.r(i795[9], i795[10], 0, i794, 'm_fontAsset')
  request.r(i795[11], i795[12], 0, i794, 'm_sharedMaterial')
  var i797 = i795[13]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.m_fontSharedMaterials = i796
  request.r(i795[14], i795[15], 0, i794, 'm_fontMaterial')
  var i799 = i795[16]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i794.m_fontMaterials = i798
  i794.m_fontColor32 = UnityEngine.Color32.ConstructColor(i795[17], i795[18], i795[19], i795[20])
  i794.m_fontColor = new pc.Color(i795[21], i795[22], i795[23], i795[24])
  i794.m_enableVertexGradient = !!i795[25]
  i794.m_colorMode = i795[26]
  i794.m_fontColorGradient = request.d('TMPro.VertexGradient', i795[27], i794.m_fontColorGradient)
  request.r(i795[28], i795[29], 0, i794, 'm_fontColorGradientPreset')
  request.r(i795[30], i795[31], 0, i794, 'm_spriteAsset')
  i794.m_tintAllSprites = !!i795[32]
  request.r(i795[33], i795[34], 0, i794, 'm_StyleSheet')
  i794.m_TextStyleHashCode = i795[35]
  i794.m_overrideHtmlColors = !!i795[36]
  i794.m_faceColor = UnityEngine.Color32.ConstructColor(i795[37], i795[38], i795[39], i795[40])
  i794.m_fontSize = i795[41]
  i794.m_fontSizeBase = i795[42]
  i794.m_fontWeight = i795[43]
  i794.m_enableAutoSizing = !!i795[44]
  i794.m_fontSizeMin = i795[45]
  i794.m_fontSizeMax = i795[46]
  i794.m_fontStyle = i795[47]
  i794.m_HorizontalAlignment = i795[48]
  i794.m_VerticalAlignment = i795[49]
  i794.m_textAlignment = i795[50]
  i794.m_characterSpacing = i795[51]
  i794.m_wordSpacing = i795[52]
  i794.m_lineSpacing = i795[53]
  i794.m_lineSpacingMax = i795[54]
  i794.m_paragraphSpacing = i795[55]
  i794.m_charWidthMaxAdj = i795[56]
  i794.m_enableWordWrapping = !!i795[57]
  i794.m_wordWrappingRatios = i795[58]
  i794.m_overflowMode = i795[59]
  request.r(i795[60], i795[61], 0, i794, 'm_linkedTextComponent')
  request.r(i795[62], i795[63], 0, i794, 'parentLinkedComponent')
  i794.m_enableKerning = !!i795[64]
  i794.m_enableExtraPadding = !!i795[65]
  i794.checkPaddingRequired = !!i795[66]
  i794.m_isRichText = !!i795[67]
  i794.m_parseCtrlCharacters = !!i795[68]
  i794.m_isOrthographic = !!i795[69]
  i794.m_isCullingEnabled = !!i795[70]
  i794.m_horizontalMapping = i795[71]
  i794.m_verticalMapping = i795[72]
  i794.m_uvLineOffset = i795[73]
  i794.m_geometrySortingOrder = i795[74]
  i794.m_IsTextObjectScaleStatic = !!i795[75]
  i794.m_VertexBufferAutoSizeReduction = !!i795[76]
  i794.m_useMaxVisibleDescender = !!i795[77]
  i794.m_pageToDisplay = i795[78]
  i794.m_margin = new pc.Vec4( i795[79], i795[80], i795[81], i795[82] )
  i794.m_isUsingLegacyAnimationComponent = !!i795[83]
  i794.m_isVolumetricText = !!i795[84]
  request.r(i795[85], i795[86], 0, i794, 'm_Material')
  i794.m_Maskable = !!i795[87]
  i794.m_Color = new pc.Color(i795[88], i795[89], i795[90], i795[91])
  i794.m_RaycastTarget = !!i795[92]
  i794.m_RaycastPadding = new pc.Vec4( i795[93], i795[94], i795[95], i795[96] )
  return i794
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.VertexGradient' )
  var i803 = data
  i802.topLeft = new pc.Color(i803[0], i803[1], i803[2], i803[3])
  i802.topRight = new pc.Color(i803[4], i803[5], i803[6], i803[7])
  i802.bottomLeft = new pc.Color(i803[8], i803[9], i803[10], i803[11])
  i802.bottomRight = new pc.Color(i803[12], i803[13], i803[14], i803[15])
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i804 = root || new pc.UnityMaterial()
  var i805 = data
  i804.name = i805[0]
  request.r(i805[1], i805[2], 0, i804, 'shader')
  i804.renderQueue = i805[3]
  i804.enableInstancing = !!i805[4]
  var i807 = i805[5]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i807[i + 0]) );
  }
  i804.floatParameters = i806
  var i809 = i805[6]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i809[i + 0]) );
  }
  i804.colorParameters = i808
  var i811 = i805[7]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i811[i + 0]) );
  }
  i804.vectorParameters = i810
  var i813 = i805[8]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i813[i + 0]) );
  }
  i804.textureParameters = i812
  var i815 = i805[9]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i815[i + 0]) );
  }
  i804.materialFlags = i814
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i819 = data
  i818.name = i819[0]
  i818.value = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i823 = data
  i822.name = i823[0]
  i822.value = new pc.Color(i823[1], i823[2], i823[3], i823[4])
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i827 = data
  i826.name = i827[0]
  i826.value = new pc.Vec4( i827[1], i827[2], i827[3], i827[4] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i831 = data
  i830.name = i831[0]
  request.r(i831[1], i831[2], 0, i830, 'value')
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i835 = data
  i834.name = i835[0]
  i834.enabled = !!i835[1]
  return i834
}

Deserializers["TileCell"] = function (request, data, root) {
  var i836 = root || request.c( 'TileCell' )
  var i837 = data
  i836.coordinate = new pc.Vec2( i837[0], i837[1] )
  i836.TileBreakEvent = request.d('UnityEngine.Events.UnityEvent', i837[2], i836.TileBreakEvent)
  request.r(i837[3], i837[4], 0, i836, 'tileData')
  request.r(i837[5], i837[6], 0, i836, 'tile')
  return i836
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i839 = data
  i838.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i839[0], i838.m_PersistentCalls)
  return i838
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i841 = data
  var i843 = i841[0]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i843.length; i += 1) {
    i842.add(request.d('UnityEngine.Events.PersistentCall', i843[i + 0]));
  }
  i840.m_Calls = i842
  return i840
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'm_Target')
  i846.m_TargetAssemblyTypeName = i847[2]
  i846.m_MethodName = i847[3]
  i846.m_Mode = i847[4]
  i846.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i847[5], i846.m_Arguments)
  i846.m_CallState = i847[6]
  return i846
}

Deserializers["Tile"] = function (request, data, root) {
  var i848 = root || request.c( 'Tile' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'itemImage')
  request.r(i849[2], i849[3], 0, i848, 'tileData')
  i848.MovementMagnitude = i849[4]
  i848.MovementDuration = i849[5]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i851 = data
  i850.position = new pc.Vec3( i851[0], i851[1], i851[2] )
  i850.scale = new pc.Vec3( i851[3], i851[4], i851[5] )
  i850.rotation = new pc.Quat(i851[6], i851[7], i851[8], i851[9])
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i853 = data
  i852.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i853[0], i852.main)
  i852.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i853[1], i852.colorBySpeed)
  i852.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i853[2], i852.colorOverLifetime)
  i852.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i853[3], i852.emission)
  i852.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i853[4], i852.rotationBySpeed)
  i852.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i853[5], i852.rotationOverLifetime)
  i852.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i853[6], i852.shape)
  i852.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i853[7], i852.sizeBySpeed)
  i852.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i853[8], i852.sizeOverLifetime)
  i852.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i853[9], i852.textureSheetAnimation)
  i852.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i853[10], i852.velocityOverLifetime)
  i852.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i853[11], i852.noise)
  i852.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i853[12], i852.inheritVelocity)
  i852.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i853[13], i852.forceOverLifetime)
  i852.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i853[14], i852.limitVelocityOverLifetime)
  i852.useAutoRandomSeed = !!i853[15]
  i852.randomSeed = i853[16]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemMain()
  var i855 = data
  i854.duration = i855[0]
  i854.loop = !!i855[1]
  i854.prewarm = !!i855[2]
  i854.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[3], i854.startDelay)
  i854.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[4], i854.startLifetime)
  i854.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[5], i854.startSpeed)
  i854.startSize3D = !!i855[6]
  i854.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[7], i854.startSizeX)
  i854.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[8], i854.startSizeY)
  i854.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[9], i854.startSizeZ)
  i854.startRotation3D = !!i855[10]
  i854.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[11], i854.startRotationX)
  i854.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[12], i854.startRotationY)
  i854.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[13], i854.startRotationZ)
  i854.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i855[14], i854.startColor)
  i854.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[15], i854.gravityModifier)
  i854.simulationSpace = i855[16]
  request.r(i855[17], i855[18], 0, i854, 'customSimulationSpace')
  i854.simulationSpeed = i855[19]
  i854.useUnscaledTime = !!i855[20]
  i854.scalingMode = i855[21]
  i854.playOnAwake = !!i855[22]
  i854.maxParticles = i855[23]
  i854.emitterVelocityMode = i855[24]
  i854.stopAction = i855[25]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i856 = root || new pc.MinMaxCurve()
  var i857 = data
  i856.mode = i857[0]
  i856.curveMin = new pc.AnimationCurve( { keys_flow: i857[1] } )
  i856.curveMax = new pc.AnimationCurve( { keys_flow: i857[2] } )
  i856.curveMultiplier = i857[3]
  i856.constantMin = i857[4]
  i856.constantMax = i857[5]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i858 = root || new pc.MinMaxGradient()
  var i859 = data
  i858.mode = i859[0]
  i858.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i859[1], i858.gradientMin)
  i858.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i859[2], i858.gradientMax)
  i858.colorMin = new pc.Color(i859[3], i859[4], i859[5], i859[6])
  i858.colorMax = new pc.Color(i859[7], i859[8], i859[9], i859[10])
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i861 = data
  i860.mode = i861[0]
  var i863 = i861[1]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i863[i + 0]) );
  }
  i860.colorKeys = i862
  var i865 = i861[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i865[i + 0]) );
  }
  i860.alphaKeys = i864
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i866 = root || new pc.ParticleSystemColorBySpeed()
  var i867 = data
  i866.enabled = !!i867[0]
  i866.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i867[1], i866.color)
  i866.range = new pc.Vec2( i867[2], i867[3] )
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i871 = data
  i870.color = new pc.Color(i871[0], i871[1], i871[2], i871[3])
  i870.time = i871[4]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i875 = data
  i874.alpha = i875[0]
  i874.time = i875[1]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemColorOverLifetime()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i877[1], i876.color)
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemEmitter()
  var i879 = data
  i878.enabled = !!i879[0]
  i878.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[1], i878.rateOverTime)
  i878.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[2], i878.rateOverDistance)
  var i881 = i879[3]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i881[i + 0]) );
  }
  i878.bursts = i880
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemBurst()
  var i885 = data
  i884.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[0], i884.count)
  i884.cycleCount = i885[1]
  i884.minCount = i885[2]
  i884.maxCount = i885[3]
  i884.repeatInterval = i885[4]
  i884.time = i885[5]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemRotationBySpeed()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[1], i886.x)
  i886.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.y)
  i886.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[3], i886.z)
  i886.separateAxes = !!i887[4]
  i886.range = new pc.Vec2( i887[5], i887[6] )
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemRotationOverLifetime()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[1], i888.x)
  i888.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[2], i888.y)
  i888.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[3], i888.z)
  i888.separateAxes = !!i889[4]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemShape()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.shapeType = i891[1]
  i890.randomDirectionAmount = i891[2]
  i890.sphericalDirectionAmount = i891[3]
  i890.randomPositionAmount = i891[4]
  i890.alignToDirection = !!i891[5]
  i890.radius = i891[6]
  i890.radiusMode = i891[7]
  i890.radiusSpread = i891[8]
  i890.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[9], i890.radiusSpeed)
  i890.radiusThickness = i891[10]
  i890.angle = i891[11]
  i890.length = i891[12]
  i890.boxThickness = new pc.Vec3( i891[13], i891[14], i891[15] )
  i890.meshShapeType = i891[16]
  request.r(i891[17], i891[18], 0, i890, 'mesh')
  request.r(i891[19], i891[20], 0, i890, 'meshRenderer')
  request.r(i891[21], i891[22], 0, i890, 'skinnedMeshRenderer')
  i890.useMeshMaterialIndex = !!i891[23]
  i890.meshMaterialIndex = i891[24]
  i890.useMeshColors = !!i891[25]
  i890.normalOffset = i891[26]
  i890.arc = i891[27]
  i890.arcMode = i891[28]
  i890.arcSpread = i891[29]
  i890.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[30], i890.arcSpeed)
  i890.donutRadius = i891[31]
  i890.position = new pc.Vec3( i891[32], i891[33], i891[34] )
  i890.rotation = new pc.Vec3( i891[35], i891[36], i891[37] )
  i890.scale = new pc.Vec3( i891[38], i891[39], i891[40] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemSizeBySpeed()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.x)
  i892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.y)
  i892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.z)
  i892.separateAxes = !!i893[4]
  i892.range = new pc.Vec2( i893[5], i893[6] )
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemSizeOverLifetime()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[1], i894.x)
  i894.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[2], i894.y)
  i894.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[3], i894.z)
  i894.separateAxes = !!i895[4]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.mode = i897[1]
  i896.animation = i897[2]
  i896.numTilesX = i897[3]
  i896.numTilesY = i897[4]
  i896.useRandomRow = !!i897[5]
  i896.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[6], i896.frameOverTime)
  i896.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[7], i896.startFrame)
  i896.cycleCount = i897[8]
  i896.rowIndex = i897[9]
  i896.flipU = i897[10]
  i896.flipV = i897[11]
  i896.spriteCount = i897[12]
  var i899 = i897[13]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i896.sprites = i898
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[1], i902.x)
  i902.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.y)
  i902.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[3], i902.z)
  i902.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[4], i902.radial)
  i902.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[5], i902.speedModifier)
  i902.space = i903[6]
  i902.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[7], i902.orbitalX)
  i902.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[8], i902.orbitalY)
  i902.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[9], i902.orbitalZ)
  i902.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[10], i902.orbitalOffsetX)
  i902.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[11], i902.orbitalOffsetY)
  i902.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[12], i902.orbitalOffsetZ)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemNoise()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.separateAxes = !!i905[1]
  i904.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[2], i904.strengthX)
  i904.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[3], i904.strengthY)
  i904.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[4], i904.strengthZ)
  i904.frequency = i905[5]
  i904.damping = !!i905[6]
  i904.octaveCount = i905[7]
  i904.octaveMultiplier = i905[8]
  i904.octaveScale = i905[9]
  i904.quality = i905[10]
  i904.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[11], i904.scrollSpeed)
  i904.scrollSpeedMultiplier = i905[12]
  i904.remapEnabled = !!i905[13]
  i904.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[14], i904.remapX)
  i904.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[15], i904.remapY)
  i904.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[16], i904.remapZ)
  i904.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[17], i904.positionAmount)
  i904.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[18], i904.rotationAmount)
  i904.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[19], i904.sizeAmount)
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemInheritVelocity()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.mode = i907[1]
  i906.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.curve)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemForceOverLifetime()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[1], i908.x)
  i908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.y)
  i908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.z)
  i908.space = i909[4]
  i908.randomized = !!i909[5]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[1], i910.limit)
  i910.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.limitX)
  i910.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[3], i910.limitY)
  i910.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[4], i910.limitZ)
  i910.dampen = i911[5]
  i910.separateAxes = !!i911[6]
  i910.space = i911[7]
  i910.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[8], i910.drag)
  i910.multiplyDragByParticleSize = !!i911[9]
  i910.multiplyDragByParticleVelocity = !!i911[10]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i913 = data
  i912.enabled = !!i913[0]
  request.r(i913[1], i913[2], 0, i912, 'sharedMaterial')
  var i915 = i913[3]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.sharedMaterials = i914
  i912.receiveShadows = !!i913[4]
  i912.shadowCastingMode = i913[5]
  i912.sortingLayerID = i913[6]
  i912.sortingOrder = i913[7]
  i912.lightmapIndex = i913[8]
  i912.lightmapSceneIndex = i913[9]
  i912.lightmapScaleOffset = new pc.Vec4( i913[10], i913[11], i913[12], i913[13] )
  i912.lightProbeUsage = i913[14]
  i912.reflectionProbeUsage = i913[15]
  request.r(i913[16], i913[17], 0, i912, 'mesh')
  i912.meshCount = i913[18]
  i912.activeVertexStreamsCount = i913[19]
  i912.alignment = i913[20]
  i912.renderMode = i913[21]
  i912.sortMode = i913[22]
  i912.lengthScale = i913[23]
  i912.velocityScale = i913[24]
  i912.cameraVelocityScale = i913[25]
  i912.normalDirection = i913[26]
  i912.sortingFudge = i913[27]
  i912.minParticleSize = i913[28]
  i912.maxParticleSize = i913[29]
  i912.pivot = new pc.Vec3( i913[30], i913[31], i913[32] )
  request.r(i913[33], i913[34], 0, i912, 'trailMaterial')
  return i912
}

Deserializers["CartoonFX.CFXR_Effect"] = function (request, data, root) {
  var i916 = root || request.c( 'CartoonFX.CFXR_Effect' )
  var i917 = data
  i916.clearBehavior = i917[0]
  i916.cameraShake = request.d('CartoonFX.CFXR_Effect+CameraShake', i917[1], i916.cameraShake)
  var i919 = i917[2]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('CartoonFX.CFXR_Effect+AnimatedLight', i919[i + 0]) );
  }
  i916.animatedLights = i918
  request.r(i917[3], i917[4], 0, i916, 'fadeOutReference')
  return i916
}

Deserializers["CartoonFX.CFXR_Effect+CameraShake"] = function (request, data, root) {
  var i920 = root || request.c( 'CartoonFX.CFXR_Effect+CameraShake' )
  var i921 = data
  i920.camEnabled = !!i921[0]
  i920.useMainCamera = !!i921[1]
  var i923 = i921[2]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 1, i922, '')
  }
  i920.cameras = i922
  i920.delay = i921[3]
  i920.duration = i921[4]
  i920.shakeSpace = i921[5]
  i920.shakeStrength = new pc.Vec3( i921[6], i921[7], i921[8] )
  i920.shakeCurve = new pc.AnimationCurve( { keys_flow: i921[9] } )
  i920.shakesDelay = i921[10]
  return i920
}

Deserializers["CartoonFX.CFXR_Effect+AnimatedLight"] = function (request, data, root) {
  var i928 = root || request.c( 'CartoonFX.CFXR_Effect+AnimatedLight' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'light')
  i928.loop = !!i929[2]
  i928.animateIntensity = !!i929[3]
  i928.intensityStart = i929[4]
  i928.intensityEnd = i929[5]
  i928.intensityDuration = i929[6]
  i928.intensityCurve = new pc.AnimationCurve( { keys_flow: i929[7] } )
  i928.perlinIntensity = !!i929[8]
  i928.perlinIntensitySpeed = i929[9]
  i928.fadeIn = !!i929[10]
  i928.fadeInDuration = i929[11]
  i928.fadeOut = !!i929[12]
  i928.fadeOutDuration = i929[13]
  i928.animateRange = !!i929[14]
  i928.rangeStart = i929[15]
  i928.rangeEnd = i929[16]
  i928.rangeDuration = i929[17]
  i928.rangeCurve = new pc.AnimationCurve( { keys_flow: i929[18] } )
  i928.perlinRange = !!i929[19]
  i928.perlinRangeSpeed = i929[20]
  i928.animateColor = !!i929[21]
  i928.colorGradient = i929[22] ? new pc.ColorGradient(i929[22][0], i929[22][1], i929[22][2]) : null
  i928.colorDuration = i929[23]
  i928.colorCurve = new pc.AnimationCurve( { keys_flow: i929[24] } )
  i928.perlinColor = !!i929[25]
  i928.perlinColorSpeed = i929[26]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i931 = data
  i930.enabled = !!i931[0]
  i930.type = i931[1]
  i930.color = new pc.Color(i931[2], i931[3], i931[4], i931[5])
  i930.cullingMask = i931[6]
  i930.intensity = i931[7]
  i930.range = i931[8]
  i930.spotAngle = i931[9]
  i930.shadows = i931[10]
  i930.shadowNormalBias = i931[11]
  i930.shadowBias = i931[12]
  i930.shadowStrength = i931[13]
  i930.shadowResolution = i931[14]
  i930.lightmapBakeType = i931[15]
  i930.renderMode = i931[16]
  request.r(i931[17], i931[18], 0, i930, 'cookie')
  i930.cookieSize = i931[19]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i933 = data
  i932.name = i933[0]
  i932.halfPrecision = !!i933[1]
  i932.useUInt32IndexFormat = !!i933[2]
  i932.vertexCount = i933[3]
  i932.aabb = i933[4]
  var i935 = i933[5]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( !!i935[i + 0] );
  }
  i932.streams = i934
  i932.vertices = i933[6]
  var i937 = i933[7]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i937[i + 0]) );
  }
  i932.subMeshes = i936
  var i939 = i933[8]
  var i938 = []
  for(var i = 0; i < i939.length; i += 16) {
    i938.push( new pc.Mat4().setData(i939[i + 0], i939[i + 1], i939[i + 2], i939[i + 3],  i939[i + 4], i939[i + 5], i939[i + 6], i939[i + 7],  i939[i + 8], i939[i + 9], i939[i + 10], i939[i + 11],  i939[i + 12], i939[i + 13], i939[i + 14], i939[i + 15]) );
  }
  i932.bindposes = i938
  var i941 = i933[9]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i941[i + 0]) );
  }
  i932.blendShapes = i940
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i947 = data
  i946.triangles = i947[0]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i953 = data
  i952.name = i953[0]
  var i955 = i953[1]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i955[i + 0]) );
  }
  i952.frames = i954
  return i952
}

Deserializers["AnimatedTile"] = function (request, data, root) {
  var i956 = root || request.c( 'AnimatedTile' )
  var i957 = data
  i956.Duration = i957[0]
  request.r(i957[1], i957[2], 0, i956, 'tileData')
  var i959 = i957[3]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i959.length; i += 3) {
    i958.add(new pc.Vec3( i959[i + 0], i959[i + 1], i959[i + 2] ));
  }
  i956.targetPos = i958
  var i961 = i957[4]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i961.length; i += 3) {
    i960.add(new pc.Vec3( i961[i + 0], i961[i + 1], i961[i + 2] ));
  }
  i956.targetPosPortrait = i960
  var i963 = i957[5]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i963.length; i += 3) {
    i962.add(new pc.Vec3( i963[i + 0], i963[i + 1], i963[i + 2] ));
  }
  i956.targetPosLandscape = i962
  var i965 = i957[6]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i965.length; i += 1) {
    i964.add(i965[i + 0]);
  }
  i956.targets = i964
  request.r(i957[7], i957[8], 0, i956, 'image')
  var i967 = i957[9]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 1, i966, '')
  }
  i956.vfxParticles = i966
  request.r(i957[10], i957[11], 0, i956, 'trailVFXPrefab')
  request.r(i957[12], i957[13], 0, i956, 'circleTrailVFXPrefab')
  request.r(i957[14], i957[15], 0, i956, 'trailRenderer')
  return i956
}

Deserializers["StateEvents"] = function (request, data, root) {
  var i974 = root || request.c( 'StateEvents' )
  var i975 = data
  i974.OnEnableEvent = request.d('UnityEngine.Events.UnityEvent', i975[0], i974.OnEnableEvent)
  i974.OnDisableEvent = request.d('UnityEngine.Events.UnityEvent', i975[1], i974.OnDisableEvent)
  i974.OnStartEvent = request.d('UnityEngine.Events.UnityEvent', i975[2], i974.OnStartEvent)
  i974.autoEnable = !!i975[3]
  i974.autoEnableDelay = i975[4]
  i974.autoDisableDelay = i975[5]
  return i974
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'm_ObjectArgument')
  i976.m_ObjectArgumentAssemblyTypeName = i977[2]
  i976.m_IntArgument = i977[3]
  i976.m_FloatArgument = i977[4]
  i976.m_StringArgument = i977[5]
  i976.m_BoolArgument = !!i977[6]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i979 = data
  i978.enabled = !!i979[0]
  request.r(i979[1], i979[2], 0, i978, 'sharedMaterial')
  var i981 = i979[3]
  var i980 = []
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 2, i980, '')
  }
  i978.sharedMaterials = i980
  i978.receiveShadows = !!i979[4]
  i978.shadowCastingMode = i979[5]
  i978.sortingLayerID = i979[6]
  i978.sortingOrder = i979[7]
  i978.lightmapIndex = i979[8]
  i978.lightmapSceneIndex = i979[9]
  i978.lightmapScaleOffset = new pc.Vec4( i979[10], i979[11], i979[12], i979[13] )
  i978.lightProbeUsage = i979[14]
  i978.reflectionProbeUsage = i979[15]
  var i983 = i979[16]
  var i982 = []
  for(var i = 0; i < i983.length; i += 3) {
    i982.push( new pc.Vec3( i983[i + 0], i983[i + 1], i983[i + 2] ) );
  }
  i978.positions = i982
  i978.positionCount = i979[17]
  i978.time = i979[18]
  i978.startWidth = i979[19]
  i978.endWidth = i979[20]
  i978.widthMultiplier = i979[21]
  i978.autodestruct = !!i979[22]
  i978.emitting = !!i979[23]
  i978.numCornerVertices = i979[24]
  i978.numCapVertices = i979[25]
  i978.minVertexDistance = i979[26]
  i978.colorGradient = i979[27] ? new pc.ColorGradient(i979[27][0], i979[27][1], i979[27][2]) : null
  i978.startColor = new pc.Color(i979[28], i979[29], i979[30], i979[31])
  i978.endColor = new pc.Color(i979[32], i979[33], i979[34], i979[35])
  i978.generateLightingData = !!i979[36]
  i978.textureMode = i979[37]
  i978.alignment = i979[38]
  i978.widthCurve = new pc.AnimationCurve( { keys_flow: i979[39] } )
  return i978
}

Deserializers["PositionTracking"] = function (request, data, root) {
  var i986 = root || request.c( 'PositionTracking' )
  var i987 = data
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i989 = data
  i988.name = i989[0]
  i988.index = i989[1]
  i988.startup = !!i989[2]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i991 = data
  i990.enabled = !!i991[0]
  i990.aspect = i991[1]
  i990.orthographic = !!i991[2]
  i990.orthographicSize = i991[3]
  i990.backgroundColor = new pc.Color(i991[4], i991[5], i991[6], i991[7])
  i990.nearClipPlane = i991[8]
  i990.farClipPlane = i991[9]
  i990.fieldOfView = i991[10]
  i990.depth = i991[11]
  i990.clearFlags = i991[12]
  i990.cullingMask = i991[13]
  i990.rect = i991[14]
  request.r(i991[15], i991[16], 0, i990, 'targetTexture')
  i990.usePhysicalProperties = !!i991[17]
  i990.focalLength = i991[18]
  i990.sensorSize = new pc.Vec2( i991[19], i991[20] )
  i990.lensShift = new pc.Vec2( i991[21], i991[22] )
  i990.gateFit = i991[23]
  i990.commandBufferCount = i991[24]
  i990.cameraType = i991[25]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i993 = data
  i992.enabled = !!i993[0]
  i992.planeDistance = i993[1]
  i992.referencePixelsPerUnit = i993[2]
  i992.isFallbackOverlay = !!i993[3]
  i992.renderMode = i993[4]
  i992.renderOrder = i993[5]
  i992.sortingLayerName = i993[6]
  i992.sortingOrder = i993[7]
  i992.scaleFactor = i993[8]
  request.r(i993[9], i993[10], 0, i992, 'worldCamera')
  i992.overrideSorting = !!i993[11]
  i992.pixelPerfect = !!i993[12]
  i992.targetDisplay = i993[13]
  i992.overridePixelPerfect = !!i993[14]
  return i992
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i995 = data
  i994.m_UiScaleMode = i995[0]
  i994.m_ReferencePixelsPerUnit = i995[1]
  i994.m_ScaleFactor = i995[2]
  i994.m_ReferenceResolution = new pc.Vec2( i995[3], i995[4] )
  i994.m_ScreenMatchMode = i995[5]
  i994.m_MatchWidthOrHeight = i995[6]
  i994.m_PhysicalUnit = i995[7]
  i994.m_FallbackScreenDPI = i995[8]
  i994.m_DefaultSpriteDPI = i995[9]
  i994.m_DynamicPixelsPerUnit = i995[10]
  i994.m_PresetInfoIsWorld = !!i995[11]
  return i994
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i997 = data
  i996.m_IgnoreReversedGraphics = !!i997[0]
  i996.m_BlockingObjects = i997[1]
  i996.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i997[2] )
  return i996
}

Deserializers["BasicFade"] = function (request, data, root) {
  var i998 = root || request.c( 'BasicFade' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'canvasGroup')
  i998.duration = i999[2]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1001 = data
  i1000.m_Alpha = i1001[0]
  i1000.m_Interactable = !!i1001[1]
  i1000.m_BlocksRaycasts = !!i1001[2]
  i1000.m_IgnoreParentGroups = !!i1001[3]
  i1000.enabled = !!i1001[4]
  return i1000
}

Deserializers["AppearAnimation"] = function (request, data, root) {
  var i1002 = root || request.c( 'AppearAnimation' )
  var i1003 = data
  i1002.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i1003[0], i1002.OnMovementComplete)
  i1002.fadeInDuration = i1003[1]
  i1002.fadeInDelay = i1003[2]
  i1002.fillDuration = i1003[3]
  i1002.fillDelay = i1003[4]
  i1002.targetFillAmount = i1003[5]
  i1002.initialFillAmount = i1003[6]
  return i1002
}

Deserializers["PlayerGuide"] = function (request, data, root) {
  var i1004 = root || request.c( 'PlayerGuide' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i1004.prompts = i1006
  return i1004
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.UI.Button' )
  var i1011 = data
  i1010.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1011[0], i1010.m_OnClick)
  i1010.m_Navigation = request.d('UnityEngine.UI.Navigation', i1011[1], i1010.m_Navigation)
  i1010.m_Transition = i1011[2]
  i1010.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1011[3], i1010.m_Colors)
  i1010.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1011[4], i1010.m_SpriteState)
  i1010.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1011[5], i1010.m_AnimationTriggers)
  i1010.m_Interactable = !!i1011[6]
  request.r(i1011[7], i1011[8], 0, i1010, 'm_TargetGraphic')
  return i1010
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1013 = data
  i1012.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1013[0], i1012.m_PersistentCalls)
  return i1012
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1015 = data
  i1014.m_Mode = i1015[0]
  i1014.m_WrapAround = !!i1015[1]
  request.r(i1015[2], i1015[3], 0, i1014, 'm_SelectOnUp')
  request.r(i1015[4], i1015[5], 0, i1014, 'm_SelectOnDown')
  request.r(i1015[6], i1015[7], 0, i1014, 'm_SelectOnLeft')
  request.r(i1015[8], i1015[9], 0, i1014, 'm_SelectOnRight')
  return i1014
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1017 = data
  i1016.m_NormalColor = new pc.Color(i1017[0], i1017[1], i1017[2], i1017[3])
  i1016.m_HighlightedColor = new pc.Color(i1017[4], i1017[5], i1017[6], i1017[7])
  i1016.m_PressedColor = new pc.Color(i1017[8], i1017[9], i1017[10], i1017[11])
  i1016.m_SelectedColor = new pc.Color(i1017[12], i1017[13], i1017[14], i1017[15])
  i1016.m_DisabledColor = new pc.Color(i1017[16], i1017[17], i1017[18], i1017[19])
  i1016.m_ColorMultiplier = i1017[20]
  i1016.m_FadeDuration = i1017[21]
  return i1016
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'm_HighlightedSprite')
  request.r(i1019[2], i1019[3], 0, i1018, 'm_PressedSprite')
  request.r(i1019[4], i1019[5], 0, i1018, 'm_SelectedSprite')
  request.r(i1019[6], i1019[7], 0, i1018, 'm_DisabledSprite')
  return i1018
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1021 = data
  i1020.m_NormalTrigger = i1021[0]
  i1020.m_HighlightedTrigger = i1021[1]
  i1020.m_PressedTrigger = i1021[2]
  i1020.m_SelectedTrigger = i1021[3]
  i1020.m_DisabledTrigger = i1021[4]
  return i1020
}

Deserializers["RectAnimator"] = function (request, data, root) {
  var i1022 = root || request.c( 'RectAnimator' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'rectTransform')
  i1022.animateScale = !!i1023[2]
  i1022.isScaleLooping = !!i1023[3]
  i1022.scaleTo = i1023[4]
  i1022.scaleDuration = i1023[5]
  i1022.scaleEaseType = i1023[6]
  i1022.scaleStartDelay = i1023[7]
  i1022.animateMove = !!i1023[8]
  i1022.isMoveLooping = !!i1023[9]
  i1022.moveTo = new pc.Vec2( i1023[10], i1023[11] )
  i1022.moveDuration = i1023[12]
  i1022.moveEaseType = i1023[13]
  i1022.moveLoopType = i1023[14]
  i1022.moveStartDelay = i1023[15]
  i1022.initialPos = new pc.Vec3( i1023[16], i1023[17], i1023[18] )
  i1022.initialScale = new pc.Vec3( i1023[19], i1023[20], i1023[21] )
  return i1022
}

Deserializers["TileManager"] = function (request, data, root) {
  var i1024 = root || request.c( 'TileManager' )
  var i1025 = data
  i1024.cellWidth = i1025[0]
  i1024.cellHeight = i1025[1]
  request.r(i1025[2], i1025[3], 0, i1024, 'canvasGroup')
  var i1027 = i1025[4]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 1, i1026, '')
  }
  i1024.cells = i1026
  var i1029 = i1025[5]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 1, i1028, '')
  }
  i1024.tileDataPool = i1028
  i1024.GridHeight = i1025[6]
  i1024.SequenceDelay = i1025[7]
  i1024.BreakDelay = i1025[8]
  i1024.FallDelay = i1025[9]
  i1024.CheckDelay = i1025[10]
  i1024.levelColorValues = i1025[11]
  var i1031 = i1025[12]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 1, i1030, '')
  }
  i1024.powerupDataPool = i1030
  request.r(i1025[13], i1025[14], 0, i1024, 'dynamitePowerup')
  return i1024
}

Deserializers["SpecialTileManager"] = function (request, data, root) {
  var i1036 = root || request.c( 'SpecialTileManager' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'tileManager')
  var i1039 = i1037[2]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 1, i1038, '')
  }
  i1036.cellList = i1038
  var i1041 = i1037[3]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonGraphic')))
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 1, i1040, '')
  }
  i1036.SpecialTiles = i1040
  i1036.specialTileTargetPos = i1037[4]
  i1036.pigPos = i1037[5]
  i1036.chickenPos = i1037[6]
  return i1036
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1045 = data
  i1044.m_Spacing = i1045[0]
  i1044.m_ChildForceExpandWidth = !!i1045[1]
  i1044.m_ChildForceExpandHeight = !!i1045[2]
  i1044.m_ChildControlWidth = !!i1045[3]
  i1044.m_ChildControlHeight = !!i1045[4]
  i1044.m_ChildScaleWidth = !!i1045[5]
  i1044.m_ChildScaleHeight = !!i1045[6]
  i1044.m_ReverseArrangement = !!i1045[7]
  i1044.m_Padding = UnityEngine.RectOffset.FromPaddings(i1045[8], i1045[9], i1045[10], i1045[11])
  i1044.m_ChildAlignment = i1045[12]
  return i1044
}

Deserializers["UIMoveTo"] = function (request, data, root) {
  var i1046 = root || request.c( 'UIMoveTo' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'imageTransform')
  i1046.targetPosition = new pc.Vec2( i1047[2], i1047[3] )
  i1046.anticipationOffset = i1047[4]
  i1046.duration = i1047[5]
  i1046.enableOnStart = !!i1047[6]
  i1046.delayBeforeStart = i1047[7]
  i1046.delayBeforeEnd = i1047[8]
  i1046.OnMovementStart = request.d('UnityEngine.Events.UnityEvent', i1047[9], i1046.OnMovementStart)
  i1046.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i1047[10], i1046.OnMovementComplete)
  var i1049 = i1047[11]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 1, i1048, '')
  }
  i1046.objectsToEnable = i1048
  return i1046
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1051 = data
  i1050.m_StartCorner = i1051[0]
  i1050.m_StartAxis = i1051[1]
  i1050.m_CellSize = new pc.Vec2( i1051[2], i1051[3] )
  i1050.m_Spacing = new pc.Vec2( i1051[4], i1051[5] )
  i1050.m_Constraint = i1051[6]
  i1050.m_ConstraintCount = i1051[7]
  i1050.m_Padding = UnityEngine.RectOffset.FromPaddings(i1051[8], i1051[9], i1051[10], i1051[11])
  i1050.m_ChildAlignment = i1051[12]
  return i1050
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1053 = data
  i1052.m_ShowMaskGraphic = !!i1053[0]
  return i1052
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1054 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'skeletonDataAsset')
  request.r(i1055[2], i1055[3], 0, i1054, 'additiveMaterial')
  request.r(i1055[4], i1055[5], 0, i1054, 'multiplyMaterial')
  request.r(i1055[6], i1055[7], 0, i1054, 'screenMaterial')
  i1054.initialSkinName = i1055[8]
  i1054.initialFlipX = !!i1055[9]
  i1054.initialFlipY = !!i1055[10]
  i1054.startingAnimation = i1055[11]
  i1054.startingLoop = !!i1055[12]
  i1054.timeScale = i1055[13]
  i1054.freeze = !!i1055[14]
  i1054.layoutScaleMode = i1055[15]
  i1054.updateWhenInvisible = i1055[16]
  i1054.allowMultipleCanvasRenderers = !!i1055[17]
  var i1057 = i1055[18]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 1, i1056, '')
  }
  i1054.canvasRenderers = i1056
  i1054.enableSeparatorSlots = !!i1055[19]
  i1054.updateSeparatorPartLocation = !!i1055[20]
  i1054.updateSeparatorPartScale = !!i1055[21]
  i1054.disableMeshAssignmentOnOverride = !!i1055[22]
  i1054.m_SkeletonColor = new pc.Color(i1055[23], i1055[24], i1055[25], i1055[26])
  i1054.referenceSize = new pc.Vec2( i1055[27], i1055[28] )
  i1054.pivotOffset = new pc.Vec2( i1055[29], i1055[30] )
  i1054.referenceScale = i1055[31]
  i1054.layoutScale = i1055[32]
  i1054.rectTransformSize = new pc.Vec2( i1055[33], i1055[34] )
  i1054.editReferenceRect = !!i1055[35]
  var i1059 = i1055[36]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1054.separatorSlotNames = i1058
  var i1061 = i1055[37]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 1, i1060, '')
  }
  i1054.separatorParts = i1060
  i1054.physicsPositionInheritanceFactor = new pc.Vec2( i1055[38], i1055[39] )
  i1054.physicsRotationInheritanceFactor = i1055[40]
  request.r(i1055[41], i1055[42], 0, i1054, 'physicsMovementRelativeTo')
  i1054.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1055[43], i1054.meshGenerator)
  i1054.updateTiming = i1055[44]
  i1054.unscaledTime = !!i1055[45]
  request.r(i1055[46], i1055[47], 0, i1054, 'm_Material')
  i1054.m_Maskable = !!i1055[48]
  i1054.m_Color = new pc.Color(i1055[49], i1055[50], i1055[51], i1055[52])
  i1054.m_RaycastTarget = !!i1055[53]
  i1054.m_RaycastPadding = new pc.Vec4( i1055[54], i1055[55], i1055[56], i1055[57] )
  return i1054
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1068 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1069 = data
  i1068.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1069[0], i1068.settings)
  return i1068
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1070 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1071 = data
  i1070.useClipping = !!i1071[0]
  i1070.zSpacing = i1071[1]
  i1070.tintBlack = !!i1071[2]
  i1070.canvasGroupCompatible = !!i1071[3]
  i1070.pmaVertexColors = !!i1071[4]
  i1070.addNormals = !!i1071[5]
  i1070.calculateTangents = !!i1071[6]
  i1070.immutableTriangles = !!i1071[7]
  return i1070
}

Deserializers["AnimatedTileSpawner"] = function (request, data, root) {
  var i1072 = root || request.c( 'AnimatedTileSpawner' )
  var i1073 = data
  var i1075 = i1073[0]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('AnimatedTile')))
  for(var i = 0; i < i1075.length; i += 2) {
  request.r(i1075[i + 0], i1075[i + 1], 1, i1074, '')
  }
  i1072.tiles = i1074
  return i1072
}

Deserializers["DynamiteEffect"] = function (request, data, root) {
  var i1078 = root || request.c( 'DynamiteEffect' )
  var i1079 = data
  i1078.initialScale = new pc.Vec3( i1079[0], i1079[1], i1079[2] )
  i1078.targetPos = new pc.Vec3( i1079[3], i1079[4], i1079[5] )
  i1078.duration = i1079[6]
  request.r(i1079[7], i1079[8], 0, i1078, 'model')
  request.r(i1079[9], i1079[10], 0, i1078, 'explosionEffectPrefab')
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1081 = data
  i1080.enabled = !!i1081[0]
  request.r(i1081[1], i1081[2], 0, i1080, 'sharedMaterial')
  var i1083 = i1081[3]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 2) {
  request.r(i1083[i + 0], i1083[i + 1], 2, i1082, '')
  }
  i1080.sharedMaterials = i1082
  i1080.receiveShadows = !!i1081[4]
  i1080.shadowCastingMode = i1081[5]
  i1080.sortingLayerID = i1081[6]
  i1080.sortingOrder = i1081[7]
  i1080.lightmapIndex = i1081[8]
  i1080.lightmapSceneIndex = i1081[9]
  i1080.lightmapScaleOffset = new pc.Vec4( i1081[10], i1081[11], i1081[12], i1081[13] )
  i1080.lightProbeUsage = i1081[14]
  i1080.reflectionProbeUsage = i1081[15]
  i1080.color = new pc.Color(i1081[16], i1081[17], i1081[18], i1081[19])
  request.r(i1081[20], i1081[21], 0, i1080, 'sprite')
  i1080.flipX = !!i1081[22]
  i1080.flipY = !!i1081[23]
  i1080.drawMode = i1081[24]
  i1080.size = new pc.Vec2( i1081[25], i1081[26] )
  i1080.tileMode = i1081[27]
  i1080.adaptiveModeThreshold = i1081[28]
  i1080.maskInteraction = i1081[29]
  i1080.spriteSortPoint = i1081[30]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'animatorController')
  request.r(i1085[2], i1085[3], 0, i1084, 'avatar')
  i1084.updateMode = i1085[4]
  i1084.hasTransformHierarchy = !!i1085[5]
  i1084.applyRootMotion = !!i1085[6]
  var i1087 = i1085[7]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 2) {
  request.r(i1087[i + 0], i1087[i + 1], 2, i1086, '')
  }
  i1084.humanBones = i1086
  i1084.enabled = !!i1085[8]
  return i1084
}

Deserializers["MergeHands"] = function (request, data, root) {
  var i1090 = root || request.c( 'MergeHands' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'rectTransform')
  request.r(i1091[2], i1091[3], 0, i1090, 'target1')
  request.r(i1091[4], i1091[5], 0, i1090, 'target2')
  return i1090
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'm_FirstSelected')
  i1092.m_sendNavigationEvents = !!i1093[2]
  i1092.m_DragThreshold = i1093[3]
  return i1092
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1095 = data
  i1094.m_HorizontalAxis = i1095[0]
  i1094.m_VerticalAxis = i1095[1]
  i1094.m_SubmitButton = i1095[2]
  i1094.m_CancelButton = i1095[3]
  i1094.m_InputActionsPerSecond = i1095[4]
  i1094.m_RepeatDelay = i1095[5]
  i1094.m_ForceModuleActive = !!i1095[6]
  i1094.m_SendPointerHoverToParent = !!i1095[7]
  return i1094
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1096 = root || request.c( 'GameManager' )
  var i1097 = data
  i1096.IsSIP = !!i1097[0]
  i1096.gameType = i1097[1]
  i1096.toggleInactivityPanel = !!i1097[2]
  i1096.OnStartMIP1 = request.d('UnityEngine.Events.UnityEvent', i1097[3], i1096.OnStartMIP1)
  i1096.OnStartMIP2 = request.d('UnityEngine.Events.UnityEvent', i1097[4], i1096.OnStartMIP2)
  i1096.IsDoneCollecting = !!i1097[5]
  i1096.OnLevelComplete = request.d('UnityEngine.Events.UnityEvent', i1097[6], i1096.OnLevelComplete)
  request.r(i1097[7], i1097[8], 0, i1096, 'TutorialPanel')
  request.r(i1097[9], i1097[10], 0, i1096, 'GamePanel')
  request.r(i1097[11], i1097[12], 0, i1096, 'EndCard')
  request.r(i1097[13], i1097[14], 0, i1096, 'CTAPanel')
  request.r(i1097[15], i1097[16], 0, i1096, 'FailPanel')
  request.r(i1097[17], i1097[18], 0, i1096, 'EndCardInActivityPanel')
  i1096.iosLink = i1097[19]
  i1096.androidLink = i1097[20]
  i1096.hasTimer = !!i1097[21]
  i1096.currentTimer = i1097[22]
  i1096.maxTime = i1097[23]
  i1096.gameOver = !!i1097[24]
  request.r(i1097[25], i1097[26], 0, i1096, 'inactivityPanel')
  request.r(i1097[27], i1097[28], 0, i1096, 'inactivityPanelGame')
  i1096.inactivityTime = i1097[29]
  i1096.inactivityTimer = i1097[30]
  request.r(i1097[31], i1097[32], 0, i1096, 'timerText')
  var i1099 = i1097[33]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.add(request.d('GameManager+FurnitureItems', i1099[i + 0]));
  }
  i1096.items = i1098
  i1096.CurrentLevel = i1097[34]
  var i1101 = i1097[35]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.add(request.d('GameManager+FurnitureItems', i1101[i + 0]));
  }
  i1096.currentFurnitures = i1100
  var i1103 = i1097[36]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('BasicFade')))
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 1, i1102, '')
  }
  i1096.gameBoards = i1102
  var i1105 = i1097[37]
  var i1104 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationBase')))
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 1, i1104, '')
  }
  i1096.furnitureDecorations = i1104
  var i1107 = i1097[38]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 1, i1106, '')
  }
  i1096.mip1Objects = i1106
  var i1109 = i1097[39]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1109.length; i += 2) {
  request.r(i1109[i + 0], i1109[i + 1], 1, i1108, '')
  }
  i1096.mip2Objects = i1108
  var i1111 = i1097[40]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 1, i1110, '')
  }
  i1096.Feedback = i1110
  var i1113 = i1097[41]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(i1113[i + 0]);
  }
  i1096.audioKeys = i1112
  var i1115 = i1097[42]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(i1115[i + 0]);
  }
  i1096.cameraPanLocation = i1114
  request.r(i1097[43], i1097[44], 0, i1096, 'cameraPanObject')
  i1096.mip1ButtonPress = !!i1097[45]
  i1096.puzzlesToSolve = i1097[46]
  var i1117 = i1097[47]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1117.length; i += 2) {
  request.r(i1117[i + 0], i1117[i + 1], 1, i1116, '')
  }
  i1096.redirectButtons = i1116
  return i1096
}

Deserializers["GameManager+FurnitureItems"] = function (request, data, root) {
  var i1120 = root || request.c( 'GameManager+FurnitureItems' )
  var i1121 = data
  i1120.key = i1121[0]
  request.r(i1121[1], i1121[2], 0, i1120, 'value')
  return i1120
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1128 = root || request.c( 'AudioManager' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'library')
  i1128.sfxPoolSize = i1129[2]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1131 = data
  i1130.ambientIntensity = i1131[0]
  i1130.reflectionIntensity = i1131[1]
  i1130.ambientMode = i1131[2]
  i1130.ambientLight = new pc.Color(i1131[3], i1131[4], i1131[5], i1131[6])
  i1130.ambientSkyColor = new pc.Color(i1131[7], i1131[8], i1131[9], i1131[10])
  i1130.ambientGroundColor = new pc.Color(i1131[11], i1131[12], i1131[13], i1131[14])
  i1130.ambientEquatorColor = new pc.Color(i1131[15], i1131[16], i1131[17], i1131[18])
  i1130.fogColor = new pc.Color(i1131[19], i1131[20], i1131[21], i1131[22])
  i1130.fogEndDistance = i1131[23]
  i1130.fogStartDistance = i1131[24]
  i1130.fogDensity = i1131[25]
  i1130.fog = !!i1131[26]
  request.r(i1131[27], i1131[28], 0, i1130, 'skybox')
  i1130.fogMode = i1131[29]
  var i1133 = i1131[30]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1133[i + 0]) );
  }
  i1130.lightmaps = i1132
  i1130.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1131[31], i1130.lightProbes)
  i1130.lightmapsMode = i1131[32]
  i1130.mixedBakeMode = i1131[33]
  i1130.environmentLightingMode = i1131[34]
  i1130.ambientProbe = new pc.SphericalHarmonicsL2(i1131[35])
  i1130.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1131[36])
  i1130.useReferenceAmbientProbe = !!i1131[37]
  request.r(i1131[38], i1131[39], 0, i1130, 'customReflection')
  request.r(i1131[40], i1131[41], 0, i1130, 'defaultReflection')
  i1130.defaultReflectionMode = i1131[42]
  i1130.defaultReflectionResolution = i1131[43]
  i1130.sunLightObjectId = i1131[44]
  i1130.pixelLightCount = i1131[45]
  i1130.defaultReflectionHDR = !!i1131[46]
  i1130.hasLightDataAsset = !!i1131[47]
  i1130.hasManualGenerate = !!i1131[48]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1137 = data
  request.r(i1137[0], i1137[1], 0, i1136, 'lightmapColor')
  request.r(i1137[2], i1137[3], 0, i1136, 'lightmapDirection')
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1138 = root || new UnityEngine.LightProbes()
  var i1139 = data
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1145 = data
  var i1147 = i1145[0]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1147[i + 0]));
  }
  i1144.ShaderCompilationErrors = i1146
  i1144.name = i1145[1]
  i1144.guid = i1145[2]
  var i1149 = i1145[3]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( i1149[i + 0] );
  }
  i1144.shaderDefinedKeywords = i1148
  var i1151 = i1145[4]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1151[i + 0]) );
  }
  i1144.passes = i1150
  var i1153 = i1145[5]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1153[i + 0]) );
  }
  i1144.usePasses = i1152
  var i1155 = i1145[6]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1155[i + 0]) );
  }
  i1144.defaultParameterValues = i1154
  request.r(i1145[7], i1145[8], 0, i1144, 'unityFallbackShader')
  i1144.readDepth = !!i1145[9]
  i1144.isCreatedByShaderGraph = !!i1145[10]
  i1144.compiled = !!i1145[11]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1159 = data
  i1158.shaderName = i1159[0]
  i1158.errorMessage = i1159[1]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1162 = root || new pc.UnityShaderPass()
  var i1163 = data
  i1162.id = i1163[0]
  i1162.subShaderIndex = i1163[1]
  i1162.name = i1163[2]
  i1162.passType = i1163[3]
  i1162.grabPassTextureName = i1163[4]
  i1162.usePass = !!i1163[5]
  i1162.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[6], i1162.zTest)
  i1162.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[7], i1162.zWrite)
  i1162.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[8], i1162.culling)
  i1162.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1163[9], i1162.blending)
  i1162.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1163[10], i1162.alphaBlending)
  i1162.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[11], i1162.colorWriteMask)
  i1162.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[12], i1162.offsetUnits)
  i1162.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[13], i1162.offsetFactor)
  i1162.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[14], i1162.stencilRef)
  i1162.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[15], i1162.stencilReadMask)
  i1162.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[16], i1162.stencilWriteMask)
  i1162.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1163[17], i1162.stencilOp)
  i1162.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1163[18], i1162.stencilOpFront)
  i1162.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1163[19], i1162.stencilOpBack)
  var i1165 = i1163[20]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1165[i + 0]) );
  }
  i1162.tags = i1164
  var i1167 = i1163[21]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( i1167[i + 0] );
  }
  i1162.passDefinedKeywords = i1166
  var i1169 = i1163[22]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1169[i + 0]) );
  }
  i1162.passDefinedKeywordGroups = i1168
  var i1171 = i1163[23]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1171[i + 0]) );
  }
  i1162.variants = i1170
  var i1173 = i1163[24]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1173[i + 0]) );
  }
  i1162.excludedVariants = i1172
  i1162.hasDepthReader = !!i1163[25]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1175 = data
  i1174.val = i1175[0]
  i1174.name = i1175[1]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1177 = data
  i1176.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[0], i1176.src)
  i1176.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[1], i1176.dst)
  i1176.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[2], i1176.op)
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1179 = data
  i1178.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1179[0], i1178.pass)
  i1178.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1179[1], i1178.fail)
  i1178.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1179[2], i1178.zFail)
  i1178.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1179[3], i1178.comp)
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1183 = data
  i1182.name = i1183[0]
  i1182.value = i1183[1]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1187 = data
  var i1189 = i1187[0]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( i1189[i + 0] );
  }
  i1186.keywords = i1188
  i1186.hasDiscard = !!i1187[1]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1193 = data
  i1192.passId = i1193[0]
  i1192.subShaderIndex = i1193[1]
  var i1195 = i1193[2]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( i1195[i + 0] );
  }
  i1192.keywords = i1194
  i1192.vertexProgram = i1193[3]
  i1192.fragmentProgram = i1193[4]
  i1192.exportedForWebGl2 = !!i1193[5]
  i1192.readDepth = !!i1193[6]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'shader')
  i1198.pass = i1199[2]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1203 = data
  i1202.name = i1203[0]
  i1202.type = i1203[1]
  i1202.value = new pc.Vec4( i1203[2], i1203[3], i1203[4], i1203[5] )
  i1202.textureValue = i1203[6]
  i1202.shaderPropertyFlag = i1203[7]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1205 = data
  i1204.name = i1205[0]
  request.r(i1205[1], i1205[2], 0, i1204, 'texture')
  i1204.aabb = i1205[3]
  i1204.vertices = i1205[4]
  i1204.triangles = i1205[5]
  i1204.textureRect = UnityEngine.Rect.MinMaxRect(i1205[6], i1205[7], i1205[8], i1205[9])
  i1204.packedRect = UnityEngine.Rect.MinMaxRect(i1205[10], i1205[11], i1205[12], i1205[13])
  i1204.border = new pc.Vec4( i1205[14], i1205[15], i1205[16], i1205[17] )
  i1204.transparency = i1205[18]
  i1204.bounds = i1205[19]
  i1204.pixelsPerUnit = i1205[20]
  i1204.textureWidth = i1205[21]
  i1204.textureHeight = i1205[22]
  i1204.nativeSize = new pc.Vec2( i1205[23], i1205[24] )
  i1204.pivot = new pc.Vec2( i1205[25], i1205[26] )
  i1204.textureRectOffset = new pc.Vec2( i1205[27], i1205[28] )
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1207 = data
  i1206.name = i1207[0]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1209 = data
  i1208.name = i1209[0]
  i1208.wrapMode = i1209[1]
  i1208.isLooping = !!i1209[2]
  i1208.length = i1209[3]
  var i1211 = i1209[4]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1211[i + 0]) );
  }
  i1208.curves = i1210
  var i1213 = i1209[5]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1213[i + 0]) );
  }
  i1208.events = i1212
  i1208.halfPrecision = !!i1209[6]
  i1208._frameRate = i1209[7]
  i1208.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1209[8], i1208.localBounds)
  i1208.hasMuscleCurves = !!i1209[9]
  var i1215 = i1209[10]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( i1215[i + 0] );
  }
  i1208.clipMuscleConstant = i1214
  i1208.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1209[11], i1208.clipBindingConstant)
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1219 = data
  i1218.path = i1219[0]
  i1218.hash = i1219[1]
  i1218.componentType = i1219[2]
  i1218.property = i1219[3]
  i1218.keys = i1219[4]
  var i1221 = i1219[5]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1221[i + 0]) );
  }
  i1218.objectReferenceKeys = i1220
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1225 = data
  i1224.time = i1225[0]
  request.r(i1225[1], i1225[2], 0, i1224, 'value')
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1229 = data
  i1228.functionName = i1229[0]
  i1228.floatParameter = i1229[1]
  i1228.intParameter = i1229[2]
  i1228.stringParameter = i1229[3]
  request.r(i1229[4], i1229[5], 0, i1228, 'objectReferenceParameter')
  i1228.time = i1229[6]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1231 = data
  i1230.center = new pc.Vec3( i1231[0], i1231[1], i1231[2] )
  i1230.extends = new pc.Vec3( i1231[3], i1231[4], i1231[5] )
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1235 = data
  var i1237 = i1235[0]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( i1237[i + 0] );
  }
  i1234.genericBindings = i1236
  var i1239 = i1235[1]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( i1239[i + 0] );
  }
  i1234.pptrCurveMapping = i1238
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1241 = data
  i1240.name = i1241[0]
  i1240.ascent = i1241[1]
  i1240.originalLineHeight = i1241[2]
  i1240.fontSize = i1241[3]
  var i1243 = i1241[4]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1243[i + 0]) );
  }
  i1240.characterInfo = i1242
  request.r(i1241[5], i1241[6], 0, i1240, 'texture')
  i1240.originalFontSize = i1241[7]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1247 = data
  i1246.index = i1247[0]
  i1246.advance = i1247[1]
  i1246.bearing = i1247[2]
  i1246.glyphWidth = i1247[3]
  i1246.glyphHeight = i1247[4]
  i1246.minX = i1247[5]
  i1246.maxX = i1247[6]
  i1246.minY = i1247[7]
  i1246.maxY = i1247[8]
  i1246.uvBottomLeftX = i1247[9]
  i1246.uvBottomLeftY = i1247[10]
  i1246.uvBottomRightX = i1247[11]
  i1246.uvBottomRightY = i1247[12]
  i1246.uvTopLeftX = i1247[13]
  i1246.uvTopLeftY = i1247[14]
  i1246.uvTopRightX = i1247[15]
  i1246.uvTopRightY = i1247[16]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1249 = data
  i1248.name = i1249[0]
  var i1251 = i1249[1]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1251[i + 0]) );
  }
  i1248.layers = i1250
  var i1253 = i1249[2]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1253[i + 0]) );
  }
  i1248.parameters = i1252
  i1248.animationClips = i1249[3]
  i1248.avatarUnsupported = i1249[4]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1257 = data
  i1256.name = i1257[0]
  i1256.defaultWeight = i1257[1]
  i1256.blendingMode = i1257[2]
  i1256.avatarMask = i1257[3]
  i1256.syncedLayerIndex = i1257[4]
  i1256.syncedLayerAffectsTiming = !!i1257[5]
  i1256.syncedLayers = i1257[6]
  i1256.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1257[7], i1256.stateMachine)
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1259 = data
  i1258.id = i1259[0]
  i1258.name = i1259[1]
  i1258.path = i1259[2]
  var i1261 = i1259[3]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1261[i + 0]) );
  }
  i1258.states = i1260
  var i1263 = i1259[4]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1263[i + 0]) );
  }
  i1258.machines = i1262
  var i1265 = i1259[5]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1265[i + 0]) );
  }
  i1258.entryStateTransitions = i1264
  var i1267 = i1259[6]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1267[i + 0]) );
  }
  i1258.exitStateTransitions = i1266
  var i1269 = i1259[7]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1269[i + 0]) );
  }
  i1258.anyStateTransitions = i1268
  i1258.defaultStateId = i1259[8]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1273 = data
  i1272.id = i1273[0]
  i1272.name = i1273[1]
  i1272.cycleOffset = i1273[2]
  i1272.cycleOffsetParameter = i1273[3]
  i1272.cycleOffsetParameterActive = !!i1273[4]
  i1272.mirror = !!i1273[5]
  i1272.mirrorParameter = i1273[6]
  i1272.mirrorParameterActive = !!i1273[7]
  i1272.motionId = i1273[8]
  i1272.nameHash = i1273[9]
  i1272.fullPathHash = i1273[10]
  i1272.speed = i1273[11]
  i1272.speedParameter = i1273[12]
  i1272.speedParameterActive = !!i1273[13]
  i1272.tag = i1273[14]
  i1272.tagHash = i1273[15]
  i1272.writeDefaultValues = !!i1273[16]
  var i1275 = i1273[17]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 2) {
  request.r(i1275[i + 0], i1275[i + 1], 2, i1274, '')
  }
  i1272.behaviours = i1274
  var i1277 = i1273[18]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1277[i + 0]) );
  }
  i1272.transitions = i1276
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1283 = data
  i1282.fullPath = i1283[0]
  i1282.canTransitionToSelf = !!i1283[1]
  i1282.duration = i1283[2]
  i1282.exitTime = i1283[3]
  i1282.hasExitTime = !!i1283[4]
  i1282.hasFixedDuration = !!i1283[5]
  i1282.interruptionSource = i1283[6]
  i1282.offset = i1283[7]
  i1282.orderedInterruption = !!i1283[8]
  i1282.destinationStateId = i1283[9]
  i1282.isExit = !!i1283[10]
  i1282.mute = !!i1283[11]
  i1282.solo = !!i1283[12]
  var i1285 = i1283[13]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1285[i + 0]) );
  }
  i1282.conditions = i1284
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1291 = data
  i1290.destinationStateId = i1291[0]
  i1290.isExit = !!i1291[1]
  i1290.mute = !!i1291[2]
  i1290.solo = !!i1291[3]
  var i1293 = i1291[4]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1293[i + 0]) );
  }
  i1290.conditions = i1292
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1297 = data
  i1296.defaultBool = !!i1297[0]
  i1296.defaultFloat = i1297[1]
  i1296.defaultInt = i1297[2]
  i1296.name = i1297[3]
  i1296.nameHash = i1297[4]
  i1296.type = i1297[5]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1299 = data
  i1298.name = i1299[0]
  i1298.bytes64 = i1299[1]
  i1298.data = i1299[2]
  return i1298
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1301 = data
  i1300.hashCode = i1301[0]
  request.r(i1301[1], i1301[2], 0, i1300, 'material')
  i1300.materialHashCode = i1301[3]
  request.r(i1301[4], i1301[5], 0, i1300, 'atlas')
  i1300.normalStyle = i1301[6]
  i1300.normalSpacingOffset = i1301[7]
  i1300.boldStyle = i1301[8]
  i1300.boldSpacing = i1301[9]
  i1300.italicStyle = i1301[10]
  i1300.tabSize = i1301[11]
  i1300.m_Version = i1301[12]
  i1300.m_SourceFontFileGUID = i1301[13]
  request.r(i1301[14], i1301[15], 0, i1300, 'm_SourceFontFile_EditorRef')
  request.r(i1301[16], i1301[17], 0, i1300, 'm_SourceFontFile')
  i1300.m_AtlasPopulationMode = i1301[18]
  i1300.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1301[19], i1300.m_FaceInfo)
  var i1303 = i1301[20]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(request.d('UnityEngine.TextCore.Glyph', i1303[i + 0]));
  }
  i1300.m_GlyphTable = i1302
  var i1305 = i1301[21]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.add(request.d('TMPro.TMP_Character', i1305[i + 0]));
  }
  i1300.m_CharacterTable = i1304
  var i1307 = i1301[22]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 2) {
  request.r(i1307[i + 0], i1307[i + 1], 2, i1306, '')
  }
  i1300.m_AtlasTextures = i1306
  i1300.m_AtlasTextureIndex = i1301[23]
  i1300.m_IsMultiAtlasTexturesEnabled = !!i1301[24]
  i1300.m_ClearDynamicDataOnBuild = !!i1301[25]
  var i1309 = i1301[26]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('UnityEngine.TextCore.GlyphRect', i1309[i + 0]));
  }
  i1300.m_UsedGlyphRects = i1308
  var i1311 = i1301[27]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.add(request.d('UnityEngine.TextCore.GlyphRect', i1311[i + 0]));
  }
  i1300.m_FreeGlyphRects = i1310
  i1300.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1301[28], i1300.m_fontInfo)
  i1300.m_AtlasWidth = i1301[29]
  i1300.m_AtlasHeight = i1301[30]
  i1300.m_AtlasPadding = i1301[31]
  i1300.m_AtlasRenderMode = i1301[32]
  var i1313 = i1301[33]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('TMPro.TMP_Glyph', i1313[i + 0]));
  }
  i1300.m_glyphInfoList = i1312
  i1300.m_KerningTable = request.d('TMPro.KerningTable', i1301[34], i1300.m_KerningTable)
  i1300.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1301[35], i1300.m_FontFeatureTable)
  var i1315 = i1301[36]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1315.length; i += 2) {
  request.r(i1315[i + 0], i1315[i + 1], 1, i1314, '')
  }
  i1300.fallbackFontAssets = i1314
  var i1317 = i1301[37]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1317.length; i += 2) {
  request.r(i1317[i + 0], i1317[i + 1], 1, i1316, '')
  }
  i1300.m_FallbackFontAssetTable = i1316
  i1300.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1301[38], i1300.m_CreationSettings)
  var i1319 = i1301[39]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('TMPro.TMP_FontWeightPair', i1319[i + 0]) );
  }
  i1300.m_FontWeightTable = i1318
  var i1321 = i1301[40]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('TMPro.TMP_FontWeightPair', i1321[i + 0]) );
  }
  i1300.fontWeights = i1320
  return i1300
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1323 = data
  i1322.m_FaceIndex = i1323[0]
  i1322.m_FamilyName = i1323[1]
  i1322.m_StyleName = i1323[2]
  i1322.m_PointSize = i1323[3]
  i1322.m_Scale = i1323[4]
  i1322.m_UnitsPerEM = i1323[5]
  i1322.m_LineHeight = i1323[6]
  i1322.m_AscentLine = i1323[7]
  i1322.m_CapLine = i1323[8]
  i1322.m_MeanLine = i1323[9]
  i1322.m_Baseline = i1323[10]
  i1322.m_DescentLine = i1323[11]
  i1322.m_SuperscriptOffset = i1323[12]
  i1322.m_SuperscriptSize = i1323[13]
  i1322.m_SubscriptOffset = i1323[14]
  i1322.m_SubscriptSize = i1323[15]
  i1322.m_UnderlineOffset = i1323[16]
  i1322.m_UnderlineThickness = i1323[17]
  i1322.m_StrikethroughOffset = i1323[18]
  i1322.m_StrikethroughThickness = i1323[19]
  i1322.m_TabWidth = i1323[20]
  return i1322
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1327 = data
  i1326.m_Index = i1327[0]
  i1326.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1327[1], i1326.m_Metrics)
  i1326.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1327[2], i1326.m_GlyphRect)
  i1326.m_Scale = i1327[3]
  i1326.m_AtlasIndex = i1327[4]
  i1326.m_ClassDefinitionType = i1327[5]
  return i1326
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1329 = data
  i1328.m_Width = i1329[0]
  i1328.m_Height = i1329[1]
  i1328.m_HorizontalBearingX = i1329[2]
  i1328.m_HorizontalBearingY = i1329[3]
  i1328.m_HorizontalAdvance = i1329[4]
  return i1328
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1331 = data
  i1330.m_X = i1331[0]
  i1330.m_Y = i1331[1]
  i1330.m_Width = i1331[2]
  i1330.m_Height = i1331[3]
  return i1330
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.TMP_Character' )
  var i1335 = data
  i1334.m_ElementType = i1335[0]
  i1334.m_Unicode = i1335[1]
  i1334.m_GlyphIndex = i1335[2]
  i1334.m_Scale = i1335[3]
  return i1334
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1341 = data
  i1340.Name = i1341[0]
  i1340.PointSize = i1341[1]
  i1340.Scale = i1341[2]
  i1340.CharacterCount = i1341[3]
  i1340.LineHeight = i1341[4]
  i1340.Baseline = i1341[5]
  i1340.Ascender = i1341[6]
  i1340.CapHeight = i1341[7]
  i1340.Descender = i1341[8]
  i1340.CenterLine = i1341[9]
  i1340.SuperscriptOffset = i1341[10]
  i1340.SubscriptOffset = i1341[11]
  i1340.SubSize = i1341[12]
  i1340.Underline = i1341[13]
  i1340.UnderlineThickness = i1341[14]
  i1340.strikethrough = i1341[15]
  i1340.strikethroughThickness = i1341[16]
  i1340.TabWidth = i1341[17]
  i1340.Padding = i1341[18]
  i1340.AtlasWidth = i1341[19]
  i1340.AtlasHeight = i1341[20]
  return i1340
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1345 = data
  i1344.id = i1345[0]
  i1344.x = i1345[1]
  i1344.y = i1345[2]
  i1344.width = i1345[3]
  i1344.height = i1345[4]
  i1344.xOffset = i1345[5]
  i1344.yOffset = i1345[6]
  i1344.xAdvance = i1345[7]
  i1344.scale = i1345[8]
  return i1344
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.KerningTable' )
  var i1347 = data
  var i1349 = i1347[0]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.add(request.d('TMPro.KerningPair', i1349[i + 0]));
  }
  i1346.kerningPairs = i1348
  return i1346
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.KerningPair' )
  var i1353 = data
  i1352.xOffset = i1353[0]
  i1352.m_FirstGlyph = i1353[1]
  i1352.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1353[2], i1352.m_FirstGlyphAdjustments)
  i1352.m_SecondGlyph = i1353[3]
  i1352.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1353[4], i1352.m_SecondGlyphAdjustments)
  i1352.m_IgnoreSpacingAdjustments = !!i1353[5]
  return i1352
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1355 = data
  var i1357 = i1355[0]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1357[i + 0]));
  }
  i1354.m_GlyphPairAdjustmentRecords = i1356
  return i1354
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1361 = data
  i1360.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1361[0], i1360.m_FirstAdjustmentRecord)
  i1360.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1361[1], i1360.m_SecondAdjustmentRecord)
  i1360.m_FeatureLookupFlags = i1361[2]
  return i1360
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1365 = data
  i1364.sourceFontFileName = i1365[0]
  i1364.sourceFontFileGUID = i1365[1]
  i1364.pointSizeSamplingMode = i1365[2]
  i1364.pointSize = i1365[3]
  i1364.padding = i1365[4]
  i1364.packingMode = i1365[5]
  i1364.atlasWidth = i1365[6]
  i1364.atlasHeight = i1365[7]
  i1364.characterSetSelectionMode = i1365[8]
  i1364.characterSequence = i1365[9]
  i1364.referencedFontAssetGUID = i1365[10]
  i1364.referencedTextAssetGUID = i1365[11]
  i1364.fontStyle = i1365[12]
  i1364.fontStyleModifier = i1365[13]
  i1364.renderMode = i1365[14]
  i1364.includeFontFeatures = !!i1365[15]
  return i1364
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1369 = data
  request.r(i1369[0], i1369[1], 0, i1368, 'regularTypeface')
  request.r(i1369[2], i1369[3], 0, i1368, 'italicTypeface')
  return i1368
}

Deserializers["ItemData"] = function (request, data, root) {
  var i1370 = root || request.c( 'ItemData' )
  var i1371 = data
  i1370.itemName = i1371[0]
  request.r(i1371[1], i1371[2], 0, i1370, 'itemIcon')
  i1370.ItemCount = i1371[3]
  request.r(i1371[4], i1371[5], 0, i1370, 'collectItemSprite')
  i1370.color = i1371[6]
  request.r(i1371[7], i1371[8], 0, i1370, 'DecorationSprite')
  return i1370
}

Deserializers["TileData"] = function (request, data, root) {
  var i1372 = root || request.c( 'TileData' )
  var i1373 = data
  i1372.tileName = i1373[0]
  request.r(i1373[1], i1373[2], 0, i1372, 'tileSprite')
  i1372.isPowerup = !!i1373[3]
  i1372.isBreakable = !!i1373[4]
  i1372.isSwappable = !!i1373[5]
  i1372.isSpecialBreakable = !!i1373[6]
  return i1372
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1374 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 2) {
  request.r(i1377[i + 0], i1377[i + 1], 2, i1376, '')
  }
  i1374.atlasAssets = i1376
  i1374.scale = i1375[1]
  request.r(i1375[2], i1375[3], 0, i1374, 'skeletonJSON')
  i1374.isUpgradingBlendModeMaterials = !!i1375[4]
  i1374.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1375[5], i1374.blendModeMaterials)
  var i1379 = i1375[6]
  var i1378 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1379.length; i += 2) {
  request.r(i1379[i + 0], i1379[i + 1], 1, i1378, '')
  }
  i1374.skeletonDataModifiers = i1378
  var i1381 = i1375[7]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( i1381[i + 0] );
  }
  i1374.fromAnimation = i1380
  var i1383 = i1375[8]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( i1383[i + 0] );
  }
  i1374.toAnimation = i1382
  i1374.duration = i1375[9]
  i1374.defaultMix = i1375[10]
  request.r(i1375[11], i1375[12], 0, i1374, 'controller')
  return i1374
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1386 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1387 = data
  i1386.applyAdditiveMaterial = !!i1387[0]
  var i1389 = i1387[1]
  var i1388 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1389[i + 0]));
  }
  i1386.additiveMaterials = i1388
  var i1391 = i1387[2]
  var i1390 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1391[i + 0]));
  }
  i1386.multiplyMaterials = i1390
  var i1393 = i1387[3]
  var i1392 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1393[i + 0]));
  }
  i1386.screenMaterials = i1392
  i1386.requiresBlendModeMaterials = !!i1387[4]
  return i1386
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1396 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1397 = data
  i1396.pageName = i1397[0]
  request.r(i1397[1], i1397[2], 0, i1396, 'material')
  return i1396
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1400 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1401 = data
  request.r(i1401[0], i1401[1], 0, i1400, 'atlasFile')
  var i1403 = i1401[2]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 2) {
  request.r(i1403[i + 0], i1403[i + 1], 2, i1402, '')
  }
  i1400.materials = i1402
  i1400.textureLoadingMode = i1401[3]
  request.r(i1401[4], i1401[5], 0, i1400, 'onDemandTextureLoader')
  return i1400
}

Deserializers["DynamitePowerup"] = function (request, data, root) {
  var i1404 = root || request.c( 'DynamitePowerup' )
  var i1405 = data
  i1404.explosionRadius = i1405[0]
  i1404.tileName = i1405[1]
  request.r(i1405[2], i1405[3], 0, i1404, 'tileSprite')
  i1404.isPowerup = !!i1405[4]
  i1404.isBreakable = !!i1405[5]
  i1404.isSwappable = !!i1405[6]
  i1404.isSpecialBreakable = !!i1405[7]
  return i1404
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i1406 = root || request.c( 'AudioLibrary' )
  var i1407 = data
  var i1409 = i1407[0]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.add(request.d('AudioLibrary+ClipEntry', i1409[i + 0]));
  }
  i1406.clips = i1408
  return i1406
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i1412 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i1413 = data
  i1412.key = i1413[0]
  i1412.channel = i1413[1]
  request.r(i1413[2], i1413[3], 0, i1412, 'clip')
  i1412.volume = i1413[4]
  i1412.loop = !!i1413[5]
  return i1412
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1414 = root || request.c( 'TMPro.TMP_Settings' )
  var i1415 = data
  i1414.m_enableWordWrapping = !!i1415[0]
  i1414.m_enableKerning = !!i1415[1]
  i1414.m_enableExtraPadding = !!i1415[2]
  i1414.m_enableTintAllSprites = !!i1415[3]
  i1414.m_enableParseEscapeCharacters = !!i1415[4]
  i1414.m_EnableRaycastTarget = !!i1415[5]
  i1414.m_GetFontFeaturesAtRuntime = !!i1415[6]
  i1414.m_missingGlyphCharacter = i1415[7]
  i1414.m_warningsDisabled = !!i1415[8]
  request.r(i1415[9], i1415[10], 0, i1414, 'm_defaultFontAsset')
  i1414.m_defaultFontAssetPath = i1415[11]
  i1414.m_defaultFontSize = i1415[12]
  i1414.m_defaultAutoSizeMinRatio = i1415[13]
  i1414.m_defaultAutoSizeMaxRatio = i1415[14]
  i1414.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1415[15], i1415[16] )
  i1414.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1415[17], i1415[18] )
  i1414.m_autoSizeTextContainer = !!i1415[19]
  i1414.m_IsTextObjectScaleStatic = !!i1415[20]
  var i1417 = i1415[21]
  var i1416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1417.length; i += 2) {
  request.r(i1417[i + 0], i1417[i + 1], 1, i1416, '')
  }
  i1414.m_fallbackFontAssets = i1416
  i1414.m_matchMaterialPreset = !!i1415[22]
  request.r(i1415[23], i1415[24], 0, i1414, 'm_defaultSpriteAsset')
  i1414.m_defaultSpriteAssetPath = i1415[25]
  i1414.m_enableEmojiSupport = !!i1415[26]
  i1414.m_MissingCharacterSpriteUnicode = i1415[27]
  i1414.m_defaultColorGradientPresetsPath = i1415[28]
  request.r(i1415[29], i1415[30], 0, i1414, 'm_defaultStyleSheet')
  i1414.m_StyleSheetsResourcePath = i1415[31]
  request.r(i1415[32], i1415[33], 0, i1414, 'm_leadingCharacters')
  request.r(i1415[34], i1415[35], 0, i1414, 'm_followingCharacters')
  i1414.m_UseModernHangulLineBreakingRules = !!i1415[36]
  return i1414
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1418 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1419 = data
  i1418.hashCode = i1419[0]
  request.r(i1419[1], i1419[2], 0, i1418, 'material')
  i1418.materialHashCode = i1419[3]
  request.r(i1419[4], i1419[5], 0, i1418, 'spriteSheet')
  var i1421 = i1419[6]
  var i1420 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.add(request.d('TMPro.TMP_Sprite', i1421[i + 0]));
  }
  i1418.spriteInfoList = i1420
  var i1423 = i1419[7]
  var i1422 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1423.length; i += 2) {
  request.r(i1423[i + 0], i1423[i + 1], 1, i1422, '')
  }
  i1418.fallbackSpriteAssets = i1422
  i1418.m_Version = i1419[8]
  i1418.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1419[9], i1418.m_FaceInfo)
  var i1425 = i1419[10]
  var i1424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.add(request.d('TMPro.TMP_SpriteCharacter', i1425[i + 0]));
  }
  i1418.m_SpriteCharacterTable = i1424
  var i1427 = i1419[11]
  var i1426 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.add(request.d('TMPro.TMP_SpriteGlyph', i1427[i + 0]));
  }
  i1418.m_SpriteGlyphTable = i1426
  return i1418
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1430 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1431 = data
  i1430.name = i1431[0]
  i1430.hashCode = i1431[1]
  i1430.unicode = i1431[2]
  i1430.pivot = new pc.Vec2( i1431[3], i1431[4] )
  request.r(i1431[5], i1431[6], 0, i1430, 'sprite')
  i1430.id = i1431[7]
  i1430.x = i1431[8]
  i1430.y = i1431[9]
  i1430.width = i1431[10]
  i1430.height = i1431[11]
  i1430.xOffset = i1431[12]
  i1430.yOffset = i1431[13]
  i1430.xAdvance = i1431[14]
  i1430.scale = i1431[15]
  return i1430
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1437 = data
  i1436.m_Name = i1437[0]
  i1436.m_HashCode = i1437[1]
  i1436.m_ElementType = i1437[2]
  i1436.m_Unicode = i1437[3]
  i1436.m_GlyphIndex = i1437[4]
  i1436.m_Scale = i1437[5]
  return i1436
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1440 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1441 = data
  request.r(i1441[0], i1441[1], 0, i1440, 'sprite')
  i1440.m_Index = i1441[2]
  i1440.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1441[3], i1440.m_Metrics)
  i1440.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1441[4], i1440.m_GlyphRect)
  i1440.m_Scale = i1441[5]
  i1440.m_AtlasIndex = i1441[6]
  i1440.m_ClassDefinitionType = i1441[7]
  return i1440
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1442 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1443 = data
  var i1445 = i1443[0]
  var i1444 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.add(request.d('TMPro.TMP_Style', i1445[i + 0]));
  }
  i1442.m_StyleList = i1444
  return i1442
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1448 = root || request.c( 'TMPro.TMP_Style' )
  var i1449 = data
  i1448.m_Name = i1449[0]
  i1448.m_HashCode = i1449[1]
  i1448.m_OpeningDefinition = i1449[2]
  i1448.m_ClosingDefinition = i1449[3]
  i1448.m_OpeningTagArray = i1449[4]
  i1448.m_ClosingTagArray = i1449[5]
  i1448.m_OpeningTagUnicodeArray = i1449[6]
  i1448.m_ClosingTagUnicodeArray = i1449[7]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1451 = data
  var i1453 = i1451[0]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1453[i + 0]) );
  }
  i1450.files = i1452
  i1450.componentToPrefabIds = i1451[1]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1457 = data
  i1456.path = i1457[0]
  request.r(i1457[1], i1457[2], 0, i1456, 'unityObject')
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1459 = data
  var i1461 = i1459[0]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1461[i + 0]) );
  }
  i1458.scriptsExecutionOrder = i1460
  var i1463 = i1459[1]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1463[i + 0]) );
  }
  i1458.sortingLayers = i1462
  var i1465 = i1459[2]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1465[i + 0]) );
  }
  i1458.cullingLayers = i1464
  i1458.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1459[3], i1458.timeSettings)
  i1458.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1459[4], i1458.physicsSettings)
  i1458.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1459[5], i1458.physics2DSettings)
  i1458.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1459[6], i1458.qualitySettings)
  i1458.enableRealtimeShadows = !!i1459[7]
  i1458.enableAutoInstancing = !!i1459[8]
  i1458.enableDynamicBatching = !!i1459[9]
  i1458.lightmapEncodingQuality = i1459[10]
  i1458.desiredColorSpace = i1459[11]
  var i1467 = i1459[12]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( i1467[i + 0] );
  }
  i1458.allTags = i1466
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.value = i1471[1]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1475 = data
  i1474.id = i1475[0]
  i1474.name = i1475[1]
  i1474.value = i1475[2]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1479 = data
  i1478.id = i1479[0]
  i1478.name = i1479[1]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1481 = data
  i1480.fixedDeltaTime = i1481[0]
  i1480.maximumDeltaTime = i1481[1]
  i1480.timeScale = i1481[2]
  i1480.maximumParticleTimestep = i1481[3]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1483 = data
  i1482.gravity = new pc.Vec3( i1483[0], i1483[1], i1483[2] )
  i1482.defaultSolverIterations = i1483[3]
  i1482.bounceThreshold = i1483[4]
  i1482.autoSyncTransforms = !!i1483[5]
  i1482.autoSimulation = !!i1483[6]
  var i1485 = i1483[7]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1485[i + 0]) );
  }
  i1482.collisionMatrix = i1484
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1489 = data
  i1488.enabled = !!i1489[0]
  i1488.layerId = i1489[1]
  i1488.otherLayerId = i1489[2]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1491 = data
  request.r(i1491[0], i1491[1], 0, i1490, 'material')
  i1490.gravity = new pc.Vec2( i1491[2], i1491[3] )
  i1490.positionIterations = i1491[4]
  i1490.velocityIterations = i1491[5]
  i1490.velocityThreshold = i1491[6]
  i1490.maxLinearCorrection = i1491[7]
  i1490.maxAngularCorrection = i1491[8]
  i1490.maxTranslationSpeed = i1491[9]
  i1490.maxRotationSpeed = i1491[10]
  i1490.baumgarteScale = i1491[11]
  i1490.baumgarteTOIScale = i1491[12]
  i1490.timeToSleep = i1491[13]
  i1490.linearSleepTolerance = i1491[14]
  i1490.angularSleepTolerance = i1491[15]
  i1490.defaultContactOffset = i1491[16]
  i1490.autoSimulation = !!i1491[17]
  i1490.queriesHitTriggers = !!i1491[18]
  i1490.queriesStartInColliders = !!i1491[19]
  i1490.callbacksOnDisable = !!i1491[20]
  i1490.reuseCollisionCallbacks = !!i1491[21]
  i1490.autoSyncTransforms = !!i1491[22]
  var i1493 = i1491[23]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1493[i + 0]) );
  }
  i1490.collisionMatrix = i1492
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1497 = data
  i1496.enabled = !!i1497[0]
  i1496.layerId = i1497[1]
  i1496.otherLayerId = i1497[2]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1499 = data
  var i1501 = i1499[0]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1501[i + 0]) );
  }
  i1498.qualityLevels = i1500
  var i1503 = i1499[1]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( i1503[i + 0] );
  }
  i1498.names = i1502
  i1498.shadows = i1499[2]
  i1498.anisotropicFiltering = i1499[3]
  i1498.antiAliasing = i1499[4]
  i1498.lodBias = i1499[5]
  i1498.shadowCascades = i1499[6]
  i1498.shadowDistance = i1499[7]
  i1498.shadowmaskMode = i1499[8]
  i1498.shadowProjection = i1499[9]
  i1498.shadowResolution = i1499[10]
  i1498.softParticles = !!i1499[11]
  i1498.softVegetation = !!i1499[12]
  i1498.activeColorSpace = i1499[13]
  i1498.desiredColorSpace = i1499[14]
  i1498.masterTextureLimit = i1499[15]
  i1498.maxQueuedFrames = i1499[16]
  i1498.particleRaycastBudget = i1499[17]
  i1498.pixelLightCount = i1499[18]
  i1498.realtimeReflectionProbes = !!i1499[19]
  i1498.shadowCascade2Split = i1499[20]
  i1498.shadowCascade4Split = new pc.Vec3( i1499[21], i1499[22], i1499[23] )
  i1498.streamingMipmapsActive = !!i1499[24]
  i1498.vSyncCount = i1499[25]
  i1498.asyncUploadBufferSize = i1499[26]
  i1498.asyncUploadTimeSlice = i1499[27]
  i1498.billboardsFaceCameraPosition = !!i1499[28]
  i1498.shadowNearPlaneOffset = i1499[29]
  i1498.streamingMipmapsMemoryBudget = i1499[30]
  i1498.maximumLODLevel = i1499[31]
  i1498.streamingMipmapsAddAllCameras = !!i1499[32]
  i1498.streamingMipmapsMaxLevelReduction = i1499[33]
  i1498.streamingMipmapsRenderersPerFrame = i1499[34]
  i1498.resolutionScalingFixedDPIFactor = i1499[35]
  i1498.streamingMipmapsMaxFileIORequests = i1499[36]
  i1498.currentQualityLevel = i1499[37]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1509 = data
  i1508.weight = i1509[0]
  i1508.vertices = i1509[1]
  i1508.normals = i1509[2]
  i1508.tangents = i1509[3]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1513 = data
  i1512.mode = i1513[0]
  i1512.parameter = i1513[1]
  i1512.threshold = i1513[2]
  return i1512
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1514 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1515 = data
  i1514.xPlacement = i1515[0]
  i1514.yPlacement = i1515[1]
  i1514.xAdvance = i1515[2]
  i1514.yAdvance = i1515[3]
  return i1514
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1516 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1517 = data
  i1516.m_GlyphIndex = i1517[0]
  i1516.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1517[1], i1516.m_GlyphValueRecord)
  return i1516
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1518 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1519 = data
  i1518.m_XPlacement = i1519[0]
  i1518.m_YPlacement = i1519[1]
  i1518.m_XAdvance = i1519[2]
  i1518.m_YAdvance = i1519[3]
  return i1518
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[27],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[27],"98":[99],"100":[101],"102":[101],"29":[0],"20":[17],"103":[17],"104":[17],"105":[27],"106":[107],"108":[0],"109":[1,0],"110":[99],"43":[1,0],"111":[51,99],"112":[99],"113":[99,114],"115":[76],"116":[84],"117":[107],"118":[119],"120":[50],"121":[27],"122":[123],"124":[0],"125":[99,0],"5":[0,1],"126":[0],"127":[1,0],"128":[99],"129":[1,0],"130":[0],"131":[132],"133":[132],"134":[132],"135":[0],"136":[0],"31":[29],"4":[1,0],"137":[0],"30":[29],"138":[0],"46":[0],"44":[0],"139":[0],"140":[0],"141":[0],"142":[0],"47":[0],"143":[0],"144":[1,0],"145":[0],"146":[0],"147":[0],"148":[0],"149":[1,0],"150":[0],"151":[54],"152":[54],"55":[54],"153":[54],"154":[27],"155":[27]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","Item","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.Sprite","ItemData","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","TileCell","TileData","Tile","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","CartoonFX.CFXR_Effect","UnityEngine.Light","AnimatedTile","UnityEngine.GameObject","UnityEngine.TrailRenderer","StateEvents","PositionTracking","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BasicFade","UnityEngine.CanvasGroup","AppearAnimation","PlayerGuide","UnityEngine.UI.Button","GameManager","RectAnimator","TileManager","DynamitePowerup","DynamiteEffect","SpecialTileManager","Spine.Unity.SkeletonGraphic","UnityEngine.UI.HorizontalLayoutGroup","UIMoveTo","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","Spine.Unity.SkeletonDataAsset","AnimatedTileSpawner","UnityEngine.SpriteRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MergeHands","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AudioManager","AudioLibrary","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CartoonFX.CFXR_EmissionBySurface","CartoonFX.CFXR_ParticleText","Kino.Bloom","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2023.1.0f1";

Deserializers.productName = "Piggy Kingdom - Renovation";

Deserializers.lunaInitializationTime = "09/29/2025 07:36:59";

Deserializers.lunaDaysRunning = "7.1";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Farm-Renovation";

Deserializers.lunaAppID = "32752";

Deserializers.projectId = "bab41f24a77b7a944b71277894eff5d3";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.8.2\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1941";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5487";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "396db778-2cbd-4be4-b899-4a118a59be16";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

