var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.JointSpring' )
  var i767 = data
  i766.spring = i767[0]
  i766.damper = i767[1]
  i766.targetPosition = i767[2]
  return i766
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.JointMotor' )
  var i769 = data
  i768.m_TargetVelocity = i769[0]
  i768.m_Force = i769[1]
  i768.m_FreeSpin = i769[2]
  return i768
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.JointLimits' )
  var i771 = data
  i770.m_Min = i771[0]
  i770.m_Max = i771[1]
  i770.m_Bounciness = i771[2]
  i770.m_BounceMinVelocity = i771[3]
  i770.m_ContactDistance = i771[4]
  i770.minBounce = i771[5]
  i770.maxBounce = i771[6]
  return i770
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.JointDrive' )
  var i773 = data
  i772.m_PositionSpring = i773[0]
  i772.m_PositionDamper = i773[1]
  i772.m_MaximumForce = i773[2]
  i772.m_UseAcceleration = i773[3]
  return i772
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i775 = data
  i774.m_Spring = i775[0]
  i774.m_Damper = i775[1]
  return i774
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i777 = data
  i776.m_Limit = i777[0]
  i776.m_Bounciness = i777[1]
  i776.m_ContactDistance = i777[2]
  return i776
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i779 = data
  i778.m_ExtremumSlip = i779[0]
  i778.m_ExtremumValue = i779[1]
  i778.m_AsymptoteSlip = i779[2]
  i778.m_AsymptoteValue = i779[3]
  i778.m_Stiffness = i779[4]
  return i778
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i781 = data
  i780.m_LowerAngle = i781[0]
  i780.m_UpperAngle = i781[1]
  return i780
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i783 = data
  i782.m_MotorSpeed = i783[0]
  i782.m_MaximumMotorTorque = i783[1]
  return i782
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i785 = data
  i784.m_DampingRatio = i785[0]
  i784.m_Frequency = i785[1]
  i784.m_Angle = i785[2]
  return i784
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i787 = data
  i786.m_LowerTranslation = i787[0]
  i786.m_UpperTranslation = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i789 = data
  i788.name = i789[0]
  i788.width = i789[1]
  i788.height = i789[2]
  i788.mipmapCount = i789[3]
  i788.anisoLevel = i789[4]
  i788.filterMode = i789[5]
  i788.hdr = !!i789[6]
  i788.format = i789[7]
  i788.wrapMode = i789[8]
  i788.alphaIsTransparency = !!i789[9]
  i788.alphaSource = i789[10]
  i788.graphicsFormat = i789[11]
  i788.sRGBTexture = !!i789[12]
  i788.desiredColorSpace = i789[13]
  i788.wrapU = i789[14]
  i788.wrapV = i789[15]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i791 = data
  i790.pivot = new pc.Vec2( i791[0], i791[1] )
  i790.anchorMin = new pc.Vec2( i791[2], i791[3] )
  i790.anchorMax = new pc.Vec2( i791[4], i791[5] )
  i790.sizeDelta = new pc.Vec2( i791[6], i791[7] )
  i790.anchoredPosition3D = new pc.Vec3( i791[8], i791[9], i791[10] )
  i790.rotation = new pc.Quat(i791[11], i791[12], i791[13], i791[14])
  i790.scale = new pc.Vec3( i791[15], i791[16], i791[17] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i793 = data
  i792.cullTransparentMesh = !!i793[0]
  return i792
}

Deserializers["Item"] = function (request, data, root) {
  var i794 = root || request.c( 'Item' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'itemImage')
  request.r(i795[2], i795[3], 0, i794, 'collectItemImage')
  request.r(i795[4], i795[5], 0, i794, 'itemCountText')
  i794.ItemCount = i795[6]
  request.r(i795[7], i795[8], 0, i794, 'completeSprite')
  request.r(i795[9], i795[10], 0, i794, 'data')
  request.r(i795[11], i795[12], 0, i794, 'UIMovement')
  request.r(i795[13], i795[14], 0, i794, 'FurnitureImage')
  i794.portraitLocation = new pc.Vec2( i795[15], i795[16] )
  i794.landscapeLocation = new pc.Vec2( i795[17], i795[18] )
  return i794
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.Image' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'm_Sprite')
  i796.m_Type = i797[2]
  i796.m_PreserveAspect = !!i797[3]
  i796.m_FillCenter = !!i797[4]
  i796.m_FillMethod = i797[5]
  i796.m_FillAmount = i797[6]
  i796.m_FillClockwise = !!i797[7]
  i796.m_FillOrigin = i797[8]
  i796.m_UseSpriteMesh = !!i797[9]
  i796.m_PixelsPerUnitMultiplier = i797[10]
  request.r(i797[11], i797[12], 0, i796, 'm_Material')
  i796.m_Maskable = !!i797[13]
  i796.m_Color = new pc.Color(i797[14], i797[15], i797[16], i797[17])
  i796.m_RaycastTarget = !!i797[18]
  i796.m_RaycastPadding = new pc.Vec4( i797[19], i797[20], i797[21], i797[22] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i799 = data
  i798.name = i799[0]
  i798.tagId = i799[1]
  i798.enabled = !!i799[2]
  i798.isStatic = !!i799[3]
  i798.layer = i799[4]
  return i798
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i800 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i801 = data
  i800.m_hasFontAssetChanged = !!i801[0]
  request.r(i801[1], i801[2], 0, i800, 'm_baseMaterial')
  i800.m_maskOffset = new pc.Vec4( i801[3], i801[4], i801[5], i801[6] )
  i800.m_text = i801[7]
  i800.m_isRightToLeft = !!i801[8]
  request.r(i801[9], i801[10], 0, i800, 'm_fontAsset')
  request.r(i801[11], i801[12], 0, i800, 'm_sharedMaterial')
  var i803 = i801[13]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i800.m_fontSharedMaterials = i802
  request.r(i801[14], i801[15], 0, i800, 'm_fontMaterial')
  var i805 = i801[16]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i800.m_fontMaterials = i804
  i800.m_fontColor32 = UnityEngine.Color32.ConstructColor(i801[17], i801[18], i801[19], i801[20])
  i800.m_fontColor = new pc.Color(i801[21], i801[22], i801[23], i801[24])
  i800.m_enableVertexGradient = !!i801[25]
  i800.m_colorMode = i801[26]
  i800.m_fontColorGradient = request.d('TMPro.VertexGradient', i801[27], i800.m_fontColorGradient)
  request.r(i801[28], i801[29], 0, i800, 'm_fontColorGradientPreset')
  request.r(i801[30], i801[31], 0, i800, 'm_spriteAsset')
  i800.m_tintAllSprites = !!i801[32]
  request.r(i801[33], i801[34], 0, i800, 'm_StyleSheet')
  i800.m_TextStyleHashCode = i801[35]
  i800.m_overrideHtmlColors = !!i801[36]
  i800.m_faceColor = UnityEngine.Color32.ConstructColor(i801[37], i801[38], i801[39], i801[40])
  i800.m_fontSize = i801[41]
  i800.m_fontSizeBase = i801[42]
  i800.m_fontWeight = i801[43]
  i800.m_enableAutoSizing = !!i801[44]
  i800.m_fontSizeMin = i801[45]
  i800.m_fontSizeMax = i801[46]
  i800.m_fontStyle = i801[47]
  i800.m_HorizontalAlignment = i801[48]
  i800.m_VerticalAlignment = i801[49]
  i800.m_textAlignment = i801[50]
  i800.m_characterSpacing = i801[51]
  i800.m_wordSpacing = i801[52]
  i800.m_lineSpacing = i801[53]
  i800.m_lineSpacingMax = i801[54]
  i800.m_paragraphSpacing = i801[55]
  i800.m_charWidthMaxAdj = i801[56]
  i800.m_enableWordWrapping = !!i801[57]
  i800.m_wordWrappingRatios = i801[58]
  i800.m_overflowMode = i801[59]
  request.r(i801[60], i801[61], 0, i800, 'm_linkedTextComponent')
  request.r(i801[62], i801[63], 0, i800, 'parentLinkedComponent')
  i800.m_enableKerning = !!i801[64]
  i800.m_enableExtraPadding = !!i801[65]
  i800.checkPaddingRequired = !!i801[66]
  i800.m_isRichText = !!i801[67]
  i800.m_parseCtrlCharacters = !!i801[68]
  i800.m_isOrthographic = !!i801[69]
  i800.m_isCullingEnabled = !!i801[70]
  i800.m_horizontalMapping = i801[71]
  i800.m_verticalMapping = i801[72]
  i800.m_uvLineOffset = i801[73]
  i800.m_geometrySortingOrder = i801[74]
  i800.m_IsTextObjectScaleStatic = !!i801[75]
  i800.m_VertexBufferAutoSizeReduction = !!i801[76]
  i800.m_useMaxVisibleDescender = !!i801[77]
  i800.m_pageToDisplay = i801[78]
  i800.m_margin = new pc.Vec4( i801[79], i801[80], i801[81], i801[82] )
  i800.m_isUsingLegacyAnimationComponent = !!i801[83]
  i800.m_isVolumetricText = !!i801[84]
  request.r(i801[85], i801[86], 0, i800, 'm_Material')
  i800.m_Maskable = !!i801[87]
  i800.m_Color = new pc.Color(i801[88], i801[89], i801[90], i801[91])
  i800.m_RaycastTarget = !!i801[92]
  i800.m_RaycastPadding = new pc.Vec4( i801[93], i801[94], i801[95], i801[96] )
  return i800
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.VertexGradient' )
  var i809 = data
  i808.topLeft = new pc.Color(i809[0], i809[1], i809[2], i809[3])
  i808.topRight = new pc.Color(i809[4], i809[5], i809[6], i809[7])
  i808.bottomLeft = new pc.Color(i809[8], i809[9], i809[10], i809[11])
  i808.bottomRight = new pc.Color(i809[12], i809[13], i809[14], i809[15])
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i810 = root || new pc.UnityMaterial()
  var i811 = data
  i810.name = i811[0]
  request.r(i811[1], i811[2], 0, i810, 'shader')
  i810.renderQueue = i811[3]
  i810.enableInstancing = !!i811[4]
  var i813 = i811[5]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i813[i + 0]) );
  }
  i810.floatParameters = i812
  var i815 = i811[6]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i815[i + 0]) );
  }
  i810.colorParameters = i814
  var i817 = i811[7]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i817[i + 0]) );
  }
  i810.vectorParameters = i816
  var i819 = i811[8]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i819[i + 0]) );
  }
  i810.textureParameters = i818
  var i821 = i811[9]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i821[i + 0]) );
  }
  i810.materialFlags = i820
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i825 = data
  i824.name = i825[0]
  i824.value = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i829 = data
  i828.name = i829[0]
  i828.value = new pc.Color(i829[1], i829[2], i829[3], i829[4])
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i833 = data
  i832.name = i833[0]
  i832.value = new pc.Vec4( i833[1], i833[2], i833[3], i833[4] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i837 = data
  i836.name = i837[0]
  request.r(i837[1], i837[2], 0, i836, 'value')
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i841 = data
  i840.name = i841[0]
  i840.enabled = !!i841[1]
  return i840
}

Deserializers["TileCell"] = function (request, data, root) {
  var i842 = root || request.c( 'TileCell' )
  var i843 = data
  i842.coordinate = new pc.Vec2( i843[0], i843[1] )
  i842.TileBreakEvent = request.d('UnityEngine.Events.UnityEvent', i843[2], i842.TileBreakEvent)
  request.r(i843[3], i843[4], 0, i842, 'tileData')
  request.r(i843[5], i843[6], 0, i842, 'tile')
  return i842
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i845 = data
  i844.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i845[0], i844.m_PersistentCalls)
  return i844
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i847 = data
  var i849 = i847[0]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i849.length; i += 1) {
    i848.add(request.d('UnityEngine.Events.PersistentCall', i849[i + 0]));
  }
  i846.m_Calls = i848
  return i846
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'm_Target')
  i852.m_TargetAssemblyTypeName = i853[2]
  i852.m_MethodName = i853[3]
  i852.m_Mode = i853[4]
  i852.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i853[5], i852.m_Arguments)
  i852.m_CallState = i853[6]
  return i852
}

Deserializers["Tile"] = function (request, data, root) {
  var i854 = root || request.c( 'Tile' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'itemImage')
  request.r(i855[2], i855[3], 0, i854, 'tileData')
  i854.MovementMagnitude = i855[4]
  i854.MovementDuration = i855[5]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i857 = data
  i856.position = new pc.Vec3( i857[0], i857[1], i857[2] )
  i856.scale = new pc.Vec3( i857[3], i857[4], i857[5] )
  i856.rotation = new pc.Quat(i857[6], i857[7], i857[8], i857[9])
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i859 = data
  i858.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i859[0], i858.main)
  i858.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i859[1], i858.colorBySpeed)
  i858.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i859[2], i858.colorOverLifetime)
  i858.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i859[3], i858.emission)
  i858.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i859[4], i858.rotationBySpeed)
  i858.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i859[5], i858.rotationOverLifetime)
  i858.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i859[6], i858.shape)
  i858.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i859[7], i858.sizeBySpeed)
  i858.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i859[8], i858.sizeOverLifetime)
  i858.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i859[9], i858.textureSheetAnimation)
  i858.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i859[10], i858.velocityOverLifetime)
  i858.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i859[11], i858.noise)
  i858.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i859[12], i858.inheritVelocity)
  i858.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i859[13], i858.forceOverLifetime)
  i858.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i859[14], i858.limitVelocityOverLifetime)
  i858.useAutoRandomSeed = !!i859[15]
  i858.randomSeed = i859[16]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i860 = root || new pc.ParticleSystemMain()
  var i861 = data
  i860.duration = i861[0]
  i860.loop = !!i861[1]
  i860.prewarm = !!i861[2]
  i860.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[3], i860.startDelay)
  i860.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[4], i860.startLifetime)
  i860.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[5], i860.startSpeed)
  i860.startSize3D = !!i861[6]
  i860.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[7], i860.startSizeX)
  i860.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[8], i860.startSizeY)
  i860.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[9], i860.startSizeZ)
  i860.startRotation3D = !!i861[10]
  i860.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[11], i860.startRotationX)
  i860.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[12], i860.startRotationY)
  i860.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[13], i860.startRotationZ)
  i860.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i861[14], i860.startColor)
  i860.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[15], i860.gravityModifier)
  i860.simulationSpace = i861[16]
  request.r(i861[17], i861[18], 0, i860, 'customSimulationSpace')
  i860.simulationSpeed = i861[19]
  i860.useUnscaledTime = !!i861[20]
  i860.scalingMode = i861[21]
  i860.playOnAwake = !!i861[22]
  i860.maxParticles = i861[23]
  i860.emitterVelocityMode = i861[24]
  i860.stopAction = i861[25]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i862 = root || new pc.MinMaxCurve()
  var i863 = data
  i862.mode = i863[0]
  i862.curveMin = new pc.AnimationCurve( { keys_flow: i863[1] } )
  i862.curveMax = new pc.AnimationCurve( { keys_flow: i863[2] } )
  i862.curveMultiplier = i863[3]
  i862.constantMin = i863[4]
  i862.constantMax = i863[5]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i864 = root || new pc.MinMaxGradient()
  var i865 = data
  i864.mode = i865[0]
  i864.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i865[1], i864.gradientMin)
  i864.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i865[2], i864.gradientMax)
  i864.colorMin = new pc.Color(i865[3], i865[4], i865[5], i865[6])
  i864.colorMax = new pc.Color(i865[7], i865[8], i865[9], i865[10])
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i867 = data
  i866.mode = i867[0]
  var i869 = i867[1]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i869[i + 0]) );
  }
  i866.colorKeys = i868
  var i871 = i867[2]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i871[i + 0]) );
  }
  i866.alphaKeys = i870
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemColorBySpeed()
  var i873 = data
  i872.enabled = !!i873[0]
  i872.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i873[1], i872.color)
  i872.range = new pc.Vec2( i873[2], i873[3] )
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i877 = data
  i876.color = new pc.Color(i877[0], i877[1], i877[2], i877[3])
  i876.time = i877[4]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i881 = data
  i880.alpha = i881[0]
  i880.time = i881[1]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemColorOverLifetime()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i883[1], i882.color)
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemEmitter()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[1], i884.rateOverTime)
  i884.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[2], i884.rateOverDistance)
  var i887 = i885[3]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i887[i + 0]) );
  }
  i884.bursts = i886
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemBurst()
  var i891 = data
  i890.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[0], i890.count)
  i890.cycleCount = i891[1]
  i890.minCount = i891[2]
  i890.maxCount = i891[3]
  i890.repeatInterval = i891[4]
  i890.time = i891[5]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemRotationBySpeed()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.x)
  i892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.y)
  i892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.z)
  i892.separateAxes = !!i893[4]
  i892.range = new pc.Vec2( i893[5], i893[6] )
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemRotationOverLifetime()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[1], i894.x)
  i894.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[2], i894.y)
  i894.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[3], i894.z)
  i894.separateAxes = !!i895[4]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemShape()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.shapeType = i897[1]
  i896.randomDirectionAmount = i897[2]
  i896.sphericalDirectionAmount = i897[3]
  i896.randomPositionAmount = i897[4]
  i896.alignToDirection = !!i897[5]
  i896.radius = i897[6]
  i896.radiusMode = i897[7]
  i896.radiusSpread = i897[8]
  i896.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[9], i896.radiusSpeed)
  i896.radiusThickness = i897[10]
  i896.angle = i897[11]
  i896.length = i897[12]
  i896.boxThickness = new pc.Vec3( i897[13], i897[14], i897[15] )
  i896.meshShapeType = i897[16]
  request.r(i897[17], i897[18], 0, i896, 'mesh')
  request.r(i897[19], i897[20], 0, i896, 'meshRenderer')
  request.r(i897[21], i897[22], 0, i896, 'skinnedMeshRenderer')
  i896.useMeshMaterialIndex = !!i897[23]
  i896.meshMaterialIndex = i897[24]
  i896.useMeshColors = !!i897[25]
  i896.normalOffset = i897[26]
  i896.arc = i897[27]
  i896.arcMode = i897[28]
  i896.arcSpread = i897[29]
  i896.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[30], i896.arcSpeed)
  i896.donutRadius = i897[31]
  i896.position = new pc.Vec3( i897[32], i897[33], i897[34] )
  i896.rotation = new pc.Vec3( i897[35], i897[36], i897[37] )
  i896.scale = new pc.Vec3( i897[38], i897[39], i897[40] )
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemSizeBySpeed()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[1], i898.x)
  i898.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.y)
  i898.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[3], i898.z)
  i898.separateAxes = !!i899[4]
  i898.range = new pc.Vec2( i899[5], i899[6] )
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemSizeOverLifetime()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[1], i900.x)
  i900.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[2], i900.y)
  i900.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[3], i900.z)
  i900.separateAxes = !!i901[4]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.mode = i903[1]
  i902.animation = i903[2]
  i902.numTilesX = i903[3]
  i902.numTilesY = i903[4]
  i902.useRandomRow = !!i903[5]
  i902.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[6], i902.frameOverTime)
  i902.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[7], i902.startFrame)
  i902.cycleCount = i903[8]
  i902.rowIndex = i903[9]
  i902.flipU = i903[10]
  i902.flipV = i903[11]
  i902.spriteCount = i903[12]
  var i905 = i903[13]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i902.sprites = i904
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[1], i908.x)
  i908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.y)
  i908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.z)
  i908.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[4], i908.radial)
  i908.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[5], i908.speedModifier)
  i908.space = i909[6]
  i908.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[7], i908.orbitalX)
  i908.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[8], i908.orbitalY)
  i908.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[9], i908.orbitalZ)
  i908.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[10], i908.orbitalOffsetX)
  i908.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[11], i908.orbitalOffsetY)
  i908.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[12], i908.orbitalOffsetZ)
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemNoise()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.separateAxes = !!i911[1]
  i910.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.strengthX)
  i910.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[3], i910.strengthY)
  i910.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[4], i910.strengthZ)
  i910.frequency = i911[5]
  i910.damping = !!i911[6]
  i910.octaveCount = i911[7]
  i910.octaveMultiplier = i911[8]
  i910.octaveScale = i911[9]
  i910.quality = i911[10]
  i910.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[11], i910.scrollSpeed)
  i910.scrollSpeedMultiplier = i911[12]
  i910.remapEnabled = !!i911[13]
  i910.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[14], i910.remapX)
  i910.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[15], i910.remapY)
  i910.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[16], i910.remapZ)
  i910.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[17], i910.positionAmount)
  i910.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[18], i910.rotationAmount)
  i910.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[19], i910.sizeAmount)
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemInheritVelocity()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.mode = i913[1]
  i912.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[2], i912.curve)
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemForceOverLifetime()
  var i915 = data
  i914.enabled = !!i915[0]
  i914.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[1], i914.x)
  i914.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[2], i914.y)
  i914.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[3], i914.z)
  i914.space = i915[4]
  i914.randomized = !!i915[5]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i916 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i917 = data
  i916.enabled = !!i917[0]
  i916.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[1], i916.limit)
  i916.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[2], i916.limitX)
  i916.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[3], i916.limitY)
  i916.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[4], i916.limitZ)
  i916.dampen = i917[5]
  i916.separateAxes = !!i917[6]
  i916.space = i917[7]
  i916.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[8], i916.drag)
  i916.multiplyDragByParticleSize = !!i917[9]
  i916.multiplyDragByParticleVelocity = !!i917[10]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i919 = data
  i918.enabled = !!i919[0]
  request.r(i919[1], i919[2], 0, i918, 'sharedMaterial')
  var i921 = i919[3]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.sharedMaterials = i920
  i918.receiveShadows = !!i919[4]
  i918.shadowCastingMode = i919[5]
  i918.sortingLayerID = i919[6]
  i918.sortingOrder = i919[7]
  i918.lightmapIndex = i919[8]
  i918.lightmapSceneIndex = i919[9]
  i918.lightmapScaleOffset = new pc.Vec4( i919[10], i919[11], i919[12], i919[13] )
  i918.lightProbeUsage = i919[14]
  i918.reflectionProbeUsage = i919[15]
  request.r(i919[16], i919[17], 0, i918, 'mesh')
  i918.meshCount = i919[18]
  i918.activeVertexStreamsCount = i919[19]
  i918.alignment = i919[20]
  i918.renderMode = i919[21]
  i918.sortMode = i919[22]
  i918.lengthScale = i919[23]
  i918.velocityScale = i919[24]
  i918.cameraVelocityScale = i919[25]
  i918.normalDirection = i919[26]
  i918.sortingFudge = i919[27]
  i918.minParticleSize = i919[28]
  i918.maxParticleSize = i919[29]
  i918.pivot = new pc.Vec3( i919[30], i919[31], i919[32] )
  request.r(i919[33], i919[34], 0, i918, 'trailMaterial')
  return i918
}

Deserializers["CartoonFX.CFXR_Effect"] = function (request, data, root) {
  var i922 = root || request.c( 'CartoonFX.CFXR_Effect' )
  var i923 = data
  i922.clearBehavior = i923[0]
  i922.cameraShake = request.d('CartoonFX.CFXR_Effect+CameraShake', i923[1], i922.cameraShake)
  var i925 = i923[2]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('CartoonFX.CFXR_Effect+AnimatedLight', i925[i + 0]) );
  }
  i922.animatedLights = i924
  request.r(i923[3], i923[4], 0, i922, 'fadeOutReference')
  return i922
}

Deserializers["CartoonFX.CFXR_Effect+CameraShake"] = function (request, data, root) {
  var i926 = root || request.c( 'CartoonFX.CFXR_Effect+CameraShake' )
  var i927 = data
  i926.camEnabled = !!i927[0]
  i926.useMainCamera = !!i927[1]
  var i929 = i927[2]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 1, i928, '')
  }
  i926.cameras = i928
  i926.delay = i927[3]
  i926.duration = i927[4]
  i926.shakeSpace = i927[5]
  i926.shakeStrength = new pc.Vec3( i927[6], i927[7], i927[8] )
  i926.shakeCurve = new pc.AnimationCurve( { keys_flow: i927[9] } )
  i926.shakesDelay = i927[10]
  return i926
}

Deserializers["CartoonFX.CFXR_Effect+AnimatedLight"] = function (request, data, root) {
  var i934 = root || request.c( 'CartoonFX.CFXR_Effect+AnimatedLight' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'light')
  i934.loop = !!i935[2]
  i934.animateIntensity = !!i935[3]
  i934.intensityStart = i935[4]
  i934.intensityEnd = i935[5]
  i934.intensityDuration = i935[6]
  i934.intensityCurve = new pc.AnimationCurve( { keys_flow: i935[7] } )
  i934.perlinIntensity = !!i935[8]
  i934.perlinIntensitySpeed = i935[9]
  i934.fadeIn = !!i935[10]
  i934.fadeInDuration = i935[11]
  i934.fadeOut = !!i935[12]
  i934.fadeOutDuration = i935[13]
  i934.animateRange = !!i935[14]
  i934.rangeStart = i935[15]
  i934.rangeEnd = i935[16]
  i934.rangeDuration = i935[17]
  i934.rangeCurve = new pc.AnimationCurve( { keys_flow: i935[18] } )
  i934.perlinRange = !!i935[19]
  i934.perlinRangeSpeed = i935[20]
  i934.animateColor = !!i935[21]
  i934.colorGradient = i935[22] ? new pc.ColorGradient(i935[22][0], i935[22][1], i935[22][2]) : null
  i934.colorDuration = i935[23]
  i934.colorCurve = new pc.AnimationCurve( { keys_flow: i935[24] } )
  i934.perlinColor = !!i935[25]
  i934.perlinColorSpeed = i935[26]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i937 = data
  i936.enabled = !!i937[0]
  i936.type = i937[1]
  i936.color = new pc.Color(i937[2], i937[3], i937[4], i937[5])
  i936.cullingMask = i937[6]
  i936.intensity = i937[7]
  i936.range = i937[8]
  i936.spotAngle = i937[9]
  i936.shadows = i937[10]
  i936.shadowNormalBias = i937[11]
  i936.shadowBias = i937[12]
  i936.shadowStrength = i937[13]
  i936.shadowResolution = i937[14]
  i936.lightmapBakeType = i937[15]
  i936.renderMode = i937[16]
  request.r(i937[17], i937[18], 0, i936, 'cookie')
  i936.cookieSize = i937[19]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i939 = data
  i938.name = i939[0]
  i938.halfPrecision = !!i939[1]
  i938.useUInt32IndexFormat = !!i939[2]
  i938.vertexCount = i939[3]
  i938.aabb = i939[4]
  var i941 = i939[5]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( !!i941[i + 0] );
  }
  i938.streams = i940
  i938.vertices = i939[6]
  var i943 = i939[7]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i943[i + 0]) );
  }
  i938.subMeshes = i942
  var i945 = i939[8]
  var i944 = []
  for(var i = 0; i < i945.length; i += 16) {
    i944.push( new pc.Mat4().setData(i945[i + 0], i945[i + 1], i945[i + 2], i945[i + 3],  i945[i + 4], i945[i + 5], i945[i + 6], i945[i + 7],  i945[i + 8], i945[i + 9], i945[i + 10], i945[i + 11],  i945[i + 12], i945[i + 13], i945[i + 14], i945[i + 15]) );
  }
  i938.bindposes = i944
  var i947 = i939[9]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i947[i + 0]) );
  }
  i938.blendShapes = i946
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i953 = data
  i952.triangles = i953[0]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i959 = data
  i958.name = i959[0]
  var i961 = i959[1]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i961[i + 0]) );
  }
  i958.frames = i960
  return i958
}

Deserializers["AnimatedTile"] = function (request, data, root) {
  var i962 = root || request.c( 'AnimatedTile' )
  var i963 = data
  i962.Duration = i963[0]
  request.r(i963[1], i963[2], 0, i962, 'tileData')
  var i965 = i963[3]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i965.length; i += 3) {
    i964.add(new pc.Vec3( i965[i + 0], i965[i + 1], i965[i + 2] ));
  }
  i962.targetPos = i964
  var i967 = i963[4]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i967.length; i += 3) {
    i966.add(new pc.Vec3( i967[i + 0], i967[i + 1], i967[i + 2] ));
  }
  i962.targetPosPortrait = i966
  var i969 = i963[5]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i969.length; i += 3) {
    i968.add(new pc.Vec3( i969[i + 0], i969[i + 1], i969[i + 2] ));
  }
  i962.targetPosLandscape = i968
  var i971 = i963[6]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(i971[i + 0]);
  }
  i962.targets = i970
  request.r(i963[7], i963[8], 0, i962, 'image')
  var i973 = i963[9]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i962.vfxParticles = i972
  request.r(i963[10], i963[11], 0, i962, 'trailVFXPrefab')
  request.r(i963[12], i963[13], 0, i962, 'circleTrailVFXPrefab')
  request.r(i963[14], i963[15], 0, i962, 'trailRenderer')
  return i962
}

Deserializers["StateEvents"] = function (request, data, root) {
  var i980 = root || request.c( 'StateEvents' )
  var i981 = data
  i980.OnEnableEvent = request.d('UnityEngine.Events.UnityEvent', i981[0], i980.OnEnableEvent)
  i980.OnDisableEvent = request.d('UnityEngine.Events.UnityEvent', i981[1], i980.OnDisableEvent)
  i980.OnStartEvent = request.d('UnityEngine.Events.UnityEvent', i981[2], i980.OnStartEvent)
  i980.autoEnable = !!i981[3]
  i980.autoEnableDelay = i981[4]
  i980.autoDisableDelay = i981[5]
  return i980
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'm_ObjectArgument')
  i982.m_ObjectArgumentAssemblyTypeName = i983[2]
  i982.m_IntArgument = i983[3]
  i982.m_FloatArgument = i983[4]
  i982.m_StringArgument = i983[5]
  i982.m_BoolArgument = !!i983[6]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i985 = data
  i984.enabled = !!i985[0]
  request.r(i985[1], i985[2], 0, i984, 'sharedMaterial')
  var i987 = i985[3]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 2, i986, '')
  }
  i984.sharedMaterials = i986
  i984.receiveShadows = !!i985[4]
  i984.shadowCastingMode = i985[5]
  i984.sortingLayerID = i985[6]
  i984.sortingOrder = i985[7]
  i984.lightmapIndex = i985[8]
  i984.lightmapSceneIndex = i985[9]
  i984.lightmapScaleOffset = new pc.Vec4( i985[10], i985[11], i985[12], i985[13] )
  i984.lightProbeUsage = i985[14]
  i984.reflectionProbeUsage = i985[15]
  var i989 = i985[16]
  var i988 = []
  for(var i = 0; i < i989.length; i += 3) {
    i988.push( new pc.Vec3( i989[i + 0], i989[i + 1], i989[i + 2] ) );
  }
  i984.positions = i988
  i984.positionCount = i985[17]
  i984.time = i985[18]
  i984.startWidth = i985[19]
  i984.endWidth = i985[20]
  i984.widthMultiplier = i985[21]
  i984.autodestruct = !!i985[22]
  i984.emitting = !!i985[23]
  i984.numCornerVertices = i985[24]
  i984.numCapVertices = i985[25]
  i984.minVertexDistance = i985[26]
  i984.colorGradient = i985[27] ? new pc.ColorGradient(i985[27][0], i985[27][1], i985[27][2]) : null
  i984.startColor = new pc.Color(i985[28], i985[29], i985[30], i985[31])
  i984.endColor = new pc.Color(i985[32], i985[33], i985[34], i985[35])
  i984.generateLightingData = !!i985[36]
  i984.textureMode = i985[37]
  i984.alignment = i985[38]
  i984.widthCurve = new pc.AnimationCurve( { keys_flow: i985[39] } )
  return i984
}

Deserializers["PositionTracking"] = function (request, data, root) {
  var i992 = root || request.c( 'PositionTracking' )
  var i993 = data
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i995 = data
  i994.name = i995[0]
  i994.index = i995[1]
  i994.startup = !!i995[2]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i997 = data
  i996.enabled = !!i997[0]
  i996.aspect = i997[1]
  i996.orthographic = !!i997[2]
  i996.orthographicSize = i997[3]
  i996.backgroundColor = new pc.Color(i997[4], i997[5], i997[6], i997[7])
  i996.nearClipPlane = i997[8]
  i996.farClipPlane = i997[9]
  i996.fieldOfView = i997[10]
  i996.depth = i997[11]
  i996.clearFlags = i997[12]
  i996.cullingMask = i997[13]
  i996.rect = i997[14]
  request.r(i997[15], i997[16], 0, i996, 'targetTexture')
  i996.usePhysicalProperties = !!i997[17]
  i996.focalLength = i997[18]
  i996.sensorSize = new pc.Vec2( i997[19], i997[20] )
  i996.lensShift = new pc.Vec2( i997[21], i997[22] )
  i996.gateFit = i997[23]
  i996.commandBufferCount = i997[24]
  i996.cameraType = i997[25]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i999 = data
  i998.enabled = !!i999[0]
  i998.planeDistance = i999[1]
  i998.referencePixelsPerUnit = i999[2]
  i998.isFallbackOverlay = !!i999[3]
  i998.renderMode = i999[4]
  i998.renderOrder = i999[5]
  i998.sortingLayerName = i999[6]
  i998.sortingOrder = i999[7]
  i998.scaleFactor = i999[8]
  request.r(i999[9], i999[10], 0, i998, 'worldCamera')
  i998.overrideSorting = !!i999[11]
  i998.pixelPerfect = !!i999[12]
  i998.targetDisplay = i999[13]
  i998.overridePixelPerfect = !!i999[14]
  return i998
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1001 = data
  i1000.m_UiScaleMode = i1001[0]
  i1000.m_ReferencePixelsPerUnit = i1001[1]
  i1000.m_ScaleFactor = i1001[2]
  i1000.m_ReferenceResolution = new pc.Vec2( i1001[3], i1001[4] )
  i1000.m_ScreenMatchMode = i1001[5]
  i1000.m_MatchWidthOrHeight = i1001[6]
  i1000.m_PhysicalUnit = i1001[7]
  i1000.m_FallbackScreenDPI = i1001[8]
  i1000.m_DefaultSpriteDPI = i1001[9]
  i1000.m_DynamicPixelsPerUnit = i1001[10]
  i1000.m_PresetInfoIsWorld = !!i1001[11]
  return i1000
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1003 = data
  i1002.m_IgnoreReversedGraphics = !!i1003[0]
  i1002.m_BlockingObjects = i1003[1]
  i1002.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1003[2] )
  return i1002
}

Deserializers["BasicFade"] = function (request, data, root) {
  var i1004 = root || request.c( 'BasicFade' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'canvasGroup')
  i1004.duration = i1005[2]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1007 = data
  i1006.m_Alpha = i1007[0]
  i1006.m_Interactable = !!i1007[1]
  i1006.m_BlocksRaycasts = !!i1007[2]
  i1006.m_IgnoreParentGroups = !!i1007[3]
  i1006.enabled = !!i1007[4]
  return i1006
}

Deserializers["AppearAnimation"] = function (request, data, root) {
  var i1008 = root || request.c( 'AppearAnimation' )
  var i1009 = data
  i1008.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i1009[0], i1008.OnMovementComplete)
  i1008.fadeInDuration = i1009[1]
  i1008.fadeInDelay = i1009[2]
  i1008.fillDuration = i1009[3]
  i1008.fillDelay = i1009[4]
  i1008.targetFillAmount = i1009[5]
  i1008.initialFillAmount = i1009[6]
  return i1008
}

Deserializers["PlayerGuide"] = function (request, data, root) {
  var i1010 = root || request.c( 'PlayerGuide' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 1, i1012, '')
  }
  i1010.prompts = i1012
  return i1010
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.UI.Button' )
  var i1017 = data
  i1016.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1017[0], i1016.m_OnClick)
  i1016.m_Navigation = request.d('UnityEngine.UI.Navigation', i1017[1], i1016.m_Navigation)
  i1016.m_Transition = i1017[2]
  i1016.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1017[3], i1016.m_Colors)
  i1016.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1017[4], i1016.m_SpriteState)
  i1016.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1017[5], i1016.m_AnimationTriggers)
  i1016.m_Interactable = !!i1017[6]
  request.r(i1017[7], i1017[8], 0, i1016, 'm_TargetGraphic')
  return i1016
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1019 = data
  i1018.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1019[0], i1018.m_PersistentCalls)
  return i1018
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1021 = data
  i1020.m_Mode = i1021[0]
  i1020.m_WrapAround = !!i1021[1]
  request.r(i1021[2], i1021[3], 0, i1020, 'm_SelectOnUp')
  request.r(i1021[4], i1021[5], 0, i1020, 'm_SelectOnDown')
  request.r(i1021[6], i1021[7], 0, i1020, 'm_SelectOnLeft')
  request.r(i1021[8], i1021[9], 0, i1020, 'm_SelectOnRight')
  return i1020
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1023 = data
  i1022.m_NormalColor = new pc.Color(i1023[0], i1023[1], i1023[2], i1023[3])
  i1022.m_HighlightedColor = new pc.Color(i1023[4], i1023[5], i1023[6], i1023[7])
  i1022.m_PressedColor = new pc.Color(i1023[8], i1023[9], i1023[10], i1023[11])
  i1022.m_SelectedColor = new pc.Color(i1023[12], i1023[13], i1023[14], i1023[15])
  i1022.m_DisabledColor = new pc.Color(i1023[16], i1023[17], i1023[18], i1023[19])
  i1022.m_ColorMultiplier = i1023[20]
  i1022.m_FadeDuration = i1023[21]
  return i1022
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'm_HighlightedSprite')
  request.r(i1025[2], i1025[3], 0, i1024, 'm_PressedSprite')
  request.r(i1025[4], i1025[5], 0, i1024, 'm_SelectedSprite')
  request.r(i1025[6], i1025[7], 0, i1024, 'm_DisabledSprite')
  return i1024
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1027 = data
  i1026.m_NormalTrigger = i1027[0]
  i1026.m_HighlightedTrigger = i1027[1]
  i1026.m_PressedTrigger = i1027[2]
  i1026.m_SelectedTrigger = i1027[3]
  i1026.m_DisabledTrigger = i1027[4]
  return i1026
}

Deserializers["RectAnimator"] = function (request, data, root) {
  var i1028 = root || request.c( 'RectAnimator' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'rectTransform')
  i1028.animateScale = !!i1029[2]
  i1028.isScaleLooping = !!i1029[3]
  i1028.scaleTo = i1029[4]
  i1028.scaleDuration = i1029[5]
  i1028.scaleEaseType = i1029[6]
  i1028.scaleStartDelay = i1029[7]
  i1028.animateMove = !!i1029[8]
  i1028.isMoveLooping = !!i1029[9]
  i1028.moveTo = new pc.Vec2( i1029[10], i1029[11] )
  i1028.moveDuration = i1029[12]
  i1028.moveEaseType = i1029[13]
  i1028.moveLoopType = i1029[14]
  i1028.moveStartDelay = i1029[15]
  i1028.initialPos = new pc.Vec3( i1029[16], i1029[17], i1029[18] )
  i1028.initialScale = new pc.Vec3( i1029[19], i1029[20], i1029[21] )
  return i1028
}

Deserializers["TileManager"] = function (request, data, root) {
  var i1030 = root || request.c( 'TileManager' )
  var i1031 = data
  i1030.cellWidth = i1031[0]
  i1030.cellHeight = i1031[1]
  request.r(i1031[2], i1031[3], 0, i1030, 'canvasGroup')
  var i1033 = i1031[4]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 1, i1032, '')
  }
  i1030.cells = i1032
  var i1035 = i1031[5]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 1, i1034, '')
  }
  i1030.tileDataPool = i1034
  i1030.GridHeight = i1031[6]
  i1030.SequenceDelay = i1031[7]
  i1030.BreakDelay = i1031[8]
  i1030.FallDelay = i1031[9]
  i1030.CheckDelay = i1031[10]
  i1030.levelColorValues = i1031[11]
  var i1037 = i1031[12]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 1, i1036, '')
  }
  i1030.powerupDataPool = i1036
  request.r(i1031[13], i1031[14], 0, i1030, 'dynamitePowerup')
  return i1030
}

Deserializers["SpecialTileManager"] = function (request, data, root) {
  var i1042 = root || request.c( 'SpecialTileManager' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'tileManager')
  var i1045 = i1043[2]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 1, i1044, '')
  }
  i1042.cellList = i1044
  var i1047 = i1043[3]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonGraphic')))
  for(var i = 0; i < i1047.length; i += 2) {
  request.r(i1047[i + 0], i1047[i + 1], 1, i1046, '')
  }
  i1042.SpecialTiles = i1046
  i1042.specialTileTargetPos = i1043[4]
  i1042.pigPos = i1043[5]
  i1042.chickenPos = i1043[6]
  return i1042
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1051 = data
  i1050.m_Spacing = i1051[0]
  i1050.m_ChildForceExpandWidth = !!i1051[1]
  i1050.m_ChildForceExpandHeight = !!i1051[2]
  i1050.m_ChildControlWidth = !!i1051[3]
  i1050.m_ChildControlHeight = !!i1051[4]
  i1050.m_ChildScaleWidth = !!i1051[5]
  i1050.m_ChildScaleHeight = !!i1051[6]
  i1050.m_ReverseArrangement = !!i1051[7]
  i1050.m_Padding = UnityEngine.RectOffset.FromPaddings(i1051[8], i1051[9], i1051[10], i1051[11])
  i1050.m_ChildAlignment = i1051[12]
  return i1050
}

Deserializers["UIMoveTo"] = function (request, data, root) {
  var i1052 = root || request.c( 'UIMoveTo' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'imageTransform')
  i1052.targetPosition = new pc.Vec2( i1053[2], i1053[3] )
  i1052.anticipationOffset = i1053[4]
  i1052.duration = i1053[5]
  i1052.enableOnStart = !!i1053[6]
  i1052.delayBeforeStart = i1053[7]
  i1052.delayBeforeEnd = i1053[8]
  i1052.OnMovementStart = request.d('UnityEngine.Events.UnityEvent', i1053[9], i1052.OnMovementStart)
  i1052.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i1053[10], i1052.OnMovementComplete)
  var i1055 = i1053[11]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 1, i1054, '')
  }
  i1052.objectsToEnable = i1054
  return i1052
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1057 = data
  i1056.m_StartCorner = i1057[0]
  i1056.m_StartAxis = i1057[1]
  i1056.m_CellSize = new pc.Vec2( i1057[2], i1057[3] )
  i1056.m_Spacing = new pc.Vec2( i1057[4], i1057[5] )
  i1056.m_Constraint = i1057[6]
  i1056.m_ConstraintCount = i1057[7]
  i1056.m_Padding = UnityEngine.RectOffset.FromPaddings(i1057[8], i1057[9], i1057[10], i1057[11])
  i1056.m_ChildAlignment = i1057[12]
  return i1056
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1059 = data
  i1058.m_ShowMaskGraphic = !!i1059[0]
  return i1058
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1060 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'skeletonDataAsset')
  request.r(i1061[2], i1061[3], 0, i1060, 'additiveMaterial')
  request.r(i1061[4], i1061[5], 0, i1060, 'multiplyMaterial')
  request.r(i1061[6], i1061[7], 0, i1060, 'screenMaterial')
  i1060.initialSkinName = i1061[8]
  i1060.initialFlipX = !!i1061[9]
  i1060.initialFlipY = !!i1061[10]
  i1060.startingAnimation = i1061[11]
  i1060.startingLoop = !!i1061[12]
  i1060.timeScale = i1061[13]
  i1060.freeze = !!i1061[14]
  i1060.layoutScaleMode = i1061[15]
  i1060.updateWhenInvisible = i1061[16]
  i1060.allowMultipleCanvasRenderers = !!i1061[17]
  var i1063 = i1061[18]
  var i1062 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1063.length; i += 2) {
  request.r(i1063[i + 0], i1063[i + 1], 1, i1062, '')
  }
  i1060.canvasRenderers = i1062
  i1060.enableSeparatorSlots = !!i1061[19]
  i1060.updateSeparatorPartLocation = !!i1061[20]
  i1060.updateSeparatorPartScale = !!i1061[21]
  i1060.disableMeshAssignmentOnOverride = !!i1061[22]
  i1060.m_SkeletonColor = new pc.Color(i1061[23], i1061[24], i1061[25], i1061[26])
  i1060.referenceSize = new pc.Vec2( i1061[27], i1061[28] )
  i1060.pivotOffset = new pc.Vec2( i1061[29], i1061[30] )
  i1060.referenceScale = i1061[31]
  i1060.layoutScale = i1061[32]
  i1060.rectTransformSize = new pc.Vec2( i1061[33], i1061[34] )
  i1060.editReferenceRect = !!i1061[35]
  var i1065 = i1061[36]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( i1065[i + 0] );
  }
  i1060.separatorSlotNames = i1064
  var i1067 = i1061[37]
  var i1066 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1067.length; i += 2) {
  request.r(i1067[i + 0], i1067[i + 1], 1, i1066, '')
  }
  i1060.separatorParts = i1066
  i1060.physicsPositionInheritanceFactor = new pc.Vec2( i1061[38], i1061[39] )
  i1060.physicsRotationInheritanceFactor = i1061[40]
  request.r(i1061[41], i1061[42], 0, i1060, 'physicsMovementRelativeTo')
  i1060.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1061[43], i1060.meshGenerator)
  i1060.updateTiming = i1061[44]
  i1060.unscaledTime = !!i1061[45]
  request.r(i1061[46], i1061[47], 0, i1060, 'm_Material')
  i1060.m_Maskable = !!i1061[48]
  i1060.m_Color = new pc.Color(i1061[49], i1061[50], i1061[51], i1061[52])
  i1060.m_RaycastTarget = !!i1061[53]
  i1060.m_RaycastPadding = new pc.Vec4( i1061[54], i1061[55], i1061[56], i1061[57] )
  return i1060
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1074 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1075 = data
  i1074.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1075[0], i1074.settings)
  return i1074
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1076 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1077 = data
  i1076.useClipping = !!i1077[0]
  i1076.zSpacing = i1077[1]
  i1076.tintBlack = !!i1077[2]
  i1076.canvasGroupCompatible = !!i1077[3]
  i1076.pmaVertexColors = !!i1077[4]
  i1076.addNormals = !!i1077[5]
  i1076.calculateTangents = !!i1077[6]
  i1076.immutableTriangles = !!i1077[7]
  return i1076
}

Deserializers["AnimatedTileSpawner"] = function (request, data, root) {
  var i1078 = root || request.c( 'AnimatedTileSpawner' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('AnimatedTile')))
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 1, i1080, '')
  }
  i1078.tiles = i1080
  return i1078
}

Deserializers["DynamiteEffect"] = function (request, data, root) {
  var i1084 = root || request.c( 'DynamiteEffect' )
  var i1085 = data
  i1084.initialScale = new pc.Vec3( i1085[0], i1085[1], i1085[2] )
  i1084.targetPos = new pc.Vec3( i1085[3], i1085[4], i1085[5] )
  i1084.duration = i1085[6]
  request.r(i1085[7], i1085[8], 0, i1084, 'model')
  request.r(i1085[9], i1085[10], 0, i1084, 'explosionEffectPrefab')
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1087 = data
  i1086.enabled = !!i1087[0]
  request.r(i1087[1], i1087[2], 0, i1086, 'sharedMaterial')
  var i1089 = i1087[3]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 2, i1088, '')
  }
  i1086.sharedMaterials = i1088
  i1086.receiveShadows = !!i1087[4]
  i1086.shadowCastingMode = i1087[5]
  i1086.sortingLayerID = i1087[6]
  i1086.sortingOrder = i1087[7]
  i1086.lightmapIndex = i1087[8]
  i1086.lightmapSceneIndex = i1087[9]
  i1086.lightmapScaleOffset = new pc.Vec4( i1087[10], i1087[11], i1087[12], i1087[13] )
  i1086.lightProbeUsage = i1087[14]
  i1086.reflectionProbeUsage = i1087[15]
  i1086.color = new pc.Color(i1087[16], i1087[17], i1087[18], i1087[19])
  request.r(i1087[20], i1087[21], 0, i1086, 'sprite')
  i1086.flipX = !!i1087[22]
  i1086.flipY = !!i1087[23]
  i1086.drawMode = i1087[24]
  i1086.size = new pc.Vec2( i1087[25], i1087[26] )
  i1086.tileMode = i1087[27]
  i1086.adaptiveModeThreshold = i1087[28]
  i1086.maskInteraction = i1087[29]
  i1086.spriteSortPoint = i1087[30]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'animatorController')
  request.r(i1091[2], i1091[3], 0, i1090, 'avatar')
  i1090.updateMode = i1091[4]
  i1090.hasTransformHierarchy = !!i1091[5]
  i1090.applyRootMotion = !!i1091[6]
  var i1093 = i1091[7]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 2) {
  request.r(i1093[i + 0], i1093[i + 1], 2, i1092, '')
  }
  i1090.humanBones = i1092
  i1090.enabled = !!i1091[8]
  return i1090
}

Deserializers["MergeHands"] = function (request, data, root) {
  var i1096 = root || request.c( 'MergeHands' )
  var i1097 = data
  request.r(i1097[0], i1097[1], 0, i1096, 'rectTransform')
  request.r(i1097[2], i1097[3], 0, i1096, 'target1')
  request.r(i1097[4], i1097[5], 0, i1096, 'target2')
  return i1096
}

Deserializers["PNGSequencer"] = function (request, data, root) {
  var i1098 = root || request.c( 'PNGSequencer' )
  var i1099 = data
  i1098.frameRate = i1099[0]
  var i1101 = i1099[1]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 1, i1100, '')
  }
  i1098.frames = i1100
  i1098.loop = !!i1099[2]
  i1098.playOnStart = !!i1099[3]
  i1098.autoDestroy = !!i1099[4]
  i1098.isUIElement = !!i1099[5]
  request.r(i1099[6], i1099[7], 0, i1098, 'targetImage')
  request.r(i1099[8], i1099[9], 0, i1098, 'targetRenderer')
  return i1098
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1105 = data
  request.r(i1105[0], i1105[1], 0, i1104, 'm_FirstSelected')
  i1104.m_sendNavigationEvents = !!i1105[2]
  i1104.m_DragThreshold = i1105[3]
  return i1104
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1107 = data
  i1106.m_HorizontalAxis = i1107[0]
  i1106.m_VerticalAxis = i1107[1]
  i1106.m_SubmitButton = i1107[2]
  i1106.m_CancelButton = i1107[3]
  i1106.m_InputActionsPerSecond = i1107[4]
  i1106.m_RepeatDelay = i1107[5]
  i1106.m_ForceModuleActive = !!i1107[6]
  i1106.m_SendPointerHoverToParent = !!i1107[7]
  return i1106
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1108 = root || request.c( 'GameManager' )
  var i1109 = data
  i1108.IsSIP = !!i1109[0]
  i1108.gameType = i1109[1]
  i1108.toggleInactivityPanel = !!i1109[2]
  i1108.OnStartMIP1 = request.d('UnityEngine.Events.UnityEvent', i1109[3], i1108.OnStartMIP1)
  i1108.OnStartMIP2 = request.d('UnityEngine.Events.UnityEvent', i1109[4], i1108.OnStartMIP2)
  i1108.IsDoneCollecting = !!i1109[5]
  i1108.OnLevelComplete = request.d('UnityEngine.Events.UnityEvent', i1109[6], i1108.OnLevelComplete)
  request.r(i1109[7], i1109[8], 0, i1108, 'TutorialPanel')
  request.r(i1109[9], i1109[10], 0, i1108, 'GamePanel')
  request.r(i1109[11], i1109[12], 0, i1108, 'EndCard')
  request.r(i1109[13], i1109[14], 0, i1108, 'CTAPanel')
  request.r(i1109[15], i1109[16], 0, i1108, 'FailPanel')
  request.r(i1109[17], i1109[18], 0, i1108, 'EndCardInActivityPanel')
  i1108.iosLink = i1109[19]
  i1108.androidLink = i1109[20]
  i1108.hasTimer = !!i1109[21]
  i1108.currentTimer = i1109[22]
  i1108.maxTime = i1109[23]
  i1108.gameOver = !!i1109[24]
  request.r(i1109[25], i1109[26], 0, i1108, 'inactivityPanel')
  request.r(i1109[27], i1109[28], 0, i1108, 'inactivityPanelGame')
  i1108.inactivityTime = i1109[29]
  i1108.inactivityTimer = i1109[30]
  request.r(i1109[31], i1109[32], 0, i1108, 'timerText')
  var i1111 = i1109[33]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('GameManager+FurnitureItems', i1111[i + 0]));
  }
  i1108.items = i1110
  i1108.CurrentLevel = i1109[34]
  var i1113 = i1109[35]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('GameManager+FurnitureItems', i1113[i + 0]));
  }
  i1108.currentFurnitures = i1112
  var i1115 = i1109[36]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('BasicFade')))
  for(var i = 0; i < i1115.length; i += 2) {
  request.r(i1115[i + 0], i1115[i + 1], 1, i1114, '')
  }
  i1108.gameBoards = i1114
  var i1117 = i1109[37]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationBase')))
  for(var i = 0; i < i1117.length; i += 2) {
  request.r(i1117[i + 0], i1117[i + 1], 1, i1116, '')
  }
  i1108.furnitureDecorations = i1116
  var i1119 = i1109[38]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 1, i1118, '')
  }
  i1108.mip1Objects = i1118
  var i1121 = i1109[39]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 1, i1120, '')
  }
  i1108.mip2Objects = i1120
  var i1123 = i1109[40]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 1, i1122, '')
  }
  i1108.Feedback = i1122
  var i1125 = i1109[41]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(i1125[i + 0]);
  }
  i1108.audioKeys = i1124
  var i1127 = i1109[42]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(i1127[i + 0]);
  }
  i1108.cameraPanLocation = i1126
  request.r(i1109[43], i1109[44], 0, i1108, 'cameraPanObject')
  i1108.mip1ButtonPress = !!i1109[45]
  i1108.puzzlesToSolve = i1109[46]
  var i1129 = i1109[47]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 1, i1128, '')
  }
  i1108.redirectButtons = i1128
  return i1108
}

Deserializers["GameManager+FurnitureItems"] = function (request, data, root) {
  var i1132 = root || request.c( 'GameManager+FurnitureItems' )
  var i1133 = data
  i1132.key = i1133[0]
  request.r(i1133[1], i1133[2], 0, i1132, 'value')
  return i1132
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1140 = root || request.c( 'AudioManager' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'library')
  i1140.sfxPoolSize = i1141[2]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1143 = data
  i1142.ambientIntensity = i1143[0]
  i1142.reflectionIntensity = i1143[1]
  i1142.ambientMode = i1143[2]
  i1142.ambientLight = new pc.Color(i1143[3], i1143[4], i1143[5], i1143[6])
  i1142.ambientSkyColor = new pc.Color(i1143[7], i1143[8], i1143[9], i1143[10])
  i1142.ambientGroundColor = new pc.Color(i1143[11], i1143[12], i1143[13], i1143[14])
  i1142.ambientEquatorColor = new pc.Color(i1143[15], i1143[16], i1143[17], i1143[18])
  i1142.fogColor = new pc.Color(i1143[19], i1143[20], i1143[21], i1143[22])
  i1142.fogEndDistance = i1143[23]
  i1142.fogStartDistance = i1143[24]
  i1142.fogDensity = i1143[25]
  i1142.fog = !!i1143[26]
  request.r(i1143[27], i1143[28], 0, i1142, 'skybox')
  i1142.fogMode = i1143[29]
  var i1145 = i1143[30]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1145[i + 0]) );
  }
  i1142.lightmaps = i1144
  i1142.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1143[31], i1142.lightProbes)
  i1142.lightmapsMode = i1143[32]
  i1142.mixedBakeMode = i1143[33]
  i1142.environmentLightingMode = i1143[34]
  i1142.ambientProbe = new pc.SphericalHarmonicsL2(i1143[35])
  i1142.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1143[36])
  i1142.useReferenceAmbientProbe = !!i1143[37]
  request.r(i1143[38], i1143[39], 0, i1142, 'customReflection')
  request.r(i1143[40], i1143[41], 0, i1142, 'defaultReflection')
  i1142.defaultReflectionMode = i1143[42]
  i1142.defaultReflectionResolution = i1143[43]
  i1142.sunLightObjectId = i1143[44]
  i1142.pixelLightCount = i1143[45]
  i1142.defaultReflectionHDR = !!i1143[46]
  i1142.hasLightDataAsset = !!i1143[47]
  i1142.hasManualGenerate = !!i1143[48]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'lightmapColor')
  request.r(i1149[2], i1149[3], 0, i1148, 'lightmapDirection')
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1150 = root || new UnityEngine.LightProbes()
  var i1151 = data
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1159[i + 0]));
  }
  i1156.ShaderCompilationErrors = i1158
  i1156.name = i1157[1]
  i1156.guid = i1157[2]
  var i1161 = i1157[3]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( i1161[i + 0] );
  }
  i1156.shaderDefinedKeywords = i1160
  var i1163 = i1157[4]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1163[i + 0]) );
  }
  i1156.passes = i1162
  var i1165 = i1157[5]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1165[i + 0]) );
  }
  i1156.usePasses = i1164
  var i1167 = i1157[6]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1167[i + 0]) );
  }
  i1156.defaultParameterValues = i1166
  request.r(i1157[7], i1157[8], 0, i1156, 'unityFallbackShader')
  i1156.readDepth = !!i1157[9]
  i1156.isCreatedByShaderGraph = !!i1157[10]
  i1156.compiled = !!i1157[11]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1171 = data
  i1170.shaderName = i1171[0]
  i1170.errorMessage = i1171[1]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1174 = root || new pc.UnityShaderPass()
  var i1175 = data
  i1174.id = i1175[0]
  i1174.subShaderIndex = i1175[1]
  i1174.name = i1175[2]
  i1174.passType = i1175[3]
  i1174.grabPassTextureName = i1175[4]
  i1174.usePass = !!i1175[5]
  i1174.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[6], i1174.zTest)
  i1174.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[7], i1174.zWrite)
  i1174.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[8], i1174.culling)
  i1174.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1175[9], i1174.blending)
  i1174.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1175[10], i1174.alphaBlending)
  i1174.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[11], i1174.colorWriteMask)
  i1174.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[12], i1174.offsetUnits)
  i1174.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[13], i1174.offsetFactor)
  i1174.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[14], i1174.stencilRef)
  i1174.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[15], i1174.stencilReadMask)
  i1174.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[16], i1174.stencilWriteMask)
  i1174.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1175[17], i1174.stencilOp)
  i1174.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1175[18], i1174.stencilOpFront)
  i1174.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1175[19], i1174.stencilOpBack)
  var i1177 = i1175[20]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1177[i + 0]) );
  }
  i1174.tags = i1176
  var i1179 = i1175[21]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( i1179[i + 0] );
  }
  i1174.passDefinedKeywords = i1178
  var i1181 = i1175[22]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1181[i + 0]) );
  }
  i1174.passDefinedKeywordGroups = i1180
  var i1183 = i1175[23]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1183[i + 0]) );
  }
  i1174.variants = i1182
  var i1185 = i1175[24]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1185[i + 0]) );
  }
  i1174.excludedVariants = i1184
  i1174.hasDepthReader = !!i1175[25]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1187 = data
  i1186.val = i1187[0]
  i1186.name = i1187[1]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1189 = data
  i1188.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1189[0], i1188.src)
  i1188.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1189[1], i1188.dst)
  i1188.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1189[2], i1188.op)
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1191 = data
  i1190.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1191[0], i1190.pass)
  i1190.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1191[1], i1190.fail)
  i1190.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1191[2], i1190.zFail)
  i1190.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1191[3], i1190.comp)
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1195 = data
  i1194.name = i1195[0]
  i1194.value = i1195[1]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( i1201[i + 0] );
  }
  i1198.keywords = i1200
  i1198.hasDiscard = !!i1199[1]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1205 = data
  i1204.passId = i1205[0]
  i1204.subShaderIndex = i1205[1]
  var i1207 = i1205[2]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( i1207[i + 0] );
  }
  i1204.keywords = i1206
  i1204.vertexProgram = i1205[3]
  i1204.fragmentProgram = i1205[4]
  i1204.exportedForWebGl2 = !!i1205[5]
  i1204.readDepth = !!i1205[6]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1211 = data
  request.r(i1211[0], i1211[1], 0, i1210, 'shader')
  i1210.pass = i1211[2]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1215 = data
  i1214.name = i1215[0]
  i1214.type = i1215[1]
  i1214.value = new pc.Vec4( i1215[2], i1215[3], i1215[4], i1215[5] )
  i1214.textureValue = i1215[6]
  i1214.shaderPropertyFlag = i1215[7]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1217 = data
  i1216.name = i1217[0]
  request.r(i1217[1], i1217[2], 0, i1216, 'texture')
  i1216.aabb = i1217[3]
  i1216.vertices = i1217[4]
  i1216.triangles = i1217[5]
  i1216.textureRect = UnityEngine.Rect.MinMaxRect(i1217[6], i1217[7], i1217[8], i1217[9])
  i1216.packedRect = UnityEngine.Rect.MinMaxRect(i1217[10], i1217[11], i1217[12], i1217[13])
  i1216.border = new pc.Vec4( i1217[14], i1217[15], i1217[16], i1217[17] )
  i1216.transparency = i1217[18]
  i1216.bounds = i1217[19]
  i1216.pixelsPerUnit = i1217[20]
  i1216.textureWidth = i1217[21]
  i1216.textureHeight = i1217[22]
  i1216.nativeSize = new pc.Vec2( i1217[23], i1217[24] )
  i1216.pivot = new pc.Vec2( i1217[25], i1217[26] )
  i1216.textureRectOffset = new pc.Vec2( i1217[27], i1217[28] )
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1219 = data
  i1218.name = i1219[0]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1221 = data
  i1220.name = i1221[0]
  i1220.wrapMode = i1221[1]
  i1220.isLooping = !!i1221[2]
  i1220.length = i1221[3]
  var i1223 = i1221[4]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1223[i + 0]) );
  }
  i1220.curves = i1222
  var i1225 = i1221[5]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1225[i + 0]) );
  }
  i1220.events = i1224
  i1220.halfPrecision = !!i1221[6]
  i1220._frameRate = i1221[7]
  i1220.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1221[8], i1220.localBounds)
  i1220.hasMuscleCurves = !!i1221[9]
  var i1227 = i1221[10]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( i1227[i + 0] );
  }
  i1220.clipMuscleConstant = i1226
  i1220.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1221[11], i1220.clipBindingConstant)
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1231 = data
  i1230.path = i1231[0]
  i1230.hash = i1231[1]
  i1230.componentType = i1231[2]
  i1230.property = i1231[3]
  i1230.keys = i1231[4]
  var i1233 = i1231[5]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1233[i + 0]) );
  }
  i1230.objectReferenceKeys = i1232
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1237 = data
  i1236.time = i1237[0]
  request.r(i1237[1], i1237[2], 0, i1236, 'value')
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1241 = data
  i1240.functionName = i1241[0]
  i1240.floatParameter = i1241[1]
  i1240.intParameter = i1241[2]
  i1240.stringParameter = i1241[3]
  request.r(i1241[4], i1241[5], 0, i1240, 'objectReferenceParameter')
  i1240.time = i1241[6]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1243 = data
  i1242.center = new pc.Vec3( i1243[0], i1243[1], i1243[2] )
  i1242.extends = new pc.Vec3( i1243[3], i1243[4], i1243[5] )
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1247 = data
  var i1249 = i1247[0]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( i1249[i + 0] );
  }
  i1246.genericBindings = i1248
  var i1251 = i1247[1]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( i1251[i + 0] );
  }
  i1246.pptrCurveMapping = i1250
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1253 = data
  i1252.name = i1253[0]
  i1252.ascent = i1253[1]
  i1252.originalLineHeight = i1253[2]
  i1252.fontSize = i1253[3]
  var i1255 = i1253[4]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1255[i + 0]) );
  }
  i1252.characterInfo = i1254
  request.r(i1253[5], i1253[6], 0, i1252, 'texture')
  i1252.originalFontSize = i1253[7]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1259 = data
  i1258.index = i1259[0]
  i1258.advance = i1259[1]
  i1258.bearing = i1259[2]
  i1258.glyphWidth = i1259[3]
  i1258.glyphHeight = i1259[4]
  i1258.minX = i1259[5]
  i1258.maxX = i1259[6]
  i1258.minY = i1259[7]
  i1258.maxY = i1259[8]
  i1258.uvBottomLeftX = i1259[9]
  i1258.uvBottomLeftY = i1259[10]
  i1258.uvBottomRightX = i1259[11]
  i1258.uvBottomRightY = i1259[12]
  i1258.uvTopLeftX = i1259[13]
  i1258.uvTopLeftY = i1259[14]
  i1258.uvTopRightX = i1259[15]
  i1258.uvTopRightY = i1259[16]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1261 = data
  i1260.name = i1261[0]
  var i1263 = i1261[1]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1263[i + 0]) );
  }
  i1260.layers = i1262
  var i1265 = i1261[2]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1265[i + 0]) );
  }
  i1260.parameters = i1264
  i1260.animationClips = i1261[3]
  i1260.avatarUnsupported = i1261[4]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1269 = data
  i1268.name = i1269[0]
  i1268.defaultWeight = i1269[1]
  i1268.blendingMode = i1269[2]
  i1268.avatarMask = i1269[3]
  i1268.syncedLayerIndex = i1269[4]
  i1268.syncedLayerAffectsTiming = !!i1269[5]
  i1268.syncedLayers = i1269[6]
  i1268.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1269[7], i1268.stateMachine)
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1271 = data
  i1270.id = i1271[0]
  i1270.name = i1271[1]
  i1270.path = i1271[2]
  var i1273 = i1271[3]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1273[i + 0]) );
  }
  i1270.states = i1272
  var i1275 = i1271[4]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1275[i + 0]) );
  }
  i1270.machines = i1274
  var i1277 = i1271[5]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1277[i + 0]) );
  }
  i1270.entryStateTransitions = i1276
  var i1279 = i1271[6]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1279[i + 0]) );
  }
  i1270.exitStateTransitions = i1278
  var i1281 = i1271[7]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1281[i + 0]) );
  }
  i1270.anyStateTransitions = i1280
  i1270.defaultStateId = i1271[8]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1285 = data
  i1284.id = i1285[0]
  i1284.name = i1285[1]
  i1284.cycleOffset = i1285[2]
  i1284.cycleOffsetParameter = i1285[3]
  i1284.cycleOffsetParameterActive = !!i1285[4]
  i1284.mirror = !!i1285[5]
  i1284.mirrorParameter = i1285[6]
  i1284.mirrorParameterActive = !!i1285[7]
  i1284.motionId = i1285[8]
  i1284.nameHash = i1285[9]
  i1284.fullPathHash = i1285[10]
  i1284.speed = i1285[11]
  i1284.speedParameter = i1285[12]
  i1284.speedParameterActive = !!i1285[13]
  i1284.tag = i1285[14]
  i1284.tagHash = i1285[15]
  i1284.writeDefaultValues = !!i1285[16]
  var i1287 = i1285[17]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 2, i1286, '')
  }
  i1284.behaviours = i1286
  var i1289 = i1285[18]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1289[i + 0]) );
  }
  i1284.transitions = i1288
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1295 = data
  i1294.fullPath = i1295[0]
  i1294.canTransitionToSelf = !!i1295[1]
  i1294.duration = i1295[2]
  i1294.exitTime = i1295[3]
  i1294.hasExitTime = !!i1295[4]
  i1294.hasFixedDuration = !!i1295[5]
  i1294.interruptionSource = i1295[6]
  i1294.offset = i1295[7]
  i1294.orderedInterruption = !!i1295[8]
  i1294.destinationStateId = i1295[9]
  i1294.isExit = !!i1295[10]
  i1294.mute = !!i1295[11]
  i1294.solo = !!i1295[12]
  var i1297 = i1295[13]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1297[i + 0]) );
  }
  i1294.conditions = i1296
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1303 = data
  i1302.destinationStateId = i1303[0]
  i1302.isExit = !!i1303[1]
  i1302.mute = !!i1303[2]
  i1302.solo = !!i1303[3]
  var i1305 = i1303[4]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1305[i + 0]) );
  }
  i1302.conditions = i1304
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1309 = data
  i1308.defaultBool = !!i1309[0]
  i1308.defaultFloat = i1309[1]
  i1308.defaultInt = i1309[2]
  i1308.name = i1309[3]
  i1308.nameHash = i1309[4]
  i1308.type = i1309[5]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1311 = data
  i1310.name = i1311[0]
  i1310.bytes64 = i1311[1]
  i1310.data = i1311[2]
  return i1310
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1313 = data
  i1312.hashCode = i1313[0]
  request.r(i1313[1], i1313[2], 0, i1312, 'material')
  i1312.materialHashCode = i1313[3]
  request.r(i1313[4], i1313[5], 0, i1312, 'atlas')
  i1312.normalStyle = i1313[6]
  i1312.normalSpacingOffset = i1313[7]
  i1312.boldStyle = i1313[8]
  i1312.boldSpacing = i1313[9]
  i1312.italicStyle = i1313[10]
  i1312.tabSize = i1313[11]
  i1312.m_Version = i1313[12]
  i1312.m_SourceFontFileGUID = i1313[13]
  request.r(i1313[14], i1313[15], 0, i1312, 'm_SourceFontFile_EditorRef')
  request.r(i1313[16], i1313[17], 0, i1312, 'm_SourceFontFile')
  i1312.m_AtlasPopulationMode = i1313[18]
  i1312.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1313[19], i1312.m_FaceInfo)
  var i1315 = i1313[20]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('UnityEngine.TextCore.Glyph', i1315[i + 0]));
  }
  i1312.m_GlyphTable = i1314
  var i1317 = i1313[21]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.TMP_Character', i1317[i + 0]));
  }
  i1312.m_CharacterTable = i1316
  var i1319 = i1313[22]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 2, i1318, '')
  }
  i1312.m_AtlasTextures = i1318
  i1312.m_AtlasTextureIndex = i1313[23]
  i1312.m_IsMultiAtlasTexturesEnabled = !!i1313[24]
  i1312.m_ClearDynamicDataOnBuild = !!i1313[25]
  var i1321 = i1313[26]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(request.d('UnityEngine.TextCore.GlyphRect', i1321[i + 0]));
  }
  i1312.m_UsedGlyphRects = i1320
  var i1323 = i1313[27]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(request.d('UnityEngine.TextCore.GlyphRect', i1323[i + 0]));
  }
  i1312.m_FreeGlyphRects = i1322
  i1312.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1313[28], i1312.m_fontInfo)
  i1312.m_AtlasWidth = i1313[29]
  i1312.m_AtlasHeight = i1313[30]
  i1312.m_AtlasPadding = i1313[31]
  i1312.m_AtlasRenderMode = i1313[32]
  var i1325 = i1313[33]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('TMPro.TMP_Glyph', i1325[i + 0]));
  }
  i1312.m_glyphInfoList = i1324
  i1312.m_KerningTable = request.d('TMPro.KerningTable', i1313[34], i1312.m_KerningTable)
  i1312.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1313[35], i1312.m_FontFeatureTable)
  var i1327 = i1313[36]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1327.length; i += 2) {
  request.r(i1327[i + 0], i1327[i + 1], 1, i1326, '')
  }
  i1312.fallbackFontAssets = i1326
  var i1329 = i1313[37]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1329.length; i += 2) {
  request.r(i1329[i + 0], i1329[i + 1], 1, i1328, '')
  }
  i1312.m_FallbackFontAssetTable = i1328
  i1312.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1313[38], i1312.m_CreationSettings)
  var i1331 = i1313[39]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('TMPro.TMP_FontWeightPair', i1331[i + 0]) );
  }
  i1312.m_FontWeightTable = i1330
  var i1333 = i1313[40]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('TMPro.TMP_FontWeightPair', i1333[i + 0]) );
  }
  i1312.fontWeights = i1332
  return i1312
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1335 = data
  i1334.m_FaceIndex = i1335[0]
  i1334.m_FamilyName = i1335[1]
  i1334.m_StyleName = i1335[2]
  i1334.m_PointSize = i1335[3]
  i1334.m_Scale = i1335[4]
  i1334.m_UnitsPerEM = i1335[5]
  i1334.m_LineHeight = i1335[6]
  i1334.m_AscentLine = i1335[7]
  i1334.m_CapLine = i1335[8]
  i1334.m_MeanLine = i1335[9]
  i1334.m_Baseline = i1335[10]
  i1334.m_DescentLine = i1335[11]
  i1334.m_SuperscriptOffset = i1335[12]
  i1334.m_SuperscriptSize = i1335[13]
  i1334.m_SubscriptOffset = i1335[14]
  i1334.m_SubscriptSize = i1335[15]
  i1334.m_UnderlineOffset = i1335[16]
  i1334.m_UnderlineThickness = i1335[17]
  i1334.m_StrikethroughOffset = i1335[18]
  i1334.m_StrikethroughThickness = i1335[19]
  i1334.m_TabWidth = i1335[20]
  return i1334
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1338 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1339 = data
  i1338.m_Index = i1339[0]
  i1338.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1339[1], i1338.m_Metrics)
  i1338.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1339[2], i1338.m_GlyphRect)
  i1338.m_Scale = i1339[3]
  i1338.m_AtlasIndex = i1339[4]
  i1338.m_ClassDefinitionType = i1339[5]
  return i1338
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1340 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1341 = data
  i1340.m_Width = i1341[0]
  i1340.m_Height = i1341[1]
  i1340.m_HorizontalBearingX = i1341[2]
  i1340.m_HorizontalBearingY = i1341[3]
  i1340.m_HorizontalAdvance = i1341[4]
  return i1340
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1342 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1343 = data
  i1342.m_X = i1343[0]
  i1342.m_Y = i1343[1]
  i1342.m_Width = i1343[2]
  i1342.m_Height = i1343[3]
  return i1342
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.TMP_Character' )
  var i1347 = data
  i1346.m_ElementType = i1347[0]
  i1346.m_Unicode = i1347[1]
  i1346.m_GlyphIndex = i1347[2]
  i1346.m_Scale = i1347[3]
  return i1346
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1353 = data
  i1352.Name = i1353[0]
  i1352.PointSize = i1353[1]
  i1352.Scale = i1353[2]
  i1352.CharacterCount = i1353[3]
  i1352.LineHeight = i1353[4]
  i1352.Baseline = i1353[5]
  i1352.Ascender = i1353[6]
  i1352.CapHeight = i1353[7]
  i1352.Descender = i1353[8]
  i1352.CenterLine = i1353[9]
  i1352.SuperscriptOffset = i1353[10]
  i1352.SubscriptOffset = i1353[11]
  i1352.SubSize = i1353[12]
  i1352.Underline = i1353[13]
  i1352.UnderlineThickness = i1353[14]
  i1352.strikethrough = i1353[15]
  i1352.strikethroughThickness = i1353[16]
  i1352.TabWidth = i1353[17]
  i1352.Padding = i1353[18]
  i1352.AtlasWidth = i1353[19]
  i1352.AtlasHeight = i1353[20]
  return i1352
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1356 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1357 = data
  i1356.id = i1357[0]
  i1356.x = i1357[1]
  i1356.y = i1357[2]
  i1356.width = i1357[3]
  i1356.height = i1357[4]
  i1356.xOffset = i1357[5]
  i1356.yOffset = i1357[6]
  i1356.xAdvance = i1357[7]
  i1356.scale = i1357[8]
  return i1356
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.KerningTable' )
  var i1359 = data
  var i1361 = i1359[0]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.add(request.d('TMPro.KerningPair', i1361[i + 0]));
  }
  i1358.kerningPairs = i1360
  return i1358
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.KerningPair' )
  var i1365 = data
  i1364.xOffset = i1365[0]
  i1364.m_FirstGlyph = i1365[1]
  i1364.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1365[2], i1364.m_FirstGlyphAdjustments)
  i1364.m_SecondGlyph = i1365[3]
  i1364.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1365[4], i1364.m_SecondGlyphAdjustments)
  i1364.m_IgnoreSpacingAdjustments = !!i1365[5]
  return i1364
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1369[i + 0]));
  }
  i1366.m_GlyphPairAdjustmentRecords = i1368
  return i1366
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1373 = data
  i1372.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1373[0], i1372.m_FirstAdjustmentRecord)
  i1372.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1373[1], i1372.m_SecondAdjustmentRecord)
  i1372.m_FeatureLookupFlags = i1373[2]
  return i1372
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1377 = data
  i1376.sourceFontFileName = i1377[0]
  i1376.sourceFontFileGUID = i1377[1]
  i1376.pointSizeSamplingMode = i1377[2]
  i1376.pointSize = i1377[3]
  i1376.padding = i1377[4]
  i1376.packingMode = i1377[5]
  i1376.atlasWidth = i1377[6]
  i1376.atlasHeight = i1377[7]
  i1376.characterSetSelectionMode = i1377[8]
  i1376.characterSequence = i1377[9]
  i1376.referencedFontAssetGUID = i1377[10]
  i1376.referencedTextAssetGUID = i1377[11]
  i1376.fontStyle = i1377[12]
  i1376.fontStyleModifier = i1377[13]
  i1376.renderMode = i1377[14]
  i1376.includeFontFeatures = !!i1377[15]
  return i1376
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1380 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1381 = data
  request.r(i1381[0], i1381[1], 0, i1380, 'regularTypeface')
  request.r(i1381[2], i1381[3], 0, i1380, 'italicTypeface')
  return i1380
}

Deserializers["ItemData"] = function (request, data, root) {
  var i1382 = root || request.c( 'ItemData' )
  var i1383 = data
  i1382.itemName = i1383[0]
  request.r(i1383[1], i1383[2], 0, i1382, 'itemIcon')
  i1382.ItemCount = i1383[3]
  request.r(i1383[4], i1383[5], 0, i1382, 'collectItemSprite')
  i1382.color = i1383[6]
  request.r(i1383[7], i1383[8], 0, i1382, 'DecorationSprite')
  return i1382
}

Deserializers["TileData"] = function (request, data, root) {
  var i1384 = root || request.c( 'TileData' )
  var i1385 = data
  i1384.tileName = i1385[0]
  request.r(i1385[1], i1385[2], 0, i1384, 'tileSprite')
  i1384.isPowerup = !!i1385[3]
  i1384.isBreakable = !!i1385[4]
  i1384.isSwappable = !!i1385[5]
  i1384.isSpecialBreakable = !!i1385[6]
  return i1384
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1386 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1387 = data
  var i1389 = i1387[0]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 2) {
  request.r(i1389[i + 0], i1389[i + 1], 2, i1388, '')
  }
  i1386.atlasAssets = i1388
  i1386.scale = i1387[1]
  request.r(i1387[2], i1387[3], 0, i1386, 'skeletonJSON')
  i1386.isUpgradingBlendModeMaterials = !!i1387[4]
  i1386.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1387[5], i1386.blendModeMaterials)
  var i1391 = i1387[6]
  var i1390 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1391.length; i += 2) {
  request.r(i1391[i + 0], i1391[i + 1], 1, i1390, '')
  }
  i1386.skeletonDataModifiers = i1390
  var i1393 = i1387[7]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( i1393[i + 0] );
  }
  i1386.fromAnimation = i1392
  var i1395 = i1387[8]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( i1395[i + 0] );
  }
  i1386.toAnimation = i1394
  i1386.duration = i1387[9]
  i1386.defaultMix = i1387[10]
  request.r(i1387[11], i1387[12], 0, i1386, 'controller')
  return i1386
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1398 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1399 = data
  i1398.applyAdditiveMaterial = !!i1399[0]
  var i1401 = i1399[1]
  var i1400 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1401[i + 0]));
  }
  i1398.additiveMaterials = i1400
  var i1403 = i1399[2]
  var i1402 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1403[i + 0]));
  }
  i1398.multiplyMaterials = i1402
  var i1405 = i1399[3]
  var i1404 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1405[i + 0]));
  }
  i1398.screenMaterials = i1404
  i1398.requiresBlendModeMaterials = !!i1399[4]
  return i1398
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1408 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1409 = data
  i1408.pageName = i1409[0]
  request.r(i1409[1], i1409[2], 0, i1408, 'material')
  return i1408
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1412 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1413 = data
  request.r(i1413[0], i1413[1], 0, i1412, 'atlasFile')
  var i1415 = i1413[2]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 2) {
  request.r(i1415[i + 0], i1415[i + 1], 2, i1414, '')
  }
  i1412.materials = i1414
  i1412.textureLoadingMode = i1413[3]
  request.r(i1413[4], i1413[5], 0, i1412, 'onDemandTextureLoader')
  return i1412
}

Deserializers["DynamitePowerup"] = function (request, data, root) {
  var i1416 = root || request.c( 'DynamitePowerup' )
  var i1417 = data
  i1416.explosionRadius = i1417[0]
  i1416.tileName = i1417[1]
  request.r(i1417[2], i1417[3], 0, i1416, 'tileSprite')
  i1416.isPowerup = !!i1417[4]
  i1416.isBreakable = !!i1417[5]
  i1416.isSwappable = !!i1417[6]
  i1416.isSpecialBreakable = !!i1417[7]
  return i1416
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i1418 = root || request.c( 'AudioLibrary' )
  var i1419 = data
  var i1421 = i1419[0]
  var i1420 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.add(request.d('AudioLibrary+ClipEntry', i1421[i + 0]));
  }
  i1418.clips = i1420
  return i1418
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i1424 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i1425 = data
  i1424.key = i1425[0]
  i1424.channel = i1425[1]
  request.r(i1425[2], i1425[3], 0, i1424, 'clip')
  i1424.volume = i1425[4]
  i1424.loop = !!i1425[5]
  return i1424
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1426 = root || request.c( 'TMPro.TMP_Settings' )
  var i1427 = data
  i1426.m_enableWordWrapping = !!i1427[0]
  i1426.m_enableKerning = !!i1427[1]
  i1426.m_enableExtraPadding = !!i1427[2]
  i1426.m_enableTintAllSprites = !!i1427[3]
  i1426.m_enableParseEscapeCharacters = !!i1427[4]
  i1426.m_EnableRaycastTarget = !!i1427[5]
  i1426.m_GetFontFeaturesAtRuntime = !!i1427[6]
  i1426.m_missingGlyphCharacter = i1427[7]
  i1426.m_warningsDisabled = !!i1427[8]
  request.r(i1427[9], i1427[10], 0, i1426, 'm_defaultFontAsset')
  i1426.m_defaultFontAssetPath = i1427[11]
  i1426.m_defaultFontSize = i1427[12]
  i1426.m_defaultAutoSizeMinRatio = i1427[13]
  i1426.m_defaultAutoSizeMaxRatio = i1427[14]
  i1426.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1427[15], i1427[16] )
  i1426.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1427[17], i1427[18] )
  i1426.m_autoSizeTextContainer = !!i1427[19]
  i1426.m_IsTextObjectScaleStatic = !!i1427[20]
  var i1429 = i1427[21]
  var i1428 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1429.length; i += 2) {
  request.r(i1429[i + 0], i1429[i + 1], 1, i1428, '')
  }
  i1426.m_fallbackFontAssets = i1428
  i1426.m_matchMaterialPreset = !!i1427[22]
  request.r(i1427[23], i1427[24], 0, i1426, 'm_defaultSpriteAsset')
  i1426.m_defaultSpriteAssetPath = i1427[25]
  i1426.m_enableEmojiSupport = !!i1427[26]
  i1426.m_MissingCharacterSpriteUnicode = i1427[27]
  i1426.m_defaultColorGradientPresetsPath = i1427[28]
  request.r(i1427[29], i1427[30], 0, i1426, 'm_defaultStyleSheet')
  i1426.m_StyleSheetsResourcePath = i1427[31]
  request.r(i1427[32], i1427[33], 0, i1426, 'm_leadingCharacters')
  request.r(i1427[34], i1427[35], 0, i1426, 'm_followingCharacters')
  i1426.m_UseModernHangulLineBreakingRules = !!i1427[36]
  return i1426
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1430 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1431 = data
  i1430.hashCode = i1431[0]
  request.r(i1431[1], i1431[2], 0, i1430, 'material')
  i1430.materialHashCode = i1431[3]
  request.r(i1431[4], i1431[5], 0, i1430, 'spriteSheet')
  var i1433 = i1431[6]
  var i1432 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.add(request.d('TMPro.TMP_Sprite', i1433[i + 0]));
  }
  i1430.spriteInfoList = i1432
  var i1435 = i1431[7]
  var i1434 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1435.length; i += 2) {
  request.r(i1435[i + 0], i1435[i + 1], 1, i1434, '')
  }
  i1430.fallbackSpriteAssets = i1434
  i1430.m_Version = i1431[8]
  i1430.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1431[9], i1430.m_FaceInfo)
  var i1437 = i1431[10]
  var i1436 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.add(request.d('TMPro.TMP_SpriteCharacter', i1437[i + 0]));
  }
  i1430.m_SpriteCharacterTable = i1436
  var i1439 = i1431[11]
  var i1438 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.add(request.d('TMPro.TMP_SpriteGlyph', i1439[i + 0]));
  }
  i1430.m_SpriteGlyphTable = i1438
  return i1430
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1442 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1443 = data
  i1442.name = i1443[0]
  i1442.hashCode = i1443[1]
  i1442.unicode = i1443[2]
  i1442.pivot = new pc.Vec2( i1443[3], i1443[4] )
  request.r(i1443[5], i1443[6], 0, i1442, 'sprite')
  i1442.id = i1443[7]
  i1442.x = i1443[8]
  i1442.y = i1443[9]
  i1442.width = i1443[10]
  i1442.height = i1443[11]
  i1442.xOffset = i1443[12]
  i1442.yOffset = i1443[13]
  i1442.xAdvance = i1443[14]
  i1442.scale = i1443[15]
  return i1442
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1448 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1449 = data
  i1448.m_Name = i1449[0]
  i1448.m_HashCode = i1449[1]
  i1448.m_ElementType = i1449[2]
  i1448.m_Unicode = i1449[3]
  i1448.m_GlyphIndex = i1449[4]
  i1448.m_Scale = i1449[5]
  return i1448
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1452 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1453 = data
  request.r(i1453[0], i1453[1], 0, i1452, 'sprite')
  i1452.m_Index = i1453[2]
  i1452.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1453[3], i1452.m_Metrics)
  i1452.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1453[4], i1452.m_GlyphRect)
  i1452.m_Scale = i1453[5]
  i1452.m_AtlasIndex = i1453[6]
  i1452.m_ClassDefinitionType = i1453[7]
  return i1452
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1454 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1455 = data
  var i1457 = i1455[0]
  var i1456 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.add(request.d('TMPro.TMP_Style', i1457[i + 0]));
  }
  i1454.m_StyleList = i1456
  return i1454
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1460 = root || request.c( 'TMPro.TMP_Style' )
  var i1461 = data
  i1460.m_Name = i1461[0]
  i1460.m_HashCode = i1461[1]
  i1460.m_OpeningDefinition = i1461[2]
  i1460.m_ClosingDefinition = i1461[3]
  i1460.m_OpeningTagArray = i1461[4]
  i1460.m_ClosingTagArray = i1461[5]
  i1460.m_OpeningTagUnicodeArray = i1461[6]
  i1460.m_ClosingTagUnicodeArray = i1461[7]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1463 = data
  var i1465 = i1463[0]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1465[i + 0]) );
  }
  i1462.files = i1464
  i1462.componentToPrefabIds = i1463[1]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1469 = data
  i1468.path = i1469[0]
  request.r(i1469[1], i1469[2], 0, i1468, 'unityObject')
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1471 = data
  var i1473 = i1471[0]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1473[i + 0]) );
  }
  i1470.scriptsExecutionOrder = i1472
  var i1475 = i1471[1]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1475[i + 0]) );
  }
  i1470.sortingLayers = i1474
  var i1477 = i1471[2]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1477[i + 0]) );
  }
  i1470.cullingLayers = i1476
  i1470.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1471[3], i1470.timeSettings)
  i1470.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1471[4], i1470.physicsSettings)
  i1470.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1471[5], i1470.physics2DSettings)
  i1470.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1471[6], i1470.qualitySettings)
  i1470.enableRealtimeShadows = !!i1471[7]
  i1470.enableAutoInstancing = !!i1471[8]
  i1470.enableDynamicBatching = !!i1471[9]
  i1470.lightmapEncodingQuality = i1471[10]
  i1470.desiredColorSpace = i1471[11]
  var i1479 = i1471[12]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( i1479[i + 0] );
  }
  i1470.allTags = i1478
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1483 = data
  i1482.name = i1483[0]
  i1482.value = i1483[1]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1487 = data
  i1486.id = i1487[0]
  i1486.name = i1487[1]
  i1486.value = i1487[2]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1491 = data
  i1490.id = i1491[0]
  i1490.name = i1491[1]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1493 = data
  i1492.fixedDeltaTime = i1493[0]
  i1492.maximumDeltaTime = i1493[1]
  i1492.timeScale = i1493[2]
  i1492.maximumParticleTimestep = i1493[3]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1495 = data
  i1494.gravity = new pc.Vec3( i1495[0], i1495[1], i1495[2] )
  i1494.defaultSolverIterations = i1495[3]
  i1494.bounceThreshold = i1495[4]
  i1494.autoSyncTransforms = !!i1495[5]
  i1494.autoSimulation = !!i1495[6]
  var i1497 = i1495[7]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1497[i + 0]) );
  }
  i1494.collisionMatrix = i1496
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1501 = data
  i1500.enabled = !!i1501[0]
  i1500.layerId = i1501[1]
  i1500.otherLayerId = i1501[2]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1503 = data
  request.r(i1503[0], i1503[1], 0, i1502, 'material')
  i1502.gravity = new pc.Vec2( i1503[2], i1503[3] )
  i1502.positionIterations = i1503[4]
  i1502.velocityIterations = i1503[5]
  i1502.velocityThreshold = i1503[6]
  i1502.maxLinearCorrection = i1503[7]
  i1502.maxAngularCorrection = i1503[8]
  i1502.maxTranslationSpeed = i1503[9]
  i1502.maxRotationSpeed = i1503[10]
  i1502.baumgarteScale = i1503[11]
  i1502.baumgarteTOIScale = i1503[12]
  i1502.timeToSleep = i1503[13]
  i1502.linearSleepTolerance = i1503[14]
  i1502.angularSleepTolerance = i1503[15]
  i1502.defaultContactOffset = i1503[16]
  i1502.autoSimulation = !!i1503[17]
  i1502.queriesHitTriggers = !!i1503[18]
  i1502.queriesStartInColliders = !!i1503[19]
  i1502.callbacksOnDisable = !!i1503[20]
  i1502.reuseCollisionCallbacks = !!i1503[21]
  i1502.autoSyncTransforms = !!i1503[22]
  var i1505 = i1503[23]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1505[i + 0]) );
  }
  i1502.collisionMatrix = i1504
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1509 = data
  i1508.enabled = !!i1509[0]
  i1508.layerId = i1509[1]
  i1508.otherLayerId = i1509[2]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1511 = data
  var i1513 = i1511[0]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1513[i + 0]) );
  }
  i1510.qualityLevels = i1512
  var i1515 = i1511[1]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( i1515[i + 0] );
  }
  i1510.names = i1514
  i1510.shadows = i1511[2]
  i1510.anisotropicFiltering = i1511[3]
  i1510.antiAliasing = i1511[4]
  i1510.lodBias = i1511[5]
  i1510.shadowCascades = i1511[6]
  i1510.shadowDistance = i1511[7]
  i1510.shadowmaskMode = i1511[8]
  i1510.shadowProjection = i1511[9]
  i1510.shadowResolution = i1511[10]
  i1510.softParticles = !!i1511[11]
  i1510.softVegetation = !!i1511[12]
  i1510.activeColorSpace = i1511[13]
  i1510.desiredColorSpace = i1511[14]
  i1510.masterTextureLimit = i1511[15]
  i1510.maxQueuedFrames = i1511[16]
  i1510.particleRaycastBudget = i1511[17]
  i1510.pixelLightCount = i1511[18]
  i1510.realtimeReflectionProbes = !!i1511[19]
  i1510.shadowCascade2Split = i1511[20]
  i1510.shadowCascade4Split = new pc.Vec3( i1511[21], i1511[22], i1511[23] )
  i1510.streamingMipmapsActive = !!i1511[24]
  i1510.vSyncCount = i1511[25]
  i1510.asyncUploadBufferSize = i1511[26]
  i1510.asyncUploadTimeSlice = i1511[27]
  i1510.billboardsFaceCameraPosition = !!i1511[28]
  i1510.shadowNearPlaneOffset = i1511[29]
  i1510.streamingMipmapsMemoryBudget = i1511[30]
  i1510.maximumLODLevel = i1511[31]
  i1510.streamingMipmapsAddAllCameras = !!i1511[32]
  i1510.streamingMipmapsMaxLevelReduction = i1511[33]
  i1510.streamingMipmapsRenderersPerFrame = i1511[34]
  i1510.resolutionScalingFixedDPIFactor = i1511[35]
  i1510.streamingMipmapsMaxFileIORequests = i1511[36]
  i1510.currentQualityLevel = i1511[37]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1521 = data
  i1520.weight = i1521[0]
  i1520.vertices = i1521[1]
  i1520.normals = i1521[2]
  i1520.tangents = i1521[3]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1525 = data
  i1524.mode = i1525[0]
  i1524.parameter = i1525[1]
  i1524.threshold = i1525[2]
  return i1524
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1526 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1527 = data
  i1526.xPlacement = i1527[0]
  i1526.yPlacement = i1527[1]
  i1526.xAdvance = i1527[2]
  i1526.yAdvance = i1527[3]
  return i1526
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1528 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1529 = data
  i1528.m_GlyphIndex = i1529[0]
  i1528.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1529[1], i1528.m_GlyphValueRecord)
  return i1528
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1530 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1531 = data
  i1530.m_XPlacement = i1531[0]
  i1530.m_YPlacement = i1531[1]
  i1530.m_XAdvance = i1531[2]
  i1530.m_YAdvance = i1531[3]
  return i1530
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[27],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[27],"99":[100],"101":[102],"103":[102],"29":[0],"20":[17],"104":[17],"105":[17],"106":[27],"107":[108],"109":[0],"110":[1,0],"111":[100],"43":[1,0],"112":[51,100],"113":[100],"114":[100,115],"116":[77],"117":[85],"118":[108],"119":[120],"121":[50],"122":[27],"123":[124],"125":[0],"126":[100,0],"5":[0,1],"127":[0],"128":[1,0],"129":[100],"130":[1,0],"131":[0],"132":[133],"134":[133],"135":[133],"136":[0],"137":[0],"31":[29],"4":[1,0],"138":[0],"30":[29],"139":[0],"46":[0],"44":[0],"140":[0],"141":[0],"142":[0],"143":[0],"47":[0],"144":[0],"145":[1,0],"146":[0],"147":[0],"148":[0],"149":[0],"150":[1,0],"151":[0],"152":[55],"153":[55],"56":[55],"154":[55],"155":[27],"156":[27]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","Item","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.Sprite","ItemData","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","TileCell","TileData","Tile","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","CartoonFX.CFXR_Effect","UnityEngine.Light","AnimatedTile","UnityEngine.GameObject","UnityEngine.TrailRenderer","StateEvents","PositionTracking","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BasicFade","UnityEngine.CanvasGroup","AppearAnimation","PlayerGuide","UnityEngine.UI.Button","GameManager","RectAnimator","TileManager","DynamitePowerup","DynamiteEffect","SpecialTileManager","Spine.Unity.SkeletonGraphic","UnityEngine.UI.HorizontalLayoutGroup","UIMoveTo","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","Spine.Unity.SkeletonDataAsset","AnimatedTileSpawner","UnityEngine.SpriteRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MergeHands","PNGSequencer","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AudioManager","AudioLibrary","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CartoonFX.CFXR_EmissionBySurface","CartoonFX.CFXR_ParticleText","Kino.Bloom","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2023.1.0f1";

Deserializers.productName = "Piggy Kingdom - Renovation";

Deserializers.lunaInitializationTime = "09/29/2025 07:36:59";

Deserializers.lunaDaysRunning = "7.8";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1936";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5475";

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

Deserializers.buildID = "3cc887d2-5a57-4af0-a3f3-d1d5ad7bebb3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

